import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


// import useBreakpoints from './common/useBreakpoint';


import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import avatarImg from '../../assets/images/dummyuser.jpg'
import profileBg from '../../assets/images/profilebg.jpg'

// const point = useBreakpoints();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  profileContainer: {
    overflow: 'hidden',
  },
  profile: {
    height: '130px',
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow: 'hidden',
  },
  hotelListIconSize: {
    fontSize: '18px',
  },
  hotelListButtonIconSize: {
    fontSize: '14px',
    marginRight: '5px',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  thumbnail: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  profileAvatar: {
    margin: '-50px auto 0 auto',
    width: '100px',
    height: '100px',
    border: '4px solid #fff',
  },
  postmedia: {
    height: theme.spacing(68),
    overflow: 'hidden',
  },
  customBorder: {
    borderColor: '#cccccc7a',
  },
  hashtagavatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: theme.palette.primary.main,
  },
  profileTweetPostPofileImg: {
    width: '50px',
    border: '1px solid #fff',
    height: '50px',
  },
  inputFile: {
    display: 'none',
  },
  smallBtnText: {
    fontSize: '11px',
    padding: '4px 15px',
    fontWeight: 'bold',
    paddingBottom: '2px',
    borderRadius: '30px',
    textTransform: 'Capitalize',
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

}))

 function MyProfileBar() {
 	const classes = useStyles()
        return (<Grid item xs={12} sm={12} md={3}>
              <Paper className={classes.profileContainer}>
                <Box className={classes.profile}>
                  <img alt="profile bg" src={profileBg} width="100%" />
                </Box>
                <Avatar alt="profile picture" src={avatarImg} className={`${classes.large} ${classes.profileAvatar}`} />
                <Box fontWeight="fontWeightBold" textAlign="center" fontSize={18} mt={3}>Jess Williams</Box>
                <Box fontWeight="fontWeighlight" textAlign="center" fontSize={12} mb={3} letterSpacing={1} color="text.secondary">Manager, HotelStory</Box>
                <Box borderBottom={1} borderColor="grey.100" mb={3} className={classes.customBorder}></Box>
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box alignItems="center" justifyContent="center" flexGrow={1} borderRight={1} className={classes.customBorder}>
                    <Box textAlign="center" fontSize={32} color="secondary.main" fontWeight="fontWeightBold">211</Box>
                    <Box textAlign="center" fontSize={12} mb={2} letterSpacing={1} color="text.secondary">Connections</Box>
                  </Box>
                  <Box alignItems="center" justifyContent="center" flexGrow={1} borderRight={1} className={classes.customBorder}>
                    <Box textAlign="center" fontSize={32} color="secondary.main" fontWeight="fontWeightBold">120</Box>
                    <Box textAlign="center" fontSize={12} mb={2} letterSpacing={1} color="text.secondary">Hotel Followings</Box>
                  </Box>
                  <Box alignItems="center" justifyContent="center" textAlign="center" flexGrow={1}>
                    <Box textAlign="center" fontSize={32} color="secondary.main" fontWeight="fontWeightBold">28</Box>
                    <Box textAlign="center" fontSize={12} mb={2} letterSpacing={1} color="text.secondary">My Viewers</Box>
                  </Box>
                </Box>
                <Box borderBottom={1} borderColor="grey.100" className={classes.customBorder}></Box>
                <Box textAlign="center" fontSize={14} p={5}>Jess Williams, We explore relevent hotels
                  <Box fontWeight="fontWeightBold" display="inline">
                    <Link href="#" underline="none">&nbsp;based on your profile and intrest !</Link>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
                  <Button variant="contained" color="primary" className="baseBtn p-r-15 p-l-15" disableElevation>Discover More</Button>
                </Box>
              </Paper>              
            </Grid> )
    }
    export default MyProfileBar