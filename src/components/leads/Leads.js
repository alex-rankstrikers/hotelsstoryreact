import React , { useEffect } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import ProfileBar from '../users/profile_bar'
// http://localhost/hotelsstory-partner/public/leads_api
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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function Leads() {



  const hotelid=`${localStorage.h_id}`

  const [leads, setLeads] = React.useState({ leads: [] });
  const [hstages, setHstages] = React.useState({ hstages: [] }); 

     useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'api/leads/'+hotelid,{
          headers: { Authorization: `Bearer ${localStorage.usertoken}` }
          }
      )       
      setLeads(result.data)
      setHstages(result.data)
    }
    fetchData()
  }, []);

console.log("Data:::::::::::"+JSON.stringify(leads));


  return (
  <div className="App">
  <MyHeader />      
  <CssBaseline />
    <Box mt={16} mb={5}>
    <Container maxWidth="xl">
    <Grid container spacing={2} >
    <ProfileBar />
      <Grid item xs={12} sm={12} md={9}>
      <Paper className="m-t-10 m-b-10">
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
      <TableHead>
      <TableRow>
      <TableCell>Enquiry Date</TableCell>
      <TableCell>Start Date</TableCell>
      <TableCell>Enquiry ID</TableCell>
      <TableCell>Enquiry Type</TableCell>
      <TableCell>Enquiry Stage</TableCell>
      <TableCell>Action</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>

      {leads.leads.map((lead) => (
      <TableRow key={lead.name}>
      <TableCell component="th" scope="row">{lead.enqdate}</TableCell>
      <TableCell>{lead.start_date}</TableCell>
      <TableCell>{lead.lead_id}</TableCell>
      <TableCell>{lead.lead_type == 1 ? 'Mice' : lead.lead_type == 2 ?'Mice+Room':'Room'}</TableCell>
      <TableCell>
      {hstages.hstages.map((stage) => (
          lead.hotelier_stage == stage.id?stage.status:''
      ))}
      </TableCell>
      <TableCell><a href={"http://localhost:3000/view-leads/"+lead.id}>View</a></TableCell>
      </TableRow>
      ))}

      </TableBody>
      </Table>
      </TableContainer>
      </Paper>
      </Grid>
    </Grid>
    </Container>
    </Box>
  </div>
);

}

export default Leads
