import { IDisposable, DisposableDelegate } from '@lumino/disposable';
import { MarkdownCell } from '@jupyterlab/cells';
import { IRenderMime } from '@jupyterlab/rendermime-interfaces';

const PLUGIN_ID = 'jupyter-hover-tooltip:plugin';

export default {
  id: PLUGIN_ID,
  autoStart: true,
  activate: (app) => {
    app.docRegistry.addWidgetExtension('Notebook', {
      createNew: (notebook) => {
        function processCell(cell) {
          if (cell instanceof MarkdownCell) {
            const links = cell.node.getElementsByTagName('a');
            Array.from(links).forEach(link => {
              if (link.href.endsWith('.py')) {
                link.addEventListener('mouseover', async (e) => {
                  const response = await fetch(link.href);
                  const content = await response.text();
                  // Create tooltip
                  const tooltip = document.createElement('div');
                  tooltip.className = 'jp-tooltip';
                  tooltip.style.position = 'absolute';
                  tooltip.style.zIndex = '1000';
                  tooltip.innerHTML = `<pre>${content}</pre>`;
                  document.body.appendChild(tooltip);
                });
              }
            });
          }
        }

        notebook.model.cells.changed.connect((_, args) => {
          if (args.type === 'add') {
            processCell(notebook.widgets[args.newIndex]);
          }
        });

        return new DisposableDelegate(() => {});
      }
    });
  }
};