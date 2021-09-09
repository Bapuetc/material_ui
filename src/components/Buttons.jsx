import React from 'react'
import {Button} from '@mui/material';
const Buttons = () => {
    return (
        <div>
            <Button>Default</Button>
            <Button variant="outlined" color="secondary" >outlined</Button>
            <Button variant="contained" color="primary" >Contained</Button>
        </div>
    )
}

export default Buttons
