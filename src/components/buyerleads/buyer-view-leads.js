import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'

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


function ViewLeads(props) {
const classes = useStyles()

const leadid = props.match.params.leadid;
const [lead, setLead] = React.useState({ lead: [] }); 
const [user, setUser] = React.useState({ user: [] });
const [hotel, setHotel] = React.useState({ hotel: [] });
const [business, setBusiness] = React.useState({ business: [] });
const [bdetails, setBdetails] = React.useState({ bdetails: [] });
const [rooms, setRooms] = React.useState({ rooms: [] });
const [bstages, setBstages] = React.useState({ bstages: [] }); 

const initEvent = {leadid:leadid, available:'', arrive:'', depart:'', grooms:[], gpeoples:[]};

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
    return axios.post('../api/buyer-updatelead',event,{
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
  const result = await axios(
    '../api/buyer-view-leads/'+leadid,{
  headers: { Authorization: `Bearer ${localStorage.usertoken}` }
  })    
    setLead(result.data.lead)
    setUser(result.data.user)
    setHotel(result.data.hotel)
    setBusiness(result.data.business)
    setBdetails(result.data.bdetails)
    setRooms(result.data)
    setBstages(result.data)
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
    <Grid item xs={12} sm={12} md={3}><Paper className="m-t-10 m-b-10 p-20"><h3>Advertisement Section</h3></Paper></Grid>
      <Grid item xs={12} sm={12} md={9}>      
             
<Paper className="m-t-10 m-b-10">
<div className={classes.root}>
      <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} className="p-20"><p><b>Enquiry Details</b></p></Grid>
      <Grid item xs={12} sm={12} md={12} className="p-20"><p><b>Enquiry Stage : </b> 
        {bstages.bstages.map((stage) => (
            lead.agent_stage == stage.id?stage.status:''
        ))}
        </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Hotel Name</b><br/>{lead.hotel_name}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Organization</b><br/>{lead.client_organization}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Organization Type</b><br/>{lead.hl_business_name}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Enquiry Id</b><br/>{lead.lead_id}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Enquiry Date</b><br/>{lead.enqdate}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event Start Date</b><br/>{lead.start_date}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b></b><br/>{lead.end_date}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Agent Commission (%)</b><br/>{hotel.buyer_commission}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Lead Type</b><br/>{lead.lead_type == 1 ? 'Mice' : lead.lead_type == 2 ?'Mice+Room':'Room'}</p></Grid>
        
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event Type</b><br/>{lead.title}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event Date Flexible</b><br/>{lead.date_flexible}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Guest Rooms</b><br/>{lead.guest_rooms}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Equipment/Catering</b><br/>{lead.equipment_catering}</p></Grid>
      </Grid>

      <Divider />
      {rooms.rooms.length > 0 ? 
      <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} className="p-t-20 p-l-20 p-b-0"><p><b>Room Details</b></p></Grid>
      {rooms.rooms.map((room) => (
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Date : {room.date}</b><br/>Number of rooms : {room.no_of_guest_rooms} <br/>Number of peoples : {room.people_per_room}</p></Grid>
      ))}
      </Grid>
      : ''}

      {rooms.rooms.length > 0 ? <Divider />:''}
      <form onSubmit={handleSubmit}>
      <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} className="p-t-20 p-l-20 p-b-0"><p><b>Rate Details</b></p></Grid>
        
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Currency</b><br/>{lead.currency}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>{lead.lead_type == 1 ?'Event Cost':lead.lead_type == 2 ?'Event + Rooms Cost':'Rooms Cost' }</b><br/>{lead.event_cost}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Equipments/Catering Cost</b><br/>{lead.equipment_catering_cost}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Total Revenue</b><br/>{lead.projected_revenue}</p></Grid>
        
        
        <Grid item xs={12} sm={12} md={12} className="p-20"><p><b>Request Type</b><br/>
        <RadioGroup row aria-label="position" className="m-t-7"
        name="available" 
        defaultValue="top" 
        onChange={handleChange}
        value={event.available}
        >
        <FormControlLabel value="8" checked = {event.available == 8} control={<Radio color="primary" />} label="Re Request" />
        <FormControlLabel value="6" checked = {event.available == 6} control={<Radio color="primary" />} label="Accept" />
        <FormControlLabel value="3" checked = {event.available == 3} control={<Radio color="primary" />} label="Close" />
        </RadioGroup>
        </p></Grid>

        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Check In</b><br/>
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

        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Check Out</b><br/>
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
        {RoomsSection}

        

        <Grid item xs={12} sm={12} md={12} className="p-20"><p><b></b><br/>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
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

export default ViewLeads
