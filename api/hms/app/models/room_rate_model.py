from app.utils.database import MySQLQueryExecutor
from abc import ABC
from typing import List

class RoomRate(ABC):
    def __init__(self, **kwargs):
        self.id = kwargs.get("id")
        self.building_id = kwargs.get("building_id")
        self.number = kwargs.get("number")
        self.code = kwargs.get("code")
        self.tag = kwargs.get("tag")
        self.slug = kwargs.get("slug")
        self.description = kwargs.get("description")
        self.price = kwargs.get("price")
        self.status = kwargs.get("status")
        self.added_by = kwargs.get("added_by")
        self.added_date = kwargs.get("added_date")
        self.updated_by = kwargs.get("updated_by")
        self.updated_date = kwargs.get("updated_date")

class RoomRateModel:
    def __init__(self):
        self.db_exec = MySQLQueryExecutor()
        
    def create_object(self, row) -> RoomRate:
         id, building_id, number, code, tag, slug, description, price, status, added_by, added_date, updated_by, updated_date = row
         return RoomRate(
             id = id,
             building_id = building_id,
             number = number,
             code = code,
             tag = tag,
             slug = slug,
             description = description,
             price = price,
             status = status,
             added_by = added_by ,
             added_date = added_date ,
             updated_by = updated_by ,
             updated_date= updated_date
         )
        
    def create_objects(self, rows) -> List[RoomRate]:
        return [self.create_object(row) for row in rows]

    def get_all(self):
        self.db_exec.isFetchAll = True
        query = """
            SELECT 
                id , 
                building_id , 
                number , 
                code , 
                tag , 
                slug , 
                description , 
                price , 
                status , 
                added_by , 
                added_date , 
                updated_by , 
                updated_date 
            FROM 
                room_rate
            """
        
        room_rates = self.db_exec.execute_query(query)
        return self.create_objects(room_rates)

    def get(self, id):
        self.db_exec.isFetchAll = False
        query = """
            SELECT 
                id , 
                building_id , 
                number , 
                code , 
                tag , 
                slug , 
                description , 
                price , 
                status , 
                added_by , 
                added_date , 
                updated_by , 
                updated_date 
            FROM 
                room_rate
            WHERE 
                id = %s
            """
        params = (id,)
        result = self.db_exec.execute_query(query, params)
        if result:
            return self.create_object(result)
        else:
            return None
