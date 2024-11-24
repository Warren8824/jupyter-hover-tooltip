from setuptools import setup
from setuptools import find_packages

setup(
    name="jupyter_hover_tooltip",
    version="0.1.0",
    packages=find_packages("src"),
    package_dir={"": "src"},
    include_package_data=True,
    data_files=[
        ("share/jupyter/labextensions/jupyter-hover-tooltip", [
            "lib/index.js",
            "lib/index.js.map",
            "package.json",
            "schema/plugin.json"
        ]),
    ],
    install_requires=[
        "jupyterlab>=4.0.0"
    ],
    python_requires=">=3.8",
    zip_safe=False,
)