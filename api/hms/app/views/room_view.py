from flask import jsonify

class RoomView:
    @staticmethod
    def serialize_room(room):
        return {
            'id': room.id,
            'building_id': room.building_id,
            'number': room.number,
            'code': room.code,
            'tag': room.tag,
            'slug': room.slug,
            'rate': float(room.rate),
            'bed_capacity': room.bed_capacity,
            'availability': room.availability,
            'description': room.description,
            'added_by': room.added_by,
            'added_date': room.added_date.strftime("%Y-%m-%d %H:%M:%S"),
            'updated_by': room.updated_by,
            'updated_date': room.updated_date.strftime("%Y-%m-%d %H:%M:%S"),
        }

    @staticmethod
    def render_room(room):
        return jsonify(RoomView.serialize_room(room))

    @staticmethod
    def render_rooms(rooms):
        result = []
        for room in rooms:
            room_dict = {
                'id': room[0],
                'building_id': room[1],
                'number': room[2],
                'code': room[3],
                'tag': room[4],
                'slug': room[5],
                'rate': float(room[6]),  # Convert Decimal to float
                'bed_capacity': room[7],
                'availability': room[8],
                'description': room[9],
                'added_by': room[10],
                'added_date': room[11].strftime("%Y-%m-%d %H:%M:%S"),
                'updated_by': room[12],
                'updated_date': room[13].strftime("%Y-%m-%d %H:%M:%S"),
            }
            result.append(room_dict)

        return {'rooms': result}
