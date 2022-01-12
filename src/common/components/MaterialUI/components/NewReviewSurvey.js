import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const NewReviewSurvey = () => {
  const [open, setOpen] = React.useState(false);

  const [value, setAge] = React.useState('');
  const ariaLabel = { 'aria-label': 'description' };
  const [arvosteluTaulu, setArvostelutaulu] = React.useState([
    <div key="arvosteluDiv">
      <p>
        <Input placeholder="Otsikko" inputProps={ariaLabel} />
      </p>
      <Input placeholder="Täysin eri mieltä" inputProps={ariaLabel} />
      <Input placeholder="Täysin samaa mieltä" inputProps={ariaLabel} />
      <br />
      <br />
      <TextField
        id="outlined-number"
        label="Pienin arvo"
        defaultValue={1}
        type="number"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="outlined-number"
        label="Suurin arvo"
        type="number"
        defaultValue={5}
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  ]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*const arvosteluTaulu = [
    <div>
      <p><Input placeholder="Otsikko" inputProps={ariaLabel} /></p>
      <Input placeholder="Täysin eri mieltä" inputProps={ariaLabel} />
      <Input placeholder="Täysin samaa mieltä" inputProps={ariaLabel} />
      <br/>
      <br/>
      <TextField
        id="outlined-number"
        label="Pienin arvo"
        defaultValue={1}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Suurin arvo"
        type="number"
        defaultValue={5}
        InputLabelProps={{
          shrink: true,
        }}/>
    </div>
  ]*/

  const addInArvostelutaulu = () => {
    console.log('pressed');
    const ArvostelutauluValue = [...arvosteluTaulu];
    ArvostelutauluValue.push(
      <div>
        <p>
          <Input placeholder="Otsikko" inputProps={ariaLabel} />
        </p>
        <Input placeholder="Täysin eri mieltä" inputProps={ariaLabel} />
        <Input placeholder="Täysin samaa mieltä" inputProps={ariaLabel} />
        <br />
        <br />
        <TextField
          id="outlined-number"
          label="Pienin arvo"
          defaultValue={1}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="outlined-number"
          label="Suurin arvo"
          type="number"
          defaultValue={5}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    );
    setArvostelutaulu(ArvostelutauluValue);
    console.log('arvostelutauluValue on ', arvosteluTaulu);
  };

  /*const Question = () => {

    return(
      <div>
        {arvosteluTaulu}
      </div>
    )
  }*/

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }
        }}
        noValidate
        autoComplete="off">
        <p>
          <Input placeholder="Lomakkeen nimi" inputProps={ariaLabel} />
        </p>
        <TextField
          id="outlined-number"
          label="Sivumäärä"
          defaultValue={1}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Divider variant="middle" />
        <p>
          <Input placeholder="Kysymysryhmä" inputProps={ariaLabel} />
        </p>
        <br />
        {arvosteluTaulu}
        <Fab color="primary" aria-label="add" onClick={addInArvostelutaulu}>
          <AddIcon />
        </Fab>
      </Box>
    </div>
  );
};
export default NewReviewSurvey;
