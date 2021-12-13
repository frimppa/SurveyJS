import React from "react";
import StandardForm from "../common/components/SurveyJS/StandardForm";
import AdvancedForm from "../common/components/SurveyJS/AdvancedForm";
import CustomRadioForm from "../common/components/SurveyJS/CustomRadioForm";
import ButtonAppBar from "../common/components/MaterialUI/AppBar";
import BasicRating from "../common/components/MaterialUI/Rating";

const JsonParser = (props) => {

    console.log("Jsonlog", props);

  return(<div>
    <ButtonAppBar />
    {/*<CustomRadioForm />*/}
    <BasicRating/>
  </div>
);
}

export default JsonParser;
