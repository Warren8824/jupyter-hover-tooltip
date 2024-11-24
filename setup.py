from setuptools import setup

setup(
    name="jupyter_hover_tooltip",
    version="0.1.0",
    packages=["jupyter_hover_tooltip"],
    package_dir={"": "src"},
    include_package_data=True,
    data_files=[
        ("share/jupyter/labextensions/jupyter-hover-tooltip", [
            "lib/index.js",
            "package.json"
        ]),
    ],
    install_requires=[
        "jupyterlab>=4.0.0"
    ],
)