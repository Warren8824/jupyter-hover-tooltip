import { TooltipManager } from './tooltip';
import './styles.css';

define([
    'base/js/namespace',
    'base/js/events',
    '@jupyterlab/notebook'
], function(Jupyter, events, notebook) {
    const tooltipManager = new TooltipManager();

    function load_ipython_extension() {
        console.log('Hover tooltip extension loaded');

        // Updated event handling for JupyterLab 4.x
        events.on('rendered.MarkdownCell', function(event, data) {
            const cell = data.cell;
            const element = cell.element[0];

            const links = element.getElementsByTagName('a');

            Array.from(links).forEach(link => {
                link.addEventListener('mouseover', (e) => {
                    const href = link.getAttribute('href');
                    if (href.startsWith('#')) {
                        const targetId = href.slice(1);
                        // Example: Show cell content in tooltip
                        const content = `<pre>${targetId}</pre>`;
                        const tooltip = tooltipManager.createTooltip(content);
                        tooltipManager.positionTooltip(e, tooltip);
                    }
                });

                link.addEventListener('mouseout', () => {
                    tooltipManager.removeTooltip();
                });
            });
        });
    }
    
    return {
        load_ipython_extension: load_ipython_extension
    };
});