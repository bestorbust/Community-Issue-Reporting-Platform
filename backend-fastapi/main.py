from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Allow calls from the Angular app

# Updated database configuration with port 3307
db_config = {
    "host": "localhost",
    "port": 3307,
    "user": "root",
    "password": "priya@9845",
    "database": "hackathondb"
}

def get_db_connection():
    return mysql.connector.connect(**db_config)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Check if a user with the given email already exists
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({"message": "User already exists"}), 409
        
        # NOTE: In production, remember to hash the password instead of storing plain text.
        insert_stmt = "INSERT INTO users (email, password) VALUES (%s, %s)"
        cursor.execute(insert_stmt, (email, password))
        conn.commit()

        cursor.close()
        conn.close()

        return jsonify({"message": "Registration successful"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        
        # Login query using email and password
        sql = "SELECT * FROM users WHERE email = %s AND password = %s"
        cursor.execute(sql, (email, password))
        user = cursor.fetchone()
        
        cursor.close()
        conn.close()

        if user:
            return jsonify({"message": "Login successful", "user": user})
        else:
            return jsonify({"message": "Invalid credentials"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
