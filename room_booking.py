from flask import Flask, render_template, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your_password'
app.config['MYSQL_DB'] = 'your_database'
mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('room_booking.html')

@app.route('/api/rooms')
def get_rooms():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM rooms")
    rooms = cur.fetchall()
    cur.close()
    return jsonify(rooms)

@app.route('/api/book/<int:room_id>', methods=['POST'])
def book_room(room_id):
    # Logic to book the room (e.g., update database, handle booking process)
    # This is a simplified example; actual implementation may vary
    try:
        # Perform booking logic here
        return jsonify({'message': 'Room booked successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
