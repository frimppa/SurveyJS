import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./surveyCustom.css"
import axios from "axios";

const CustomRadioForm = (props) => {
  Survey.StylesManager.applyTheme("modern");
  const surveyJSON = {
    title: "Testikysely",
    description:
      "jotain description tekstiä tänne",
    pages: [
      {
        name: "page1",

        questions: [
          {
            type: "matrix",
            name: "KysymysRyhmä1",
            title:
              "Ilmoita, oletko samaa vai eri mieltä seuraavista väitteistä",
            columns: [
              {
                value: 1,
                text: "Vahvasti eri mieltä",
              },
              {
                value: 2,
                text: "eri mieltä",
              },
              {
                value: 3,
                text: "Neutraali",
              },
              {
                value: 4,
                text: "Samaa mieltä",
              },
              {
                value: 5,
                text: "Vahvasti samaa mieltä",
              },
            ],
            rows: [
              {
                value: "Tuote edullinen",
                text: "Tuote on edullinen",
              },
              {
                value: "Tekee mitä lupaakin",
                text: "Tuote tekee mitä on luvattu",
              },
              {
                value: "parempi kuin muut",
                text: "Tuote on parempi kuin muut markkoilla olevat tuotteet",
              },
              {
                value: "helppokäyttöisyys",
                text: "Tuote on helppokäyttöinen",
              },
            ],
          },
          {
            type: "matrix",
            name: "KysymysRyhmä2",
            isRequired: true,
            title:
              "Ilmoita, oletko samaa vai eri mieltä seuraavista väitteistä",
            columns: [
              {
                value: 1,
                text: "Vahvasti eri mieltä",
              },
              {
                value: 2,
                text: "eri mieltä",
              },
              {
                value: 3,
                text: "Neutraali",
              },
              {
                value: 4,
                text: "Samaa mieltä",
              },
              {
                value: 5,
                text: "Vahvasti samaa mieltä",
              },
            ],
            rows: [
              {
                value: "Tuote edullinen",
                text: "Tuote on edullinen",
              },
              {
                value: "Tekee mitä lupaakin",
                text: "Tuote tekee mitä on luvattu",
              },
              {
                value: "parempi kuin muut",
                text: "Tuote on parempi kuin muut markkoilla olevat tuotteet",
              },
              {
                value: "helppokäyttöisyys",
                text: "Tuote on helppokäyttöinen",
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
            title: "Kuinka tyytyväinen olet tuotteeseen 5?",
            minRateDescription: "En ole tyytyväinen",
            maxRateDescription: "Olen täysin tyytyväinen",
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

  //custom data, jonka saa lähetyksen kylkeen
  survey.data = {
    name: "John Doe",
    email: "johndoe@nobody.com",
    car: ["Ford"],
  };

  survey.locale = "fi";

  console.log("current sivu on: ",survey.activePage.data.description);


  const sendDataToServer = (sender, options) => {
    axios.post("http://localhost:4000/surveyData", sender.data).then((res) => {
      console.log(res);
      console.log(res.data);
      
    });
  };

  return <Survey.Survey auto model={survey} onComplete={sendDataToServer} />;
};

export default CustomRadioForm;
