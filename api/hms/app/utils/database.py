from db import Database
from config import Config
from app.utils.decorators import ReconnectOnFailure

class MySQLQueryExecutor:
    def __init__(self):
        self.db = Database()
        self.max_retries = int(Config.DB_RECONNECT_MAX_RETRY)

    @ReconnectOnFailure()
    def execute_query(self, connection, query, params=None):
        connection = self.db.get_connection()
        try:
            cursor = connection.cursor()
            cursor.execute(query, params)
            result = cursor.fetchall()
            cursor.close()
            return result
        finally:
            connection.close()
