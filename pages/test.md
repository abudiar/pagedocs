# KANBAI App

Tasks App is an application to hold all your tasks needs. This application has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### POST /register

> Create new user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "first_name": <first_name to post>,
  "last_name": <last_name to post>,
  "gender": <gender to post>,
  "email": <email to post>,
  "password": <password to post>,
  "phone_number": <phone_number to post>,
  "address": <address to post>,
  "use_google": <does user use google auth?>
}
```

_Response (201 - Created)_

```
{
  "id": <posted id given by system>,
  "first_name": <first_name post>,
  "last_name": <last_name post>,
  "gender": <gender post>,
  "email": <email post>,
  "password": <password post>,
  "phone_number": <phone_number post>,
  "address": <address post>,
  "use_google": <does user use google auth?>,
  "updatedAt": "2020-03-31T09:46:41.241Z",
  "createdAt": "2020-03-31T09:46:41.241Z"
}
```

_Response (400 - Bad Request)_

```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Due date must be a date",
            "type": "Validation error",
            "path": "due_date",
            "value": null,
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "Is it me your looking for",
                "description": "I can see it in your eyes",
                "status": "deep inside you wanna cry",
                "due_date": null,
                "updatedAt": "2020-03-30T15:14:23.423Z",
                "createdAt": "2020-03-30T15:14:23.423Z"
            },
            "validatorKey": "isDate",
            "validatorName": "isDate",
            "validatorArgs": [
                {
                    "msg": "Due date must be a date"
                }
            ],
            "original": {
                "validatorName": "isDate",
                "validatorArgs": [
                    {
                        "msg": "Due date must be a date"
                    }
                ]
            }
        }
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### POST /login

> Login to user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": <email to post>,
  "password": <password to post>,
}
```

_Response (201 - Created)_

```
{
  "accessToken": <accessToken given by system>
}
```

_Response (400 - Bad Request)_

```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Due date must be a date",
            "type": "Validation error",
            "path": "due_date",
            "value": null,
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "Is it me your looking for",
                "description": "I can see it in your eyes",
                "status": "deep inside you wanna cry",
                "due_date": null,
                "updatedAt": "2020-03-30T15:14:23.423Z",
                "createdAt": "2020-03-30T15:14:23.423Z"
            },
            "validatorKey": "isDate",
            "validatorName": "isDate",
            "validatorArgs": [
                {
                    "msg": "Due date must be a date"
                }
            ],
            "original": {
                "validatorName": "isDate",
                "validatorArgs": [
                    {
                        "msg": "Due date must be a date"
                    }
                ]
            }
        }
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### GET /isadmin

> Returns if user is admin

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
<true or false>
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### POST /products

> Create new product

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
{
  "AdminId": <AdminId to post>,
  "CategoryId": <CategoryId to post>,
  "name": <name to post>,
  "image_url": <image_url to post>,
  "description": <description to post>,
  "price": <price to post>,
  "stock": <stock to post>
}
```

_Response (201 - Created)_

```
{
  "id": <given id by system>,
  "AdminId": <AdminId post>,
  "CategoryId": <CategoryId post>,
  "name": <name post>,
  "image_url": <image_url post>,
  "description": <description post>,
  "price": <price post>,
  "stock": <stock post>
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Due date must be a date",
            "type": "Validation error",
            "path": "due_date",
            "value": null,
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "Is it me your looking for",
                "description": "I can see it in your eyes",
                "status": "deep inside you wanna cry",
                "due_date": null,
                "updatedAt": "2020-03-30T15:14:23.423Z",
                "createdAt": "2020-03-30T15:14:23.423Z"
            },
            "validatorKey": "isDate",
            "validatorName": "isDate",
            "validatorArgs": [
                {
                    "msg": "Due date must be a date"
                }
            ],
            "original": {
                "validatorName": "isDate",
                "validatorArgs": [
                    {
                        "msg": "Due date must be a date"
                    }
                ]
            }
        }
    ]
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### GET /products

