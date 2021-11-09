import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import axios from "axios";

const CustomRadioForm = (props) => {
  Survey.StylesManager.applyTheme("modern");
  const surveyJSON = {
    title: "Cancellation Survey",
    description:
      "Thank you for using our service. We would highly appreciate if you would take the time to fill our cancellation survey. This would help us improve the service.",
    pages: [
      {
        name: "page1",

        questions: [
          {
            type: "matrix",
            name: "Quality",
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree",
              },
              {
                value: 2,
                text: "Disagree",
              },
              {
                value: 3,
                text: "Neutral",
              },
              {
                value: 4,
                text: "Agree",
              },
              {
                value: 5,
                text: "Strongly Agree",
              },
            ],
            rows: [
              {
                value: "affordable",
                text: "Product is affordable",
              },
              {
                value: "does what it claims",
                text: "Product does what it claims",
              },
              {
                value: "better then others",
                text: "Product is better than other products on the market",
              },
              {
                value: "easy to use",
                text: "Product is easy to use",
              },
            ],
          },
          {
            type: "matrix",
            name: "Quality2",
            isRequired: true,
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree",
                isRequired: true,
              },
              {
                value: 2,
                text: "Disagree",
                isRequired: true,
              },
              {
                value: 3,
                text: "Neutral",
                isRequired: true,
              },
              {
                value: 4,
                text: "Agree",
                isRequired: true,
              },
              {
                value: 5,
                text: "Strongly Agree",
                isRequired: true,
              },
            ],
            rows: [
              {
                value: "affordable",
                text: "Product is affordable",
              },
              {
                value: "does what it claims",
                text: "Product does what it claims",
              },
              {
                value: "better then others",
                text: "Product is better than other products on the market",
              },
              {
                value: "easy to use",
                text: "Product is easy to use",
              },
            ],
          },
        ],
      },
      {
        name: "page2",

        questions: [
          {
            type: "rating",
            name: "satisfaction5",
            title: "How satisfied are you with the Product5?",
            minRateDescription: "Not Satisfied",
            maxRateDescription: "Completely satisfied",
            isRequired: true,
          },
        ],
      },
    ],
    showQuestionNumbers: "off",
  };
  const survey = new Survey.Model(surveyJSON);

  /*  Survey.Survey.onComplete.add(function (sender, options) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:4000/surveyData");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(sender.data));
});*/

  /*survey.onComplete.add(function (sender, options) {
        //Show message about "Saving..." the results
        options.showDataSaving();//you may pass a text parameter to show your own text
        axios.post('http://localhost:4000/surveyData', sender.data)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
    });*/

  survey.data = {
    name: "John Doe",
    email: "johndoe@nobody.com",
    car: ["Ford"],
  };

  const sendDataToServer = (sender, options) => {
    axios.post("http://localhost:4000/surveyData", sender.data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return <Survey.Survey model={survey} onComplete={sendDataToServer} />;
};

export default CustomRadioForm;
