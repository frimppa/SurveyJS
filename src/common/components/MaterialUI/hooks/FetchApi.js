// use-fetch-data.js
import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [TestSurvey, setTestSurvey] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
          console.log("hook launched...")
        const { data: response } = await axios.get('http://localhost:8080/get/test/');
        setTestSurvey(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    TestSurvey,
    loading,
  };
};

export default useFetchData;