import React from 'react';
import { Container,Grid } from '@mui/material';
import Buttons from './components/Buttons';


function Containr() {
  return (
    <Container maxWidth="sm">
      <h1> This is our Material ui Page </h1>
      <Grid container spacing={2} >
        <Grid item>
            <Buttons />
        </Grid>
      </Grid>
      
    </Container>
  );
}

export default Containr;
