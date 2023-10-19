from flask import jsonify
from app.models.building_model import BuildingModel
from app.models.user_model import UserModel

building_model = BuildingModel()
user_model = UserModel()

class RoomRateView:
    @staticmethod
    def serialize_room(room_rate):
        
        building = building_model.get(room_rate.building_id)
        building_dict = {
            'building_id' : building.id ,
            'building_code' : building.code ,
            'building_tag' : building.tag ,
            'building_slug' : building.slug ,
            'building_name' : building.name ,
            'building_address' : building.address ,
            'building_description' : building.description
        }
        
        added_by = user_model.get(room_rate.added_by)
        added_by_dict = {
            'id' : added_by.id,
            'last_name' : added_by.last_name,
            'first_name' : added_by.first_name,
            'middle_name' : added_by.middle_name,
            'user_id' : added_by.user_id,
            'email' : added_by.email,
            'status' : added_by.status
        }
        
        updated_by = user_model.get(room_rate.updated_by)
        updated_by_dict = {
            'id' : updated_by.id,
            'last_name' : updated_by.last_name,
            'first_name' : updated_by.first_name,
            'middle_name' : updated_by.middle_name,
            'user_id' : updated_by.user_id,
            'email' : updated_by.email,
            'status' : updated_by.status
        }
        
        return {
             "id" : room_rate.id,
             "building_id" : building_dict,
             "number" : room_rate.number,
             "code" : room_rate.code,
             "tag" : room_rate.tag,
             "slug" : room_rate.slug,
             "description" : room_rate.description,
             "price": room_rate.price,
             "status" : room_rate.status,
             "added_by" : added_by_dict ,
             "added_date" : room_rate.added_date ,
             "updated_by" : updated_by_dict ,
             "updated_date": room_rate.updated_date
        }
        
    @staticmethod
    def render_room_rate(room_rate):
        return jsonify(RoomRateView.serialize_room(room_rate))
    
    @staticmethod
    def render_room_rates(room_rates):
        result = []
        for room_rate in room_rates:
            building = building_model.get(room_rate.building_id)
            building_dict = {
                'building_id' : building.id ,
                'building_code' : building.code ,
                'building_tag' : building.tag ,
                'building_slug' : building.slug ,
                'building_name' : building.name ,
                'building_address' : building.address ,
                'building_description' : building.description
            }
            
            added_by = user_model.get(room_rate.added_by)
            added_by_dict = {
                'id' : added_by.id,
                'last_name' : added_by.last_name,
                'first_name' : added_by.first_name,
                'middle_name' : added_by.middle_name,
                'user_id' : added_by.user_id,
                'email' : added_by.email,
                'status' : added_by.status,
            }

            updated_by = user_model.get(room_rate.updated_by)
            updated_by_dict = {
                'id' : updated_by.id,
                'last_name' : updated_by.last_name,
                'first_name' : updated_by.first_name,
                'middle_name' : updated_by.middle_name,
                'user_id' : updated_by.user_id,
                'email' : updated_by.email,
                'status' : updated_by.status,
            }
            
            dict = {
                "id" : room_rate.id,
                "building_id" : building_dict,
                "number" : room_rate.number,
                "code" : room_rate.code,
                "tag" : room_rate.tag,
                "slug" : room_rate.slug,
                "description" : room_rate.description,
                "price": room_rate.price,
                "status" : room_rate.status,
                "added_by" : added_by_dict ,
                "added_date" : room_rate.added_date ,
                "updated_by" : updated_by_dict,
                "updated_date": room_rate.updated_date
            }
            result.append(dict)
        return jsonify({'room_rates' : result})
        