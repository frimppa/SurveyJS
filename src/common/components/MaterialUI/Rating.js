import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MuiGrid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
//import TestSurvey from "../TestSurvey.json";
//import TestSurvey from "../BackendMock.json";
import Button from "@mui/material/Button";
import Circle from "@mui/icons-material/Circle";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import axios from "axios";
//import JsonParser from "../Helpers/JsonParser";

export default function BasicRating() {
  const [value, setValue] = React.useState({
    group1: {
      arvostelu0: 4,
    },
  });
  const [count, setCount] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const [TestSurvey, setTestSurvey] = React.useState({ data: {} });

  const getDataFromBackend = () => {
    console.log("PAINETTIIN");
    axios.get("http://localhost:8080/get/test/").then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

React.useEffect(() => {
    console.log("Mounted....")
    const fetchData = async () => {
      const res = await fetch(
        'http://localhost:8080/get/test/',
      );
      const json = await res.json();
      /*console.log("objekti: ", json.data.pages)
      Object.values(json.data.pages).map(item => {
        console.log("ITEM: ", item)
      })*/
      setTestSurvey(json);
    };
    fetchData();
  }, [setTestSurvey]);

  const style = {
    width: "100%",
    maxWidth: "100%",
    bgcolor: "background.paper",
  };
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));

  const StyledRating = styled(Rating)({
    /* '& .MuiRating-iconFilled': {
      color: '#201751',
    },
    '& .MuiRating-iconHover': {
      color: '#201751',
    },*/
  });

  const handleClick = () => {
    console.log("öajdöajsd");
  };

  const GetData = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {completed ? (
          <h1>Kiitos vastaamisesta!</h1>
        ) : (
          <div style={{ marginLeft: "10%", width:"100vh" }}>
            <h1>{TestSurvey.survey_title}</h1>
            <h3>{TestSurvey.form_title}</h3>
            <div
              style={{
                //display: "flex",
                justifyContent: "center",
                marginTop: "55px",
              }}
            >
              {
                console.log("sen pituus on: ", Object.values(TestSurvey.data.pages).length)
              }
              

              {Object.values(TestSurvey.data.pages).length > 1 ? (
                Object.values(TestSurvey.data.pages).map((item, pageIndex) => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {pageIndex === count ? (
                    <div>
                      {Object.values(item.groups).map((groupItem, index) => (
                        <Paper style={{ padding: "5%", marginTop: "5%" }}>
                          <h2>Group Title</h2>
                          <List
                            sx={style}
                            component="nav"
                            aria-label="mailbox folders"
                          >
                            <div>
                              {Object.values(groupItem).map((groupItem2)=>
                              <ListItem
                                button
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Grid
                                  container
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <Grid item xs>
                                    <Typography component="legend">
                                      {groupItem2.title}
                                    </Typography>
                                  </Grid>
                                  <Divider
                                    orientation="vertical"
                                    flexItem
                                  ></Divider>
                                  <Grid item xs>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        alignItems: "center",
                                      }}
                                    >
                                      <h4 style={{ width: "20%" }}>
                                        {groupItem2.scale_min_title}
                                      </h4>
                                      <StyledRating
                                        icon={<Circle fontSize="inherit" />}
                                        emptyIcon={
                                          <CircleOutlined fontSize="inherit" />
                                        }
                                        name={`arvostelu${groupItem2.question}`}
                                        //value={typeof(value[groupItem.groupID][`arvostelu${questionIndex}`]) !== undefined ? value[groupItem.groupID][`arvostelu${questionIndex}`] : 0 }
                                        value={
                                          groupItem2.question in value
                                            ? value[groupItem2.question][
                                                `arvostelu${groupItem2.question}`
                                              ]
                                            : 0
                                        }
                                        //alue={value[groupItem.groupID].ok !== undefined ? value[groupItem.groupID] : 0 }
                                        onChange={(event, newValue) => {
                                          //console.log("TÄSSÄ", typeof(value[groupItem.groupID].hasOwnProperty([`arvostelu${questionIndex}`])))
                                          groupItem2.question in value
                                            ? console.log("löytyy")
                                            : console.log("ei löydy");
                                          //console.log(value.group1.arvostelu0)
                                          let groupData = {};
                                          if (value[groupItem2.question]) {
                                            groupData =
                                              value[groupItem2.question];
                                          }

                                          groupData[`arvostelu${groupItem2.question}`] =
                                            newValue;
                                          console.log("groupData", groupData);
                                          setValue((prevState) => ({
                                            ...prevState,
                                            [groupItem2.question]: groupData,
                                          }));
                                          //setValue(prevState =>({ ...prevState, [value[groupItem.groupID][`arvostelu${questionIndex}`]]: newValue}));
                                        }}
                                        size="extra-large"
                                      />
                                      <h4 style={{ width: "20%" }}>
                                        {groupItem2.scale_max_title}
                                      </h4>
                                    </div>
                                  </Grid>
                                </Grid>
                              </ListItem>)}
                              <Divider />
                            </div>
                          </List>
                        </Paper>
                      ))}
                      {Object.keys(TestSurvey.data.pages).length > 1 ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent:
                              count > 0 ? "space-between" : "flex-end",
                            marginBottom: "5%",
                          }}
                        >
                          {count > 0 ? (
                            <Button
                              variant="contained"
                              style={{ marginTop: "5%" }}
                              onClick={() => {
                                window.scrollTo(0, 0);
                                getDataFromBackend();
                                setCount(count - 1);
                              }}
                            >
                              Edellinen
                            </Button>
                          ) : null}
                          {count + 1 !== Object.keys(TestSurvey.data.pages).length ? (
                            <Button
                              variant="contained"
                              style={{ marginTop: "5%" }}
                              onClick={() => {
                                window.scrollTo(0, 0);
                                getDataFromBackend();
                                setCount(count + 1);
                              }}
                            >
                              Seuraava
                            </Button>
                          ) : null}
                          {count + 1 === Object.keys(TestSurvey.data.pages).length ? (
                            <Button
                              variant="contained"
                              style={{ marginTop: "5%" }}
                              onClick={() => {
                                window.scrollTo(0, 0);

                                setCount(setCompleted(true));
                              }}
                            >
                              Valmis
                            </Button>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ))) : null}
              
            </div>
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
