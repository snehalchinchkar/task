import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core"
  import Carousel from 'react-material-ui-carousel'
  import { Paper, Button } from '@material-ui/core'

  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    size:{marginLeft:"100px",color:"orange"},
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));

const Nav = () => {
    const classes = useStyles();

   

    return (
        <div>
        <AppBar position="static">
        <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Logo
        </Typography>
          <div className={classes.navlinks}>
          <Typography >Offers</Typography>
          <Typography className={classes.size}>Become A Professional</Typography>
            <a href='###' className={classes.link}>sign In/login</a>
          </div>
      </Toolbar>
    </AppBar>
            
 

    
        </div>
    )
}


export default Nav
