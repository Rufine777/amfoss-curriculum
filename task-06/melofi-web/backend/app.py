from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash


def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="melofi_user",
        password="melofi",
        database="melofi"
    )

app = Flask(__name__)
CORS(app)


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Basic validation
    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        # Check if username exists
        cursor.execute("SELECT * FROM users WHERE username=%s", (username,))
        user = cursor.fetchone()

        if not user:
            # Username not registered
            cursor.close()
            conn.close()
            return jsonify({"error": "User not registered. Please register first."}), 404

        # Username exists, check password
        if not check_password_hash(user["password_hash"], password):
            # Password incorrect
            cursor.close()
            conn.close()
            return jsonify({
                "error": "Incorrect password. Try again or click 'Forgot password'."
            }), 401

        # Login successful
        cursor.close()
        conn.close()
        return jsonify({"message": "Login successful", "username": user["username"]}), 200

    except Exception as e:
        return jsonify({"error": "Internal server error: " + str(e)}), 500


@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    username = data.get("username")
    phone = data.get("phone")
    password = data.get("password")

    # validation
    if not username or not phone or not password:
        return jsonify({"error": "All fields are required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        # check existing user
        cursor.execute(
            "SELECT id FROM users WHERE username=%s OR phone=%s",
            (username, phone)
        )

        if cursor.fetchone():
            cursor.close()
            conn.close()
            return jsonify({"error": "User already exists"}), 409

        # hash password
        password_hash = generate_password_hash(password)

        # insert user
        cursor.execute(
            "INSERT INTO users (username, phone, password_hash) VALUES (%s, %s, %s)",
            (username, phone, password_hash)
        )

        conn.commit()

        cursor.close()
        conn.close()

        return jsonify({"message": "Registration successful"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


