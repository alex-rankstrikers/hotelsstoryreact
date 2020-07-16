import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles, useTheme } from '@material-ui/core/styles'


import logo from '../assets/images/hotelsstory_logo.svg'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
// import TextField from '@material-ui/core/TextField'
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link'
// import InputBase from '@material-ui/core/InputBase'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import CardMedia from '@material-ui/core/CardMedia'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
//import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
// import ExploreIcon from '@material-ui/icons/Explore'
import Hidden from '@material-ui/core/Hidden'
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
// import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined'
import IconButton from '@material-ui/core/IconButton'
import MyHeader from './common/header'
import listHotelImg from '../assets/images/details-header.jpg'

import Button from '@material-ui/core/Button'

// import eventsIcon from '../assets/images/icons/events.png'

import fands from '../assets/images/icons/fands.svg'
import cocktail from '../assets/images/icons/cocktail.svg'
import masssage from '../assets/images/icons/spa.svg'
import wmachine from '../assets/images/icons/washing-machine.svg'
import parking from '../assets/images/icons/parking.svg'
import wifi from '../assets/images/icons/wireless.svg'
import ac from '../assets/images/icons/air-conditioner.svg'
import clock from '../assets/images/icons/wall-clock.svg'
import gym from '../assets/images/icons/workout.svg'
import pool from '../assets/images/icons/pool.svg'
// import airport from '../assets/images/icons/airport.png'
import airport from '../assets/images/icons/plane.svg'
import beach from '../assets/images/icons/beach.png'


