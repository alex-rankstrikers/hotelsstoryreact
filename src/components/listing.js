import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles, useTheme } from '@material-ui/core/styles'

// import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import MyHeader from './common/header';
import history from '../History'
import InputBase from '@material-ui/core/InputBase'

import Drawer from '@material-ui/core/Drawer'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'


import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';


// import Tooltip from '@material-ui/core/Tooltip'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
// import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined'
import ExploreIcon from '@material-ui/icons/Explore'

import Hidden from '@material-ui/core/Hidden'
// import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined'
// import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined'
// import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined'
// import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined'
// import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined'
// import TvOutlinedIcon from '@material-ui/icons/TvOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined'
import IconButton from '@material-ui/core/IconButton'
import MyHeader from './common/header'


import listHotelImg from '../assets/images/hotel2.jpg'

import list1 from '../assets/images/hotels.jpg'
import list2 from '../assets/images/hotel1.jpg'
import list3 from '../assets/images/hotel3.jpg'


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
    saveLater: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(2),
    },
    textInput: {
        borderRadius: '30px',
    },
    customBorder: {
        borderColor: '#cccccc7a',
    },
    inputKeyword: {
        borderTopLeftRadius: '30px',
        borderBottomLeftRadius: '30px',
        borderRight: '0px',
        backgroundColor: '#fff',
        border: 'none',
        paddingLeft: '15px',
        width: '100%',
        height: '40px',
        [theme.breakpoints.up('md')]: {
            width: '350px',
        },
        // '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        //     borderWidth: '0px',
        // },
        // '&:hover .MuiOutlinedInput-notchedOutline': {
        //     border: 'none',
        // },
    },
    inputLocation: {
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderRadius: '0px',
        backgroundColor: '#fff',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    fullHeight: {
        height: '100%',
    },
    adv_search_btn: {
        borderTopLeftRadius: '0px !important',
        borderBottomLeftRadius: '0px !important',
        width: '100px',
        height: '53px',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '30px',
    },
    adv_search_btn_Left: {
        borderTopLeftRadius: '30px !important',
        borderBottomLeftRadius: '30px !important',
        width: '100px',
        height: '53px',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        marginRight: '1px',
    },
    applyFilterBtn: {
        width: '150px',
    }
    // locationSelect: {
    //     background:'red',
    //     '.MuiFormControl-root': {
    //         width: '100%',
    //     }
    // }
}))




// const useStylesBootstrap = makeStyles((theme) => ({
//   arrow: {
//     color: theme.palette.common.black,
//   },
//   tooltip: {
//     backgroundColor: theme.palette.common.black,
//   },
// }))

// function BootstrapTooltip(props) {
//   const classes = useStylesBootstrap()

//   return <Tooltip arrow classes={classes} {...props} />
// }
function valuetext(value) {
    return `${value}K $`
}



