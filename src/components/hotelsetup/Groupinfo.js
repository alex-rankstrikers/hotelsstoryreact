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
import ButtonGroup from '@material-ui/core/ButtonGroup';

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

const [grp_name, setGrpname] = React.useState('');
const [group_website, setGrpwebsite] = React.useState('');
const [no_of_properties, setNoofproperty] = React.useState('');
const [group_id, setGrpid] = React.useState('');
const [showAssign, setShowAssign] = useState(false);


const id = `${localStorage.h_id}`
const userid = `${localStorage.user_id}`
let history = useHistory()

  const updateForm1 = (e) => {
    e.preventDefault();
    const form1data = {
      userid: userid,
      group_id: group_id,
      grp_name: grp_name,
      group_website: group_website,
      no_of_properties: no_of_properties,
    }
    return axios
      .post('../api/updateGroup', form1data,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          //console.log(response)
          history.push('/group-info')
        }
      })
      .catch(err => {
        console.log(err)
      })

  }
  const newSetup = (e) => {
    e.preventDefault();
    const form2data = {
      userid: userid,
      group_id: group_id,
      grp_name: grp_name,
      group_website: group_website,
      no_of_properties: no_of_properties,
    }
    return axios
      .post('../api/create-new-property', form2data,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/'+response.data.newHotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })

  }

useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      '../api/group-info/'+userid,{
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        }
    )    
    setGrpid(result.data.group.id)
    setGrpname(result.data.group.title)
    setGrpwebsite(result.data.group.group_website)
    setNoofproperty(result.data.group.no_of_properties)
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
            <Grid item xs={2} sm={12} md={2} ></Grid>             
            <Grid item xs={8} sm={12} md={8} >             
              <Paper className="m-b-10" p={5}>
                <Box p={3} fontWeight="fontWeightBold" textAlign="left" fontSize={18} >Group Info</Box>
                <form autoComplete="off">
                <Box p={3} mb={5}>
                  <Grid container xs={12} sm={12} md={12} spacing={2}>

                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset" fullWidth>
                      {showAssign && <TextField fullWidth 
                      name="group_id"
                      value={group_id}/>}

                      <TextField fullWidth 
                      id="standard-basic" 
                      label="Hotel Group Name *" 
                      name="grp_name"
                      value={grp_name} 
                      onChange={e => setGrpname(e.target.value)}/>
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth 
                      id="standard-basic" 
                      label="Website" 
                      name="group_website"
                      value={group_website} 
                      onChange={e => setGrpwebsite(e.target.value)}/>
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth 
                      id="standard-basic" 
                      label="How many property do you want to list?" 
                      name="no_of_properties"
                      value={no_of_properties} 
                      onChange={e => setNoofproperty(e.target.value)}/>
                      </FormControl> 
                      </Grid>

                  </Grid>
                </Box>
                
                <Box display="flex" textAlign="center" mb={10} p={5}>
                  <ButtonGroup disableElevation variant="contained" color="secondary">
                    <Button type="submit" onClick={updateForm1} variant="contained" color="primary"
                      className="baseBtn p-r-15 p-l-15" disableElevation>Update</Button>
                    <Button type="submit" onClick={newSetup}>Continue</Button>
                  </ButtonGroup>
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
