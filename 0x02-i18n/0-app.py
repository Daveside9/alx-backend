#!/usr/bin/env python3
"""
This_module_defines_a_basic_Flask_app.
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    """
    Renders_the_index.html_template.
    """
    return render_template(
            '0-index.html', title='Welcome_to_Holberton',
            header='Hello world'
    )


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
