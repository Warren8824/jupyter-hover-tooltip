import { MarkdownCell } from '@jupyterlab/cells';

export class HoverTooltip {
  constructor() {
    this.processCell = this.processCell.bind(this);
    console.log('HoverTooltip constructor called'); // Debug log
  }

  processCell(cell) {
    console.log('Processing cell:', cell); // Debug log

    if (cell instanceof MarkdownCell) {
      console.log('Found markdown cell'); // Debug log
      const links = cell.node.getElementsByTagName('a');
      console.log('Found links:', links.length); // Debug log

      // Add visual debug indicator
      const debugDiv = document.createElement('div');
      debugDiv.style.backgroundColor = '#ffeb3b';
      debugDiv.style.padding = '5px';
      debugDiv.style.margin = '5px';
      debugDiv.textContent = 'Hover Extension Active on this cell';
      cell.node.appendChild(debugDiv);

      Array.from(links).forEach(link => {
        console.log('Processing link:', link.href); // Debug log
        if (link.href.endsWith('.py')) {
          console.log('Found Python file link'); // Debug log
          link.style.backgroundColor = '#e3f2fd'; // Visual indicator

          link.addEventListener('mouseover', async (e) => {
            console.log('Hover event triggered'); // Debug log
            try {
              const response = await fetch(link.href);
              const content = await response.text();
              console.log('Fetched content:', content.substring(0, 50) + '...'); // Debug log

              // Remove any existing tooltips
              document.querySelectorAll('.jupyter-hover-tooltip').forEach(el => el.remove());

              // Create tooltip
              const tooltip = document.createElement('div');
              tooltip.className = 'jupyter-hover-tooltip';
              tooltip.style.position = 'absolute';
              tooltip.style.zIndex = '1000';
              tooltip.style.backgroundColor = 'white';
              tooltip.style.border = '1px solid #ccc';
              tooltip.style.padding = '8px';
              tooltip.style.maxWidth = '800px';
              tooltip.style.maxHeight = '400px';
              tooltip.style.overflow = 'auto';
              tooltip.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
              tooltip.innerHTML = `<pre>${content}</pre>`;

              // Position tooltip
              const rect = e.target.getBoundingClientRect();
              tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
              tooltip.style.left = `${rect.left + window.scrollX}px`;

              document.body.appendChild(tooltip);
            } catch (error) {
              console.error('Error loading file:', error);
              // Show error in notebook
              const errorDiv = document.createElement('div');
              errorDiv.style.backgroundColor = '#ffcdd2';
              errorDiv.style.padding = '5px';
              errorDiv.style.margin = '5px';
              errorDiv.textContent = `Error: ${error.message}`;
              cell.node.appendChild(errorDiv);
            }
          });
        }
      });
    }
  }

  activate(app) {
    console.log('Extension activated'); // Debug log
    app.docRegistry.addWidgetExtension('Notebook', {
      createNew: (notebook) => {
        console.log('New notebook widget created'); // Debug log
        notebook.model.cells.changed.connect((_, args) => {
          console.log('Cell changed event:', args); // Debug log
          if (args.type === 'add') {
            this.processCell(notebook.widgets[args.newIndex]);
          }
        });
        return null;
      }
    });
  }
}

export default HoverTooltip;