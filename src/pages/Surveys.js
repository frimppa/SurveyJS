import React from "react";
import StandardForm from "../common/components/SurveyJS/StandardForm";
import AdvancedForm from "../common/components/SurveyJS/AdvancedForm";
import CustomRadioForm from "../common/components/SurveyJS/CustomRadioForm";
import ButtonAppBar from "../common/components/MaterialUI/AppBar";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import "../App.css";
import App from "../App";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NewReviewSurvey from "../common/components/MaterialUI/NewReviewSurvey";

const Survey = (props) => {
  const [open, setOpen] = React.useState(false);

  const [value, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return(
  <div>
    <ButtonAppBar />
    <div className="addButton">
    <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
      <AddIcon />
    </Fab>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Lisää uusi lomake</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Valitse haluamasi pohja lomakkeelle
          </DialogContentText>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Arvostelu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Arvostelu"
          onChange={handleChange}
        >
          <MenuItem value={10}>Radiopainikkeet</MenuItem>
          <MenuItem value={20}>Arvostelu</MenuItem>
          <MenuItem value={30}>Jotain muuta</MenuItem>
        </Select>
      </FormControl>
      <NewReviewSurvey/>
    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Peruuta</Button>
          <Button onClick={handleClose}>Hyväksy</Button>
        </DialogActions>
      </Dialog>
    </div>
    

    <div className="flexContainer">
      <div className="flexCenter">
        <h1>
          Here will be the list of all surveys templates and a search function
        </h1>
      </div>
    </div>
  </div>
);
}
export default Survey;
