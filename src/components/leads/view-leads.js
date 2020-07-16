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



function ViewLeads(props) {

const classes = useStyles()
const leadid = props.match.params.leadid;

const [lead, setLead] = React.useState({ lead: [] }); 
const [user, setUser] = React.useState({ user: [] });
const [hotel, setHotel] = React.useState({ hotel: [] });
const [business, setBusiness] = React.useState({ business: [] });
const [bdetails, setBdetails] = React.useState({ bdetails: [] });
const [rooms, setRooms] = React.useState({ rooms: [] });
const [hstages, setHstages] = React.useState({ hstages: [] }); 
const [currency, setCurrency] = React.useState({ currency: [] });

const [available, setAvailable] = React.useState('');
const [ecurrency, setEcurrency] = React.useState('');
const [ecost, setEcost] = React.useState('');
const [ecatering, setEcatering] = React.useState('');
const [prevenue, setPrevenue] = React.useState('');

let history = useHistory()
const handleSubmit = (e) => {
  e.preventDefault();
  const subdata = {
    leadid: leadid,
    ecurrency: ecurrency,
    available: available,
    ecost: ecost,
    ecatering: ecatering,
    prevenue: prevenue
  } 
  console.log(subdata);
  return axios
    .post('../api/updatelead',subdata,
    {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response) {
          console.log(response);
            history.push('/leads')                
        }
    })
    .catch(err => {
        console.log(err)
    })

}

     useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '../api/view-leads/'+leadid,{
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
          }
      )    
      setLead(result.data.lead)
      setUser(result.data.user)
      setHotel(result.data.hotel)
      setBusiness(result.data.business)
      setBdetails(result.data.bdetails)
      setRooms(result.data)
      setHstages(result.data)
      setCurrency(result.data)

      setAvailable(result.data.lead.hotelier_stage)
      setEcurrency(result.data.lead.currency)
      setEcost(result.data.lead.event_cost)
      setEcatering(result.data.lead.equipment_catering_cost)
      setPrevenue(result.data.lead.projected_revenue)
    }
    fetchData()
  }, []);  

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
        {hstages.hstages.map((stage) => (
            lead.hotelier_stage == stage.id?stage.status:''
        ))}
        </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Agent Name </b><br/>{user.first_name} {lead.last_name}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Agent Contact</b><br/>{user.email}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Agent Business</b><br/>{business.title}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Organization</b><br/>{lead.client_organization}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Organization Type</b><br/>{lead.hl_business_name}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Enquiry Id</b><br/>{lead.lead_id}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Enquiry Date</b><br/>{lead.enqdate}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Agent Commission (%)</b><br/>{hotel.buyer_commission}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Client Type</b><br/>{lead.client_type == 1 ? 'Agent' : 'Corporate'}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Lead Type</b><br/>{lead.lead_type == 1 ? 'Mice' : lead.lead_type == 2 ?'Mice+Room':'Room'}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event Start Date</b><br/>
        {lead.start_date}
        </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event End Date</b><br/>{lead.end_date}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event Type</b><br/>{lead.title}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Event Date Flexible</b><br/>{lead.date_flexible}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Guest Rooms</b><br/>{lead.guest_rooms}</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Equipment/Catering</b><br/>{lead.equipment_catering}</p></Grid>
        {/* <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b></b><br/></p></Grid> */}
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
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Available </b><br/>
        <RadioGroup row aria-label="position" className="m-t-7"
        name="available" 
        defaultValue="top" 
        value={available}
        onChange={e => setAvailable(e.target.value)}>
        <FormControlLabel value="4" checked = {available == 4} control={<Radio color="primary" />} label="Yes" />
        <FormControlLabel value="3" checked = {available == 3} control={<Radio color="primary" />} label="No" />
      </RadioGroup></p></Grid>

      <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Choose Currency</b><br/>
      <FormControl className={classes.formControl} className="m-t-7">
        <NativeSelect
          name="ecurrency"
          fullWidth
          className={classes.selectEmpty}
          value={ecurrency}
          onChange={e => setEcurrency(e.target.value)}
        >
          <option value="">None</option>
          {currency.currency.map((currencytype) => (
          <option value={currencytype.code}>{currencytype.name}-{currencytype.code}</option>
          ))}
        </NativeSelect>
      </FormControl>
      </p></Grid>
      
      <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>{lead.lead_type == 1 ?'Event Cost':lead.lead_type == 2 ?'Event + Rooms Cost':'Rooms Cost' }</b><br/>
      <TextField
        id="outlined-size-small"
        name="event_cost"
        label="Room Cost"
        size="small"
        value={ecost}
        onChange={e => setEcost(e.target.value)}
      />
      </p></Grid>

        {lead.equipment_catering == 'Yes'?
        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Equipments/Catering Cost</b><br/>
        <TextField
          id="outlined-size-small"
          name="event_catering_cost"
          size="small"
          label="Equipments/Catering Cost"
          value={ecatering}
          onChange={e => setEcatering(e.target.value)}
        />
        </p></Grid>:'' }
        <Grid item xs={12} sm={12} md={3} className="p-t-20 p-l-20"><p><b>Total Revenue</b><br/>
        <TextField
          id="outlined-size-small"
          name="projected_revenue"
          label="Total Revenue"
          size="small"
          value={prevenue}
          onChange={e => setPrevenue(e.target.value)}
        />
        </p></Grid>
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
