import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import ProfileBar from '../users/profile_bar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import axios from 'axios'

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  },
}));

function EditProfile() {
const classes = useStyles();

const [firstname, setFirstname] = React.useState('');
const [lastname, setLastname] = React.useState('');
const [email, setEmail] = React.useState('');
const [profile, setProfile] = React.useState(null);
const [location, setLocation] = React.useState('');
const id = `${localStorage.h_id}`
const userid = `${localStorage.user_id}`
let history = useHistory()

  function submitForm(contentType, OffersData, setResponse) {
    return axios
     .post(
         '../api/updateProfile',OffersData,
         {
             headers: { 'Content-Type': contentType, Authorization: `Bearer ${localStorage.usertoken}` }
         },
     )
     .then(response => {
      history.push('/edit-profile')               
     })
     .catch(err => {
         console.log(err)
     })
  }


useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      '../api/edit-profile/'+userid,{
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        }
    )    

    setFirstname(result.data.users.first_name)
    setLastname(result.data.users.last_name)
    setEmail(result.data.users.email)
    setProfile(result.data.users.image)
    setLocation(result.data.users.location)
  }
  fetchData()
}, []);  


  function uploadWithFormData(){
    const formData = new FormData();
    formData.append("userid",userid);
    formData.append("firstname",firstname); 
    formData.append("lastname",lastname); 
    formData.append("email",email); 
    formData.append("profile",profile); 
    formData.append("location",location); 
    submitForm("multipart/form-data", formData);

  }
  console.log(profile);
  return (
    <div className="App">
    <MyHeader />      
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <Grid item xs={2} sm={12} md={2} ></Grid>             
            <Grid item xs={8} sm={12} md={8} >             
              <Paper className="m-b-10" p={5}>
                <Box p={3} fontWeight="fontWeightBold" textAlign="left" fontSize={18} >Update Profile</Box>
                <form  autoComplete="off">
                <Box p={3} mb={5}>
                  <Grid container xs={12} sm={12} md={12} spacing={2}>

                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth 
                      id="standard-basic" 
                      label="First Name" 
                      name="firstname"
                      value={firstname} 
                      onChange={e => setFirstname(e.target.value)}/>
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth 
                      id="standard-basic" 
                      label="Last Name" 
                      name="lastname"
                      value={lastname} 
                      onChange={e => setLastname(e.target.value)}/>
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth 
                      id="standard-basic" 
                      label="Email Address" 
                      name="email"
                      value={email} 
                      onChange={e => setEmail(e.target.value)}/>
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <TextField fullWidth 
                      id="standard-basic" 
                      type="file"
                      name="profile"
                      label="Profile Picture"
                      value={profile} 
                      onChange={e => setProfile(e.target.files[0])} /> 
                      </Grid>

                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth 
                      id="standard-basic" 
                      label="Location"
                      name="location"
                      value={location} 
                      onChange={e => setLocation(e.target.value)} />
                      </FormControl> 
                      </Grid>

                  </Grid>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" mb={3} p={2}>
                <Button type="button" onClick={uploadWithFormData} variant="contained" color="primary" className="baseBtn p-r-15 p-l-15" disableElevation>Update</Button>
                </Box>
                </form>   
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default EditProfile
