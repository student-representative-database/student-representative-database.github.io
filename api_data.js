define({ "api": [
  {
    "type": "post",
    "url": "/:faculty",
    "title": "Create council",
    "version": "0.1.0",
    "name": "CreateCouncil",
    "group": "Council",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "faculty",
            "description": "<p>Faculty unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Utbildningsråd\",\n  \"description\": \"...\",\n  \"studentPositions\": 2,\n  \"phdPositions\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"payload\": {\n    \"id\": 3,\n    \"name\": \"Utbildningsråd\",\n    \"description\": \"...\",\n    \"studentPositions\": 2,\n    \"phdPositions\": 2,\n    \"facultyId\": 1,\n    \"updatedAt\": \"2017-05-02T08:15:03.453Z\",\n    \"createdAt\": \"2017-05-02T08:15:03.453Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateCouncilName",
            "description": "<p>There alredy exist a council with that name in the faculty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"DuclicateCouncilName\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDcouncilsRouter.ts",
    "groupTitle": "Council"
  },
  {
    "type": "delete",
    "url": "/:faculty/:id",
    "title": "Delete council",
    "version": "0.1.0",
    "name": "DeleteCouncil",
    "group": "Council",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "faculty",
            "description": "<p>Faculty unique ID.</p>"
          },
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Council unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ !!!!!!!!!!!!!!!! fix response in our implementation!!!!!!!!!!!!!!\n  \"payload\": {\n    \"id\": 1,\n    \"name\": \"Fakulteten för teknik\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoCouncilWithId",
            "description": "<p>No faculty with that id exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouncilNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDcouncilsRouter.ts",
    "groupTitle": "Council"
  },
  {
    "type": "get",
    "url": "/:faculty/:id",
    "title": "Get all councils",
    "version": "0.1.0",
    "name": "GetCouncils",
    "group": "Council",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "faculty",
            "description": "<p>Faculty unique ID.</p>"
          },
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Council unique ID.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Council.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "councils",
            "description": "<p>Array of councils</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  payload: {\n    id: 1,\n    name: \"Utbildningsråd\",\n    description: \"...\",\n    facultyId: 1,\n    studentPositions: 2,\n    phdPositions: 2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouncilNotFound",
            "description": "<p>The id of the Council was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouncilNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDcouncilsRouter.ts",
    "groupTitle": "Council"
  },
  {
    "type": "patch",
    "url": "/:faculty/:id",
    "title": "Update council",
    "version": "0.1.0",
    "name": "UpdateCouncil",
    "group": "Council",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "faculty",
            "description": "<p>Faculty unique ID.</p>"
          },
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Council unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Utbildningsråd #2\",\n  \"description\": \"...\",\n  \"studentPositions\": 3,\n  \"phdPositions\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ !!!!!!!!!!!!!!!! fix response in our implementation!!!!!!!!!!!!!!\n  \"payload\": {\n    \"id\": 1,\n    \"name\": \"Fakulteten för teknik\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoCouncilWithId",
            "description": "<p>No faculty with that id exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouncilNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDcouncilsRouter.ts",
    "groupTitle": "Council"
  },
  {
    "type": "post",
    "url": "/faculty/:id",
    "title": "Create faculty",
    "version": "0.1.0",
    "name": "CreateFaculty",
    "group": "Faculty",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Faculty unique ID.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Faculty.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Fakulteten för teknik\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"payload\": {\n    \"id\": 1,\n    \"name\": \"Fakulteten för teknik\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateFacultyName",
            "description": "<p>There alredy exist a faculty with that name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"DuclicateFacultyName\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDfacultiesRouter.ts",
    "groupTitle": "Faculty"
  },
  {
    "type": "delete",
    "url": "/faculty/:id",
    "title": "Delete faculty",
    "version": "0.1.0",
    "name": "DeleteFaculty",
    "group": "Faculty",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Faculty unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"payload\": {\n    \"id\": 1,\n    \"name\": \"Fakulteten för teknik\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoFacultyWithId",
            "description": "<p>No faculty with that id exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FacultyNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDfacultiesRouter.ts",
    "groupTitle": "Faculty"
  },
  {
    "type": "get",
    "url": "/faculty/",
    "title": "Get all faculties",
    "version": "0.1.0",
    "name": "GetFaculties",
    "group": "Faculty",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"payload\": [\n    {\n      \"id\": 1,\n      \"name\": \"Fakulteten för teknik\",\n      \"councils\": [\n        {\n          \"id\": 1,\n          \"name\": \"Utbildningsråd\",\n          \"description\": \"...\",\n          \"facultyId\": 1\n        }\n      ]\n    },\n    {...}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoFacultiesFound",
            "description": "<p>No faculties found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoFacultiesFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDfacultiesRouter.ts",
    "groupTitle": "Faculty"
  },
  {
    "type": "get",
    "url": "/faculty/:id",
    "title": "Get faculty",
    "version": "0.1.0",
    "name": "GetFaculty",
    "group": "Faculty",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Faculty.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\"payload\": {\n  \"id\": 1,\n  \"name\": \"Fakulteten för teknik\",\n  \"councils\": [\n    {\n      \"id\": 1,\n      \"name\": \"Utbildningsråd\",\n      \"description\": \"...\",\n      \"facultyId\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FacultyNotFound",
            "description": "<p>Id of the Faculty was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FacultyNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDfacultiesRouter.ts",
    "groupTitle": "Faculty"
  },
  {
    "type": "patch",
    "url": "/faculty/:id",
    "title": "Update faculty",
    "version": "0.1.0",
    "name": "patchFaculty",
    "group": "Faculty",
    "parameter": {
      "fields": {
        "uriParams": [
          {
            "group": "uriParams",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Faculty unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Fakulteten för \"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"payload\": {\n    \"id\": 1,\n    \"name\": \"Fakulteten för samhällsvetenskap\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateFacultyName",
            "description": "<p>There alredy exist a faculty with that name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"DuclicateFacultyName\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "studDB/server/routes/api/v1/CRUDfacultiesRouter.ts",
    "groupTitle": "Faculty"
  }
] });