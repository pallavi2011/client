import React, { useEffect } from 'react';
import MenuData from '../Data/MenuData';
import {useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector} from 'react-redux'


const MenuList = ({setTitlePage}) => {
    const [menu, setMenu] = useState(MenuData);
    const userMenu = MenuData.filter((data) => data.item !== "Manage Users");
    const { user} = useSelector(
      (state) => state.auth
    )
    useEffect(() =>{
       if(user.role === 2){
        setMenu(userMenu)
       }
    }, [])
  return (
    <>
    {menu.map((data, index) => (
        <ListItem key={data.item} disablePadding onClick={() =>setTitlePage(data.item)}>
          <ListItemButton>
            <ListItemIcon>
                {data.icon}
            </ListItemIcon>
            <ListItemText primary={data.item} />
          </ListItemButton>
        </ListItem>
    
    
      ))}

</>
  )}

export default MenuList