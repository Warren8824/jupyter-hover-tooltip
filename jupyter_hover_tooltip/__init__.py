# Remove all previous content and replace with:
def _load_jupyter_server_extension(server_app):
    """
    Called when the extension is loaded.
    """
    server_app.log.info('Jupyter Hover Tooltip extension is loaded')
    return True