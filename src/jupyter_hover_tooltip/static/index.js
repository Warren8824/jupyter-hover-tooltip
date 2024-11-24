import { TooltipManager } from './tooltip';
import './styles.css';

import { INotebookTracker } from '@jupyterlab/notebook';
import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

const plugin = {
    id: 'jupyter-hover-tooltip:plugin',
    autoStart: true,
    requires: [INotebookTracker],
    activate: (app: JupyterFrontEnd, notebooks: INotebookTracker) => {
        const tooltipManager = new TooltipManager();

        notebooks.widgetAdded.connect((sender, notebook) => {
            notebook.content.rendered.connect(() => {
                const cells = notebook.content.widgets;
                cells.forEach(cell => {
                    if (cell.model.type === 'markdown') {
                        const element = cell.node;
                        const links = element.getElementsByTagName('a');

                        Array.from(links).forEach(link => {
                            link.addEventListener('mouseover', (e) => {
                                const href = link.getAttribute('href');
                                if (href?.startsWith('#')) {
                                    const targetId = href.slice(1);
                                    const content = `<pre>${targetId}</pre>`;
                                    const tooltip = tooltipManager.createTooltip(content);
                                    tooltipManager.positionTooltip(e, tooltip);
                                }
                            });

                            link.addEventListener('mouseout', () => {
                                tooltipManager.removeTooltip();
                            });
                        });
                    }
                });
            });
        });
    }
};

export default plugin;