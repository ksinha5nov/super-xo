import React from 'react'
import { Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';

interface ButtonProps {
    name: string;
}

const Buttons = ({ name }: ButtonProps) => {
    return (
        <div className='hover:'>
            <Button variant="contained" color="secondary" 
                sx={{
                    display: 'flex',
                    border: '1px solid grey', 
                    fontWeight: 'normal',
                    fontFamily: 'Bangers', 
                    height: 40,
                    width: 200,
                    // color: "success",
                    backgroundColor:"success",
                    fontSize: 20,
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    '&:hover': {
                        // color: "error",
                        backgroundColor:"error",
                        transform: "scale3d(1.15, 1.15, 1)", 
                        transition: "transform 0.2s ease-in-out"
                    }
                }}>
                {name}

                {/* </Box> */}
            </Button>
        </div>
    )
}

export default Buttons