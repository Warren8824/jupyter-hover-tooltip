from jupyter_server.utils import url_path_join


def _jupyter_labextension_paths():
    return [{
        'src': '.',
        'dest': 'jupyter-hover-tooltip'
    }]


def _jupyter_server_extension_points():
    return [{
        "module": "jupyter_hover_tooltip"
    }]


def _load_jupyter_server_extension(server_app):
    """
    Called when the extension is loaded.
    """
    web_app = server_app.web_app
    base_url = web_app.settings['base_url']

    server_app.log.info('Jupyter hover tooltip extension is loaded!')

    return True