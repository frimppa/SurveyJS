import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./surveyCustom.css"
import axios from "axios";
import { Rating } from "@mui/material";



const CustomRadioForm = (props) => {
  //Survey.StylesManager.applyTheme("modern");
  var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#201751";
defaultThemeColors["$main-hover-color"] = "#201751";
defaultThemeColors["$text-color"] = "#201751";
defaultThemeColors["$header-color"] = "#201751";

defaultThemeColors["$header-background-color"] = "#201751";
defaultThemeColors["$body-container-background-color"] = "#201751";

Survey.StylesManager.applyTheme("modern");


  const surveyJSON = {
    title: "Testikysely",
    description:
      "jotain description tekstiä tänne",
    pages: [
      {
        name: "page1",
        title: "Ajattele tulevaa työuraasi valmistumisesi jälkeen, kuinka hyvin seuraavat asiat kuvaavat omia toiveitasi ja suunnitelmiasi.",
        questions: [
          {
            type: "rating",
            name: "satisfaction1",
            title: "1.	Kuinka todennäköistä on, että jatkat uraasi toisen palveluksessa (eli palkkatyössä) valmistumisesi jälkeen??",
            minRateDescription: "erittäin epätodennäköistä",
            maxRateDescription: "erittäin todennäköistä",
            isRequired: true,
          },
          {
            type: "rating",
            name: "satisfaction2",
            title: "2.	Kuinka todennäköistä on, että tulet perustamaan oman yrityksen valmistumisesi jälkeen (tai opintojesi aikana)?",
            minRateDescription: "erittäin epätodennäköistä",
            maxRateDescription: "erittäin todennäköistä",
            isRequired: true,
          },
          {
            type: "rating",
            name: "satisfaction3",
            title: "3. Uskon, että läheisimmät perheenjäseneni ajattelevat, että minun 1 ei pitäisi … 7 pitäisi tavoitella oman yrityksen perustamista ja yrittäjänä toimimista valmistumiseni jälkeen.",
            minRateDescription: "ei pitäisi",
            maxRateDescription: "pitäisi",
            isRequired: true,
          },
          {
            type: "rating",
            name: "satisfaction4",
            title: "4. Kuinka paljon välität siitä, mitä läheisimmät perheenjäsenesi ajattelevat, jos tavoittelet oman yrityksen perustamista ja yrittäjänä toimimista valmistumisesi jälkeen?",
            minRateDescription: "en lainkaan",
            maxRateDescription: "todella paljon",
            isRequired: true,
          },
        ],
      },
      {
        name: "page2",

        questions: [
          {
            type: "matrixdropdown",
            name: "KysymysRyhmä1",
            title:
              "Ilmoita, oletko samaa vai eri mieltä seuraavista väitteistä",
              confirmDelete: false,
            columns: [
              {
                value: 1,
                text: "Vahvasti eri mieltä",
                cellType: "rating",
                name: "rating1",
                title: "jotain",
                minRateDescription: "erittäin epätodennäköistä",
                maxRateDescription: "erittäin todennäköistä",
                confirmDelete: false,
              },
             
            ],
            rows: [
              "Excited lijflisdhflöis slmdfhsldhf slmifdhlsh sdhmf lshdf msfdhlmsdhfoshdfml sdlfhimskdjhf",
              "Enthusiastic",
              "Open",
              "Physically safe",
              "Emotionally safe",
              "Apprehensive",
              "Nervous",
              "Scared"
          ]
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
        name: "page3",

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
