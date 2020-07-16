import React, { useEffect }from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import history from '../../History'
// http://localhost/hotelsstory-partner/public/leads_api
// import useBreakpoints from './common/useBreakpoint';

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
// const point = useBreakpoints();

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import axios from 'axios'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import dateFormat from 'dateformat';
function Offers(){
        const id=`${localStorage.h_id}`
        const [data, setData] = React.useState({ offers: [] }); 
           useEffect(() => {
          const fetchData = async () => {
            const result = await axios(
              'api/offers-list/'+id,{
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
                }
            )       
            setData(result.data)
          }
       
          fetchData()
        }, []);
  //console.log("Data:::"+JSON.stringify(data))
  if (!data) {
    return "loading...";
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
      <Box p={5} textAlign="right"><Button href="/add-offer" variant="contained" color="primary" className="baseBtn p-r-15 p-l-15" disableElevation>Add Rewards / Deals</Button></Box>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
      <TableHead>
      <TableRow>
      <TableCell>Title</TableCell>
      <TableCell>Rewards / Deals for</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Start Date </TableCell>
      <TableCell> End Date</TableCell>
      <TableCell>Action</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>

      {data.offers.map(offer => (
        <TableRow key={offer.id}>
        <TableCell component="th" scope="row">{offer.title}</TableCell>
        <TableCell >{offer.deals_for === 1 && "Buyers"} {offer.deals_for === 2 && "Corporate"} {offer.deals_for === 3 && "Travellers"}</TableCell>
        <TableCell>{offer.description}</TableCell>
        <TableCell>{dateFormat(offer.start_date,'mmmm dS, yyyy')}</TableCell>
        <TableCell>{dateFormat(offer.end_date,'mmmm dS, yyyy')}</TableCell>
        <TableCell><ButtonGroup disableElevation variant="contained" color="secondary">
                              <Button><EditIcon onClick={() => {
        history.push('/edit-offer/'+offer.id)
   }}/></Button>
                              {/*<Button><VisibilityIcon /></Button>*/}
                              <Button><DeleteIcon onClick={() => {
        history.push('/delete-offer/'+offer.id)
   }} /></Button>
                            </ButtonGroup> </TableCell>
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
)
}


export default Offers