import floor from '../assets/images/new_table_icons/Floor.svg'
import boardroom from '../assets/images/new_table_icons/Boardroom.svg'
import cabaret from '../assets/images/new_table_icons/Cocktail.svg'
import classroom from '../assets/images/new_table_icons/Classroom.svg'
import daylight from '../assets/images/new_table_icons/Daylight.svg'
import dimensions from '../assets/images/new_table_icons/Dimension.svg'
import dinner from '../assets/images/new_table_icons/U_shape.svg'
import reception from '../assets/images/new_table_icons/Banquet.svg'
import theatre from '../assets/images/new_table_icons/Theatre.svg'
// import list1 from '../assets/images/hotels.jpg'
// import list2 from '../assets/images/hotel1.jpg'
// import list3 from '../assets/images/hotel3.jpg'
// import dryer from '../assets/images/elevator.png'
// import ac from '../assets/images/ac.png'
// import bank from '../assets/images/bank.png'
// import cafe from '../assets/images/cafe.png'
import drinks from '../assets/images/drinks.png'
// import freecalls from '../assets/images/free calls.png'
// import food from '../assets/images/friendly.png'
// import health from '../assets/images/health.png'
// import wifi from '../assets/images/wifi.png'
// import games from '../assets/images/games.png'
// import pool from '../assets/images/pool.png'
// import parking from '../assets/images/parking.png'
import MyComponent from './MyComponent'

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
        height: '375px',
    },
    hotelName: {
        textShadow: '0px 0px 7px #000'

    },
    offerWhiteCircle: {
        lineHeight: '46px',
        paddingTop: '30px',
        textTransform: 'uppercase',
        width: '150px',
        height: '150px',
        background: '#ffffff',
        borderRadius: '50%',
        padding: '40px',
        textAlign: 'center',
        /* margin-top: '67px', */
        top: '-59px',
        position: 'absolute',
        left: '-82px',
        boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.52)',
        zIndex: '1',
    },
    offerCircle: {
        color: '#fff',
        fontWeight: '600',
        display: 'inline-block',
        lineHeight: '46px',
        paddingTop: '30px',
        width: '300px',
        height: '300px',
        background: '#f4364f',
        borderRadius: '50%',
        padding: '50px',
        textAlign: 'center',
        // marginTop: '100px',
        // position: 'absolute',
        border: '7px solid #fff',
        boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.52)',
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
    },
    tblSeasonCell: {
        background: '#42af6f',
        color: '#fff',
    },
    iconForPara: {
        position: 'relative',
        top: '3px',
    },
    roundedRight: {
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
    },
    roundedLeft: {
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    },
    th_icon: {
        width: '50px',
        display: 'block',
        margin: '0 auto',
        marginBottom: '10px',
    },
    secondaryThemeButton: {
        background: theme.palette.secondary.contrastText,
        color: theme.palette.secondary.main,
        fontSize: '18px',
        fontWeight: 'bold',
    }
}))



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simply-tabpanel-${index}`}
            aria-labelledby={`simply-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simply-tab-${index}`,
        'aria-controls': `simply-tabpanel-${index}`,
    };
}







function Details(props) {
    const classes = useStyles()

    const slug = props.match.params.slug;

    const { window } = props
    const theme = useTheme()
    const container = window !== undefined ? () => window().document.body : undefined


    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    // const [value, setValue] = React.useState('1');

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [hotel, setHotel] = React.useState({ hotel: [] });
    const [images, setImages] = React.useState({ images: [] });
    // console.log(images);
    const [CapacityChart, setCapacityChart] = React.useState({ CapacityChart: [] });
    const [features, setFeatures] = React.useState({ features: [] });
    const [fooddrinks, setFooddrinks] = React.useState({ fooddrinks: [] });
    const [mfacilities, setMfacilities] = React.useState({ mfacilities: [] });
    const [cbenefits, setCbenefits] = React.useState({ cbenefits: [] });
    const [ofacilities, setOfacilities] = React.useState({ ofacilities: [] });
    const [cfacilities, setCfacilities] = React.useState({ cfacilities: [] });
    const [hotelAddress, setHotelAddress] = React.useState({ hotelAddress: [] });
    const [baseurl, setBaseurl] = React.useState({ baseurl: '' });
    const [crmurl, setCrmurl] = React.useState({ crmurl: '' });

    const [srJan, setsrJan] = React.useState('');
    const [srFeb, setsrFeb] = React.useState('');
    const [srMar, setsrMar] = React.useState('');
    const [srApr, setsrApr] = React.useState('');
    const [srMay, setsrMay] = React.useState('');
    const [srJun, setsrJun] = React.useState('');
    const [srJul, setsrJul] = React.useState('');
    const [srAug, setsrAug] = React.useState('');
    const [srSep, setsrSep] = React.useState('');
    const [srOct, setsrOct] = React.useState('');
    const [srNov, setsrNov] = React.useState('');
    const [srDec, setsrDec] = React.useState('');


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '../api/view-hotel/' + slug, {
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
            })
            setHotel(result.data.hotel)
            setImages(result.data.hotel_images)
            setCapacityChart(result.data)
            setFeatures(result.data)
            setFooddrinks(result.data)
            setMfacilities(result.data)
            setCbenefits(result.data)
            setOfacilities(result.data)
            setCfacilities(result.data)
            setHotelAddress(result.data.hotelAddress)
            setBaseurl(result.data.base_url)
            setCrmurl(result.data.crm_url)

            setsrJan(result.data.srJan)
            setsrFeb(result.data.srFeb)
            setsrMar(result.data.srMar)
            setsrApr(result.data.srApr)
            setsrMay(result.data.srMay)
            setsrJun(result.data.srJun)
            setsrJul(result.data.srJul)
            setsrAug(result.data.srAug)
            setsrSep(result.data.srSep)
            setsrOct(result.data.srOct)
            setsrNov(result.data.srNov)
            setsrDec(result.data.srDec)
        }
        fetchData()
    }, []);




    //drawer
    return (
        <div className="App">
            <MyHeader />
            <CssBaseline />
            <Box mt={12} mb={5}>
                <Container maxWidth className="p-0 pos_rel" position="relative">

                    <CardMedia
                        className={classes.headerMedia}
                        image={crmurl + hotel.image_1}
                        title={hotel.hotel_name}
                    />



                    <Box className="listingHeaderImageOverlay" display="flex" flexDirection="row" justifyContent="center" alignItems="ecnter">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="row" height="100%">
                                <Box display="flex" flexDirection="row" alignItems="left" justifyContent="space-between" width="100%">
                                    <Box className="p-b-10" color="primary.contrastText" fontSize={90} display="flex" height="100%" flexDirection="column" justifyContent="flex-end" alignItems="flex-start">
                                        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                            <Box display="flex" justifyContent="center" alignItems="center" fontWeight="300" ml={0} fontSize={13} color="primary.contrastText" letterSpacing={1}>
                                                {/* BERLIN,  GERMANY */}
                                                {hotelAddress.city_name}, {hotelAddress.country_name}
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="row">
                                            <Box fontSize={36} fontWeight={300} className={classes.hotelName}>
                                                {/* Radisson Blue Hotel  */}
                                                {hotel.hotel_name}
                                            </Box>
                                            {/* <Box display="flex" alignItems="center" ml={2}>
                            <IconButton aria-label="favorite" className={classes.saveLater}>
                                <FavoriteBorderOutlinedIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                        <Box display="flex" alignItems="center" ml={2}>
                            <IconButton aria-label="favorite" className={`${classes.saveLater}`}>
                                <RepeatOutlinedIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                        <Box display="flex" className="photoIcon" alignItems="center" ml={2}>
                            <MyComponent display="inherit" height="30px" />
                        </Box> */}
                                            {/* <Box display="flex" alignItems="center" ml={2}>
                            <IconButton aria-label="favorite" className={`${classes.saveLater}`}>
                                <InsertPhotoOutlinedIcon fontSize="medium" />
                            </IconButton>
                        </Box> */}
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" mb={5}>
                                        <Box fontSize={36} fontWeight={300} color="secondary.contrastText">
                                            {/* Get 4% Commission  */}
                        Get {hotel.commission} Commission
                    </Box>
                                        {/* <Box fontSize={37} className="qs_font sec_txtShadow" p={0} fontWeight="600" color="secondary.contrastText">
                        Get
                    </Box>
                    <Box display="flex" flexDirection="row" my={1} alignItems="center">
                        <Box fontSize={80} className="dm_font whi_textShadow" p={0} fontWeight="fontWeightBold" color="secondary.main" lineHeight="50px">
                            70%
                        </Box>
                        <Box fontSize={40} ml={2} className="sec_txtShadow" color="secondary.contrastText"> off</Box>
                    </Box>
                    <Box fontSize={20} className="sec_txtShadow" color="secondary.contrastText" mb={2}> ON COMMISSION</Box> */}
                                        <Button variant="contained" color="secondary" fontSize={30}>
                                            BOOK DIRECT
                    </Button>
                                    </Box>

                                    {/* <Box display="flex" fontSize={20} flexDirection="column" alignItems="center" justifyContent="flex-end" height="100%">
                    <Box className="dm_font p-t-3 p-b-3 p-l-5 p-r-5" fontSize={18} color="secondary.main" fontWeight="fontWeightBold" borderRadius={5} p={2} bgcolor="secondary.contrastText"> COMMISSION : 70%</Box>
                    <Box className="use_code top_code p-t-3 p-b-3 p-l-15 p-r-15 dm_font" my={3}> RG5481WERQ</Box>
                    <Box mb={5}>
                        <Button variant="contained" size="medium" color="secondary" className="styleBtn" disableElevation>BOOK DIRECT</Button>
                    </Box>
                </Box> */}
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Container>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box bgcolor="#ffbe66" fontSize={20}>
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                <Box display="flex" flexDirection="row" justifyContent="space-between" width="75%" alignItems="center">
                                    <Box fontSize={14} letterSpacing="1px">
                                        <a href="#about" className="dm_font link_anchor_css">ABOUT US</a>
                                    </Box>
                                    <Box fontSize={14} letterSpacing="1px">
                                        <a href="#client-benefits" className="dm_font link_anchor_css">CLIENT BENEFITS</a>
                                    </Box>
                                    <Box fontSize={14} letterSpacing="1px">
                                        <a href="#why-we" className="dm_font link_anchor_css">WHY WE?</a>
                                    </Box>
                                    <Box fontSize={14} letterSpacing="1px">
                                        <a href="#meetings" className="dm_font link_anchor_css">MEETINGS & EVENTS</a>
                                    </Box>
                                    <Box fontSize={14} letterSpacing="1px">
                                        <a href="#rates" className="dm_font link_anchor_css">SEASONAL RATES</a>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center">
                                    <Box display="flex" alignItems="center" ml={2}>
                                        <IconButton aria-label="favorite" className={classes.saveLater}>
                                            <FavoriteBorderOutlinedIcon fontSize="medium" />
                                        </IconButton>
                                    </Box>
                                    <Box display="flex" alignItems="center" ml={2}>
                                        <IconButton aria-label="favorite" className={`${classes.saveLater}`}>
                                            <RepeatOutlinedIcon fontSize="medium" />
                                        </IconButton>
                                    </Box>
                                    <Box display="flex" className="photoIcon" alignItems="center" ml={2}>
                                        <MyComponent images={images} display="inherit" height="30px" />
                                    </Box>
                                </Box>

                            </Box>
                        </Container>
                    </Box>
                </Container>
                <Box py={10} bgcolor="primary.contrastText" id="about">
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box>
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" py={10}>
                                    <Box width="30%" className="dm_font" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                        {/* <Box width="100%" mb={2}>
                                            <img src={logo} alt="Logo" width="25" /> </Box> */}
                                        <Box color="#000" fontSize={12} fontWeight="fontWeightBold" width="100%" letterSpacing="4px">
                                            ABOUT US
                                        </Box>
                                        <Box color="#000" fontSize={38} fontWeight="fontWeightBold" width="100%" letterSpacing="-1px" lineHeight="60px" mt={1}>
                                            Luxury Hotel in the Heart of {hotelAddress.city_name}
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end" flexGrow="1">
                                        <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-end" width="80%">
                                            {/* <Box color="#000" fontSize={22} fontFamily="DM Sans, sans-serif" fontWeight="500" lineHeight="34px" mb={3}>
                                            Hotel Erios is located in the heart of New York’s exciting, historic theater district, just steps away from Times Square.
                                        </Box> */}
                                            <Box color="text.secondary" fontSize={15} fontFamily="DM Sans, sans-serif" fontWeight="500" lineHeight="27px" mb={3}>
                                                {/* With its elegantly-restored, original Art Deco detail and stately accommodations, Hotel Erios is a glowing reflection of Old New York in the modern day, set in a prime location just steps from Times Square. */}
                                                {hotel.description}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </Box>


                <Box py={7} className="setImageBg" bgcolor="#f7f7f7" display="flex" justifyContent="center" id="client-benefits">
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box>
                            <Container maxWidth="xl">
                                <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" py={6}>


                                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                        <Box height="1px" position="relative" bgcolor="#7b4852" width="60%" top="17px" zIndex="1"></Box>
                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" bgcolor="#f4364f" color="primary.contrastText" py={1} px={2} borderRadius="2px" position="relative" zIndex="2">
                                            <StarOutlinedIcon />
                                            <StarOutlinedIcon />
                                            <StarOutlinedIcon />
                                            <StarOutlinedIcon />
                                            <StarOutlinedIcon />
                                        </Box>
                                        <Box textAlign="center" className="qs_font" letterSpacing="-1px" fontSize={34} lineHeight="46px" mt={6} color="secondary.contrastText" fontWeight="700">
                                            GET AMAZING <br />COMMISSION/ OFFERS
                                        </Box>

                                        <Box height="1px" position="relative" bgcolor="#7b4852" width="60%" my={6} ></Box>
                                        <Box textAlign="center" className="qs_font" fontSize={30} lineHeight="46px" color="secondary.contrastText" fontWeight="700">
                                            CLIENT BENEFITS
                                        </Box>

                                        <Box display="flex" justifyContent="space-between" width="100%" alignItems="center" mt={10} flexDirection="row">

                                            {/* {cbenefits.cbenefits.map((benefits) => (
                                        benefits.title == 'Complimentary Breakfast'? */}
                                            {/* <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                                <Box display="flex" justifyContent="center" alignItems="center" className="offer_icon_model">
                                                    <img src={fands} width="100%" alt="fork & spoon" />
                                                </Box>
                                                <Box className="qs_font" fontSize={12} mt={2} color="secondary.contrastText" fontWeight="100" letterSpacing={2}> BREAKFAST</Box>
                                            </Box> */}
                                            {/* :''
                                        ))} */}

                                            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width={60}>
                                                <Box display="flex" justifyContent="center" alignItems="center" className="offer_icon_model">
                                                    <img src={fands} width="100%" alt="fork & spoon" />
                                                </Box>
                                                <Box className="qs_font" fontSize={12} mt={2} color="secondary.contrastText" fontWeight="100" letterSpacing={2}> BREAKFAST</Box>
                                            </Box>

                                            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                                <Box display="flex" justifyContent="center" alignItems="center" className="offer_icon_model">
                                                    <img src={wifi} width="100%" alt="WiFi" />
                                                </Box>
                                                <Box className="qs_font" fontSize={12} mt={2} color="secondary.contrastText" fontWeight="100" letterSpacing={2}> WIFI</Box>
                                            </Box>


                                            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                                <Box display="flex" justifyContent="center" alignItems="center" className="offer_icon_model">
                                                    <img src={clock} width="100%" alt="Clock" />
                                                </Box>
                                                <Box className="qs_font" fontSize={12} mt={2} color="secondary.contrastText" fontWeight="100" letterSpacing={2}> IN/ OUT</Box>
                                            </Box>

                                            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                                <Box display="flex" justifyContent="center" alignItems="center" className="offer_icon_model">
                                                    <img src={ac} width="100%" alt="Air Conditioner" />
                                                </Box>
                                                <Box className="qs_font" fontSize={12} mt={2} color="secondary.contrastText" fontWeight="100" letterSpacing={2}>A.C</Box>
                                            </Box>


                                            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                                <Box display="flex" justifyContent="center" alignItems="center" className="offer_icon_model">
                                                    <img src={drinks} width="100%" alt="Drinks" />
                                                </Box>
                                                <Box className="qs_font" fontSize={12} mt={2} color="secondary.contrastText" fontWeight="100" letterSpacing={2}> DRINKS</Box>
                                            </Box>

                                        </Box>
                                    </Box>

                                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" position="relative">

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className={`${classes.offerWhiteCircle} animate_white_offer`}>
                                            <Box className="qs_font" color="#f4364f" fontSize={45} fontWeight="600">GO</Box>
                                            <Box className="qs_font" color="#333" fontSize={14} letterSpacing="5px" borderBottom={1} borderColor="#333" fontWeight="fontWeightBold" lineHeight="20px">STAYS</Box>
                                        </Box>

                                        <Box color="secondary.contrastText" position="relaive" zIndex="2" className={`${classes.offerCircle} qs_font`}>
                                            <Box className="qs_font" fontSize={40} color="secondary.contrastText">  Get </Box>
                                            <Box className="qs_font" fontSize={75} my={2} color="secondary.contrastText">  {hotel.commission} </Box>
                                            <Box className="qs_font" fontSize={40} color="secondary.contrastText">  Off </Box>
                                            {/* <Box className="use_code"> Use Code: RG5481WERQ</Box> */}
                                            <Box mt={3} fontWeight="900">
                                                <Button variant="contained" size="medium" letterSpacing={1} mt={1} className={`${classes.secondaryThemeButton} qs_font p-r-15 p-l-15`} disableElevation>BOOK DIRECT </Button>
                                            </Box>
                                        </Box>
                                    </Box>


                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </Box>



                {/* className="setPattern" */}
                <Box py={6} className="setPattern" bgcolor="#f7f7f7" id="why-we">
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box>
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" py={4}>
                                    <Box display="flex" className="dm_font" justifyContent="center" alignItems="center" color="#000" fontSize={34} fontWeight="300" width="100%" letterSpacing="0px">
                                        Why Choose Us?
                                    </Box>
                                    <Box display="flex" justifyContent="center" my={2} alignItems="center" textAlign="center" color="text.secondary" fontSize={18} fontWeight="300" width="100%" >
                                        Of is appear in face creeping and whose don’t blessed.<br /> Female our herb you’ll female earth second moveth.
                                    </Box>

                                    {/* <Box display="flex" justifyContent="space-evenly" mt={11} alignItems="center" width="100%" flexDirection="row">
                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow" >
                                                <img src={fands} width="100%" alt="fork & spoon" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> DINNER</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={cocktail} width="100%" alt="cocktail" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> DRINKS</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={pool} width="100%" alt="pool" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> POOL</Box>
                                        </Box>


                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={wmachine} width="100%" alt="washing machine" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> LAUNDARY</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow" >
                                                <img src={masssage} width="100%" alt="masssage" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> SPA</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={wifi} width="100%" alt="WiFi" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> WIFI</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={gym} width="100%" alt="Gym" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> GYM</Box>
                                        </Box>


                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={parking} width="100%" alt="parking" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> PARKING</Box>
                                        </Box>
                                    </Box> */}

                                    <Box display="flex" justifyContent="space-evenly" mt={12} alignItems="center" width="100%" flexDirection="row">
                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow" >
                                                <img src={fands} width="100%" alt="fork & spoon" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> RESTAURANT</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={cocktail} width="100%" alt="cocktail" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> BAR</Box>
                                        </Box>


                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={pool} width="100%" alt="pool" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> POOL</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={airport} width="90%" alt="airport" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> AIRPORT SHUTTLE</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow" >
                                                <img src={masssage} width="100%" alt="masssage" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> SPA</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={wifi} width="100%" alt="WiFi" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}>FREE WIFI</Box>
                                        </Box>


                                        {/* {mfacilities.mfacilities.map((facilities) => (
                                        facilities.title == 'Exercise gym'?
                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={gym} width="100%" alt="Gym" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> GYM</Box>
                                        </Box> :''
                                        ))} */}


                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={parking} width="100%" alt="parking" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> PARKING</Box>
                                        </Box>

                                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                                            <Box display="flex" justifyContent="center" alignItems="center" className="icon_shadow">
                                                <img src={beach} width="100%" alt="beach" />
                                            </Box>
                                            <Box className="dm_font" fontSize={14} mt={5} color="primary.main" fontWeight="100" letterSpacing={2}> BEACH FRONT</Box>
                                        </Box>

                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </Box>


                <Box py={10} bgcolor="secondary.contrastText" id="meetings">
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box>
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="left">


                                    {hotel.meeting_room_status == 1 ?
                                        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="left">

                                            <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexDirection="column">
                                                <Box display="flex" justifyContent="flex-start" alignItems="center" flexDirection="row">

                                                    <Box className="dm_font" fontSize={34} fontWeight="300" lineHeight="30px" letterSpacing="1px">
                                                        Meeting & Events
                                        </Box>
                                                </Box>

                                                <Box display="flex" justifyContent="flex-start" alignItems="center" mt={4} flexDirection="row">
                                                    <Box display="flex" justifyContent="flex-start" alignItems="baseline" flexDirection="row" className="qs_font" fontSize={13} fontWeight="fontWeightBold" color="primary.main">
                                                        MEETING ROOMS: <Box fontSize={25} ml={2} color="secondary.main">{hotel.meet_meeting_room}</Box>
                                                    </Box>
                                                    <Box display="flex" justifyContent="flex-start" alignItems="baseline" flexDirection="row" className={`${classes.customBorder} qs_font`} fontSize={13} borderLeft={2} fontWeight="fontWeightBold" color="primary.main" pl={3} ml={3}>
                                                        MAX. CAPACITY: <Box fontSize={25} ml={2} color="secondary.main">{hotel.meet_max_capacity}</Box>
                                                    </Box>
                                                </Box>


                                            </Box>
                                            <Box display="flex" ml={12} flexDirection="row" justifyContent="flex-start" alignItems="flex-end">
                                                <Box mr={2}>
                                                    <Button variant="contained" size="medium" color="secondary" mr={2} className="huge_btn baseBtn p-r-25 p-l-25 post_story_btn" disableElevation>ENQUIRY NOW</Button>
                                                </Box>

                                            </Box>
                                        </Box> : ''
                                    }
                                    {hotel.meeting_room_status == 1 ?
                                        <Box display="flex" justifyContent="flex-start" alignItems="left" flexDirection="column">
                                            <Box className="dm_font" fontSize={16} fontWeight="300" color="#000" lineHeight="24px" mt={3} mb={3} display="flex" flexDirection="row">
                                                <Box>{hotel.meeting_description}
                                                </Box> </Box>

                                        </Box> : ''
                                    }







                                    <Box display="flex" justifyContent="flex-start" flexDirection="column" mt={7} alignItems="left" id="rates">
                                        <Box display="flex" justifyContent="flex-start" flexDirection="column" className="dm_font" fontSize={27} fontWeight="300" letterSpacing="1px">
                                            Seasonal Rates
                                        </Box>
                                        <Box display="flex" justifyContent="flex-start" flexDirection="column">
                                            <Box display="flex" justifyContent="flex-end" flexDirection="row" alignItems="center">
                                                <Box display="flex" justifyContent="flex-start" flexDirection="row" mt={2}>
                                                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" mr={5}>
                                                        <Box color="secondary.contrastText" bgcolor="#42af6f" width="15px" height="15px" px={0} py={0} mr={1}> </Box>
                                                        <Box className="qs_font" fontWeight="600" fontSize={14}>LOW</Box>
                                                    </Box>
                                                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" mr={5}>
                                                        <Box color="secondary.contrastText" bgcolor="#c82506" width="15px" height="15px" px={0} py={0} mr={1}> </Box>
                                                        <Box className="qs_font" fontWeight="600" fontSize={14}>HIGH</Box>
                                                    </Box>
                                                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row">
                                                        <Box color="secondary.contrastText" bgcolor="#6d6d6d" width="15px" height="15px" px={0} py={0} mr={1}> </Box>
                                                        <Box className="qs_font" fontWeight="600" fontSize={14}>SHOULDER</Box>
                                                    </Box>
                                                </Box>
                                                {/* <Box display="flex" justifyContent="flex-start" flexDirection="row">

                                                    <Link href="#" underline="none">
                                                        <Box className="qs_font" fontSize={18} fontWeight="600">
                                                            VIEW ALL SEASONAL PACKAGES
                                                        </Box>
                                                    </Link>
                                                </Box> */}
                                            </Box>

                                            <Box display="flex" justifyContent="flex-start" flexDirection="row" mt={2} mb={4}>
                                                <Box className={`${classes.roundedLeft} qs_font`} fontSize={14} color="secondary.contrastText" bgcolor={srJan == 'Low' ? '#42af6f' : srJan == 'Shoulder' ? '#6d6d6d' : srJan == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> JAN</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srFeb == 'Low' ? '#42af6f' : srFeb == 'Shoulder' ? '#6d6d6d' : srFeb == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> FEB</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srMar == 'Low' ? '#42af6f' : srMar == 'Shoulder' ? '#6d6d6d' : srMar == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> MAR</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srApr == 'Low' ? '#42af6f' : srApr == 'Shoulder' ? '#6d6d6d' : srApr == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> APR</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srMay == 'Low' ? '#42af6f' : srMay == 'Shoulder' ? '#6d6d6d' : srMay == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> MAY</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srJun == 'Low' ? '#42af6f' : srJun == 'Shoulder' ? '#6d6d6d' : srJun == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> JUN</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srJul == 'Low' ? '#42af6f' : srJul == 'Shoulder' ? '#6d6d6d' : srJul == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> JUL</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srAug == 'Low' ? '#42af6f' : srAug == 'Shoulder' ? '#6d6d6d' : srAug == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> AUG</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srSep == 'Low' ? '#42af6f' : srSep == 'Shoulder' ? '#6d6d6d' : srSep == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> SEP</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srOct == 'Low' ? '#42af6f' : srOct == 'Shoulder' ? '#6d6d6d' : srOct == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> OCT</Box>
                                                <Box className="qs_font" fontSize={14} color="secondary.contrastText" bgcolor={srNov == 'Low' ? '#42af6f' : srNov == 'Shoulder' ? '#6d6d6d' : srNov == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={1} fontWeight="600"> NOV</Box>
                                                <Box className={`${classes.roundedRight} qs_font`} fontSize={14} color="secondary.contrastText" bgcolor={srDec == 'Low' ? '#42af6f' : srDec == 'Shoulder' ? '#6d6d6d' : srDec == 'High' ? '#c82506' : '#6d6d6d'} textAlign="center" width="100%" px={4} py={1} mr={0} borderTopRighttRadius="2px" fontWeight="600"> DEC</Box>
                                            </Box>
                                            {/* <Box className={`${classes.customBorder}`} borderBottom={1} color="grey.300" my={5}>

                                            </Box> */}
                                            <Box>



                                                <AppBar position="static">
                                                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                                        <Tab label="CAPACITY CHART" {...a11yProps(0)} />
                                                        <Tab label="FEATURES" {...a11yProps(1)} />
                                                        <Tab label="FOOD & DRINK" {...a11yProps(2)} />
                                                        <Tab label="Other Facilities" {...a11yProps(3)} />
                                                        <Tab label="COVID Facilities" {...a11yProps(4)} />
                                                        {/* <Tab label="SEASONAL PACKAGES" {...a11yProps(5)} /> */}

                                                    </Tabs>
                                                </AppBar>


                                                <TabPanel value={value} index={0} className="tabPanel_handle">
                                                    <TableContainer component={Paper} p={0}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="center">Room Name</TableCell>
                                                                    <TableCell align="center">  <img src={floor} className={classes.th_icon} alt="floor" /> Floor</TableCell>
                                                                    <TableCell align="center"> <img src={dimensions} className={classes.th_icon} alt="dimensions" /> Dimensions</TableCell>
                                                                    <TableCell align="center"> <img src={daylight} className={classes.th_icon} alt="day light" /> Day Ligiht</TableCell>
                                                                    <TableCell align="center"> <img src={theatre} className={classes.th_icon} alt="theatre" />  Theatre</TableCell>
                                                                    <TableCell align="center"><img src={boardroom} className={classes.th_icon} alt="boardroom" /> Boardroom</TableCell>
                                                                    <TableCell align="center"><img src={classroom} className={classes.th_icon} alt="classroom" /> Classroom</TableCell>
                                                                    <TableCell align="center"><img src={dinner} className={classes.th_icon} alt="dinner dance" /> U - Shape</TableCell>
                                                                    <TableCell align="center"><img src={reception} className={classes.th_icon} alt="reception" /> Banquet</TableCell>
                                                                    <TableCell align="center"><img src={cabaret} className={classes.th_icon} alt="cabaret" /> Cocktail</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>

                                                                {CapacityChart.CapacityChart.map((cchart) => (
                                                                    <TableRow>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.title != null ? cchart.title : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.floor != null ? cchart.floor : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.dimensions != null ? cchart.dimensions : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.day_ligiht == 'Yes' ? <DoneOutlinedIcon color="error" fontSize="large" /> : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.theatre != null ? cchart.theatre : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.boardroom != null ? cchart.boardroom : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.classroom != null ? cchart.classroom : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.ushape != null ? cchart.ushape : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.banquet != null ? cchart.banquet : '-'}
                                                                        </TableCell>
                                                                        <TableCell align="center" component="th" scope="row">
                                                                            {cchart.cocktail != null ? cchart.cocktail : '-'}
                                                                        </TableCell>
                                                                    </TableRow>
                                                                ))}
                                                                {/* <TableRow>
            <TableCell align="center" component="th" scope="row">
                The Study
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                Ground floor
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                5.7 x 4.5 x 3.7
            </TableCell>
            <TableCell align="center" component="th" scope="row">                                                                    
            <DoneOutlinedIcon color="error" fontSize="large" />
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                25
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                12
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                5
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                6
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                -
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                20
            </TableCell>
        </TableRow> */}


                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </TabPanel>



                                                <TabPanel value={value} index={1}>
                                                    <Box display="flex" flexDirection="row">
                                                        <Box display="flex" flexDirection="column" mr={12}>

                                                            {features.features.map((feature) => (
                                                                <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
                                                                    <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
                                                                    <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">{feature.title} </Box>
                                                                </Box>
                                                            ))}
                                                        </Box>


                                                        {/* <Box display="flex" flexDirection="column" mr={12}>

        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">Comfortable Chairs  </Box>
        </Box>


        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">Access to Water and Coffee  </Box>
        </Box>


        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">Power Outlets  </Box>
        </Box>


        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">Wired internet connection   </Box>
        </Box>
        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">PA System   </Box>
        </Box>
    </Box> */}

                                                        {/* <Box display="flex" flexDirection="column" mr={12}>
        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600"> Privacy and Quiet   </Box>
        </Box>


        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">Flipchart(s)  </Box>
        </Box>


        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600"> Multimedia projector(s)    </Box>
        </Box>

        <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
            <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">Peripherals for a Variety of Computers </Box>
        </Box>

    </Box> */}
                                                    </Box>
                                                </TabPanel>





                                                <TabPanel value={value} index={2}>

                                                    <Box display="flex" flexDirection="column" mr={12}>

                                                        {fooddrinks.fooddrinks.map((fooddrink) => (
                                                            <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
                                                                <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
                                                                <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600"> {fooddrink.title}  </Box>
                                                            </Box>
                                                        ))}

                                                        {/* <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
        <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
        <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600">Recommended catering list available </Box>
    </Box> */}
                                                    </Box>

                                                </TabPanel>

                                                <TabPanel value={value} index={3}>
                                                    <Box display="flex" flexDirection="column" mr={12}>

                                                        {ofacilities.ofacilities.map((ofacility) => (
                                                            <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
                                                                <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
                                                                <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600"> {ofacility.title}  </Box>
                                                            </Box>
                                                        ))}

                                                    </Box>
                                                </TabPanel>


                                                <TabPanel value={value} index={4}>
                                                    <Box display="flex" flexDirection="column" mr={12}>

                                                        {cfacilities.cfacilities.map((cfacility) => (
                                                            <Box display="flex" mt={3} flexDirection="row" alignItems="center" justifyContent="flex-start">
                                                                <Box mr={2} display="flex" justifyContent="center"><img src={logo} alt="logo" width="15" /> </Box>
                                                                <Box display="flex" justifyContent="center" className="qs_font" fontSize={17} fontWeight="600"> {cfacility.title}  </Box>
                                                            </Box>
                                                        ))}

                                                    </Box>

                                                </TabPanel>



                                                {/* <TabPanel value={value} index={5}>


                                                    <TableContainer component={Paper} p={0}>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell align="center">Month</TableCell>
                                                                    <TableCell align="center">Season</TableCell>
                                                                    <TableCell align="center">Currency</TableCell>
                                                                    <TableCell align="center">DDR</TableCell>
                                                                    <TableCell align="center">24 Hours Dr</TableCell>
                                                                    <TableCell align="center">What is included in DDR/24Hr. DR	</TableCell>
                                                                    <TableCell align="center">Package</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Jan
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Feb
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Mar
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Apr
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>


                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        May
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>


                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Jun
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Jul
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Aug
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Sep
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Oct
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Nov
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>

                                                                <TableRow>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Dec
				                                                    </TableCell>
                                                                    <TableCell align="center" className={classes.tblSeasonCell} component="th" scope="row">
                                                                        Low
                                                                    </TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        Lek
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                    		</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        view
		                                                	    	</TableCell>
                                                                    <TableCell align="center" component="th" scope="row">
                                                                        -
		                                                	    	</TableCell>

                                                                </TableRow>


                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>


                                                </TabPanel> */}


                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box display="flex" justifyContent="flex-start" alignItems="flex-start" my={8} flexDirection="column">
                                        <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={3} className="qs_font" fontSize={27} fontWeight="600" letterSpacing="1px">
                                            Send your enquiries now and Earn up to <Box display="inline" fontSize={20} px={1} color="secondary.main"> {hotel.commission} </Box>  Commission for this property
                                        </Box>
                                        <Box display="flex" justifyContent="center" width="100%" alignItems="center" mt={4} flexDirection="row">
                                            {hotel.meeting_room_status == 1 ?
                                                <Box mr={4} fontSize={30}>
                                                    <Button variant="contained" size="large" color="secondary" className="huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>ENQUIRE ROOM</Button>
                                                </Box> : ''
                                            }
                                            <Box mr={4}>
                                                <Button variant="contained" size="large" color="secondary" height="50px" className="huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>ENQUIRE VENUE</Button>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Container>
                        </Box>
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
