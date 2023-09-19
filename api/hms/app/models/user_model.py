from app.utils.database import MySQLQueryExecutor

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
        self.db_exec = MySQLQueryExecutor()

    def get_all_users(self):
        self.db_exec.isFetchAll = True
        
        query = "SELECT id, last_name, first_name, middle_name, user_id, email, status FROM user"
        
        users = self.db_exec.execute_query(query)
        
        return users 

    def get_user(self, user_id, password):
        self.db_exec.isFetchAll = False
        
        query = "SELECT id, last_name, first_name, middle_name, user_id, email, status FROM user WHERE user_id = %s AND password = %s"
        
        params = (user_id, password)
        result = self.db_exec.execute_query(query, params)
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
