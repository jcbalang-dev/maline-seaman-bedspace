from app.utils.database import MySQLQueryExecutor

class Guest:
    def __init__(self, id, last_name, first_name, middle_name, suffix, passport_id, drivers_license_id, umid_id, sss_id, prc_id, status):
        self.id = id
        self.last_name = last_name
        self.first_name = first_name
        self.middle_name = middle_name
        self.suffix = suffix
        self.passport_id = passport_id
        self.drivers_license_id = drivers_license_id
        self.umid_id = umid_id
        self.sss_id = sss_id
        self.prc_id = prc_id
        self.status = status

class GuestModel:
    def __init__(self):
        self.db_exec = MySQLQueryExecutor()

    def get_all_guest(self):
        self.db_exec.isFetchAll = True

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

        guests = self.db_exec.execute_query(query)

        return guests

    def get_guest(self, guest_id):
        self.db_exec.isFetchAll = False

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
        
        params = (guest_id,)

        result = self.db_exec.execute_query(query, params)
        
        if result:
            guest_data = dict(zip(fields, result))
            return Guest(**guest_data)
        else:
            return None
        
    def add_guest(self, guest):
        fields = [
            'last_name', 'first_name', 'middle_name', 'suffix',
            'passport_id', 'drivers_license_id', 'umid_id', 'sss_id',
            'prc_id', 'status', 'added_by', 'added_date', 'updated_by', 'updated_date'
        ]

        field_list = ', '.join(fields)
        value_placeholders = ', '.join(['%s'] * len(fields))

        query = f"""
            INSERT INTO guest (
                {field_list}
            ) VALUES ({value_placeholders})
        """

        params = [getattr(guest, field) for field in fields]

        last_insert_id = self.db_exec.execute_insert(query, params)
        return last_insert_id
