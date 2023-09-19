from db import Database

db = Database()


class Building:
    def __init__(self, id, code, tag, slug, name, address, description, added_by, added_date, updated_by, updated_date):
        self.id = id
        self.code = code
        self.tag = tag
        self.slug = slug
        self.name = name
        self.address = address
        self.description = description
        self.added_by = added_by
        self.added_date = added_date
        self.updated_by = updated_by
        self.updated_date = updated_date

class BuildingModel:
    def __init__(self):
        self.db_connection = Database.get_connection()

    def get_all_buildings(self):
        db_cursor = self.db_connection.cursor()
        
        query = "SELECT * FROM building"
        
        db_cursor.execute(query)
        buildings = db_cursor.fetchall()
        db_cursor.close()
        
        return buildings 
    
    def get_building(self, id):
        db_cursor = self.db_connection.cursor()
        
        query = "SELECT * FROM building WHERE id = %s"
        
        db_cursor.execute(query, (id))
        result = db_cursor.fetchone()
        db_cursor.close()

        if result:
            id, code, tag, slug, name, address, description, added_by, added_date, updated_by, updated_date = result
            
            return Building(
                id = id,
                code = code,
                tag = tag,
                slug = slug,
                name = name,
                address = address,
                description = description,
                added_by = added_by,
                added_date = added_date,
                updated_by = updated_by,
                updated_date = updated_date,
            )
        else:
            return None
