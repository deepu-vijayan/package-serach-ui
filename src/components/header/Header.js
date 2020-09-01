import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
function Header() {
   const title ="Bundle Phobia"
      
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
export default Header;