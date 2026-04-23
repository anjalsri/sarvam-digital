import sqlite3
import os

db_path = 'sql_app.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Check users
cursor.execute("SELECT id, email, role FROM users;")
users = cursor.fetchall()
print("Current Users:")
for u in users:
    print(u)

# Make the first user an admin if they exist, or create a dummy output
if users:
    first_user_id = users[0][0]
    cursor.execute("UPDATE users SET role = 'admin' WHERE id = ?", (first_user_id,))
    conn.commit()
    print(f"Updated user {users[0][1]} to admin role.")
else:
    print("No users found. Please register an account via the frontend first.")

conn.close()
