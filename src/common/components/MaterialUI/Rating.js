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
//import JsonParser from "../Helpers/JsonParser";

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
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

  const GetData = () => {

    return(
      <div style={{ marginLeft: "10%" }}>
        <h1>{TestSurvey.title}</h1>
        <h3>{TestSurvey.description}</h3>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "55px" }}
      >
        {TestSurvey.pages.map((item, index) => (
          <div>
            {item.groups.map((groupItem, index) => (
              <Paper style={{padding: "5%"}}>
                  <h2>{groupItem.title}</h2>
                  <List sx={style} component="nav" aria-label="mailbox folders">
                    {groupItem.questions.map((questionItem, index) => (
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
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                  setValue(newValue);
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
          </div>
        ))}

      </div>
      </div>
    )

  }


  return (
    <div>
      <GetData/>
    </div>
  );
}
