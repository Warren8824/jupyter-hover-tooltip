import pytest
from jupyter_hover_tooltip import _jupyter_nbextension_paths, _jupyter_server_extension_paths

def test_nbextension_paths():
    paths = _jupyter_nbextension_paths()
    assert isinstance(paths, list)
    assert len(paths) == 1
    assert paths[0]['section'] == 'notebook'
    assert paths[0]['dest'] == 'jupyter_hover_tooltip'

def test_server_extension_paths():
    paths = _jupyter_server_extension_paths()
    assert isinstance(paths, list)
    assert len(paths) == 1
    assert paths[0]['module'] == 'jupyter_hover_tooltip'