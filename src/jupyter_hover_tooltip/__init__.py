from jupyter_server.extension.application import ExtensionApp


class HoverTooltipExtension(ExtensionApp):
    name = "jupyter_hover_tooltip"

    def initialize_settings(self):
        self.log.info("Initializing jupyter_hover_tooltip settings")

    def initialize_handlers(self):
        self.log.info("Initializing jupyter_hover_tooltip handlers")


# For compatibility with notebook server
def _jupyter_server_extension_points():
    return [
        {
            "module": "jupyter_hover_tooltip",
            "app": HoverTooltipExtension
        }
    ]


def _load_jupyter_server_extension(server_app):
    server_app.log.info("Loading jupyter_hover_tooltip extension")
    return True


# For Notebook 7.x compatibility
def _load_notebook_extension(server_app):
    server_app.log.info("Loading jupyter_hover_tooltip notebook extension")
    return True