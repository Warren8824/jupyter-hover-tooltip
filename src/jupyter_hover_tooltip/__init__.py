def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter_hover_tooltip',
        'require': 'jupyter_hover_tooltip/index'
    }]