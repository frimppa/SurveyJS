import * as React from "react";
import { useEffect, useState } from "react";
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
import useFetchData from "../hooks/FetchApi";
import SendData from "../hooks/SendData";
import Alert from "@mui/material/Alert";
//import JsonParser from "../Helpers/JsonParser";

export default function BasicRating() {
  const [value, setValue] = useState({
    group1: {
      arvostelu0: 4,
    },
  });
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  //const [completed, setCompleted] = React.useState(false);
  //const [TestSurvey, setTestSurvey] = React.useStateF({});
  const { TestSurvey, loading } = useFetchData();

  const getDataFromBackend = () => {
    console.log("PAINETTIIN");
    axios.get("http://localhost:8080/get/test/").then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

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

  const sendData = async () => {
    //const sendArr = [];
    const sendArr = Object.keys(value).map((item) => {
      return {qid: item, ans: value[item]}
    })
    try {
      console.log("sendData launched...");
      //await axios.post('http://localhost:4000/get/test/', TestSurvey);
      console.log("Send Packet contains: ", sendArr);
    } catch (error) {
      console.error(error);
    }
    setCompleted(true);
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
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            {completed ? (
              <h1>Kiitos vastaamisesta!</h1>
            ) : (
              <div style={{ marginLeft: "10%", width: "100vh" }}>
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
                    console.log("sen pituus on: ", TestSurvey.data.pages)
                    //console.log("sen pituus on: ", TestSurvey.data)
                  }

                  {Object.values(TestSurvey.data.pages).length > 1
                    ? Object.values(TestSurvey.data.pages).map(
                        (item, pageIndex) => (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {pageIndex === count ? (
                              <div>
                                {Object.values(item.groups).map(
                                  (groupItem, index) => (
                                    <Paper
                                      style={{ padding: "5%", marginTop: "5%" }}
                                    >
                                      <h2>Group Title</h2>
                                      <List
                                        sx={style}
                                        component="nav"
                                        aria-label="mailbox folders"
                                      >
                                        <div>
                                          {Object.values(groupItem).map(
                                            (groupItem2) => (
                                              <div>

                                        

                                              
                                                <ListItem
                                                  button
                                                  style={{
                                                    display: "flex",
                                                    justifyContent:
                                                      "space-between",
                                                      //border: "1px solid red"
                                                  }}
                                                >
                                                  <Grid
                                                    container
                                                    style={{
                                                      display: "flex",
                                                      justifyContent:
                                                        "space-between",
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
                                                          justifyContent:
                                                            "space-evenly",
                                                          alignItems: "center",
                                                        }}
                                                      >
                                                        <h4
                                                          style={{
                                                            width: "20%",
                                                          }}
                                                        >
                                                          {
                                                            groupItem2.scale_min_title
                                                          }
                                                        </h4>
                                                        <StyledRating
                                                          icon={
                                                            <Circle fontSize="inherit" />
                                                          }
                                                          emptyIcon={
                                                            <CircleOutlined fontSize="inherit" />
                                                          }
                                                          name={`qid${groupItem2.question}`}
                                                          value={
                                                            groupItem2.question in
                                                            value
                                                              ? value[groupItem2.question]
                                                              : 0
                                                          }
                                                          onChange={(
                                                            event,
                                                            newValue
                                                          ) => {
                                                            groupItem2.question in
                                                            value
                                                              ? console.log(
                                                                  "löytyy"
                                                                )
                                                              : console.log(
                                                                  "ei löydy"
                                                                );
                                                            let groupData = null;
                                                            if (
                                                              value[
                                                                groupItem2
                                                                  .question
                                                              ]
                                                            ) {
                                                              groupData =
                                                                value[
                                                                  groupItem2
                                                                    .question
                                                                ];
                                                            }

                                                            groupData = newValue;
                                                            console.log(
                                                              "groupData",
                                                              groupData
                                                            );
                                                            setValue(
                                                              (prevState) => ({
                                                                ...prevState,
                                                                [groupItem2.question]:
                                                                  groupData,
                                                              })
                                                            );
                                                          }}
                                                          size="extra-large"
                                                        />
                                                        <h4
                                                          style={{
                                                            width: "20%",
                                                          }}
                                                        >
                                                          {
                                                            groupItem2.scale_max_title
                                                          }
                                                        </h4>
                                                      </div>
                                                    </Grid>
                                                  </Grid>
                                                </ListItem>
                                        
                                              </div>
                                            )
                                          )}
                                          <Divider />
                                        </div>
                                      </List>
                                    </Paper>
                                  )
                                )}
                                {Object.keys(TestSurvey.data.pages).length >
                                1 ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent:
                                        count > 0
                                          ? "space-between"
                                          : "flex-end",
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
                                    {count + 1 !==
                                    Object.keys(TestSurvey.data.pages)
                                      .length ? (
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
                                    {count + 1 ===
                                    Object.keys(TestSurvey.data.pages)
                                      .length ? (
                                      <Button
                                        variant="contained"
                                        style={{ marginTop: "5%" }}
                                        onClick={() => {
                                          window.scrollTo(0, 0);
                                          sendData();
                                          //setCount(setCompleted(true));
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
                        )
                      )
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
