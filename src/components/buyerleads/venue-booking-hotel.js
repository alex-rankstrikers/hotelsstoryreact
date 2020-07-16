import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'

// import useBreakpoints from './common/useBreakpoint';

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import avatarImg from '../../assets/images/dummyuser.jpg'
import profileBg from '../../assets/images/profilebg.jpg'
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
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
// const point = useBreakpoints();

// http://localhost/hotelsstory-partner/public/leads_api

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SaveIcon from '@material-ui/icons/Save';

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




function VenueBooking(props) {

const classes = useStyles()
const user_id=`${localStorage.user_id}`

const [hotels, setHotels] = React.useState({ hotels: [] });
const [events, setEvents] = React.useState({ events: [] });
const [orgtypes, setOrgtypes] = React.useState({ orgtypes: [] });

const initEvent = {user_id:user_id, hotel_id: '', event_id: '', arrive: '', depart: '', date_flex: '', guest_rooms: '',
                    meeting_space: '', attendees: '', equip_cate: '', organization: '', org_type: '',
                    about_event: '', agree: '', grooms: [], gpeoples: []};

const [event, setEvent] = useState(initEvent);
console.log(event);
const handleChange = e => {
    const {name, value} = e.target;
    setEvent({...event, [name]: value});
}

const roomChange = (i) => (e) => {
  const roomCopy = { ...event };
  roomCopy.grooms[i] = e.target.value;
  setEvent(roomCopy);
};

const peopleChange = (i) => (e) => {
  const peopleCopy = { ...event };
  peopleCopy.gpeoples[i] = e.target.value;
  setEvent(peopleCopy);
};

let history = useHistory()
const handleSubmit = e => {

    e.preventDefault();

    return axios.post('../api/venue-booking-store',event,{
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response) {
            history.push('/buyer-leads')                
        }
    })
    .catch(err => {
        console.log(err)
    })

}

useEffect(() => {
    const fetchData = async () => {
    const result = await axios('api/venue-booking',{
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
    })    
        setHotels(result.data)
        setEvents(result.data)
        setOrgtypes(result.data)
    }
    fetchData()
}, []);  

const oneDay = 24 * 60 * 60 * 1000;
const firstDate = new Date(event.arrive);
const secondDate = new Date(event.depart);
const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)+1);

let RoomsSection = [];

for (var i = 0; i < diffDays; i++) {
  RoomsSection.push(
  <Grid container spacing={0}>

  <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Day-{i+1}</b><br/></p></Grid>

  <Grid item xs={12} sm={12} md={3} className="p-20">
  <p><b>No of guest rooms</b><br/>
  <TextField style={{minWidth:"80%"}}
  id="outlined-size-small"
  name="grooms"
  variant="outlined"
  size="small"
  placeholder=""
  onChange={roomChange(i)}
  value={event.grooms[i]} />
  </p></Grid>

  <Grid item xs={12} sm={12} md={3} className="p-20">
  <p><b>No of peoples per room</b><br/>
  <TextField style={{minWidth:"80%"}}
  id="outlined-size-small"
  name="gpeoples"
  variant="outlined"
  size="small"
  onChange={peopleChange(i)}
  value={event.gpeoples[i]} />
  </p></Grid>

  <Grid item xs={12} sm={12} md={3} className="p-20"></Grid>

  </Grid>
  );
}

