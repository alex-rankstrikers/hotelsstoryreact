import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'


// import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
// import InputBase from '@material-ui/core/InputBase'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ExploreIcon from '@material-ui/icons/Explore'
import Hidden from '@material-ui/core/Hidden'
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
// import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined'
import IconButton from '@material-ui/core/IconButton'
import MyHeader from './common/header'
import listHotelImg from '../assets/images/details-header.jpg'
// import list1 from '../assets/images/hotels.jpg'
// import list2 from '../assets/images/hotel1.jpg'
// import list3 from '../assets/images/hotel3.jpg'
import dryer from '../assets/images/elevator.png'
import ac from '../assets/images/ac.png'
import bank from '../assets/images/bank.png'
import cafe from '../assets/images/cafe.png'
import drinks from '../assets/images/drinks.png'
import freecalls from '../assets/images/free calls.png'
import food from '../assets/images/friendly.png'
import health from '../assets/images/health.png'
import wifi from '../assets/images/wifi.png'
import games from '../assets/images/games.png'
import pool from '../assets/images/pool.png'
import parking from '../assets/images/parking.png'

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    miniIcon: {
        fontSize: '18px',
    },
    media: {
        height: '220px',
    },
    headerMedia: {
        height: '250px',
    },
    hotelName: {
        textShadow: '0px 0px 7px #000'

    },
    saveLater: {
        color: '#ffffff',
        background: '#f95665 !important',
        padding: '6px',
    },
    facilityBox: {
        border: 'solid 2px #2f455c',
        borderRadius: '5px',
    },
    commisionBox: {
        color: '#fff',
        background: '#2f455c',
        padding: '5px 13px',
        borderRadius: '4px'
    }
}))


