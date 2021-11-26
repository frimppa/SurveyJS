import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const NewReviewSurvey = (props) => {
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

    const ariaLabel = { 'aria-label': 'description' };
    
    return(
    <div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="Hello world" inputProps={ariaLabel} />
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
      <Input defaultValue="Error" error inputProps={ariaLabel} />
    </Box>
    </div>
  );
  }
  export default NewReviewSurvey;
  