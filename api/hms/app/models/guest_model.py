from db import Database

db = Database()

class Guest:
    def __init__(self, id, last_name, first_name, middle_name, suffix, passport_id, drivers_license_id, umid_id, sss_id, prc_id, status):
        self:id = id
        self:last_name = last_name
        self:first_name = first_name
        self:middle_name = middle_name
        self:suffix = suffix
        self:passport_id = passport_id
        self:drivers_license_id = drivers_license_id
        self:umid_id = umid_id
        self:sss_id = sss_id
        self:prc_id = prc_id
        self:status = status

class GuestModel:
    def __init__(self):
        self.db_connection = Database.get_connection()

    def get_all_guest(self):
        db_cursor = self.db_connection.cursor()

        query = """
            SELECT 
                id , 
                last_name , 
                first_name , 
                middle_name , 
                suffix , 
                passport_id , 
                drivers_license_id , 
                umid_id , 
                sss_id , 
                prc_id , 
                status 
            FROM 
                guest
        """

        db_cursor.execute(query)
        guests = db_cursor.fetchall()
        db_cursor.close()
        
        return guests
    
    def get_guest(self, id):
        db_cursor = self.db_connection.cursor()
        
        query = """
            SELECT 
                id , 
                last_name , 
                first_name , 
                middle_name , 
                suffix , 
                passport_id , 
                drivers_license_id , 
                umid_id , 
                sss_id , 
                prc_id , 
                status 
            FROM 
                guest
            WHERE
                id = %s
        """

        db_cursor.execute(query, (id,))
        result = db_cursor.fetchone()
        db_cursor.close()

        if result:
            id, last_name, first_name, middle_name, suffix, passport_id, drivers_license_id, umid_id, sss_id, prc_id, status = result
        
            return Guest (
                id = id , 
                last_name = last_name , 
                first_name = first_name , 
                middle_name = middle_name , 
                suffix = suffix , 
                passport_id = passport_id , 
                drivers_license_id = drivers_license_id , 
                umid_id = umid_id , 
                sss_id = sss_id , 
                prc_id = prc_id , 
                status = status 
            )
        else:
            return None
