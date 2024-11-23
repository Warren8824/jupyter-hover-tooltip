from setuptools import setup, find_packages

setup(
    name="jupyter_hover_tooltip",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "jupyterlab>=4.2.6,<5.0.0",
    ],
    data_files=[
        ("share/jupyter/labextensions/jupyter-hover-tooltip", [
            "install.json",
        ]),
        ("share/jupyter/labextensions/jupyter-hover-tooltip/static", [
            "lib/index.js",
            "style/index.css"
        ]),
    ],
)