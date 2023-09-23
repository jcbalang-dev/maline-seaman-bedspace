from app.utils.database import MySQLQueryExecutor

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
        self.db_exec = MySQLQueryExecutor()

    def get_all_buildings(self):
        self.db_exec.isFetchAll = True

        query = "SELECT * FROM building"
        
        buldings = self.db_exec.execute_query(query)
        
        return buldings

    def get_building(self, id):
        self.db_exec.isFetchAll = False
        query = "SELECT * FROM building WHERE id = %s"

        params = (id,)
        
        result = self.db_exec.execute_query(query, params)

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
