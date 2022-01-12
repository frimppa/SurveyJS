const json = {
    "_id": {
        "$oid": "618b7289a12c13ca7ebf95ac"
    },
    "content":
    {
      "title": "Testing Survey",
    "description": "Something to write here...",
    "content": 
    [
          {
            "type": "matrix",
            "name": "Quality",
            "title": "Please indicate if you agree or disagree with the following statements",
            "columns": [
              {
                "value": 1,
                "text": "Strongly Disagree",
              },
              {
                "value": 2,
                "text": "Disagree",
              },
              {
                "value": 3,
                "text": "Neutral",
              },
              {
                "value": 4,
                "text": "Agree",
              },
              {
                "value": 5,
                "text": "Strongly Agree",
              },
            ],
            "rows": [
              {
                "value": "affordable",
                "text": "Product is affordable",
              },
              {
                "value": "does what it claims",
                "text": "Product does what it claims",
              },
              {
                "value": "better then others",
                "text": "Product is better than other products on the market",
              },
              {
                "value": "easy to use",
                "text": "Product is easy to use",
              },
            ],
          },
          {
            "type": "matrix",
            "name": "Quality2",
            "isRequired": true,
            "title":
              "Please indicate if you agree or disagree with the following statements",
            "columns": [
              {
                "value": 1,
                "text": "Strongly Disagree",
                "isRequired": true,
              },
              {
                "value": 2,
                "text": "Disagree",
                "isRequired": true,
              },
              {
                "value": 3,
                "text": "Neutral",
                "isRequired": true,
              },
              {
                "value": 4,
                "text": "Agree",
                "isRequired": true,
              },
              {
                "value": 5,
                "text": "Strongly Agree",
                "isRequired": true,
              },
            ],
            "rows": [
              {
                "value": "affordable",
                "text": "Product is affordable",
              },
              {
                "value": "does what it claims",
                "text": "Product does what it claims",
              },
              {
                "value": "better then others",
                "text": "Product is better than other products on the market",
              },
              {
                "value": "easy to use",
                "text": "Product is easy to use",
              }
            ]
          }
    ]
}
      
    }