> Get all products

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 1,
	"AdminId": 1,
	"CategoryId": 3,
	"name": "noms",
    "image_url": "http://image.com/1.jpg",
	"description": "yums",
	"price": 5000,
	"stock": 3,
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
  {
    "id": 2,
	"AdminId": 3,
	"CategoryId": 3,
	"name": "mlems",
    "image_url": "http://image.com/2.jpg",
	"description": "yums",
	"price": 8000,
	"stock": 4,
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```

_Response (400 - Bad Request)_

```
{
  "name": "TokenNull",
  "message": "Token is missing."
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### GET /products/:id

> Get one product

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "id": 2,
	"AdminId": 3,
	"CategoryId": 3,
	"name": "mlems",
    "image_url": "http://image.com/2.jpg",
	"description": "yums",
	"price": 8000,
	"stock": 4,
	"createdAt": "2020-03-20T07:15:12.149Z",
	"updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
  "name": "TokenNull",
  "message": "Token is missing."
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (404 - Not Found)_

```
{
  "name": "<returned error name>",
  "message": "<returned error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### PUT /products/:id

> Updates one product

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
{
  "AdminId": <AdminId to post>,
  "CategoryId": <CategoryId to post>,
  "name": <name to post>,
  "image_url": <image_url to post>,
  "description": <description to post>,
  "price": <price to post>,
  "stock": <stock to post>
}
```

_Response (200)_

```
{
  "id": <given id by system>,
  "AdminId": <AdminId post>,
  "CategoryId": <CategoryId post>,
  "name": <name post>,
  "image_url": <image_url post>,
  "description": <description post>,
  "price": <price post>,
  "stock": <stock post>
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Due date must be a date",
            "type": "Validation error",
            "path": "due_date",
            "value": null,
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "Is it me your looking for",
                "description": "I can see it in your eyes",
                "status": "deep inside you wanna cry",
                "due_date": null,
                "updatedAt": "2020-03-30T15:14:23.423Z",
                "createdAt": "2020-03-30T15:14:23.423Z"
            },
            "validatorKey": "isDate",
            "validatorName": "isDate",
            "validatorArgs": [
                {
                    "msg": "Due date must be a date"
                }
            ],
            "original": {
                "validatorName": "isDate",
                "validatorArgs": [
                    {
                        "msg": "Due date must be a date"
                    }
                ]
            }
        }
    ]
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (404 - Not Found)_

```
{
  "name": "<returned error name>",
  "message": "<returned error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### DELETE /products/:id

> Deletes one product

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id": <given id by system>,
  "AdminId": <AdminId post>,
  "CategoryId": <CategoryId post>,
  "name": <name post>,
  "image_url": <image_url post>,
  "description": <description post>,
  "price": <price post>,
  "stock": <stock post>
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
  "name": "TokenNull",
  "message": "Token is missing."
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (404 - Not Found)_

```
{
  "name": "<returned error name>",
  "message": "<returned error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### POST /products

> Create new product

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
{
  "AdminId": <AdminId to post>,
  "CategoryId": <CategoryId to post>,
  "name": <name to post>,
  "image_url": <image_url to post>,
  "description": <description to post>,
  "price": <price to post>,
  "stock": <stock to post>
}
```

_Response (201 - Created)_

```
{
  "id": <given id by system>,
  "AdminId": <AdminId post>,
  "CategoryId": <CategoryId post>,
  "name": <name post>,
  "image_url": <image_url post>,
  "description": <description post>,
  "price": <price post>,
  "stock": <stock post>
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Due date must be a date",
            "type": "Validation error",
            "path": "due_date",
            "value": null,
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "Is it me your looking for",
                "description": "I can see it in your eyes",
                "status": "deep inside you wanna cry",
                "due_date": null,
                "updatedAt": "2020-03-30T15:14:23.423Z",
                "createdAt": "2020-03-30T15:14:23.423Z"
            },
            "validatorKey": "isDate",
            "validatorName": "isDate",
            "validatorArgs": [
                {
                    "msg": "Due date must be a date"
                }
            ],
            "original": {
                "validatorName": "isDate",
                "validatorArgs": [
                    {
                        "msg": "Due date must be a date"
                    }
                ]
            }
        }
    ]
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### GET /categorys

> Get all categories

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 1,
	"name": "noms",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
  {
    "id": 2,
	"name": "mlems",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```

_Response (400 - Bad Request)_

```
{
  "name": "TokenNull",
  "message": "Token is missing."
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### GET /categorys/:id

> Get one category

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
	"name": "mlems"
	"createdAt": "2020-03-20T07:15:12.149Z",
	"updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
  "name": "TokenNull",
  "message": "Token is missing."
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (404 - Not Found)_

```
{
  "name": "<returned error name>",
  "message": "<returned error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### PUT /categorys/:id

> Updates one category

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
{
  "name": <name to post>
}
```

_Response (200)_

```
{
  "id": <given id by system>,
  "name": <name post>,
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Due date must be a date",
            "type": "Validation error",
            "path": "due_date",
            "value": null,
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "Is it me your looking for",
                "description": "I can see it in your eyes",
                "status": "deep inside you wanna cry",
                "due_date": null,
                "updatedAt": "2020-03-30T15:14:23.423Z",
                "createdAt": "2020-03-30T15:14:23.423Z"
            },
            "validatorKey": "isDate",
            "validatorName": "isDate",
            "validatorArgs": [
                {
                    "msg": "Due date must be a date"
                }
            ],
            "original": {
                "validatorName": "isDate",
                "validatorArgs": [
                    {
                        "msg": "Due date must be a date"
                    }
                ]
            }
        }
    ]
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (404 - Not Found)_

```
{
  "name": "<returned error name>",
  "message": "<returned error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---

### DELETE /categorys/:id

> Deletes one category

_Request Header_

```
{
  "accessToken": <accessToken from login>
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id": <given id by system>,
  "name": <name post>,
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_

```
{
  "name": "TokenNull",
  "message": "Token is missing."
}
```

_Response (401 - Not Found)_

```
{
  "name": "AuthorizationError",
  "message": "You do not have the required permissions!"
}
```

_Response (404 - Not Found)_

```
{
  "name": "<returned error name>",
  "message": "<returned error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "name": "SequelizeConnectionError",
  "parent": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  },
  "original": {
      "name": "error",
      "length": 167,
      "severity": "FATAL",
      "code": "28P01",
      "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\libpq\\auth.c",
      "line": "333",
      "routine": "auth_failed"
  }
}
```

---
