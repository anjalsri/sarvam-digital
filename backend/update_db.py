import sqlite3

db_path = 'c:/Users/astit/OneDrive/Desktop/Srvam Digital/backend/sql_app.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

try:
    cursor.execute("ALTER TABLE chat_messages ADD COLUMN is_read INTEGER DEFAULT 0;")
    conn.commit()
    print("Successfully added is_read column to chat_messages.")
except sqlite3.OperationalError as e:
    if "duplicate column name" in str(e):
        print("Column is_read already exists.")
    else:
        print(f"Error: {e}")

conn.close()
