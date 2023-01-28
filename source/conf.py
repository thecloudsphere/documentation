def setup(app):
    app.add_css_file("css/custom.css")


extensions = ["sphinx.ext.todo", "sphinx_fontawesome"]
source_suffix = ".rst"
master_doc = "index"
project = "The Cloudsphere User Guide"
copyright = "2022-2023, OSISM GmbH"
author = "OSISM GmbH"
version = ""
release = ""
language = "en"
exclude_patterns = []
pygments_style = "sphinx"
todo_include_todos = True
html_theme = "sphinx_material"
html_show_sphinx = False
html_show_sourcelink = False
html_show_copyright = True
htmlhelp_basename = "documentation"
html_theme_options = {
    "nav_title": "The Cloudsphere User Guide",
    "color_primary": "blue",
    "color_accent": "light-blue",
    "globaltoc_depth": 3,
    "globaltoc_collapse": True,
}
html_context = {}
html_logo = "images/logo.png"
html_static_path = ["_static"]
latex_elements = {}
html_title = "The Cloudsphere User Guide"
html_sidebars = {
    "**": ["logo-text.html", "globaltoc.html", "localtoc.html", "searchbox.html"]
}
