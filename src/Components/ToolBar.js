import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import moment from 'moment';
import Clock from 'react-live-clock';

const ResponsiveAppBar = () => {

var formatter= 'YYYY-MM-DD';
var date = new Date();
var time = moment(date).format(formatter);

  return (
    <AppBar  style={{ background: '#EB7500' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dronet
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr:3,
              flexGrow: 1,
              marginRight:0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'flex-end',
              display:"flex"
            }}
          >{time}
          <div style={{marginLeft:20}}>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Israel'} />
          </div>
            
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
