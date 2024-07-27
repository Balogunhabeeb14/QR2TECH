from flask import Flask, request, redirect, url_for, render_template_string
import sqlite3
import threading
import webbrowser

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    with open('Index.html', 'r') as file:
        content = file.read()
    return render_template_string(content)

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['Name']
    email = request.form['Email']
    subject = request.form['Subject']
    message = request.form['Message']
    
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)', 
                   (name, email, subject, message))
    conn.commit()
    conn.close()
    return redirect(url_for('index'))

if __name__ == '__main__':
    init_db()
    def run_flask():
        app.run(debug=True, use_reloader=False)

    threading.Thread(target=run_flask).start()
    webbrowser.open('http://127.0.0.1:5000/')
