from flask import jsonify
from datetime import datetime

class GuestView:
    @staticmethod
    def serialize_guest(guest):
        fields = [
            'id', 'last_name', 'first_name', 'middle_name', 'suffix',
            'passport_id', 'drivers_license_id', 'umid_id', 'sss_id',
            'prc_id', 'status', 'added_by', 'added_date', 'updated_by', 'updated_date'
        ]

        serialized_data = {field: getattr(guest, field) for field in fields}

        serialized_data['added_date'] = guest.added_date.strftime('%Y-%m-%d %H:%M:%S') if guest.added_date else None
        serialized_data['updated_date'] = guest.updated_date.strftime('%Y-%m-%d %H:%M:%S') if guest.updated_date else None

        return serialized_data
    @staticmethod
    def render_guest(guest):
        return jsonify(GuestView.serialize_guest(guest))

    def render_guests(guests):
        fields = [
            'id', 'last_name', 'first_name', 'middle_name', 'suffix',
            'passport_id', 'drivers_license_id', 'umid_id', 'sss_id',
            'prc_id', 'status', 'added_by', 'added_date', 'updated_by', 'updated_date'
        ]

        result = []
        for guest in guests:
            guest_dict = {fields[i]: guest[i] for i in range(len(fields))}
            guest_dict['added_date'] = guest[12].strftime('%Y-%m-%d %H:%M:%S') if guest[12] else None
            guest_dict['updated_date'] = guest[14].strftime('%Y-%m-%d %H:%M:%S') if guest[14] else None

            result.append(guest_dict)

        return {'guests': result}
    