import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from './common/header'

// import useBreakpoints from './common/useBreakpoint';
import InputBase from '@material-ui/core/InputBase'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import avatarImg from '../assets/images/dummyuser.jpg'
import profileBg from '../assets/images/profilebg.jpg'
import SendIcon from '@material-ui/icons/Send'

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
//Icon Button
import IconButton from '@material-ui/core/IconButton'
//Input text Field
import TextField from '@material-ui/core/TextField'
/* Import Icons */
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined'
import GifIcon from '@material-ui/icons/Gif'
import PollOutlinedIcon from '@material-ui/icons/PollOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
import SearchIcon from '@material-ui/icons/Search'
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
  searchContainer: {
    borderRadius: theme.spacing(1),
    border: 'solid 1px #e0e0e0',
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    paddingTop: '6px',
    paddingBottom: '6px',
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      width: 'auto',
    },
    // borderRadius: '100px',
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
    svg: {
      color: '#f95665',
    },
  },
  inputRoot: {
    color: 'inherit',
    height: '30px',
    width: '100%',
    fontSize: '14px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // width: '34ch',
    height: '30px',
    color: '#2f455c',
    background: '#fafafa',
    // borderRadius: '30px',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}))

function MyDashboard() {
  const classes = useStyles()

  // const [mobileOpen, setMobileOpen] = React.useState(false)
  const [showComment, setShowComment] = React.useState(false);

  
  const [showComment1, setShowComment1] = React.useState(false);

  return (
    <div className="App">
      <MyHeader />
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={3}>
              <Paper className={classes.profileContainer}>
                <Box className={classes.profile}>
                  <img src={profileBg} width="100%" alt="Profile background" />
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
              {/* <Box mb={3}></Box>
            <Paper className={classes.profileContainer}>
              <Box p={3}>
               <Box fontWeight="fontWeightBold" textAlign="left" fontSize={14} mb={3}>Followed Hashtags</Box>
               <Box display="flex" alignItems="center" mb={3}>
                  <Avatar alt="Remy Sharp" color="primary"  src={profileBg} className={classes.hashtagavatar} />
                  <Box display="inline" fontSize={14} ml={2} letterSpacing={1} color="text.secondary">#bestindustries</Box>
               </Box>
               <Box display="flex" alignItems="center" mb={3}>
                  <Avatar alt="Remy Sharp" color="primary"  src={profileBg} className={classes.hashtagavatar} />
                  <Box display="inline" fontSize={14} ml={2} letterSpacing={1} color="text.secondary">#hotels</Box>
               </Box>
               <Box display="flex" alignItems="center" mb={3}>
                  <Avatar alt="Remy Sharp" color="primary"  src={profileBg} className={classes.hashtagavatar} />
                  <Box display="inline" fontSize={14} ml={2} letterSpacing={1} color="text.secondary">#visualdesign</Box>
               </Box>
               <Box display="flex" alignItems="center" mb={3}>
                  <Avatar alt="Remy Sharp" color="primary"  src={profileBg} className={classes.hashtagavatar} />
                  <Box display="inline" fontSize={14} ml={2} letterSpacing={1} color="text.secondary">#interface</Box>
               </Box>
               <Box display="flex" alignItems="center" mb={1}>
                  <Avatar alt="Remy Sharp" color="primary"  src={profileBg} className={classes.hashtagavatar} />
                  <Box display="inline" fontSize={14} ml={2} letterSpacing={1} color="text.secondary">#startups</Box>
               </Box>
              </Box>
               <Box borderBottom={1} borderColor="grey.100" mb={1} className={classes.customBorder}></Box>
               <Box textAlign="center" p={3} fontWeight="fontWeightBold">
                 <Link href="#" underline="none">Discover More</Link>
               </Box>
            </Paper> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper}>
                <Box display="flex" alignItems="left" justifyContent="left">
                  <Box mt={1}>
                    <Avatar alt="profile picture" src={avatarImg} />
                  </Box>
                  <Box flexDirection="column" display="flex" alignItems="left" justifyContent="left" flexGrow="1">
                    <Box display="flex" alignItems="left" justifyContent="left" borderBottom={0}
                      className="customInput">
                      <TextField
                        id="standard-full-width"
                        multiline
                        inputProps={{ 'aria-label': 'naked' }}
                        style={{ margin: 8 }}
                        placeholder="Share your story today!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Box>
                    <Box alignItems="left" display="flex" mt={1} justifyContent="space-between">
                      <Box display="flex" alignItems="left" justifyContent="left" fontSize={10}>

                        <input accept="image/*" className={classes.inputFile} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                          <IconButton color="primary" aria-label="upload picture" component="span">
                            <InsertPhotoOutlinedIcon />
                          </IconButton>
                        </label>
                        <IconButton aria-label="Find GIF" className={`${classes.margin} customIcons`} color="primary">
                          <GifIcon />
                        </IconButton>

                        <IconButton aria-label="Create Poll" className={classes.margin} color="primary">
                          <PollOutlinedIcon />
                        </IconButton>

                        <IconButton aria-label="Smileys" className={classes.margin} color="primary">
                          <SentimentSatisfiedOutlinedIcon />
                        </IconButton>

                        <IconButton aria-label="Calendar" className={classes.margin} color="primary">
                          <DateRangeOutlinedIcon />
                        </IconButton>
                      </Box>
                      <Box display="flex" alignItems="center" justifyContent="right" className={classes.sectionDesktop}>
                        <Button variant="contained" size="medium" color="secondary" className="baseBtn p-r-15 p-l-15 post_story_btn" disableElevation>Post Story</Button>
                      </Box>
                      <Box className={classes.sectionMobile}>
                        <IconButton aria-label="send" className="sendButton" color="secondary">
                          <SendIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
              <Paper className="m-t-10 m-b-10">
                <Box p={3} display="flex" flexDirection="row">
                  <Box mr={2}>
                    <Avatar alt="profile picture" src={profileBg} variant="circle" size="small" />
                  </Box>
                  <Box display="flex" flexGrow="1" flexDirection="column">
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Link href="#" color="primary" underline="none">
                        <Box color="#484848" fontSize={16} textAlign="left" fontWeight="fontWeightBold" className="m-r-10"> LearningTips</Box>
                      </Link>
                      <Link href="#" color="primary" underline="none">
                        <Box color="#909090" fontSize={12} textAlign="left" fontWeight="fontWeightRegular"> @liteontihuvet . 1h</Box>
                      </Link>
                      <Box display="flex" alignItems="flex-end" justifyContent="flex-end" flexGrow="1">
                        <MoreHorizIcon className={classes.hotelListIconSize} />
                      </Box>
                    </Box>
                    <Box fontSize={13} textAlign="left" mt={1} color="text.secondary" fontWeight="fontWeightRegular">  Am I the only one who puts too much cheese on their pizza? Every time I see someone post a pizza pic I'm like "where's the cheese? it needs more cheese"</Box>
                  </Box>
                </Box>
                <Box className={`${classes.postmedia}`}>
                  <img src={profileBg} width="100%" alt="logged user" />
                </Box>
                <Box display="flex" justifyContent="space-evenly" my={1}>
                  <Box display="flex" alignItems="center">
                    <IconButton aria-label="Smileys" color="primary">
                      <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">250 Likes</Box>
                  </Box>
                  <Box display="flex" alignItems="center" className="hand_cursor"  onClick={() => setShowComment(!showComment)}>
                    <IconButton aria-label="Smileys" color="primary">
                      <MessageOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">80 Comments</Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <IconButton aria-label="Smileys" color="primary">
                      <RepeatOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">10 Shares</Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <IconButton aria-label="Smileys" color="primary">
                      <BookmarkBorderOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">Bookmark</Box>
                  </Box>
                </Box>


                {showComment &&
                  <Box display="flex" alignItems="left" flexDirection="column" justifyContent="left">
                    <Box display="flex" alignItems="left" flexDirection="row" justifyContent="left" borderBottom={0}
                      className="customInput">
                      <Box mt={1} width="35px" pt={2} borderRadius="50%" mr={0} mb={2} pr={5}>
                        <Avatar alt="profile picture" src={avatarImg} width="100%" borderRadius="50%" />
                      </Box>
                      <Box fontSize="2px" className="customInput commentBox" width="97%" position="relative">
                        <TextField
                          id="standard-full-width"
                          multiline
                          inputProps={{ 'aria-label': 'naked' }}
                          style={{ margin: 8, width: '98%', fontSize: '4px', }}
                          placeholder="Add a comment"
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <Box position="absolute" top="10px" right="5px">
                          <input accept="image/*" className={classes.inputFile} id="icon-button-file1" type="file" />
                          <label htmlFor="icon-button-file1">
                            <IconButton aria-label="upload picture" component="span" color="primary">
                              <PhotoCameraOutlinedIcon />
                            </IconButton>
                          </label>
                        </Box>
                      </Box>



                      <Box display="flex" flexDirection="column" justifyContent="center" position="relative" top="-2px" alignItems="center" mx={1}> 
                        <IconButton aria-label="send" className="sendButtonComments" color="secondary">
                          <SendIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                    {/* <Box display="flex" alignItems="center" justifyContent="right" className={classes.sectionDesktop} mb={3} ml={12}>
                      <Button variant="contained" size="small" color="secondary" height="30px" className="baseBtn p-r-10 p-l-10 post_story_btn" disableElevation>Post Comment</Button>
                    </Box> */}
                  </Box>
                }
              </Paper>
              <Paper className="m-t-10 m-b-10">
                <Box p={3} display="flex" flexDirection="row">
                  <Box mr={2}>
                    <Avatar alt="profile picture" src={profileBg} variant="circle" size="small" />
                  </Box>
                  <Box display="flex" flexGrow="1" flexDirection="column">
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Link href="#" color="primary" underline="none">
                        <Box color="#484848" fontSize={16} textAlign="left" fontWeight="fontWeightBold" className="m-r-10"> LearningTips</Box>
                      </Link>
                      <Link href="#" color="primary" underline="none">
                        <Box color="#909090" fontSize={12} textAlign="left" fontWeight="fontWeightRegular"> @liteontihuvet . 1h</Box>
                      </Link>
                      <Box display="flex" alignItems="flex-end" justifyContent="flex-end" flexGrow="1">
                        <MoreHorizIcon className={classes.hotelListIconSize} />
                      </Box>
                    </Box>
                    <Box fontSize={13} textAlign="left" mt={1} color="text.secondary" fontWeight="fontWeightRegular">  Am I the only one who puts too much cheese on their pizza? Every time I see someone post a pizza pic I'm like "where's the cheese? it needs more cheese"</Box>
                  </Box>
                </Box>
                <Box className={`${classes.postmedia}`}>
                  <img src={profileBg} width="100%" alt="Hotel view" />
                </Box>
                <Box display="flex" justifyContent="space-evenly" my={1}>
                  <Box display="flex" alignItems="center">
                    <IconButton aria-label="Smileys" color="primary">
                      <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">250 Likes</Box>
                  </Box>
                  <Box display="flex" alignItems="center" className="hand_cursor"  onClick={() => setShowComment1(!showComment1)}>
                    <IconButton aria-label="Smileys" color="primary">
                      <MessageOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">80 Comments</Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <IconButton aria-label="Smileys" color="primary">
                      <RepeatOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">10 Shares</Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <IconButton aria-label="Smileys" color="primary">
                      <BookmarkBorderOutlinedIcon />
                    </IconButton>
                    <Box fontSize={12} color="text.secondary">Bookmark</Box>
                  </Box>
                </Box>



                {showComment1 &&
                  <Box display="flex" alignItems="left" flexDirection="column" justifyContent="left">
                    <Box display="flex" alignItems="left" flexDirection="row" justifyContent="left" borderBottom={0}
                      className="customInput">
                      <Box mt={1} width="35px" pt={2} borderRadius="50%" mr={0} mb={2} pr={5}>
                        <Avatar alt="profile picture" src={avatarImg} width="100%" borderRadius="50%" />
                      </Box>
                      <Box fontSize="2px" className="customInput commentBox" width="97%" position="relative">
                        <TextField
                          id="standard-full-width"
                          multiline
                          inputProps={{ 'aria-label': 'naked' }}
                          style={{ margin: 8, width: '98%', fontSize: '4px', }}
                          placeholder="Add a comment"
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <Box position="absolute" top="10px" right="5px">
                          <input accept="image/*" className={classes.inputFile} id="icon-button-file1" type="file" />
                          <label htmlFor="icon-button-file1">
                            <IconButton aria-label="upload picture" component="span" color="primary">
                              <PhotoCameraOutlinedIcon />
                            </IconButton>
                          </label>
                        </Box>
                      </Box>



                      <Box display="flex" flexDirection="column" justifyContent="center" position="relative" top="-2px" alignItems="center" mx={1}> 
                        <IconButton aria-label="send" className="sendButtonComments" color="secondary">
                          <SendIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                    {/* <Box display="flex" alignItems="center" justifyContent="right" className={classes.sectionDesktop} mb={3} ml={12}>
                      <Button variant="contained" size="small" color="secondary" height="30px" className="baseBtn p-r-10 p-l-10 post_story_btn" disableElevation>Post Comment</Button>
                    </Box> */}
                  </Box>
                }
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Paper className={`${classes.searchContainer} m-b-10`}>
                {/* <Box textAlign="left" p={2} fontSize={16} color="primary.main" fontWeight={600} borderBottom={1} borderColor="grey.100" className={classes.customBorder}>
                  Search Hotels:
                </Box> */}
                <Box className={classes.search} py={2} px={0} mx={0}>
                  <InputBase
                    placeholder="Search"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />

                  <IconButton color="secondary" aria-label="search" component="span" className={classes.searchIcon}>
                    <SearchIcon />
                  </IconButton>

                </Box>
              </Paper>
              <Paper>
                <Box textAlign="left" p={2} fontSize={16} color="primary.main" fontWeight={600} borderBottom={1} borderColor="grey.100" className={classes.customBorder}>
                  Hotels to follow
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
                      follow
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
                      follow
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
                      follow
                    </Button>
                  </Box>
                  <Box p={1}></Box>
                </Box>
              </Paper>
              <Paper className={'m-t-10'}>
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
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default MyDashboard
