import React from "react";
import StandardForm from "../common/components/SurveyJS/StandardForm";
import AdvancedForm from "../common/components/SurveyJS/AdvancedForm";
import CustomRadioForm from "../common/components/SurveyJS/CustomRadioForm";
import ButtonAppBar from "../common/components/MaterialUI/components/AppBar";
import BasicRating from "../common/components/MaterialUI/components/Rating";

const Main = (props) => (
  <div>
    <ButtonAppBar />
    {/*<CustomRadioForm />*/}
    <BasicRating/>
  </div>
);

export default Main;
