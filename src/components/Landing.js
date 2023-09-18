import {useState} from 'react';
import { makeStyles } from '@mui/styles';
import {styled, useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { PieChart } from '@mui/x-charts/PieChart';
import MenuList from './MenuList';
import { useNavigate } from 'react-router-dom';




const drawerWidth = 240;
const useStyles = makeStyles({
  title:{
    flexGrow: 1,
  }
})

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Landing= () =>{
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const[titlePage, setTitlePage] = useState("Dashboard")
  const classes= useStyles();
  const navigate = useNavigate();
  
  const logout = () => {
    const url = "http://localhost:5000/api/auth/logout";
    const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
    };
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        navigate('/login');
        
    }); 
  
  }
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className={classes.title}>
            {titlePage}
          </Typography>
          <IconButton color="inherit" size="medium" disableRipple >
          <Badge badgeContent={4} color="secondary">
          <NotificationsIcon/>
          </Badge>
            
          </IconButton>
          <IconButton color="inherit" size="small" disableRipple onClick={() => logout()}>
            Logout
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <MenuList titlePage={titlePage} setTitlePage={setTitlePage}/>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <PieChart
            series={[
                {
                data: [
                    { id: 0, value: 10, label: 'Assigned' },
                    { id: 1, value: 15, label: 'In-progress' },
                    { id: 2, value: 20, label: 'Done' },
                ],
                },
            ]}
            width={900}
            height={300}
/>
    </Main>
    </Box>
  );
}

export default Landing;
