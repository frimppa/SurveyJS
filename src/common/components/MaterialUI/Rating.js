import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Paper from '@mui/material/Paper';
import MuiGrid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TestSurvey from "../TestSurvey.json";
import Button from '@mui/material/Button';
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
//import JsonParser from "../Helpers/JsonParser";

export default function BasicRating() {
  const [value, setValue] = React.useState({
    "group1":{
      "arvostelu0": 4
    }
  });
  const [count, setCount] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);


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

  const handleClick = () => {
    console.log("öajdöajsd")
  }

  const GetData = () => {
    return(
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      {completed ? <h1>Kiitos vastaamisesta!</h1> :
      <div style={{ marginLeft: "10%" }}>
        <h1>{TestSurvey.title}</h1>
        <h3>{TestSurvey.description}</h3>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "55px" }}
      >
        {TestSurvey.pages.map((item, pageIndex) => (
          
          <div style={{display: "flex", flexDirection: "column"}}>
            {pageIndex === count ?
            <div>
            {item.groups.map((groupItem, index) => (
              <Paper style={{padding: "5%", marginTop: "5%"}}>
                  <h2>{groupItem.title}</h2>
                  <List sx={style} component="nav" aria-label="mailbox folders">
                    {groupItem.questions.map((questionItem, questionIndex) => (
                      <div>
                        <ListItem
                        button
                        style={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Grid container style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Grid item xs>
                            <Typography component="legend">
                              {questionItem.title}
                            </Typography>
                          </Grid>
                          <Divider orientation="vertical" flexItem>
                          </Divider>
                          <Grid item xs>
                            <div
                              style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
                            >
                              <h4 style={{width:"20%"}}>{questionItem.minRateDescription}</h4>
                              <Rating
                                name={`arvostelu${questionIndex}`}
                                //value={typeof(value[groupItem.groupID][`arvostelu${questionIndex}`]) !== undefined ? value[groupItem.groupID][`arvostelu${questionIndex}`] : 0 }
                                value={(groupItem.groupID in value) ? value[groupItem.groupID][`arvostelu${questionIndex}`] : 0 }
                                //alue={value[groupItem.groupID].ok !== undefined ? value[groupItem.groupID] : 0 }
                                onChange={(event, newValue) => {
                                  //console.log("TÄSSÄ", typeof(value[groupItem.groupID].hasOwnProperty([`arvostelu${questionIndex}`])))
                                  groupItem.groupID in value ? console.log("löytyy") : console.log("ei löydy")
                                  console.log(value.group1.arvostelu0)
                                  let groupData = {}
                                  if(value[groupItem.groupID]){
                                    groupData = value[groupItem.groupID]
                                  }
                                                                      
                                  groupData[`arvostelu${questionIndex}`] = newValue;
                                  console.log("groupData", groupData)
                                  setValue(prevState => ({ ...prevState, [groupItem.groupID] : groupData}))
                                  //setValue(prevState =>({ ...prevState, [value[groupItem.groupID][`arvostelu${questionIndex}`]]: newValue}));
                                }}
                                size="extra-large"
                              />
                              <h4 style={{width:"20%"}}>{questionItem.maxRateDescription}</h4>
                            </div>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <Divider/>
                    </div>
                    ))}
                  </List>
              </Paper>
            ))}
             {TestSurvey.pages.length > 1 ?
            <div style={{display: "flex", justifyContent: count > 0 ? "space-between" : "flex-end", marginBottom: "5%"}}>
              {count > 0 ?
            <Button variant="contained" style={{marginTop: "5%"}} onClick={() => setCount(count - 1)}>Edellinen</Button> : null}
            {count+1 !== TestSurvey.pages.length ?
            <Button variant="contained" style={{marginTop: "5%"}} onClick={() => setCount(count + 1)}>Seuraava</Button>  : null}   
            {count+1 === TestSurvey.pages.length ?
            <Button variant="contained" style={{marginTop: "5%"}} onClick={() => setCount(setCompleted(true))}>Valmis</Button> : null}      
            </div> : null}
            </div>
          : null}
          </div>
        ))}
      </div>
      </div>
  }
      </div>
    )
  }

  return (
    <div>
      <GetData/>
    </div>
  );
}
