import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import VisibleItemList from '../components/VisibleItemList'

import { HamburgerSpin } from 'react-animated-burgers'

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));
function ResponsiveDrawer() {
  const dummyCategories = ['', '', 'Contact', 'Resources', 'References','', 'Terms of use', 'Privacy policy', 'Cookies policy','Accessibility policy']
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  function toggleButton() {
    handleDrawerToggle()
    setIsActive(true);
  }
const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Hidden smUp implementation="css"> */}
          {/* <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
                <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer> */}
        {/* </Hidden> */}

        {/* <Hidden xsDown implementation="css"> */}
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {/* <div className={classes.toolbar} /> */}

            

            {/* <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          > */}
            {/* <MenuIcon /> */}

            <HamburgerSpin buttonStyle={{ color: 'red' }} isActive={isActive} toggleButton={toggleButton}  />

            {/* <button id="hamburger" class="menu-button">
					<span id="morph-shape" class="morph-shape" data-morph-open="M3,20c0,0,12-4,27-4s27,4,27,4;M3,60c0,0,12,4,27,4s27-4,27-4" data-morph-close="M3,20c0,0,12,4,27,4s27-4,27-4;M3,60c0,0,12-4,27-4s27,4,27,4">
						<svg width="100%" height="100%" viewBox="0 0 60 80" preserveAspectRatio="none">
							<path d="M3,20C3,20,15,20,30,20C45,20,57,20,57,20"></path>
							<line x1="3" y1="40" x2="57" y2="40"></line>
							<path d="M3,60C3,60,15,60,30,60C45,60,57,60,57,60"></path>
						<desc>Created with Snap</desc><defs></defs></svg>
					</span>
				</button> */}
          {/* </IconButton> */}
          
            {/* <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}> */}
              {/* <CloseIcon/> */}
              {/* <HamburgerSpin buttonStyle={{ color: "green" }} isActive={isActive} toggleButton={toggleButton}  /> */}

            {/* </IconButton> */}

            {drawer}
          </Drawer>  
        {/* </Hidden> */}


      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <VisibleItemList />
        </div>
      </div>
  );
}
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default ResponsiveDrawer;