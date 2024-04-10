# app.py

from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample menu data
menu_items = [
    {"name": "Spaghetti Carbonara", "price": "$12.99"},
    {"name": "Grilled Salmon", "price": "$16.99"},
    {"name": "Caesar Salad", "price": "$8.99"},
    # Add more menu items as needed
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu')
def get_menu():
    return jsonify(menu_items)

if __name__ == '__main__':
    app.run(debug=True)
