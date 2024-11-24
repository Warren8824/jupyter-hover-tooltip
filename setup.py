from setuptools import setup, find_packages

setup(
    name="jupyter_hover_tooltip",
    version="0.1.0",
    packages=find_packages('src'),
    package_dir={'': 'src'},
    include_package_data=True,
    data_files=[
        ('share/jupyter/nbextensions/jupyter_hover_tooltip', [
            'lib/index.js',
        ]),
        ('etc/jupyter/nbconfig/notebook.d', [
            'jupyter_hover_tooltip.json'
        ])
    ],
    install_requires=[
        'notebook>=6.0.0',
        'jupyter>=1.0.0'
    ],
)