function Listing(props) {
    const classes = useStyles()

    const { window } = props
    const theme = useTheme()
    const container = window !== undefined ? () => window().document.body : undefined

    const [state, setState] = React.useState({
        amenities1: false,
        amenities2: false,
        amenities3: false,
        amenities4: false,
        amenities5: false,
        amenities6: false,
        amenities7: true,
        amenities8: false,
        amenities9: false,
        amenities10: false,
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }
    const [locations, setLocations] = React.useState('')
    const handleChangeSelect = (event) => {
        setLocations(event.target.value)
    }
    const [rooms, setRooms] = React.useState('')
    const handleChangeSelectRooms = (event) => {
        setRooms(event.target.value)
    }

    const [value, setPrice] = React.useState([13, 80])

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue)
    }

    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const [hotels, setHotels] = React.useState({ hotels: [] });
    const [baseurl, setBaseurl] = React.useState({ baseurl: '' });
    const [crmurl, setCrmurl] = React.useState({ crmurl: '' });
    const [searchSlug, setSearchSlug] = React.useState('');

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            '../api/hotels-listing',{
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })    
            setHotels(result.data)
            setBaseurl(result.data.base_url)
            setCrmurl(result.data.crm_url)
        }
            fetchData()
    }, []);


    const searchSubmit = e => {

        e.preventDefault();

        return axios.get('../api/hotels-listing/'+e.target.value,{
            headers: { 'Content-Type': 'application/json' }
        })
        .then(result => {
            if(result) {
                setHotels(result.data)
                setBaseurl(result.data.base_url)
                setCrmurl(result.data.crm_url)
              history.push('/listing')                
            }
        })
        .catch(err => {
            console.log(err)
        })
    
    }

    // drawer
    const drawer = (
        <Grid item xs={12} sm={12} md={12}>
            <Box className=" m-t-10 overHide">
                <Box borderBottom={1} borderColor="grey.100" className={classes.customBorder} display="flex" flexDirection="row" justifyContent="space-between">
                    <Box textAlign="left" display="flex" alignItems="center" justifyContent="center" p={2} fontSize={14} color="primary.main" fontWeight={600} >
                        AMENITIES
          </Box>
                </Box>
                <Box className="setFontSize14" display="flex" alignItems="left" fontWeight="fontWeightNormal" justifyContent="flex-start" flexDirection="row" textAlign="left" p={2} fontSize={16} color="primary.main" >
                    <Box display="flex">
                        <FormGroup column>
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities1} onChange={handleChange} name="amenities1" />}
                                label="Casino"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities2} onChange={handleChange} name="amenities2" />}
                                label="Elevator"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities3} onChange={handleChange} name="amenities3" />}
                                label="WiFi"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities4} onChange={handleChange} name="amenities4" />}
                                label="Parking"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities5} onChange={handleChange} name="amenities5" />}
                                label="Restaurant"
                            />
                        </FormGroup>
                    </Box>
                    <Box display="flex">
                        <FormGroup column>
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities6} onChange={handleChange} name="amenities6" />}
                                label="Spa"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities7} onChange={handleChange} name="amenities7" />}
                                label="Biking"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities8} onChange={handleChange} name="amenities8" />}
                                label="Mini Bar"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities9} onChange={handleChange} name="amenities9" />}
                                label="Room Service"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={state.amenities10} onChange={handleChange} name="amenities10" />}
                                label="Health Club"
                            />
                        </FormGroup>
                    </Box>
                </Box>
                <Box width="100%" display="flex" flexDirection="column" className="p-10">
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Choose Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={locations}
                            onChange={handleChangeSelect}
                        >
                            <MenuItem value={1}>Berlin</MenuItem>
                            <MenuItem value={2}>Moscow</MenuItem>
                            <MenuItem value={3}>Italy</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box width="100%" display="flex" flexDirection="column" className="p-10">
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Types of Hotels.</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rooms}
                            onChange={handleChangeSelectRooms}
                        >
                            <MenuItem value={1}>Villa</MenuItem>
                            <MenuItem value={2}>Cottage</MenuItem>
                            <MenuItem value={3}>3 Star</MenuItem>
                            <MenuItem value={4}>5 Star</MenuItem>
                        </Select>
                    </FormControl>
                </Box>


                {/* <Box display="flex" flexDirection="column" className="p-10">
                    <Box className="m-b-5">
                        <TextField
                            id="date"
                            label="Check In Date"
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /> </Box>
                    <Box className="p-l-5">
                        <TextField
                            id="date1"
                            label="Check Out Date"
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /></Box>
                </Box> */}


                <Box className="p-10">
                    <Typography id="range-slider" variant="small" gutterBottom>
                        Commission range
          </Typography>
                    <Slider
                        value={value}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                    />
                </Box>

                <Box display="flex" alignItems="center" className="p-10" justifyContent="center" flexGrow="1">
                    <Button variant="contained" size="medium" color="secondary" textAlign="center" width="100%" className={`${classes.applyFilterBtn} baseBtn p-r-15 p-l-15`} disableElevation>APPLY FILTERS</Button>
                </Box>
            </Box >
        </Grid >
    )

    //drawer
    return (
        <div className="App">
            <MyHeader />
            <CssBaseline />
            <Box mt={12} mb={5}>
    <Container maxWidth className="p-0 pos_rel" position="relative">

        <CardMedia
            className={classes.media}
            image={listHotelImg}
            title="Paella dish"
        />

        <Box className="listingHeaderImageOverlay" display="flex" flexDirection="row" justifyContent="center" alignItems="ecnter">
            <Box color="primary.contrastText" fontSize={90} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                
                
                <form>
                <Box display="flex" flexDirection="row" justifyContent="center" bgcolor="none" alignItems="center">
                    <InputBase
                        className={classes.margin}
                        placeholder="Keywords"
                        type="search"
                        // onChange={e => setSearchSlug(e.target.value)}
                        onChange={searchSubmit}
                        inputProps={{
                            'aria-label': 'search',
                            className: classes.inputKeyword
                        }}
                    />

                    {/* <TextField id="searchKeyword"
                        placeholder="Keywords"
                        type="search"
                        variant="outlined"
                        InputProps={{
                            className: classes.inputKeyword,
                        }}
                    />
                    <TextField id="searchLocation"
                        placeholder="Location"
                        type="search"
                        variant="outlined"
                        InputProps={{
                            className: classes.inputLocation,
                        }}
                    /> */}

                    <Button 
                    type="submit" 
                    variant="contained" 
                    size="medium" 
                    color="secondary" 
                    className={classes.adv_search_btn} 
                    disableElevation>
                    <SearchOutlinedIcon fontSize="large" />
                    </Button>

                </Box>
                </form>

                <Box className="m-l-10" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Button variant="contained" size="medium" color="secondary" className={classes.adv_search_btn_Left} disableElevation onClick={handleDrawerToggle}>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <FilterListOutlinedIcon fontSize="medium" />
                            <Box fontSize={10} letterSpacing={1} className="m-t-0">Filters</Box>
                        </Box>
                    </Button>
                    <Button variant="contained" size="medium" color="secondary" className={classes.adv_search_btn} disableElevation>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <FavoriteBorderOutlinedIcon fontSize="medium" />
                            <Box fontSize={10} letterSpacing={1} className="m-t-0">Favourites</Box>
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    </Container>


    
                <Box mt={3}>
                    <Container maxWidth="xl">
                        <Grid container spacing={2} >


                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container spacing={2}>

                                    {/* <Grid item xs={12} sm={12} md={12}>
                                        <Box display="flex" flexDirection="row" flexRow="1" justifyContent="flex-end">
                                            <Box display="flex" alignItems="center">
                                                <IconButton aria-label="favorite" className={classes.saveLater} fontSize={16}>
                                                    <FavoriteBorderOutlinedIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Grid> */}



{hotels.hotels.map((hotel) => (
<Grid item xs={12} sm={12} md={4}>
    <Paper className="m-t-10 overHide">
        <Box display="flex" flexDirection="column">

            <Box className={classes.hotelProfile} position="relative">
                <CardMedia
                    className={classes.media}
                    image={crmurl+hotel.image_1}
                    title="hotel img"
                />
                <Box display="flex" alignItems="center" position="absolute" right={10} top={10} zIndex={1} >
                    <IconButton aria-label="favorite" className={classes.saveLater}>
                        <FavoriteBorderOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="favorite" className={`${classes.saveLater} m-l-10`}>
                        <RepeatOutlinedIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box display="flex" width="100%" height="100%" flexDirection="column" alignItems="flex-start" justifyContent="flex-end" bottom="0px" position="absolute" p={2} className="gradientBg">

                    <Link onClick={() => history.push('/view-hotel/'+hotel.slug)} className="cursor_anchor"> <Box fontWeight={400} letterSpacing={1} fontSize={24} color="primary.contrastText">{hotel.hotel_name}</Box></Link>
                    <Box display="flex" justifyContent="center" alignItems="center" fontWeight="fontWeighlight" fontSize={12} color="primary.contrastText" mb={1} letterSpacing={1}>
                        <ExploreIcon fontSize="small" className="m-r-5" />
                        {/* 2.5km from Airport,  Berlin */}
                        {hotel.airport_from}{hotel.city !=''?','+hotel.city:''}
                        </Box>
                </Box>
            </Box>
            {/* <Box display="flex" flexDirection="row" justifyContent="center" p={2} alignItems="center">
<Box fontSize={16} fontWeight="fontWeightMedium" letterSpacing={1} color="primary.dark" mr={2}>
        Amenities:
</Box>
<Box display="flex" flexDirection="row" flexGrow="1" justifyContent="space-between" p={0} alignItems="left">
<Box display="flex" flexDirection="row" alignItems="center" justifyContent="left" className="hotel_amenities">
<BootstrapTooltip title="Free-WiFi">
<WifiOutlinedIcon />
</BootstrapTooltip>
<BootstrapTooltip title="Cab Facility">
<DriveEtaOutlinedIcon />
</BootstrapTooltip>

<BootstrapTooltip title="Free Bike">
<DirectionsBikeOutlinedIcon />
</BootstrapTooltip>

<BootstrapTooltip title="Breakfast, Dinner">
<RestaurantMenuOutlinedIcon />
</BootstrapTooltip>

<BootstrapTooltip title="Bar Facility">
<LocalBarOutlinedIcon />
</BootstrapTooltip>

<BootstrapTooltip title="Cafe Hub">
<EmojiFoodBeverageOutlinedIcon />
</BootstrapTooltip>

<BootstrapTooltip title="HD Movies">
<TvOutlinedIcon />
</BootstrapTooltip>
<Link href="#" underline="none">
<Box width="29px" height="29px" lineHeight="2.3" textAlign="center" borderRadius="50%" color="primary.contrastText" bgcolor="primary.main"> 7+</Box>
</Link>
</Box>
</Box>
</Box> */}
            <Box p={2} display="flex" alignItems="right" justifyContent="space-between">
                <Box display="flex" flexDirection="column" justifyContent="flex-start">
                    <Box fontSize={24} fontWeight="fontWeightBold" color="secondary.main"> {hotel.rates_from != ''?hotel.c_symbol+''+hotel.rates_from:'NA'}</Box>
<Box color="text.secondary" fontSize={12} mb={1} letterSpacing={1}>{hotel.commission} Commission <Box display="inline"> / <Link href="#" underline="none" onClick={() => history.push('/view-hotel/'+hotel.slug)}>View More</Link></Box></Box>
                </Box>
                <Box display="flex" alignItems="center" className={classes.sectionDesktop}>
                    <Button onClick={() => history.push('/view-hotel/'+hotel.slug)} variant="contained" size="medium" color="secondary" className="baseBtn p-r-15 p-l-15 post_story_btn" disableElevation>VIEW DEAL</Button>
                </Box>
            </Box>
        </Box>
    </Paper>
</Grid>
))}


{/* <Grid item xs={12} sm={12} md={4}>
    <Paper className="m-t-10 overHide">
        <Box display="flex" flexDirection="column">

            <Box className={classes.hotelProfile} position="relative">
                <CardMedia
                    className={classes.media}
                    image={list3}
                    title="hotel img"
                />
                <Box display="flex" alignItems="center" position="absolute" right={10} top={10} zIndex={1} >
                    <IconButton aria-label="favorite" className={classes.saveLater} fontSize={16}>
                        <FavoriteBorderOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="favorite" className={`${classes.saveLater} m-l-10`}>
                        <RepeatOutlinedIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box display="flex" width="100%" height="100%" flexDirection="column" alignItems="flex-start" justifyContent="flex-end" bottom="0px" position="absolute" p={2} className="gradientBg">
                    <Box fontWeight={400} letterSpacing={1} className="hand_cursor" fontSize={24} color="primary.contrastText">Atlassian Beach View</Box>
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
</Grid> */}



{/* <Grid item xs={12} sm={12} md={4}>
    <Paper className="m-t-10 overHide">
        <Box display="flex" flexDirection="column">

            <Box className={classes.hotelProfile} position="relative">
                <CardMedia
                    className={classes.media}
                    image={list2}
                    title="hotel img"
                />
                <Box display="flex" alignItems="center" position="absolute" right={10} top={10} zIndex={1} >
                    <IconButton aria-label="favorite" className={classes.saveLater}>
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="favorite" className={`${classes.saveLater} m-l-10`}>
                        <RepeatOutlinedIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box display="flex" width="100%" height="100%" flexDirection="column" alignItems="flex-start" justifyContent="flex-end" bottom="0px" position="absolute" p={2} className="gradientBg">
                    <Box fontWeight={400} letterSpacing={1} className="hand_cursor" fontSize={24} color="primary.contrastText">Woody Star Hotel</Box>
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
                    {drawer}
                </Drawer>
            </Hidden>
        </div>
    )
}


export default Listing
