import { useState } from 'react';
import axios from 'axios';
import BasicRating from '../common/components/MaterialUI/components/Rating';

const SendData = () => {
  //const [TestSurvey, setTestSurvey] = useState({});
  const [completed, setCompleted] = useState(false);

  const { TestSurvey, } = BasicRating();
  
const sendData = async () => {
      try {
          console.log("sendData launched...")
        await axios.post('http://localhost:4000/get/test/', TestSurvey);
      } catch (error) {
        console.error(error)
      }
      setCompleted(true);
    };
sendData();

  return {
    completed
  };
};

export default SendData;