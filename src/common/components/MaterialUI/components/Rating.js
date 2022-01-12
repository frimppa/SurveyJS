import * as React from 'react';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MuiGrid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
//import TestSurvey from "../BackendMock.json";
import Button from '@mui/material/Button';
import Circle from '@mui/icons-material/Circle';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import axios from 'axios';
import useFetchData from '../../../../api/FetchApi';
//import JsonParser from "../Helpers/JsonParser";

export default function BasicRating() {
  const [value, setValue] = useState({});
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { TestSurvey, loading } = useFetchData();

  const getDataFromBackend = () => {
    axios.get('http://localhost:8080/get/test/').then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const style = {
    width: '100%',
    maxWidth: '100%',
    bgcolor: 'background.paper'
  };
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2)
    }
  }));

  const StyledRating = styled(Rating)({
    /* '& .MuiRating-iconFilled': {
      color: '#201751',
    },
    '& .MuiRating-iconHover': {
      color: '#201751',
    },*/
  });
  const sendData = async () => {
    const sendArr = Object.keys(value).map((item) => {
      return { qid: item, ans: value[item] };
    });
    try {
      const sendPacket = JSON.stringify({ data: sendArr });
      let bodyFormData = new FormData();
      //bodyFormData.append('data', JSON.stringify({'data':[{'qid':2,'ans':'jejeje'},{'qid':3,'ans':'ojojojoj'}]}).replace(/"/g, "'"))
      bodyFormData.append('data', sendPacket.replace(/"/g, "'"));

      await axios({
        method: 'post',
        url: 'http://localhost:8080/post/answer/',
        //url: 'http://localhost:4000/surveyData/',
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'text'
      });
      //await axios.post('http://localhost:4000/surveyData/', {jep: "joo"});
      //await axios.post('http://localhost:4000/surveyData/', { data: [ {qid : 1, ans: "vastaus1"}, {qid : 5, ans: "vastaus2"} ] });
    } catch (error) {
      console.error('error while sending data... ', error);
    }
    setCompleted(true);
  };

  const GetData = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            {completed ? (
              <h1 style={{ marginTop: '500px' }}>Kiitos vastaamisesta!</h1>
            ) : (
              <div style={{ width: '100vh' }}>
                <h1>{TestSurvey[0].survey_title}</h1>
                <h3>{TestSurvey[0].form_title}</h3>
                <div
                  style={{
                    //display: "flex",
                    justifyContent: 'center',
                    marginTop: '55px'
                  }}>
                  {TestSurvey.length > 0
                    ? Object.values(TestSurvey[0].data.pages).map((item, pageIndex) => (
                        <div style={{ display: 'flex', flexDirection: 'column' }} key={`pageDiv${pageIndex}`}>
                          {pageIndex === count ? (
                            <div>
                              {Object.values(item.groups).map((groupItem, groupItemIndex) => (
                                <Paper style={{ padding: '5%', marginTop: '5%' }} key={`paper${groupItemIndex}`}>
                                  <h2>Group Title</h2>
                                  <List sx={style} component="nav" aria-label="mailbox folders">
                                    <div>
                                      {Object.values(groupItem).map((groupItem2, groupItem2Index) => (
                                        <div key={`groupItem2Div${groupItem2Index}`}>
                                          <ListItem
                                            button
                                            style={{
                                              display: 'flex',
                                              justifyContent: 'space-between'
                                              //border: "1px solid red"
                                            }}>
                                            <Grid
                                              container
                                              style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                              }}>
                                              <Grid item xs>
                                                <Typography component="legend">
                                                  {groupItem2.title}
                                                </Typography>
                                              </Grid>
                                              <Divider orientation="vertical" flexItem></Divider>
                                              <Grid item xs>
                                                <div
                                                  style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-evenly',
                                                    alignItems: 'center'
                                                  }}>
                                                  <h4
                                                    style={{
                                                      width: '20%'
                                                    }}>
                                                    {groupItem2.scale_min_title}
                                                  </h4>
                                                  <StyledRating
                                                    icon={<Circle fontSize="inherit" />}
                                                    emptyIcon={
                                                      <CircleOutlined fontSize="inherit" />
                                                    }
                                                    name={`qid${groupItem2.question}`}
                                                    value={
                                                      groupItem2.question in value
                                                        ? value[groupItem2.question]
                                                        : 0
                                                    }
                                                    onChange={(event, newValue) => {
                                                      groupItem2.question in value
                                                        ? console.log('löytyy')
                                                        : console.log('ei löydy');
                                                      let groupData = null;
                                                      if (value[groupItem2.question]) {
                                                        groupData = value[groupItem2.question];
                                                      }

                                                      groupData = newValue;
                                                      console.log('groupData', groupData);
                                                      setValue((prevState) => ({
                                                        ...prevState,
                                                        [groupItem2.question]: groupData
                                                      }));
                                                    }}
                                                    size="extra-large"
                                                  />
                                                  <h4
                                                    style={{
                                                      width: '20%'
                                                    }}>
                                                    {groupItem2.scale_max_title}
                                                  </h4>
                                                </div>
                                              </Grid>
                                            </Grid>
                                          </ListItem>
                                        </div>
                                      ))}
                                      <Divider />
                                    </div>
                                  </List>
                                </Paper>
                              ))}
                              {TestSurvey.length > 0 ? (
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: count > 0 ? 'space-between' : 'flex-end',
                                    marginBottom: '5%'
                                  }}>
                                  {count > 0 ? (
                                    <Button
                                      variant="contained"
                                      style={{ marginTop: '5%' }}
                                      onClick={() => {
                                        window.scrollTo(0, 0);
                                        getDataFromBackend();
                                        setCount(count - 1);
                                      }}>
                                      Edellinen
                                    </Button>
                                  ) : null}
                                  {count + 1 !== Object.keys(TestSurvey[0].data.pages).length ? (
                                    <Button
                                      variant="contained"
                                      style={{ marginTop: '5%' }}
                                      onClick={() => {
                                        window.scrollTo(0, 0);
                                        getDataFromBackend();
                                        setCount(count + 1);
                                      }}>
                                      Seuraava
                                    </Button>
                                  ) : null}
                                  {count + 1 === Object.keys(TestSurvey[0].data.pages).length ? (
                                    <Button
                                      variant="contained"
                                      style={{ marginTop: '5%' }}
                                      onClick={() => {
                                        window.scrollTo(0, 0);
                                        sendData();
                                        //setCount(setCompleted(true));
                                      }}>
                                      Valmis
                                    </Button>
                                  ) : null}
                                </div>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      ))
                    : null}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <GetData />
    </div>
  );
}
