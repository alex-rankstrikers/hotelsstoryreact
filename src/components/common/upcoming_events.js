import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
// import useBreakpoints from './common/useBreakpoint';

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
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
        return (<Paper className={'m-t-10'}>
                <Box textAlign="left" p={2} fontSize={16} color="primary.main" fontWeight={600} borderBottom={1} borderColor="grey.100" className={classes.customBorder}>
                  Upcoming Events
                </Box>
                <Box mt={2}>
                  <Box px={2} py={1} display="flex" alignItems="center" justifyContent="space-between" mb={2} borderBottom={1} className={classes.customBorder}>
                    <Box display="flex">
                      <Box mr={2}>
                        <Avatar alt="profile picture" src={profileBg} variant="rounded" />
                      </Box>
                      <Box>
                        <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
                          <Link href="#" underline="none">
                            Mercia Hotels & Resorts
                          </Link>
                        </Box>
                        <Box fontSize={12} letterSpacing={1} color="text.secondary">Jakarta, Indonesia</Box>
                      </Box>
                    </Box>
                    <Button variant="outlined" size="small" color="primary" className={classes.smallBtnText}>
                      Register
                    </Button>
                  </Box>
                  <Box px={2} py={1} display="flex" alignItems="center" justifyContent="space-between" mb={2} borderBottom={1} className={classes.customBorder}>
                    <Box display="flex">
                      <Box mr={2}>
                        <Avatar alt="profile picture" src={profileBg} variant="rounded" />
                      </Box>
                      <Box>
                        <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
                          <Link href="#" underline="none">
                            Transient Hotel
                          </Link>
                        </Box>
                        <Box fontSize={12} letterSpacing={1} color="text.secondary"> Britannica, Scotland</Box>
                      </Box>
                    </Box>
                    <Button variant="outlined" size="small" color="primary" className={classes.smallBtnText}>
                      Register
                    </Button>
                  </Box>
                  <Box px={2} py={1} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Box display="flex">
                      <Box mr={2}>
                        <Avatar alt="profile picture" src={profileBg} variant="rounded" />
                      </Box>
                      <Box>
                        <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
                          <Link href="#" underline="none">
                             Eka Hotel
                          </Link>
                        </Box>
                        <Box fontSize={12} letterSpacing={1} color="text.secondary"> Nairobi, Kenya</Box>
                      </Box>
                    </Box>
                    <Button variant="outlined" size="small" color="primary" className={classes.smallBtnText}>
                      Register
                    </Button>
                  </Box>
                  <Box p={1}></Box>
                </Box>
              </Paper> )
    }
    export default MyProfileBar