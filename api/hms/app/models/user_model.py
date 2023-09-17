from db import Database

db = Database()

class User:
    def __init__(self, id, last_name, first_name, middle_name, user_id, email, status):
        self.id = id
        self.last_name = last_name
        self.first_name = first_name
        self.middle_name = middle_name
        self.user_id = user_id
        self.email = email
        self.status = status

class UserModel:
    def __init__(self):
        self.db_connection = Database.get_connection()

    def get_all_users(self):
        db_cursor = self.db_connection.cursor()
        
        query = "SELECT id, last_name, first_name, middle_name, user_id, email, status FROM user"
        
        db_cursor.execute(query)
        users = db_cursor.fetchall()
        db_cursor.close()
        
        return users 

    def get_user(self, user_id, password):
        db_cursor = self.db_connection.cursor()
        
        query = "SELECT id, last_name, first_name, middle_name, user_id, email, status FROM user WHERE user_id = %s AND password = %s"
        
        db_cursor.execute(query, (user_id,password))
        result = db_cursor.fetchone()
        db_cursor.close()

        if result:
            id, last_name, first_name, middle_name, user_id, email, status = result
            
            return User(
                id = id,
                last_name = last_name,
                first_name = first_name ,
                middle_name = middle_name,
                user_id = user_id,
                email= email,
                status= status
            )
        else:
            return None
