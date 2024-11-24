import { TooltipManager } from './tooltip';
import './styles.css';

const plugin = {
    id: 'jupyter-hover-tooltip:plugin',
    autoStart: true,
    requires: ['@jupyterlab/notebook'],
    activate: function(app, notebookTracker) {
        console.log('Jupyter hover tooltip extension is activated!'); // Debug message
        const tooltipManager = new TooltipManager();

        notebookTracker.widgetAdded.connect((sender, notebook) => {
            console.log('Notebook widget added'); // Debug message
            notebook.content.rendered.connect(() => {
                console.log('Notebook rendered'); // Debug message
                const cells = notebook.content.widgets;
                cells.forEach(cell => {
                    if (cell.model.type === 'markdown') {
                        console.log('Found markdown cell'); // Debug message
                        const element = cell.node;
                        const links = element.getElementsByTagName('a');

                        Array.from(links).forEach(link => {
                            console.log('Found link:', link.href); // Debug message
                            link.addEventListener('mouseover', (e) => {
                                const href = link.getAttribute('href');
                                if (href && href.startsWith('#')) {
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