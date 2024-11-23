def _jupyter_nbextension_paths():
    """
    Returns paths for installing the notebook extension
    """
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter_hover_tooltip',
        'require': 'jupyter_hover_tooltip/hover_tooltip'
    }]