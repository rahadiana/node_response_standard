const { ResponseHandler } = require('../')

const input = process.argv.slice(2)[0]

const data = {
    "user": {
        "id": 2,
        "name": "Client",
        "client_id": 1,
        "email": "client@clickapps.co",
        "gender_label": null,
        "gender": null,
        "mobile": "123654789",
        "code_country": "00967",
        "birth_date": null,
        "avatar": "http://localhost:3000/default_image.png",
        "sms_notification": true,
        "is_mobile_verified": false,
        "otp": {
            "otp": "8704"
        },
        "client_city": {
            "id": 3,
            "name_ar": "الرياض",
            "name_en": "Riadh",
            "name": "Riadh",
            "status": 1,
            "status_label": "Active",
            "country": {
                "id": 2,
                "name": "Kingdub saudi Arab",
                "code_country": "ksa",
                "avatar": "http://localhost:3000/default_image.png",
                "status": 1,
                "status_label": "Active"
            }
        },
        "client_locations": [
            {
                "id": 1,
                "client_id": 1,
                "latitude": "0.0",
                "longitude": "0.0",
                "address": "169 Rath Rapids",
                "address_ar": "964 Michale Parkway",
                "address_en": "169 Rath Rapids",
                "building_name": "building_name",
                "location_type": 1,
                "location_type_label": "Home",
                "apartment_name": null,
                "require_permission": false,
                "city": null,
                "zip_code": null
            }
        ]
    },
    "role": "client",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkNsaWVudCIsImVtYWlsIjoiY2xpZW50QGNsaWNrYXBwcy5jbyIsIm1vYmlsZSI6IjEyMzY1NDc4OSIsImltYWdlIjoiL2RlZmF1bHRfaW1hZ2UucG5nIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDc5MjU0MzIsImV4cCI6MTU1MDUxNzQzMn0.4Vyjd7BG7v8AFSmGKmIs4VM2FBw3gOLn97Qdf6U4jxU"
}

const response = ResponseHandler(input == "true" ? 200 : 400 , data,"this message")

console.log( response  )