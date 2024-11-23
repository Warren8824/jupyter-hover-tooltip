define([
    'base/js/namespace',
    'jquery'
], function(Jupyter, $) {
    'use strict';

    function load_ipython_extension() {
        // Function to process markdown cells
        function process_markdown_cells() {
            $('.markdown-cell a').each(function() {
                let link = $(this);
                let href = link.attr('href');

                if (href && href.endsWith('.py')) {
                    let [filepath, target] = href.split('#');

                    link.hover(
                        function(e) {  // Mouse enter
                            $.get(filepath, function(content) {
                                const tooltip = $('<div>')
                                    .addClass('jupyter-hover-tooltip')
                                    .css({
                                        position: 'absolute',
                                        zIndex: 1000,
                                        background: 'white',
                                        border: '1px solid #ccc',
                                        padding: '8px',
                                        maxWidth: '800px',
                                        maxHeight: '400px',
                                        overflow: 'auto',
                                        top: e.pageY + 10,
                                        left: e.pageX + 10
                                    })
                                    .html(`<pre>${content}</pre>`)
                                    .appendTo('body');
                            });
                        },
                        function() {  // Mouse leave
                            $('.jupyter-hover-tooltip').remove();
                        }
                    );
                }
            });
        }

        // Process existing cells
        process_markdown_cells();

        // Process new cells
        $([Jupyter.events]).on('rendered.MarkdownCell', process_markdown_cells);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});