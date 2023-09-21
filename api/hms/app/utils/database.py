from db import Database
from config import Config
from app.utils.decorators import ReconnectOnFailure

class MySQLQueryExecutor:
    def __init__(self, isFetchAll = True ):
        self.db = Database()
        self.isFetchAll = isFetchAll
        self.max_retries = int(Config.DB_RECONNECT_MAX_RETRY)

    @ReconnectOnFailure()
    def execute_query(self, connection, query, params=None):
        connection = self.db.get_connection()
        try:
            cursor = connection.cursor()
            cursor.execute(query, params)
            result = cursor.fetchall() if self.isFetchAll else cursor.fetchone()
            cursor.close()
            return result
        finally:
            connection.close()
    
    @ReconnectOnFailure()
    def execute_insert(self, connection, query, params=None):
        connection = self.db.get_connection()
        try:
            cursor = connection.cursor()
            cursor.execute(query, params)
            connection.commit()
            last_insert_id = cursor.lastrowid
            cursor.close()
            return last_insert_id
        finally:
            connection.close()

