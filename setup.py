from setuptools import setup, find_packages

setup(
    name="jupyter_hover_tooltip",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'jupyterlab>=4.0.0',
        'jupyter_server>=2.0.0'
    ],
    entry_points={
        "jupyter_server.extensions": [
            "jupyter_hover_tooltip = jupyter_hover_tooltip:_load_jupyter_server_extension"
        ]
    }
)