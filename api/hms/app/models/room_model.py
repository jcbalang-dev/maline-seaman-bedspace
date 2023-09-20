from app.utils.database import MySQLQueryExecutor

class Room:
    def __init__(self, id, building_id, number, code, tag, slug, rate, bed_capacity, availability, description, added_by, added_date, updated_by, updated_date):
        self.id = id
        self.building_id = building_id
        self.number = number
        self.code = code
        self.tag = tag
        self.slug = slug
        self.rate = rate
        self.bed_capacity = bed_capacity
        self.availability = availability
        self.description = description
        self.added_by = added_by
        self.added_date = added_date
        self.updated_by = updated_by
        self.updated_date = updated_date

class RoomModel:
    def __init__(self):
        self.db_exec = MySQLQueryExecutor()

    def get_all_rooms(self):
        self.db_exec.isFetchAll = True

        query = "SELECT * FROM room"
        
        rooms = self.db_exec.execute_query(query)
        
        return rooms

    def get_room(self, id):
        self.db_exec.isFetchAll = False
        query = "SELECT * FROM room WHERE id = %s"

        params = (id,)
        
        result = self.db_exec.execute_query(query, params)

        if result:
            id, building_id, number, code, tag, slug, rate, bed_capacity, availability, description, added_by, added_date, updated_by, updated_date = result

            return Room(
                id = id,
                building_id = building_id,
                number = number,
                code = code,
                tag = tag,
                slug = slug,
                rate = rate,
                bed_capacity =bed_capacity,
                availability = availability,
                description = description,
                added_by = added_by,
                added_date = added_date,
                updated_by = updated_by,
                updated_date = updated_date,
            )
        else:
            return None
