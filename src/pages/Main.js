import React from "react";
import StandardForm from "../common/components/SurveyJS/StandardForm";
import AdvancedForm from "../common/components/SurveyJS/AdvancedForm";
import CustomRadioForm from "../common/components/SurveyJS/CustomRadioForm";
import ButtonAppBar from "../common/components/MaterialUI/AppBar";

const Main = (props) => (
  <div>
    <ButtonAppBar />
    <CustomRadioForm />
  </div>
);

export default Main;
