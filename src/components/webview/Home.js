import React from 'react'
import './Home.scss'
import FooterWeb from './Footer'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'


import membership from '../../assets/images/membership.svg'
import booking from '../../assets/images/booking.svg'
import month from '../../assets/images/month.svg'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'

import logo from './images/Hotel-Story-Logo-Red.svg'
import hospitality_rounded from './images/offer-bg-squared.jpg'


import mini_logo from './images/hotelsstory_logo.svg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({


    unlock_btn: {
        [theme.breakpoints.down('sm')]: {
            padding: '10px 20px',
            fontSize: '14px',
        }, [theme.breakpoints.up('sm')]: {
            padding: '10px 20px',
            fontSize: '18px',
        },


    },

    acountIcon: {
        // fontSize: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '34px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '25px',
        }
    },
    menuItem: {
        fontSize: '10px'
    }



}))



function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

function Home(props) {

    const classes = useStyles()

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }



    return (
        <div className="hotel_story">


            <Box className="header themeColor_primary">

                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" py={3} px={10}>
                        <Box>
                            <img src={logo} alt="HotelStory Logo" height="52px" />
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" fontSize={19} position="absolute" right={{ xs: '20px', md: '100px' }} top={{ xs: '20px', md: 'auto' }} zIndex="99">

                            <a href="https://www.hotelsstory.com/login" className="buyer_link qs_font m-l-7">
                                <Box display="flex" flexDirection="row" alignItems="end">
                                    <Box display="flex" className="themeColor_blue qs_font" fontSize={16}> <AccountCircleIcon className={classes.acountIcon} /></Box>
                                    <Box display={{ xs: 'none', md: 'flex' }} ml={1} fontWeight="600" fontSize={17}>Member Login</Box>
                                </Box>
                            </a>
                        </Box>
                        {/* <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" fontSize={19} fontWeight="600">  <a href="https://www.hotelsstory.com/login" className="buyer_link qs_font m-l-7"> Partner Hotel Login</a></Box> */}
                    </Box>
                    {/* <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" py={3}>
                        <img src={logo} alt="HotelStory Logo" height="52px" />
                    </Box>
                    <Box className="menu_container" py={4} display="flex" flexDirection="row" justifyContent="center" width="100%" alignItems="center">
                        <Box display="flex" flexDirection="row" justifyContent="center">
                            <Box fontSize={14} mr={{ sm: 0, md: 3 }}>
                                <a href="https://www.hotelsstory.com/login" className="qs_font link_anchor_css">Hotels</a>
                            </Box>
                            <Box fontSize={14} mr={{ sm: 0, md: 3 }}>
                                <a href="https://www.hotelsstory.com/login" className="qs_font link_anchor_css">Venues</a>
                            </Box>
                            <Box fontSize={14} mr={{ sm: 0, md: 3 }}>
                                <a href="https://www.hotelsstory.com/login" className="qs_font link_anchor_css">Offers</a>
                            </Box>
                            <Box fontSize={14}>
                                <a href="login" className="qs_font link_anchor_css">Destination</a>
                            </Box>
                        </Box>


                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" fontSize={19} position="absolute" right={{ xs: '20px', md: '100px' }} top={{ xs: '20px', md: 'auto' }} zIndex="99">

                            <a href="https://www.hotelsstory.com/login" className="buyer_link qs_font m-l-7">
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <Box display="flex"> <AccountCircleIcon className="themeColor_blue" className={classes.acountIcon} /></Box>
                                    <Box display={{ xs: 'none', md: 'flex' }} ml={1}>Buyer Login</Box>
                                </Box>
                            </a>
                        </Box>
                    </Box> */}
                    {/* {`${classes.postmedia}`} */}

                    <Box className="banner_container">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" justifyContent="flex-start" pt={34}>
                                    <Box mt={15} display="flex" flexDirection="column" justifyContent="flex-start">
                                        <Box className="dm_font themeColor_blue" fontSize={{ xs: 25, md: 28 }} fontWeight="500">
                                            Join the first social networking <br />platform for travellers.
                    </Box>
                                        <Box className="qs_font themeColor_blue" fontSize={{ xs: 20, md: 23 }} fontWeight="500" mt={7} width={{ sm: '50%', xl: '109%' }}>
                                            Get instant rewards and low rates from our partner hotels.
                    </Box>


                                        <Box mt={12}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.unlock_btn}
                                                startIcon={<LockOpenOutlinedIcon className="icon_huge" />}
                                            >
                                                UNLOCK THE EXPERIENCE!
                                        </Button>
                                        </Box>

                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                </Container>

            </Box>



            <Box bgcolor="#ffffff" pt={8}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                {/* <Box className="qs_font" fontSize={40} fontWeight="500" color="#484848" mb={2}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </Box>
                                <Box className="dm_font" fontSize={25} textAlign="center" lineHeight="40px" mt={3} fontWeight="300" color="#484848">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                    </Box> */}
                                <Box mt={10} display="flex" flexDirection="column" justifyContent="flex-start">
                                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" display="flex" flexDirection="column">
                                        <Tab label="Leisure Travellers" {...a11yProps(0)} />
                                        <Tab label="MICE Bookers/ Corporate" {...a11yProps(1)} />
                                    </Tabs>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box>

            <TabPanel value={value} index={0} className="tabPanel_handle">
                <Box bgcolor="#ffffff" py={10}>
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                    <Box my={16} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                        <Box className="qs_font" textAlign="center" fontSize={30} fontWeight="500" color="#484848" mb={5}>
                                            Our promise for Leisure travellers
                    </Box>
                                        <Box className="dm_font" textAlign="center" fontSize={22} fontWeight="300" color="#484848">
                                            Get the best and lowest hotel prices than anywhere else. Guaranteed. Get the best and lowest hotel prices than anywhere else. Guaranteed.
                                            Get the best and lowest hotel prices than anywhere else. Guaranteed. Get the best and lowest hotel prices than anywhere else. Guaranteed.
                    </Box>
                                    </Box>

                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </Box>
                <Box bgcolor="#f7f7f7" py={7}>
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">



                                    <Box my={8} width="100%">
                                        <Box className="hotelSory_tabPanels" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">


                                            <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={5}>
                                                How it works for leisure travellers?
                      </Box>
                                            <Box className="dm_font" fontSize={18} fontWeight="300" color="#484848" mb={15}>We don't take commission on bookings, so all the savings go directly to you.
                      </Box>

                                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} mt={10} alignItems="center" justifyContent="space-between" width="90%">
                                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={{ xs: '75px', md: '0px' }}>
                                                    <Box className="iconHolder" display="flex" flexDirection="column" alignItems="baseline">
                                                        <img src={membership} alt="membership" height="100px" />
                                                    </Box>
                                                    <Box className="qs_font" fontSize={22} fontWeight="600" mt={8} color="#e33361">
                                                        1. Free Membership
                          </Box>
                                                    <Box className="dm_font" fontSize={18} mt={3} textAlign="center">
                                                        Choose your profile type <br /> and <strong fontWeight="600">Sign up for Free</strong>.
                          </Box>
                                                </Box>


                                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={{ xs: '75px', md: '0px' }}>
                                                    <Box className="iconHolder" display="flex" flexDirection="column" alignItems="baseline">
                                                        <img src={booking} alt="Search Hotels" height="100px" />
                                                    </Box>
                                                    <Box className="qs_font" fontSize={22} fontWeight="600" mt={8} color="#e33361">
                                                        2. Search for Hotels
                          </Box>
                                                    <Box className="dm_font" fontSize={18} mt={3} textAlign="center">
                                                        Search for the best hotels deals with <br /> exclusive rates for our members only.
                          </Box>
                                                </Box>


                                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={{ xs: '75px', md: '0px' }}>
                                                    <Box className="iconHolder" display="flex" flexDirection="column" alignItems="baseline" >
                                                        <img src={month} alt="booking" height="83px" />
                                                    </Box>
                                                    <Box className="qs_font" fontSize={22} fontWeight="600" mt={8} color="#e33361">
                                                        3. Book Direct
                          </Box>
                                                    <Box className="dm_font" fontSize={20} mt={3} textAlign="center">
                                                        Book directly on our partner hotels<br /> website and enjoy your trip.

                          </Box>
                                                </Box>

                                            </Box>

                                            <Box width="100%" display="flex" mt={20} flexDirection="column" alignItems="center" justifyContent="center">

                                                <Box  textAlign="center" className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={5}>So, what are you waiting for? </Box>
                                                <Box className="dm_font" textAlign="center" fontSize={22} fontWeight="300" color="#484848" mb={5}>Join this growing community and treat yourself with our partner hotels rewards today!</Box>
                                                <Box>
                                                    <Box mt={4}>

                                                        <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>GET STARTED</Button>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>

                    </Container>
                </Box>

            </TabPanel>


            <TabPanel value={value} index={1} className="tabPanel_handle">

                <Box bgcolor="#ffffff">
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                    <Box my={16} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                        <Box className="qs_font" fontSize={27} fontWeight="500" color="#484848" mb={2}>
                                            Our promise for MICE Bookers/ Corporate
                    </Box>
                                        <Box className="dm_font" fontSize={20} fontWeight="300" color="#484848">
                                            Our partner hotel provides the best commission and rewards for your bookings.
                    </Box>
                                    </Box>

                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </Box>





                <Box bgcolor="#fbfbfb" py={10}>
                    <Container maxWidth className="p-0 pos_rel" position="relative">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box className="hotelSory_tabPanels" my={8} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">


                                    <Box className="hotelSory_tabPanels" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                        <Box className="qs_font" fontSize={27} fontWeight="500" color="#484848" mb={3}>
                                            MICE Bookers / Corporate
                    </Box>
                                        <Box className="dm_font" textAlign="center" fontSize={20} fontWeight="300" color="#484848" mb={5}>
                                            Are you searching for venue space for your events or clients?<br />
                                            Do you also need accommodation for your delegates?

                    </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">

                            <Box width="50%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Box width="85%">


                                    <Box className="dm_font" textAlign="left" fontSize={18} my={3} fontWeight="300" color="#484848" display="flex" flexDirection="row"  alignItems="center">
                                        <Box display="flex" flexDirection="row" justifyContent="flex-start" width="25px" mr={5} height="40px" alignItems="baseline">
                                            <img src={mini_logo} alt="Logo" width="25" />
                                        </Box>
                                        <Box>Search and filter meeting space from our partner hotels.</Box>
                                    </Box>

                                    <Box className="dm_font" textAlign="left" fontSize={18} my={5} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="center">
                                        <Box width="25px" mr={5} display="flex" flexDirection="row" justifyContent="flex-start" height="60px" alignItems="baseline">
                                            <img src={mini_logo} alt="Logo" width="25" />
                                        </Box>
                                        <Box>Request quote through our RFP tool and receive best price from our partner hotels.</Box>
                                    </Box>

                                    <Box className="dm_font" textAlign="left" fontSize={18} my={5} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="center">
                                        <Box width="25px" mr={5} display="flex" height="60px" alignItems="baseline">
                                            <img src={mini_logo} alt="Logo" width="25" />
                                        </Box>
                                        <Box>Review offers and once accepted you contract pay the hotel directly and receive your agreed commission.</Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="50%" className="product_image">
                            </Box>
                        </Box>

                        <Box className="dm_font" textAlign="center" fontSize={23} mt={7} fontWeight="300" color="#484848" mb={5}>
                            <Container maxWidth="xl">
                                <Box className="p-b-25">
                                    <Box py={7}>
                                        We have an amazing team of people working hard to secure best hotel venues discounts, best available rates, rewards and a lot of other benefits just for you..
                    <Box mt={10}>
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>GET STARTED</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>

                    </Container>
                </Box>


            </TabPanel>




            <Box bgcolor="#fbf0f0" className="hospitality" py={7}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box className="hotelSory_tabPanels" width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">


                                <Box className="hotelSory_tabPanels" display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="flex-start">


                                    <Box width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">

                                        <Box display="flex" flexDirection="column" mr={4}>
                                            <Box className="qs_font" fontSize={30} fontWeight="500" color="#ffffff" mb={5}>
                                                Hospitality Professionals
                                            </Box>
                                            <Box className="dm_font" textAlign="left" fontSize={20} fontWeight="300" color="#ffffff" mb={20}>
                                                Are you searching for jobs in the hospitality industry?

                                            </Box>
                                            <Box className="dm_font" textAlign="left" mb={6} fontSize={22} fontWeight="fontWeightNormal" color="#ffffff">Find jobs and internships in the hospitality industry  </Box>
                                            <Box display="flex" flexDirection="column" alignItems="left" justifyContent="flex-start">
                                                <Box className="dm_font" fontSize={20} my={2} fontWeight="300" color="#ffffff" display="flex" flexDirection="row" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>Free to register your profile </Box>
                                                </Box>


                                                <Box className="dm_font" fontSize={20} my={3} fontWeight="300" color="#ffffff" display="flex" flexDirection="row"alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>Search jobs in hospitality industry</Box>
                                                </Box>


                                                <Box className="dm_font" fontSize={20} my={2} fontWeight="300" color="#ffffff" display="flex" flexDirection="row" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>Grow your network and connections</Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box width={{ xs: '50%', md: '400px' }} display={{ xs: 'none', ipad: 'flex' }}>
                                            <img src={hospitality_rounded} alt="hotels" width="" className="borRad5" />

                                        </Box>
                                    </Box>
                                    <Box mt={16} display="flex" flexDirection={{ xs: 'column', ipad: 'row' }} alignItems="center" justifyContent="center">
                                        <Box mr={{ xs: 0, ipad: 2 }} mb={{ xs: 2, ipad: 0 }}>
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>REGISTER YOUR PROFILE</Button>
                                        </Box>
                                        <Box ml={{ xs: 0, ipad: 2 }} mt={{ xs: 2, ipad: 0 }}>
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>REGISTER YOUR PROFILE</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>

                </Container>
            </Box>



            <Box bgcolor="#fbfbfb" py={7}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box className="hotelSory_tabPanels" width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">


                                <Box className="hotelSory_tabPanels" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                    <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={5}>
                                        About Hotels Story
                  </Box>
                                    <Box className="dm_font" textAlign="center" width="70%" fontSize={18} fontWeight="300" lineHeight="30px" color="#484848" mb={7}>
                                        HotelsStory.com is the first social networking platform exclusively created for the hotel industry to connect with travellers to drive direct bookings. Our platform will be a fair alternative to major OTAs who charge high commission rates and hidden costs for both traveller and hoteliers.

                  </Box>


                                    <Box className="dm_font" textAlign="center" fontSize={20} fontWeight="fontWeightBold" color="#484848" mb={5}>
                                        Join the growing social networking platform for travellers

                  </Box>


                                    <Box mt={3} display="flex" flexDirection={{ xs: 'column', ipad: 'row' }} alignItems="center" justifyContent="center">
                                        <Box mr={{ xs: 0, ipad: 2 }} mb={{ xs: 2, ipad: 0 }} width="100%">
                                            <Button variant="contained" size="large" width="100%" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>Leisure Travellers</Button>
                                        </Box>
                                        <Box mr={{ xs: 0, ipad: 2 }} mt={{ xs: 2, ipad: 0 }}>
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn wspace_nowrap huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>MICE Bookers/ Corporate</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>

                </Container>
            </Box>






            <FooterWeb />

        </div>
    )



}
export default Home
