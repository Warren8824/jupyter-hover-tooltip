import { MarkdownCell } from '@jupyterlab/cells';

export class HoverTooltip {
  constructor() {
    console.log('HoverTooltip initialized');
  }

  processCell(cell) {
    if (!(cell?.node) || !(cell instanceof MarkdownCell)) return;

    const links = cell.node.getElementsByTagName('a');
    for (const link of links) {
      if (link.href.split('?')[0].endsWith('.py')) {
        link.style.backgroundColor = '#e3f2fd';

        link.addEventListener('mouseover', async (e) => {
          try {
            const response = await fetch(link.href);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const content = await response.text();
            if (!content) throw new Error('Content is empty');

            const tooltip = document.createElement('div');
            tooltip.className = 'jupyter-hover-tooltip';
            tooltip.style.position = 'fixed';
            tooltip.style.backgroundColor = 'white';
            tooltip.style.border = '1px solid #ccc';
            tooltip.style.padding = '8px';
            tooltip.style.maxWidth = '800px';
            tooltip.style.maxHeight = '400px';
            tooltip.style.overflow = 'auto';
            tooltip.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
            tooltip.innerHTML = `<pre>${content}</pre>`;

            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = `${rect.bottom + 5}px`;
            tooltip.style.left = `${rect.left}px`;

            document.body.appendChild(tooltip);

            link.addEventListener('mouseout', () => tooltip.remove(), { once: true });
          } catch (error) {
            console.error('Error fetching file:', error.message);
          }
        });
      }
    }
  }

  activate(app) {
    app.docRegistry.addWidgetExtension('Notebook', {
      createNew: (notebook) => {
        notebook.model.cells.changed.connect((_, args) => {
          if (args.type === 'add' && notebook.widgets[args.newIndex]) {
            this.processCell(notebook.widgets[args.newIndex]);
          }
        });
        return null;
      },
    });
  }
}

export default HoverTooltip;
