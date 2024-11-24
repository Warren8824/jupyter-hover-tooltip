from jupyter_server.extension.application import ExtensionApp

class HoverTooltipExtension(ExtensionApp):
    name = "jupyter_hover_tooltip"

    def initialize_settings(self):
        # Initialize the settings or configuration for the extension
        self.log.info("Initializing jupyter_hover_tooltip settings")

    def initialize_handlers(self):
        # Initialize the server-side handlers if any are needed
        self.log.info("Initializing jupyter_hover_tooltip handlers")

# For compatibility with Jupyter server extensions
def _jupyter_server_extension_points():
    return [
        {
            "module": "jupyter_hover_tooltip",
            "app": HoverTooltipExtension
        }
    ]

def _load_jupyter_server_extension(server_app):
    # This function is called when the server extension is loaded
    server_app.log.info("Loading jupyter_hover_tooltip extension")
    return True

# For Notebook compatibility (7.x and above)
def _load_notebook_extension(server_app):
    # This function is called when the notebook extension is loaded
    server_app.log.info("Loading jupyter_hover_tooltip notebook extension")
    return True
