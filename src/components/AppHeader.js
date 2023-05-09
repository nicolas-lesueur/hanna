import React, {useState, useEffect, useContext} from "react";
import './AppHeader.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Select from '@mui/material/Select';
import AppDrawer from './AppDrawer';

import {UserContext} from '../context/UserContext';

import { Link } from 'react-router-dom';


export default function AppHeader(props) {

  const userContext = useContext(UserContext);

  const [drawerOpened, setDrawerOpened] = useState(false);

  //using this instead of react-device-detect to get responsive design on resize
  //should consider to have in a config-file a breakpoint set like [small-mobile, large-mobile, tablette, desktop, large-screen] but this is just a demo, so we simplify by mobile or desktop
  const [deviceSize, setDeviceSize] = useState('desktop');
  const BREAKPOINT_MOBILE = 600;

  // pages configuration
  var pages = [
    {
      id:1,
      name:'Portfolio', 
      icon: null,
      badge: null,
      deviceDisplayOnAppBar:['desktop'],
      deviceDispayOnDrawer:true,
      onClick:()=>{},
      link:'/portfolio'
    },
    {
      id:2,
      name:'Faq',
      icon: null,
      badge: null,
      deviceDisplayOnAppBar:['desktop'],
      deviceDispayOnDrawer:true,
      onClick:()=>{},
      link:'/faq'
    },
    {
      id:3,
      name: 'Messages',
      icon: 
        <Badge 
          invisible={userContext.messages < 1}
          badgeContent={userContext.messages} 
          color="error"
        >
          <MailIcon />
        </Badge>
      ,
      deviceDisplayOnAppBar:['desktop'],
      deviceDispayOnDrawer:true,
      onClick:()=>{userContext.setMessages(0)}, 
      link:'/mails'     
    },
    {
      id:4,
      name:'Notifications',
      icon: 
        <Badge
          invisible={userContext.notifications < 1} 
          badgeContent={userContext.notifications} 
          color="error"
        >
          <NotificationsIcon />
        </Badge>
      ,
      deviceDisplayOnAppBar:['desktop'],
      deviceDispayOnDrawer:true,
      onClick:()=>{userContext.setNotifications(0)}, 
      link:'/notifications'      
    },
    {
      id:5,
      name:'Mon Compte',
      icon: 
        <Badge 
          invisible={!userContext.isConnected} 
          className='pastille-connexion' 
          badgeContent={''}>
          <AccountCircle />
        </Badge>
      ,
      deviceDisplayOnAppBar:['mobile','desktop'],
      deviceDispayOnDrawer:false,
      onClick:()=>{},  
      link:'/account'    
    }
  ];

  useEffect(
    () => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }
    ,[]
  );

  //handle resize window event
  const handleResize = (e) => {
    let size = window.innerWidth;
    if (size < BREAKPOINT_MOBILE) { 
      setDeviceSize('mobile');
    }
    else{
      setDeviceSize('desktop');
    }
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id='app-bar' position="static">
        <Toolbar>
          <nav style={{display:'flex',width:'100%'}}>         
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: (deviceSize === 'mobile')?'flex':'none', mr:2}}
              onClick={()=> {setDrawerOpened(true);}}
            >
              <MenuIcon/>
            </IconButton>
            <Box sx={{ display:(deviceSize === 'mobile')?'flex':'none', flexGrow: 1 }} />
            <Link to='/'>            
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <img className='app-bar__logo' height={40} width='auto' src={process.env.REACT_APP_HOST + '/hannah-logo.png'} alt='logo-hanna'/>
              </IconButton>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display:'flex'}}>

              {
                pages.filter(el => el.deviceDisplayOnAppBar.includes(deviceSize)).map((page) => {

                  if (page.icon){
                    return (
                      <Link key={page.id} to={page.link} style={{display:'flex', justifyContent:'center'}}>
                      <IconButton                         
                        size="large" 
                        aria-label={page.name} 
                        color="inherit"
                        onClick={page.onClick}
                      >
                          {page.icon}
                      </IconButton>      
                      </Link>
                    );
                  }
                  else{
                    return (
                        <Link key={page.id} to={page.link} style={{display:'flex', justifyContent:'center'}}>                      
                          <MenuItem  onClick={page.onClick}>
                              <Typography textAlign="center">{page.name}</Typography>
                          </MenuItem>
                        </Link>
                    );  
                  }
                })
              }
              
              <Select
                id="app-bar__language-selector"
                value={userContext.language}
                onChange={(event)=>{userContext.setLanguage(event.target.value)}}
                autoWidth
                sx= {{
                  display: (deviceSize === 'mobile')?'none':'flex',
                  minWidth:'64px',
                  color:"white",
                  '.MuiOutlinedInput-notchedOutline': {display:'none'},
                  '.MuiSvgIcon-root ': {
                    fill: "white !important",
                  }
                }}
              >
                <MenuItem value={'fr'}>fr</MenuItem>
                <MenuItem value={'en'}>en</MenuItem>
              </Select>

            </Box>     
          </nav>     
        </Toolbar>
      </AppBar>
      <AppDrawer
        pages={pages}
        language={userContext.language}
        drawerOpened={drawerOpened}
        setDrawerOpened={setDrawerOpened}
      />

    </Box>
  );

}
