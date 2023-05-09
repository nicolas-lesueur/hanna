import React from "react";
import './AppDrawer.scss';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';

export default function AppDrawer(props) {

  return (
    <Drawer
      anchor={'left'}
      open={props.drawerOpened}
      onClose={() => {props.setDrawerOpened(false);}}
    >
      <Box className='drawer-menu' role="presentation" >
      <List className='drawer-menu__list'> 
          <nav className='drawer-menu__list-pages'>   
            {
              props.pages.filter(el => el.deviceDispayOnDrawer).map((page) => {
                return (
                  <div key={page.id}>
                    <Link to={page.link}>
                      <ListItem                       
                        disablePadding
                        onClick={()=>{props.setDrawerOpened(false);page.onClick();}}
                        onKeyDown={() => {props.setDrawerOpened(false);page.onClick();}}
                      >
                        <ListItemButton>
                          <IconButton className="drawer-menu__icon" disableRipple size="large" aria-label="show 4 new mails" color="inherit">
                            {page.icon}
                          </IconButton>
                          <ListItemText style={{padding:'0 8px'}} primary={page.name} />
                        </ListItemButton>
                      </ListItem>
                      </Link>
                    <Divider/>
                  </div>
                );
              })
            }
          </nav>
          <div className='drawer-menu__list-footer'>    
            <Divider />
            <ListItem disablePadding>
              <div className='drawer-menu__languages'>
                <div className={(props.language==='fr')?'selected':'unselected'}>
                  Français 
                </div>
                <div className={(props.language==='en')?'selected':'unselected'}>
                  English
                </div>
              </div>
            </ListItem>
            <Divider />  
          </div>    
        </List>
      </Box>
    </Drawer>
  );
}