import React from 'react'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
// import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import history from '../../History'
import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
import NotificationsIcon from '@material-ui/icons/Notifications'

import Container from '@material-ui/core/Container'
import HotelIcon from '@material-ui/icons/Hotel'
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import DashboardIcon from '@material-ui/icons/Dashboard'

import logo from '../../assets/images/hotelsstory_logo.svg'
import avatarImg from '../../assets/images/dummyuser.jpg'



import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import axios from 'axios'
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuLink: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '64px',
    cursor:'pointer',
  },
  menuItems: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: '75px',
    margin: '0px 5px 0 5px',
    paddingTop: '10px',
    borderBottom: '2px solid transparent',
  },
  menuItemsActive: {
    borderBottom: '2px solid',
    paddingTop:'0px'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  customLine: {
    width: '0.75px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    margin: '0 15px',
  },
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    borderRadius: '100px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '0',
    top: '0',
  },
  inputRoot: {
    color: 'inherit',
    height: '30px',
    fontSize: '14px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  MobileBg: {
    background: '#17222e',
    height: '100%',
    color: '#fff',
  },
  whiteColor: {
    color: '#fff',
  },
  profileAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  lastMenuItem: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
  },
  sideMenuProfileBg: {
    background: '#2b3744',
  },
  dividercolor: {
    background: '#33404e',
  },
  listItemCSS: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
}))

function MyHeader(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }
  const role=`${localStorage.role}` 
  console.log("Role###"+role)
  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MessageOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
  // eslint-disable-next-line react/prop-types
  const { window } = props
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  
  function logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    history.push(`/`)
  }

  const drawer = (
    <div className={classes.MobileBg} display="flex">
      <Box pl={4} pr={4} pt={7} pb={7} display="flex" className={classes.sideMenuProfileBg}>
        <Box>
          <Avatar alt="profile picture" src={avatarImg} className={`${classes.large} ${classes.profileAvatar}`} />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow="1" justifyContent="space-around">
          <Box fontWeight="fontWeightBold" textAlign="left" ml={3} fontSize={18}> Jess Williams</Box>
          <Box fontWeight="fontWeighlight" textAlign="left" ml={3} fontSize={12} letterSpacing={1}>Manager, HotelStory</Box>
        </Box>
      </Box>
      <Divider className={classes.dividercolor} />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button className={classes.listItemCSS}>
          <ListItemIcon className={classes.whiteColor}>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText primary="Hotels" />
        </ListItem>
        <Divider className={classes.dividercolor} />
        <ListItem button className={classes.listItemCSS}>
          <ListItemIcon className={classes.whiteColor}>
            <PeopleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="My Network" />
        </ListItem>
        <Divider className={classes.dividercolor} />
        <ListItem button className={classes.listItemCSS}>
          <ListItemIcon className={classes.whiteColor}> <StorefrontOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Offers" />
        </ListItem>
        <Divider className={classes.dividercolor} />
        <ListItem button className={classes.listItemCSS}>
          <ListItemIcon className={classes.whiteColor}> <MessageOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Message" />
        </ListItem>
        <Divider className={classes.dividercolor} />
        <ListItem button className={classes.listItemCSS}>
          <ListItemIcon className={classes.whiteColor}>  <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
      </List>
      <Divider className={classes.dividercolor} />
      <List className={classes.lastMenuItem} onClick={logOut}>
        <ListItem button className={classes.listItemCSS}>
          <ListItemIcon className={classes.whiteColor}> <ExitToAppOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  )
  const container = window !== undefined ? () => window().document.body : undefined
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar className="p-l-0 p-r-0">
            <img src={logo} alt="Logo" width="30" />
            {/* <div className={classes.search}>
              <InputBase
                placeholder="Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {role==='crm' &&
              <Typography className={classes.menuLink}>
               
              <Link onClick={() => history.push('/listing')} color="inherit" underline="none" className={`${classes.menuItems} ${classes.menuItemsActive}`}>
                <HotelIcon />
                <Box fontSize={10} letterSpacing={1} className="m-t-4">Hotels</Box>
              </Link>
              <Link onClick={() => history.push('/dashboard')} color="inherit" underline="none" className={`${classes.menuItems}`}>
                <PeopleOutlinedIcon />
                <Box fontSize={10} letterSpacing={1} className="m-t-4">My Network</Box>
              </Link>
              
           
              {/*<Link href="#" color="inherit" underline="none" className={`${classes.menuItems}`}>
                <MessageOutlinedIcon />
                <Box fontSize={10} letterSpacing={1} className="m-t-4">Message</Box>
              </Link>
              <Link href="#" color="inherit" underline="none" className={`${classes.menuItems}`}>
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
                <Box fontSize={10} letterSpacing={1} className="m-t-4">Notification</Box>
              </Link>*/}
            </Typography>
               }
               { role==='hotelier' &&
               <Typography className={classes.menuLink}>
               
               <Link onClick={() => history.push('/listing')} color="inherit" underline="none" className={`${classes.menuItems} ${classes.menuItemsActive}`}>
                 <HotelIcon />
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">Hotels</Box>
               </Link>
               <Link onClick={() => history.push('/dashboard')} color="inherit" underline="none" className={`${classes.menuItems}`}>
                 <PeopleOutlinedIcon />
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">My Network</Box>
               </Link>
               <Link onClick={() => history.push('/offers')}  color="inherit" underline="none" className={`${classes.menuItems}`}>
                 <StorefrontOutlinedIcon />
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">Offers</Box>
               </Link>
            
               {/*<Link href="#" color="inherit" underline="none" className={`${classes.menuItems}`}>
                 <MessageOutlinedIcon />
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">Message</Box>
               </Link>
               <Link href="#" color="inherit" underline="none" className={`${classes.menuItems}`}>
                 <Badge badgeContent={17} color="secondary">
                   <NotificationsIcon />
                 </Badge>
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">Notification</Box>
               </Link>*/}
             </Typography>
               }
               { role==='agents' &&
               <Typography className={classes.menuLink}>
               
               <Link onClick={() => history.push('/listing')} color="inherit" underline="none" className={`${classes.menuItems} ${classes.menuItemsActive}`}>
                 <HotelIcon />
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">Hotels</Box>
               </Link>               
               <Link onClick={() => history.push('/offers')}  color="inherit" underline="none" className={`${classes.menuItems}`}>
                 <StorefrontOutlinedIcon />
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">Offers</Box>
               </Link>
               <Link onClick={() => history.push('/leads')} color="inherit" underline="none" className={`${classes.menuItems}`}>
                 <PeopleOutlinedIcon />
                 <Box fontSize={10} letterSpacing={1} className="m-t-4">My Leads</Box>
               </Link>            
             </Typography>
               }
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src={avatarImg} />
              </IconButton>
              <box className={`${classes.customLine}`}></box>
              <IconButton color="inherit" size="medium">
                <DashboardIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

export default MyHeader
