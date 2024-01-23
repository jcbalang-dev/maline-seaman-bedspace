from app.utils.database import MySQLQueryExecutor

class Guest:
    def __init__(self, **kwargs):
        self.id = kwargs.get('id')
        self.last_name = kwargs.get('last_name')
        self.first_name = kwargs.get('first_name')
        self.middle_name = kwargs.get('middle_name')
        self.suffix = kwargs.get('suffix')
        self.passport_id = kwargs.get('passport_id')
        self.drivers_license_id = kwargs.get('drivers_license_id')
        self.umid_id = kwargs.get('umid_id')
        self.sss_id = kwargs.get('sss_id')
        self.prc_id = kwargs.get('prc_id')
        self.status = kwargs.get('status')
        self.added_by = kwargs.get('added_by')
        self.added_date = kwargs.get('added_date')
        self.updated_by = kwargs.get('updated_by')
        self.updated_date = kwargs.get('updated_date')

class GuestModel:
    def __init__(self):
        self.db_exec = MySQLQueryExecutor()

    def get_all_guest(self):
        self.db_exec.isFetchAll = True

        fields = [
            'id', 'last_name', 'first_name', 'middle_name', 'suffix',
            'passport_id', 'drivers_license_id', 'umid_id', 'sss_id',
            'prc_id', 'status', 'added_by', 'added_date', 'updated_by', 'updated_date'
        ]

        field_list = ', '.join(fields)

        query = f"""
            SELECT 
                {field_list}
            FROM 
                guest
        """

        guests = self.db_exec.execute_query(query)

        return guests

    def get_guest(self, guest_id):
        self.db_exec.isFetchAll = False

        fields = [
            'id', 'last_name', 'first_name', 'middle_name', 'suffix',
            'passport_id', 'drivers_license_id', 'umid_id', 'sss_id',
            'prc_id', 'status', 'added_by', 'added_date', 'updated_by', 'updated_date'
        ]

        field_list = ', '.join(fields)

        query = f"""
            SELECT 
                {field_list}
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
