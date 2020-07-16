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

  buttonSave: {
    borderRadius: '50px',
    width: '175px',
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




function RoomBooking(props) {

  const classes = useStyles()
  const user_id = `${localStorage.user_id}`



  //Check box multi select
  const [state, setContact] = useState({ hobbies: ["Vollyball"] });



  const [cliben, setCliben] = React.useState({ cliben: [] });
  const [clibenval, setClibenval] = React.useState({ clibenval: [] });

  const [hotels, setHotels] = React.useState({ hotels: [] });
  const [events, setEvents] = React.useState({ events: [] });
  const [orgtypes, setOrgtypes] = React.useState({ orgtypes: [] });
  console.log(clibenval);

  const initEvent = {
    user_id: user_id, hotel_id: '', arrive: '', depart: '', date_flex: '', extend_stays: '',
    no_of_children: '', organization: '', org_type: '', about_event: '', agree: '',
    grooms: [], gpeoples: [], clibenval: clibenval
  };

  const [event, setEvent] = useState(initEvent);

  const handleChange = e => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  }

  const extendChange = e => {
    if (e.target.type === 'checkbox' && !e.target.checked) {
      setEvent({ ...event, [e.target.name]: '' });
    } else {
      setEvent({ ...event, [e.target.name]: e.target.value });
    }
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

    return axios.post('../api/room-booking-store', event, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response) {
          console.log(response);
          // history.push('/buyer-leads')                
        }
      })
      .catch(err => {
        console.log(err)
      })

  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('api/room-booking', {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      })
      setClibenval({ clibenval: result.data.clibenval })
      setCliben(result.data)
      setHotels(result.data)
      setEvents(result.data)
      setOrgtypes(result.data)
    }
    fetchData()
  }, []);

  //console.log(cliben);

  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(event.arrive);
  const secondDate = new Date(event.depart);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay) + 1);


  let RoomsSection = [];

  for (var i = 0; i < diffDays; i++) {
    RoomsSection.push(
      <Grid container spacing={0}>

        <Grid item xs={12} sm={12} md={3} className="p-20"><p><b>Day-{i + 1}</b><br /></p></Grid>

        <Grid item xs={12} sm={12} md={3} className="p-20">
          <p><b>No of guest rooms</b><br />
            <TextField style={{ minWidth: "80%" }}
              id="outlined-size-small"
              name="grooms"
              variant="outlined"
              size="small"
              placeholder=""
              onChange={roomChange(i)}
              value={event.grooms[i]} />
          </p></Grid>

        <Grid item xs={12} sm={12} md={3} className="p-20">
          <p><b>No of peoples per room</b><br />
            <TextField style={{ minWidth: "80%" }}
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

                  <form onSubmit="">
                    <Grid container spacing={0} className="p-20">

                      <Grid item xs={12} sm={12} md={12} className="p-t-20 p-b-20">
                        <Box textAlign="left" className="dm_font page_heading" fontSize={27} mt={0} mb={4}> Basic Details</Box>
                        <Box textAlign="left" className="dm_font page_heading" fontSize={20}>Tell us about your booking! These details will help your request receive fast and accurate quotes from our partner hotels.</Box>
                      </Grid>
                      {/* 
<Grid item xs={12} sm={12} md={12} className="p-t-20 p-l-20 p-b-20"><p><b>Basic Details<br/><br/>Tell us about your booking! These details will help your request receive fast and accurate quotes from our partner hotels.
</b></p></Grid> */}

                      <Grid item xs={12} sm={12} md={3} spacing={2} className="p-l-0 p-r-10">
                        {/* <p><b>Hotel Name</b><br/> */}
                        <FormControl fullWidth className={classes.formControl}>
                          {/* <NativeSelect
name="hotel_id"
fullWidth
onChange={handleChange}
value={event.hotel_id}
className={classes.selectEmpty} >
<option value="">Select</option>
{hotels.hotels.map((hotel) => (
    <option value={hotel.id}>{hotel.hotel_name}</option>
))}
</NativeSelect> */}
                          <InputLabel id="demo-simple-select-label" fullWidth>Hotel Name</InputLabel>
                          <Select fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="hotel_id"
                            fullWidth
                            onChange={handleChange}
                            value={event.hotel_id}
                            className={classes.selectEmpty}>
                            <MenuItem value="">Select</MenuItem>
                            {hotels.hotels.map((hotel) => (
                              <MenuItem value={hotel.id}>{hotel.hotel_name}</MenuItem>
                            ))}
                            {/*                             
                            <MenuItem value={1}>Hotel 1</MenuItem>
                            <MenuItem value={2}>Hotel 2</MenuItem>
                            <MenuItem value={3}>Hotel 3</MenuItem>
                            <MenuItem value={4}>Hotel 4</MenuItem>
                            <MenuItem value={5}>Hotel 5</MenuItem> */}
                          </Select>

                        </FormControl>
                        {/* </p> */}
                      </Grid>

                      <Grid item xs={12} sm={12} md={3} spacing={2} className="p-l-10 p-r-10">
                        {/* <p><b>Check In</b><br /> */}

                        <FormControl className={classes.formControl} fullWidth>
                          <TextField
                            id="date"
                            name="arrive"
                            label="Check In"
                            onChange={handleChange}
                            value={event.arrive}
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </FormControl>
                        {/* </p> */}
                      </Grid>

                      <Grid item xs={12} sm={12} md={3} spacing={2} className="p-l-10 p-r-10">
                        {/* <p><b>Check Out</b><br /> */}
                        <FormControl className={classes.formControl} fullWidth>
                          <TextField
                            id="date"
                            name="depart"
                            label="Check Out"
                            onChange={handleChange}
                            value={event.depart}
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </FormControl>
                        {/* </p> */}
                      </Grid>

                      <Grid item xs={12} sm={12} md={3} spacing={2} className="p-l-10 p-r-10">
                        {/* <p><b>Are your dates are flexible</b><br /> */}

                        <FormLabel component="legend">Are your dates are flexible?</FormLabel>
                        <RadioGroup row aria-label="position" className="m-t-0"
                          name="date_flex"
                          defaultValue="top"
                          onChange={handleChange}
                          value={event.date_flex}  >
                          <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                          <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                        {/* </p> */}
                      </Grid>

                      {RoomsSection}

                      <Grid item xs={12} sm={12} md={3} spacing={2} className="p-l-0 p-r-10">
                        {/* <p> */}
                        <FormControlLabel
                          name="extend_stays"
                          value="Yes"
                          checked={event.extend_stays}
                          onChange={extendChange}
                          control={<Checkbox color="primary" />}
                          label="Extented Stays"
                          labelPlacement="end"
                        />
                        {/* </p> */}
                      </Grid>






                      {cliben.cliben.map((cli) => (
                        <Grid item xs={12} sm={12} md={3} className="p-20"><p>
                          <FormControlLabel
                            value={cli.bcbm_id}
                            checked={clibenval.clibenval.includes(cli.bcbm_id)}

                            onChange={e => {
                              if (e.target.checked) {
                                const newState = {
                                  ...clibenval,
                                  clibenval: [...clibenval.clibenval, Number(e.target.value)]
                                };
                                setClibenval(newState);
                              } else {
                                const newState = {
                                  ...clibenval,
                                  clibenval: clibenval.clibenval.filter(prev => prev !== Number(e.target.value))
                                };

                                setClibenval(newState);
                              }
                            }}
                            checked={clibenval.clibenval.includes(cli.bcbm_id)}

                            control={<Checkbox color="primary" />}
                            label={cli.title}
                            labelPlacement="end"
                          />
                        </p></Grid>
                      ))}

                      {/* <Grid item xs={12} sm={12} md={3} className="p-20"><p>
<FormControlLabel
name=""
value="Basketball"
checked={state.hobbies.includes("Basketball")}
onChange={e => {
  if (e.target.checked) {
    const newState = {
      ...state,
      hobbies: [...state.hobbies, e.target.value]
    };
    setContact(newState);
  } else {
    const newState = {
      ...state,
      hobbies: state.hobbies.filter(prev => prev !== e.target.value)
    };

    setContact(newState);
  }
}}
checked={state.hobbies.includes("Basketball")}
control={<Checkbox color="primary" />}
label="Basketball"
labelPlacement="end"
/>
</p></Grid>


<Grid item xs={12} sm={12} md={3} className="p-20"><p>
<FormControlLabel
name=""
value="Vollyball"
checked={state.hobbies.includes("Vollyball")}
onChange={e => {
  if (e.target.checked) {
    const newState = {
      ...state,
      hobbies: [...state.hobbies, e.target.value]
    };
    setContact(newState);
  } else {
    const newState = {
      ...state,
      hobbies: state.hobbies.filter(prev => prev !== e.target.value)
    };
    setContact(newState);
  }
}}
checked={state.hobbies.includes("Vollyball")}
control={<Checkbox color="primary" />}
label="Vollyball"
labelPlacement="end"
/>
</p></Grid> */}














                      <Grid item xs={12} sm={12} md={3} spacing={2} className="p-l-10 p-r-10">
                        {/* <p><b>Total number of children</b><br /> */}

                        <FormControl className={classes.formControl} fullWidth>
                          <TextField style={{ minWidth: "80%" }}
                            id="outlined-size-small"
                            name="no_of_children"
                            label="Total no of children"
                            size="small"
                            onChange={handleChange}
                            value={event.no_of_children} />
                        </FormControl>
                        {/* </p> */}
                      </Grid>

                      <Grid item xs={12} sm={12} md={3} spacing={2} className="p-l-10 p-r-10">
                        {/* <p><b>Client Organization</b><br /> */}
                        <FormControl className={classes.formControl} fullWidth>
                          <TextField style={{ minWidth: "80%" }}
                            id="outlined-size-small"
                            name="organization"
                            label="Client Organization"
                            size="small"
                            onChange={handleChange}
                            value={event.organization} />
                        </FormControl>
                        {/* </p> */}
                      </Grid>


                      <Grid item xs={12} sm={12} md={3} className="p-l-10 p-r-10">
                        {/* <p><b>Organization Type</b><br /> */}
                        <FormControl className={classes.formControl} fullWidth>
                          {/* <NativeSelect
                            name="org_type"
                            fullWidth
                            onChange={handleChange}
                            value={event.org_type}
                            className={classes.selectEmpty} >
                            <option value="">Select</option>
                            {orgtypes.orgtypes.map((org) => (
                              <option value={org.hl_mt_bus_id}>{org.hl_business_name}</option>
                            ))}
                          </NativeSelect> */}
                          <InputLabel id="demo-simple-select-label">Organization Type</InputLabel>
                          <Select fullWidth
                            name="org_type"
                            fullWidth
                            onChange={handleChange}
                            value={event.org_type}
                            className={classes.selectEmpty} >
                            <MenuItem value="">Select</MenuItem>
                            {orgtypes.orgtypes.map((org) => (
                              <MenuItem value={org.hl_mt_bus_id}>{org.hl_business_name}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {/* </p> */}
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} className="p-l-0 p-r-10 description">
                        {/* <p><b>Tell us more about your event</b><br /> */}
                        <FormControl className={classes.formControl} fullWidth>
                          <TextField
                            id="standard-full-width"
                            label="Tell us more about your event"
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
                        </FormControl>
                        {/* </p> */}
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} className="p-20 p-l-0"><p>
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


                      <Grid item xs={12} sm={12} md={12} className="p-20">
                        {/* <p><b></b><br /> */}
                        {/* <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          onClick={handleSubmit}
                          className={classes.button}
                          startIcon={<SaveIcon />}
                        >Save
</Button> */}
                        <Box display="flex" justifyContent="center">
                          <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={handleSubmit}
                            className={classes.buttonSave}
                            startIcon={<SaveIcon />}
                          >Save
</Button>
                        </Box>
                        {/* </p> */}
                      </Grid>

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

export default RoomBooking