return (
<div className="App">
<MyHeader />      
<CssBaseline />
<Box mt={16} mb={5}>
<Container maxWidth="xl">
<Grid container spacing={2} >
<Grid item xs={12} sm={12} md={12}>      

<Paper className="m-t-10 m-b-10">
<div className={classes.root}>

<form>
<Grid container spacing={0}>
<Grid item xs={12} sm={12} md={12} className="p-t-20 p-l-20 p-b-20"><p><b>Event Details<br/><br/>Tell us about your event! These details will help your request receive fast and accurate quotes from our partner hotels.
</b></p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Hotel Name</b><br/>
<FormControl className={classes.formControl} className="m-t-7">
<NativeSelect
name="hotel_id"
fullWidth
onChange={handleChange}
value={event.hotel_id}
className={classes.selectEmpty} >
<option value="">Select</option>
{hotels.hotels.map((hotel) => (
    <option value={hotel.id}>{hotel.hotel_name}</option>
))}
</NativeSelect>
</FormControl>
</p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event Type</b><br/>
<FormControl className={classes.formControl} className="m-t-7">
<NativeSelect
name="event_id"
fullWidth
onChange={handleChange}
value={event.event_id}
className={classes.selectEmpty} >
<option value="">Select</option>
{events.events.map((event) => (
    <option value={event.id}>{event.title}</option>
))}
</NativeSelect>
</FormControl>
</p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Arriving On</b><br/>
<TextField
id="date"
name="arrive"
onChange={handleChange}
value={event.arrive}
type="date"
className={classes.textField}
InputLabelProps={{
    shrink: true,
}}
/>
</p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Departing On</b><br/>
<TextField
id="date"
name="depart"
onChange={handleChange}
value={event.depart}
type="date"
className={classes.textField}
InputLabelProps={{
    shrink: true,
}}
/>
</p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Are your event dates flexible</b><br/>
<RadioGroup row aria-label="position" className="m-t-7"
name="date_flex" 
defaultValue="top" 
onChange={handleChange}
value={event.date_flex}  >
<FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
<FormControlLabel value="No"  control={<Radio color="primary" />} label="No" />
</RadioGroup></p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Does your event need guest rooms</b><br/>
<RadioGroup row aria-label="position" className="m-t-7"
name="guest_rooms" 
defaultValue="top" 
onChange={handleChange}
value={event.guest_rooms}  >
<FormControlLabel value="Yes"  control={<Radio color="primary" />} label="Yes" />
<FormControlLabel value="No"  control={<Radio color="primary" />} label="No" />
</RadioGroup></p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Does your event need meeting space</b><br/>
<RadioGroup row aria-label="position" className="m-t-7"
name="meeting_space" 
defaultValue="top" 
onChange={handleChange}
value={event.meeting_space}  >
<FormControlLabel value="Yes"  control={<Radio color="primary" />} label="Yes" />
<FormControlLabel value="No"  control={<Radio color="primary" />} label="No" />
</RadioGroup></p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Attendees per day</b><br/>
<TextField style={{minWidth:"80%"}}
id="outlined-size-small"
name="attendees"
variant="outlined"
size="small"
onChange={handleChange}
value={event.attendees} />
</p></Grid>

{event.guest_rooms == 'Yes' ? RoomsSection :''}

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Does your event need equipment/catering</b><br/>
<RadioGroup row aria-label="position" className="m-t-7"
name="equip_cate" 
defaultValue="top" 
onChange={handleChange}
value={event.equip_cate}  >
<FormControlLabel value="Yes"  control={<Radio color="primary" />} label="Yes" />
<FormControlLabel value="No"  control={<Radio color="primary" />} label="No" />
</RadioGroup></p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Client Organization</b><br/>
<TextField style={{minWidth:"80%"}}
id="outlined-size-small"
name="organization"
variant="outlined"
size="small"
onChange={handleChange}
value={event.organization} />
</p></Grid>

<Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Organization Type</b><br/>
<FormControl className={classes.formControl} className="m-t-7">
<NativeSelect
name="org_type"
fullWidth
onChange={handleChange}
value={event.org_type}
className={classes.selectEmpty} >
<option value="">Select</option>
{orgtypes.orgtypes.map((org) => (
    <option value={org.hl_mt_bus_id}>{org.hl_business_name}</option>
))}
</NativeSelect>
</FormControl>
</p></Grid>

<Grid item xs={12} sm={12} md={9} className="p-20"><p><b>Tell us more about your event</b><br/>
<TextField style={{maxWidth:"80%"}}
id="standard-full-width"
label=""
style={{ margin: 8 }}
placeholder=""
fullWidth
margin="normal"
multiline
name="about_event"
value={event.about_event}
onChange={handleChange}
InputLabelProps={{
shrink: true,
}}
/>
</p></Grid>

<Grid item xs={12} sm={12} md={9} className="p-20"><p>
<FormControlLabel
name="agree"
value="Yes"
onChange={handleChange}
control={<Checkbox color="primary" />}
label="By checking this box, I agree to share the personal information provided on this RFP to the selected hotels.
To learn more, read HotelsStory's Privacy Policy and Terms of Use."
labelPlacement="end"
/>
</p></Grid>


<Grid item xs={12} sm={12} md={12} className="p-20"><p><b></b><br/>
<Button
type="submit"
variant="contained"
color="primary"
size="large"
onClick={handleSubmit}
className={classes.button}
startIcon={<SaveIcon />}
>Save
</Button></p></Grid>

</Grid>
</form>
</div>
</Paper>
</Grid>
</Grid>
</Container>
</Box>
</div>
)
}

export default VenueBooking
