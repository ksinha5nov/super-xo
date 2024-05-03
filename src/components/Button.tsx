import React from 'react'
import { Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';

interface ButtonProps{
    name: string;
}

const Buttons = ({name}: ButtonProps) => {
  return (
    <div>
        <Button variant="contained" color= "secondary">
            <Box
                sx={{
                    display: 'flex',
                    border: '1px solid grey', 
                    fontWeight: 'Bold',
                    fontFamily: 'serif', 
                    height: 40,
                    width: 200,
                    color: "success",
                    fontSize: 20,
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    '&:hover': {
                        color: "error",
                        transform: "scale3d(1.15, 1.15, 1)", 
                        transition: "transform 0.2s ease-in-out"
                    }
                }}
            >
                {name}

            </Box>
        </Button>
    </div>
  )
}

export default Buttons