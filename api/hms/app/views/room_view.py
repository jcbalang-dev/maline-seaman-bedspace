from flask import jsonify

class RoomView:
    @staticmethod
    def serialize_room(room):
        return {
            "id" : room.id ,
            "building_id" : room.building_id ,
            "number" : room.number ,
            "code" : room.code ,
            "tag" : room.tag ,
            "slug" : room.slug ,
            "rate" : room.rate ,
            "bed_capacity" : room.bed_capacity ,
            "availability" : room.availability ,
            "description" : room.description ,
            "added_by" : room.added_by ,
            "added_date" : room.added_date ,
            "updated_by" : room.updated_by ,
            "updated_date" : room.updated_date
        }

    @staticmethod
    def render_room(room):
        return jsonify(RoomView.serialize_room(room))

    @staticmethod
    def render_rooms(rooms):
        result = []
        for room in rooms:
            dict = {
                "id" : room.id ,
                "building_id" : room.building_id ,
                "number" : room.number ,
                "code" : room.code ,
                "tag" : room.tag ,
                "slug" : room.slug ,
                "rate" : room.rate ,
                "bed_capacity" : room.bed_capacity ,
                "availability" : room.availability ,
                "description" : room.description ,
                "added_by" : room.added_by ,
                "added_date" : room.added_date ,
                "updated_by" : room.updated_by ,
                "updated_date" : room.updated_date
            }
            result.append(dict)
        return jsonify( { 'rooms' : result } )