function Details(props) {
    const classes = useStyles()

    const { window } = props
    const theme = useTheme()
    const container = window !== undefined ? () => window().document.body : undefined


    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }



    //drawer
    return (
        <div className="App">
            <MyHeader />
            <CssBaseline />
            <Box mt={12} mb={5}>
                <Container maxWidth className="p-0 pos_rel" position="relative">

                    <CardMedia
                        className={classes.headerMedia}
                        image={listHotelImg}
                        title="Radisson Blue Hotel"
                    />

                    <Box className="listingHeaderImageOverlay" display="flex" flexDirection="row" justifyContent="center" alignItems="ecnter">
                        <Container maxWidth="xl">
                            <Box className="p-b-10" color="primary.contrastText" fontSize={90} display="flex" height="100%" flexDirection="column" justifyContent="flex-end" alignItems="flex-start">
                                <Box display="flex" flexDirection="row">
                                    <Box display="flex" alignItems="center" mr={2}>
                                        <IconButton aria-label="favorite" className={classes.saveLater} fontSize={16}>
                                            <FavoriteBorderOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                    <Box fontSize={36} fontWeight={300} className={classes.hotelName}>Radisson Blue Hotel </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                    <Box display="flex" justifyContent="center" alignItems="center" fontWeight="fontWeighlight" fontSize={16} color="primary.contrastText" letterSpacing={1}>
                                        <ExploreIcon fontSize="small" className="m-r-5" />2.5km from Airport,  Berlin</Box>
                                </Box>


                            </Box>
                        </Container>
                    </Box>
                </Container>
                <Box mt={3}>
                    <Container maxWidth="xl">
                        <Grid container spacing={2} >


                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container spacing={2}>

                                    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" mb={5}>
                                        <Box fontSize={17} fontWeight="500" color="primary.main" mt={2}> HOTEL DESCRIPTION</Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                                            <Box my={2} fontSize={15} fontWeight="400">
                                                The Strathmore is an imposing 4-Star hotel, located close to London's most famous museums in South Kensington. A fully restored Victorian mansion, the hotel building was formerly the London residence of the Earl of Strathmore - the late Queen Mother's father.</Box>
                                            <Box my={2} fontSize={15} fontWeight="400">
                                                The hotel has 77 classic en-suite guest bedrooms, which feature carved wood furniture, LCD flat-screen televisions and Wi-Fi and broadband access. Breakfast and dinner are served daily at the in-house restaurant, while light meals and traditional afternoon tea can be ordered in the inviting lounge bar. Flexible meeting and events rooms are available for private hire, plus PCs, colour printing and fax services for the convenience of business travellers.</Box>
                                            <Box my={2} fontSize={15} fontWeight="400">
                                                Famous local attractions include Kensington Palace and Gardens, the Victoria and Albert Museum and the Royal Albert Hall. Knightsbridge's famous shopping street and Harrods's are a short walk away.
                                                </Box>
                                        </Box>
                                    </Box>


                                    <Box display="flex" flexDirection="column" justifyContent="flex-start" mb={2} alignItems="flex-start">
                                        <Box fontSize={17} fontWeight="500" color="primary.main" mt={2}> FACILITIES</Box>
                                        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
                                            <Box display="flex" flexDirection="column">
                                                <Box my={2} fontSize={15} fontWeight="400">
                                                    The hotel is arranged on three floors without a lift. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea.</Box>
                                                <Box my={2} fontSize={15} fontWeight="400" ml={2} display="flex" flexDirection="row">

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={dryer} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> DRYER</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={ac} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> A.C</Box>
                                                    </Box>


                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={bank} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}>BANK</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={cafe} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}>CAFE</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={drinks} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> DRINKS</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={freecalls} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> FREE CALLS</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={food} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> FOOD</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={health} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}>EMERGENCY</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={wifi} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}>WIFI</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={games} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> GAMES</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={pool} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> POOL</Box>
                                                    </Box>

                                                    <Box width="80px" height="80px" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" className={`${classes.facilityBox}`} mr={3}>
                                                        <img src={parking} alt="Logo" width="45" />
                                                        <Box fontSize={11} color="secondary.main" fontWeight={600}> PARKING</Box>
                                                    </Box>

                                                </Box>
                                            </Box>

                                        </Box>
                                    </Box>


                                    <Box display="flex" flexDirection="column" justifyContent="flex-start" mt={3} mb={4} alignItems="flex-start">
                                        <Box fontSize={17} fontWeight="500" color="primary.main" my={4} display="flex"> BUYER BENEFITS & REWARDS FROM
                                            <Box color="secondary.main" ml={2}> RADISSON BLUE HOTEL</Box>
                                        </Box>


                                        <Box className={`${classes.commisionBox}`} fontSize={18} mb={6} mt={1} color="primary.main" mr={1} fontWeight="500" background="primary.main">Buyer Commission : 10% </Box>


                                        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                            <Box display="flex" flexDirection="column" justifyContent="flex-start" flexGrow="1">
                                                <Box display="flex" flexDirection="row" justifyContent="flex-start" mb={4}>

                                                    <Box display="flex" flexDirection="row" justifyContent="center" mx={3} alignItems="center" >
                                                        <Box> <img src={cafe} alt="Logo" width="64" /></Box>
                                                        <Box ml={3}>
                                                            <Box fontSize={17} fontWeight="500" color="primary.main">COMPLIMENTARY BREAKFAST</Box>
                                                            <Box fontSize={12} fontWeight="500" color="primary.main">Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</Box>
                                                        </Box>
                                                    </Box>

                                                    <Box display="flex" flexDirection="row" justifyContent="center" mx={3} alignItems="center" >
                                                        <Box> <img src={drinks} alt="Logo" width="64" /></Box>
                                                        <Box ml={3}>
                                                            <Box fontSize={17} fontWeight="500" color="primary.main">Food & Drinks Discounts</Box>
                                                            <Box fontSize={12} fontWeight="500" color="primary.main">Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</Box>
                                                        </Box>
                                                    </Box>


                                                    <Box display="flex" flexDirection="row" justifyContent="center" mx={3} alignItems="center" >
                                                        <Box> <img src={wifi} alt="Logo" width="64" /></Box>
                                                        <Box ml={3}>
                                                            <Box fontSize={17} fontWeight="500" color="primary.main">Complementary Wi-Fi</Box>
                                                            <Box fontSize={12} fontWeight="500" color="primary.main">Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="row" justifyContent="flex-start" >
                                                    <Box display="flex" flexDirection="row" justifyContent="center" mx={3} alignItems="center" >
                                                        <Box> <img src={pool} alt="Logo" width="64" /></Box>
                                                        <Box ml={3}>
                                                            <Box fontSize={17} fontWeight="500" color="primary.main">Early Check-In & Late Check-Out</Box>
                                                            <Box fontSize={12} fontWeight="500" color="primary.main">Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</Box>
                                                        </Box>
                                                    </Box>


                                                    <Box display="flex" flexDirection="row" justifyContent="center" mx={3} alignItems="center">
                                                        <Box> <img src={bank} alt="Logo" width="64" /></Box>
                                                        <Box ml={3}>
                                                            <Box fontSize={17} fontWeight="500" color="primary.main">Room Upgrade</Box>
                                                            <Box fontSize={12} fontWeight="500" color="primary.main">Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</Box>
                                                        </Box>
                                                    </Box>
                                                    <Box display="flex" flexDirection="row" justifyContent="center" mx={3} alignItems="center" >
                                                        <Box> <img src={parking} alt="Logo" width="64" /></Box>
                                                        <Box ml={3}>
                                                            <Box fontSize={17} fontWeight="500" color="primary.main">Complementary Parking</Box>
                                                            <Box fontSize={12} fontWeight="500" color="primary.main">Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Box>

                                    </Box>

                                    {/* <Grid item xs={12} sm={12} md={4}>
                                        <Paper className="m-t-10 overHide">
                                            <Box display="flex" flexDirection="column">

                                                <Box className={classes.hotelProfile} position="relative">
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={list1}
                                                        title="hotel img"
                                                    />
                                                    <Box display="flex" alignItems="center" position="absolute" right={10} top={10} zIndex={99} >
                                                        <IconButton aria-label="favorite" className={classes.saveLater} fontSize={16}>
                                                            <FavoriteBorderOutlinedIcon />
                                                        </IconButton>
                                                    </Box>

                                                    <Box display="flex" width="100%" height="100%" flexDirection="column" alignItems="flex-start" justifyContent="flex-end" bottom="0px" position="absolute" p={2} className="gradientBg">
                                                        <Box fontWeight={400} letterSpacing={1} fontSize={24} color="primary.contrastText">Radisson Blue Hotel</Box>
                                                        <Box display="flex" justifyContent="center" alignItems="center" fontWeight="fontWeighlight" fontSize={12} color="primary.contrastText" mb={1} letterSpacing={1}>
                                                            <ExploreIcon fontSize="small" className="m-r-5" />2.5km from Airport,  Berlin</Box>
                                                    </Box>
                                                </Box>
                                         
                                                <Box p={2} display="flex" alignItems="right" justifyContent="space-between">
                                                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                                                        <Box fontSize={24} fontWeight="fontWeightBold" color="secondary.main"> $ 240</Box>
                                                        <Box color="text.secondary" fontSize={12} mb={1} letterSpacing={1}>Commission <Box display="inline"> / <Link href="#" underline="none">View More</Link></Box></Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center" className={classes.sectionDesktop}>
                                                        <Button variant="contained" size="medium" color="secondary" className="baseBtn p-r-15 p-l-15 post_story_btn" disableElevation>VIEW DEAL</Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>



                                    <Grid item xs={12} sm={12} md={4}>
                                        <Paper className="m-t-10 overHide">
                                            <Box display="flex" flexDirection="column">

                                                <Box className={classes.hotelProfile} position="relative">
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={list3}
                                                        title="hotel img"
                                                    />
                                                    <Box display="flex" alignItems="center" position="absolute" right={10} top={10} zIndex={99} >
                                                        <IconButton aria-label="favorite" className={classes.saveLater} fontSize={16}>
                                                            <FavoriteBorderOutlinedIcon />
                                                        </IconButton>
                                                    </Box>

                                                    <Box display="flex" width="100%" height="100%" flexDirection="column" alignItems="flex-start" justifyContent="flex-end" bottom="0px" position="absolute" p={2} className="gradientBg">
                                                        <Box fontWeight={400} letterSpacing={1} fontSize={24} color="primary.contrastText">Atlassian Beach View</Box>
                                                        <Box display="flex" justifyContent="center" alignItems="center" fontWeight="fontWeighlight" fontSize={12} color="primary.contrastText" mb={1} letterSpacing={1}>
                                                            <ExploreIcon fontSize="small" className="m-r-5" />1.5km from Sea Point,  Moscow</Box>
                                                    </Box>
                                                </Box>
                                          
                                                <Box p={2} display="flex" alignItems="right" justifyContent="space-between">
                                                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                                                        <Box fontSize={24} fontWeight="fontWeightBold" color="secondary.main"> $ 350</Box>
                                                        <Box color="text.secondary" fontSize={12} mb={1} letterSpacing={1}>Commission <Box display="inline"> / <Link href="#" underline="none">View More</Link></Box></Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center" className={classes.sectionDesktop}>
                                                        <Button variant="contained" size="medium" color="secondary" className="baseBtn p-r-15 p-l-15 post_story_btn" disableElevation>VIEW DEAL</Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>



                                    <Grid item xs={12} sm={12} md={4}>
                                        <Paper className="m-t-10 overHide">
                                            <Box display="flex" flexDirection="column">

                                                <Box className={classes.hotelProfile} position="relative">
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={list2}
                                                        title="hotel img"
                                                    />
                                                    <Box display="flex" alignItems="center" position="absolute" right={10} top={10} zIndex={99} >
                                                        <IconButton aria-label="favorite" className={classes.saveLater} fontSize={16}>
                                                            <FavoriteBorderOutlinedIcon />
                                                        </IconButton>
                                                    </Box>

                                                    <Box display="flex" width="100%" height="100%" flexDirection="column" alignItems="flex-start" justifyContent="flex-end" bottom="0px" position="absolute" p={2} className="gradientBg">
                                                        <Box fontWeight={400} letterSpacing={1} fontSize={24} color="primary.contrastText">Woody Star Hotel</Box>
                                                        <Box display="flex" justifyContent="center" alignItems="center" fontWeight="fontWeighlight" fontSize={12} color="primary.contrastText" mb={1} letterSpacing={1}>
                                                            <ExploreIcon fontSize="small" className="m-r-5" />5.5km from Port,  Itlay</Box>
                                                    </Box>
                                                </Box>
                                             
                                                <Box p={2} display="flex" alignItems="right" justifyContent="space-between">
                                                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                                                        <Box fontSize={24} fontWeight="fontWeightBold" color="secondary.main"> $ 480</Box>
                                                        <Box color="text.secondary" fontSize={12} mb={1} letterSpacing={1}>Commission <Box display="inline"> / <Link href="#" underline="none">View More</Link></Box></Box>
                                                    </Box>
                                                    <Box display="flex" alignItems="center" className={classes.sectionDesktop}>
                                                        <Button variant="contained" size="medium" color="secondary" className="baseBtn p-r-15 p-l-15 post_story_btn" disableElevation>VIEW DEAL</Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid> */}



                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>

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
                </Drawer>
            </Hidden>
        </div >
    )
}


export default Details
