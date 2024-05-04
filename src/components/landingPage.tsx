import React, { useState } from 'react';
import Buttons from './Button';
import { Box, Modal, Stack, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const LandingPage = () => {
  const containerStyle = {
    //display: 'flex',
    Margin: '0px',
    flexDirection: 'column',
    height: '90vh',
    width: '100%',  // Ensure the container takes up 100% of the viewport width
    color: 'white', 
    backgroundSize: 'cover'
  };

  const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '5px solid black',  // Adds a white border at the bottom
    width: '100%',
    background: 'black'  // Ensure the nav bar takes up 100% of the width
  };

  const mainStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    alignItems: 'center',
    justifyItems: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '20px',
    cursor: 'pointer',
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    color: 'black',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    alignItems: 'center'
  };

    const types_of_buttons = ["Super-XO", "Tic-Tac-Toe"]

  return (
    <div>
      <div style={{fontFamily: 'serif', fontSize: '36px', fontWeight: 'bold', textAlign: 'center', color: 'black', background: 'pink'}}>
        <h1>Super-XO!</h1>
      </div>
      <div>

      </div>
      <div style={{margin: '3.5in', alignContent: 'center', marginTop: "4in"}}>
        <Stack direction= 'row' spacing= '4in' alignItems= 'center'>
            {types_of_buttons.map((types, index) => (
                <Buttons name = {types} />
            ))}
        </Stack>
      </div>
    </div>
  );
};

export default LandingPage;
