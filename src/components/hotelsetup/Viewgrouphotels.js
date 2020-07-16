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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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
const [grouphotels, setGrouphotels] = React.useState({ grouphotels: [] });


const id = `${localStorage.h_id}`;
const grpID = 5;
const userid = `${localStorage.user_id}`;
let history = useHistory()

function deletehotel(i) {
console.log(i);
    const deldata = {
      hl_id: i
    }
    return axios
      .post('../api/delete-hotel', deldata, 
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/view-group-hotels/'+grpID)
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
      group_id: grpID
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
      '../api/view-group-hotels/'+grpID,{
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        }
    )    
    setGrouphotels(result.data)
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
            <Grid item xs={12} sm={12} md={12} >  
              <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                <ButtonGroup disableElevation variant="contained" color="secondary">
                  <Button type="submit" onClick={newSetup}>List New Property</Button>
                </ButtonGroup>
              </Box>           
               <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Hotel Name</TableCell>
                        <TableCell>Hotel Group Name</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Website Status</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                       {grouphotels.grouphotels.map((grp) => (
                        <TableRow>
                        <TableCell>{grp.hotel_name}</TableCell>
                        <TableCell>{grp.title}</TableCell>
                        <TableCell>{grp.cities}</TableCell>
                        <TableCell>{grp.countries}</TableCell>
                        <TableCell>{grp.sta=="Disable" ? 'Complete Your Listing':'View your hotel in website'}</TableCell>
                        <TableCell>
                          <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                            <ButtonGroup disableElevation variant="contained" color="secondary">
                              <Button><a href={"http://localhost:3000/hotelsetup/"+grp.hid}><EditIcon /></a></Button>
                              <Button type="button" onClick={() => deletehotel(grp.hid)}><DeleteIcon/></Button>
                            </ButtonGroup>
                          </Box>
                        </TableCell>
                      </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default EditProfile
