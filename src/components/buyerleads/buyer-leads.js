import React, { useEffect } from 'react'
import axios from 'axios'
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import ProfileBar from '../users/profile_bar'

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

  const userid = `${localStorage.user_id}`

  const [leads, setLeads] = React.useState({ leads: [] });
  const [bstages, setBstages] = React.useState({ bstages: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'api/buyer-leads/' + userid, {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      }
      )
      setLeads(result.data)
      setBstages(result.data)
    }
    fetchData()
  }, []);

  // console.log(leads);

  return (
    <div className="App">
      <MyHeader />
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <ProfileBar />
            <Grid item xs={12} sm={12} md={9}>
              <Paper className="m-b-10 p-t-15">
                <Box mb={2} mt={2} display="flex" alignItems="flex-end" justifyContent="flex-end" pr={3}>
                  <a href={"http://localhost:3000/venue-booking"} className="no-underline"><Button variant="contained" color="primary">Venue Booking</Button></a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href={"http://localhost:3000/room-booking"} className="no-underline"><Button variant="contained" color="primary">Room Booking</Button></a>
                </Box>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Enquiry Date</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Enquiry ID</TableCell>
                        <TableCell>Hotel Name</TableCell>
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
                          <TableCell style={{ maxWidth: 200 }}>{lead.hotel_name}</TableCell>
                          <TableCell>{lead.lead_type == 1 ? 'Mice' : lead.lead_type == 2 ? 'Mice+Room' : 'Room'}</TableCell>
                          <TableCell>
                            {bstages.bstages.map((stage) => (
                              lead.agent_stage == stage.id ? stage.status : ''
                            ))}
                          </TableCell>
                          <TableCell><a href={"http://localhost:3000/buyer-view-leads/" + lead.id}>{<EditIcon />}</a></TableCell>
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
