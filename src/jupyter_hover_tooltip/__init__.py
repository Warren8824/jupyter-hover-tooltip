from pathlib import Path

def _jupyter_labextension_paths():
    """Called by Jupyter Lab Server to detect if it is a valid labextension and
    to install the widget
    """
    return [{
        'src': 'labextension',
        'dest': 'jupyter-hover-tooltip'
    }]