define([
    'base/js/namespace',
    'base/js/events'
], function(Jupyter, events) {
    function load_ipython_extension() {
        // Your extension code here
        console.log('Extension loaded');
        
        // Add event listener for markdown cells
        events.on('rendered.MarkdownCell', function(event, data) {
            const cell = data.cell;
            const element = cell.element[0];
            
            // Find all links in the markdown cell
            const links = element.getElementsByTagName('a');
            
            Array.from(links).forEach(link => {
                link.addEventListener('mouseover', async (e) => {
                    // Your tooltip logic here
                    // Example:
                    const href = link.getAttribute('href');
                    // Fetch Python code or show tooltip
                });
            });
        });
    }
    
    return {
        load_ipython_extension: load_ipython_extension
    };
});