import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import HotelsFollow from '../common/hotels_follow'
import UpcomingEvents from '../common/upcoming_events'
import ProfileBar from '../users/profile_bar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import profileBg from '../../assets/images/profilebg.jpg'
//Icon Button
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios'
import history from '../../History'
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
  offerimg: {
    width: theme.spacing(15),
    height: theme.spacing(15),
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  customText:{
    fontSize:".7rem",
  },

}))

  

function MyOffer() {
  const [show, toggleShow] = React.useState(true);
  const classes = useStyles()
  const [expanded, setExpanded  ] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const id=`${localStorage.id}`
        const [data, setData] = React.useState({ offers: [] }); 
        useEffect(() => {
          const fetchData = async () => {
            const result = await axios(
              'api/offers/'+id,{
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
                }
            );
       
            setData(result.data);
          };
       
          fetchData();
        }, []);
        console.log("DATA############"+JSON.stringify(data))
        { /*   <div className="boxTitle" onClick={() => toggleShow(!show)}>
        Test
       </div>
       {show && <div>Hi there</div>} */}
       
  return (
    <div className="App">
    <MyHeader />      
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <ProfileBar />
            <Grid item xs={12} sm={12} md={6}> 
            {data.offers.map(offer => (            
              <Paper className="m-b-10">          
              <Box p={2} >
                    <Grid container xs={12} sm={12} md={12}>
                  <Grid item xs={12} sm={12} md={2}>
                  <Box mr={2} className={`${classes.offerimg}`}>
                  <img src={profileBg} alt=""/>
                  </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
<Box display="flex" flexDirection="row" alignItems="center">
                      <Link href="#" color="primary" underline="none">
                        <Box color="#484848" fontSize={16} textAlign="left" fontWeight="fontWeightBold" className="m-r-10"> {offer.title}</Box>
                      </Link>
                                           
                    </Box>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      
                      <Link href="#" color="primary" underline="none">
            <Box color="#484848" fontSize={16} textAlign="left" className="m-r-10">{offer.hotel_name}</Box>
                      </Link>                                           
                    </Box>
                    <Box display="flex" flexDirection="row" alignItems="center">                      
                      <Link href="#" color="primary" underline="none">
                        <Box color="#909090" fontSize={12} textAlign="left" fontWeight="fontWeightRegular"> Valid from {offer.start_date} till {offer.end_date}</Box>
                      </Link>                      
                    </Box>
                  </Grid>  
                  <Grid item xs={12} sm={12} md={4}>
<Box display="flex" alignItems="center" justifyContent="center" mb={3}>
                  <Button variant="contained" color="primary" className="baseBtn p-r-15 p-l-15" disableElevation>{offer.offer_code !='' && offer.offer_code} </Button>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">                      
                      <Link href="#" color="primary" >
                        <Box color="#909090" fontSize={12} textAlign="left" fontWeight="fontWeightRegular" onClick={() => {
        history.push('/hotel-offers/'+offer.h_id)}}> View all {offer.hotel_name} voucher codes</Box>
                      </Link>                      
                    </Box>
                
                  </Grid>   
                </Grid>
                <Box mb={3} mt={3}>
                 <Divider />
                 </Box>


                 

<Box p={3} fontWeight="fontWeightRegular" color="primary" textAlign="left" fontSize={14} >{offer.sub_deals_for_traveller}: {offer.description}.</Box>
                 <Box mb={3} mt={3}>
                 <Divider />
                 </Box>
                 
                 <Box  fontWeight="fontWeightRegular" textAlign="left" fontSize={14} >Terms 
                 <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded, })}  onClick={handleExpandClick}
          aria-expanded={expanded} aria-label="show more" > <ExpandMoreIcon /> </IconButton>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          
          <Typography  className={classes.customText}>
          {offer.terms_conditions}
          </Typography>
        </CardContent>
      </Collapse>


                </Box>
              </Paper>
))}
            </Grid>



            <Grid item xs={12} sm={12} md={3}>
              <HotelsFollow />
              <UpcomingEvents />
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default MyOffer
