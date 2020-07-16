import React from 'react'
import './Partner.scss'

import FooterWeb from './Footer'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import ClientSlider from './Clients'

import membership from '../../assets/images/membership.svg'
import month from '../../assets/images/month.svg'
import HomeWorkIcon from '@material-ui/icons/HomeWork';


import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

import logo from './images/Hotel-Story-Logo-Red.svg'

import tick from './images/tick.svg'
import wrong from './images/wrong.svg'

import badge from './images/badge.svg'
import mini_logo from './images/hotelsstory_logo.svg'


const useStyles = makeStyles((theme) => ({


    unlock_btn: {
        padding: '10px 40px',
        fontSize: '18px',
    },
    customBorder: {
        borderColor: '#e4e4e4'
    },
    box1Column: {
        width: '150px',
    },
    customBorder1: {
        borderColor: '#8e8e8e',
    },
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

function Partner(props) {

    const classes = useStyles()

    return (
        <div className="hotel_story">


            <Box className="header themeColor_primary">

                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" py={3} px={10}>
                        <Box>
                            <img src={logo} alt="HotelStory Logo" height="52px" />
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" fontSize={19} fontWeight="600"> <HomeWorkIcon className="themeColor_blue" /> <a href="https://www.hotelsstory.com/login" className="buyer_link qs_font m-l-7"> Partner Hotel Login</a></Box>
                    </Box>
                    <Box className="menu_container" py={4} display="flex" flexDirection="row" justifyContent="center" width="100%" alignItems="center">
                        {/* <Box display="flex" flexDirection="row" justifyContent="center">
                            <Box fontSize={14} mr={3}>
                                <a href="https://www.hotelsstory.com/login" className="qs_font link_anchor_css">Hotels</a>
                            </Box>
                            <Box fontSize={14} mr={3}>
                                <a href="https://www.hotelsstory.com/login" className="qs_font link_anchor_css">Venues</a>
                            </Box>
                            <Box fontSize={14} mr={3}>
                                <a href="https://www.hotelsstory.com/login" className="qs_font link_anchor_css">Offers</a>
                            </Box>
                            <Box fontSize={14}>
                                <a href="https://www.hotelsstory.com/login" className="qs_font link_anchor_css">Destination</a>
                            </Box>
                        </Box> */}
                        {/* <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" fontSize={19} position="absolute" right="100px" > <AccountCircleIcon className="themeColor_blue" /> <a href="https://www.hotelsstory.com/login" className="buyer_link qs_font m-l-7"> Buyer Login</a></Box> */}
                    </Box>


                    <Box className="banner_container">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" justifyContent="flex-start" pt={34}>
                                    <Box mt={15} display="flex" flexDirection="column" justifyContent="flex-start">
                                        <Box className="dm_font themeColor_blue" fontSize={31} fontWeight="500" width="750px">
                                            Join the First Social Networking Platform for the Hotel Industry

                                            {/* Join the first social networking <br />platform for travellers. */}
                                        </Box>
                                        {/* <Box className="qs_font themeColor_blue" fontSize={27} fontWeight="500" mt={7}>
                                            Get instant rewards and low rates from our partner hotels.
                    </Box> */}

                                        <Box mt={16}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.unlock_btn}
                                                startIcon={<HomeWorkIcon className="icon_huge" />}>
                                                List your property for FREE today!
                                        </Button>
                                        </Box>
                                        <Box className="dm_font themeColor_blue" fontSize={27} fontWeight="800" mt={7}>
                                            Commission Free Direct Bookings
                                        </Box>

                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                </Container>

            </Box>


            <Box bgcolor="#ffffff" py={8} borderTop={1} borderColor="#ffeafb">
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">


                                <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                    <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mt={3} mb={12}>
                                        Latest Hotel Partnerships
                                    </Box>
                                    <Box width="100%" display="flex" className="partners" flexDirection="row" alignItems="center" justifyContent="space-between" mb={6}>


                                        <ClientSlider />


                                    </Box>


                                </Box>
                            </Box>
                        </Container>
                    </Box>

                </Container>
            </Box>

            <Box bgcolor="#f9f9f9" className="losing_revenue" py={8}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                {/* <img src={world_bg} alt="world" /> */}

                                <Box display="flex" flexDirection="row" alignItems="baseline" justifyContent="center">
                                    <Box width="60%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                                        <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={15}>
                                            Are you losing revenue with OTAs?
                                         </Box>
                                        <Box width="80%">
                                            <Box fontSize={19} lineHeight="30px" color="#6d6b6b" fontWeight="400" mb={8}>
                                                HotelsStory.com is the first social networking reward platform created as a fair alternative to major OTAs who charge increasing commission rates and tactics to secure bookings. Our platform will help hotels to get direct bookings through our members: leisure travelers, buyers and corporate clients.
                                        </Box>
                                            <Box fontSize={19} lineHeight="30px" color="#6d6b6b" fontWeight="400" mb={8}>
                                                HotelsStory.com is the first social networking reward platform exclusively created for hoteliers to connect with travellers to drive direct bookings and as a fair alternative to major OTAs who charge high commission rates and hidden costs.
                                        </Box>
                                            <Box fontSize={19} lineHeight="30px" color="#6d6b6b" fontWeight="400">
                                                Our partner hotels will be able to promote, share and post their offers, rewards, events, and meeting space to our closed members: leisure travelers, MICE bookers, travel agents and corporate clients through our platform.
                                        </Box>
                                        </Box>
                                    </Box>

                                    <Box width="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                                        <Box className="qs_font" textAlign="left" width="100%" fontSize={30} fontWeight="500" color="#484848" mb={8}>
                                            Why are we different?
                                             </Box>
                                        <Box width="100%" className="dm_font" display="flex" flexDirection="column" fontSize={22} fontWeight="300" color="#484848">

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    First social networking platform dedicated to hotels
                                                    </Box>
                                            </Box>
                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    Listing your property is FREE!
                                                    </Box>
                                            </Box>

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    Commission-free bookings
                                                    </Box>
                                            </Box>

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    We drive direct bookings to your website
                                                    </Box>
                                            </Box>

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    Direct contact with your guests
                                                    </Box>
                                            </Box>

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    RFP tool for MICE buyers and Corporate
                                                    </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/* <Box width="40%" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                        <img src={revenue} alt="revenu loss" width="300px" />
                                    </Box> */}
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box>





            {/* <Box bgcolor="#f7f7f7" py={10}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                <Box my={16} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                    <Box width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                        <Box width="50%" display="flex" justifyContent="flex-start">
                                            <img src={we_different} alt="why we different" width="80%" />
                                        </Box>


                                    </Box>
                                </Box>

                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box> */}




            <Box bgcolor="#ffffff" py={8}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">



                                <Box my={8} width="100%">
                                    <Box className="hotelSory_tabPanels" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">


                                        <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={5}>
                                            How it works?
                                        </Box>
                                        <Box className="dm_font" fontSize={25} fontWeight="300" color="#484848" mb={15}>We don't take commission on bookings, so all the savings go directly to you.
                      </Box>

                                        <Box display="flex" flexDirection="row" mt={10} alignItems="baseline" justifyContent="space-between" width="90%">
                                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                                <Box className="iconHolder" display="flex" flexDirection="column" alignItems="baseline">
                                                    <img src={membership} alt="membership" height="100px" />
                                                </Box>
                                                <Box className="qs_font" fontSize={25} fontWeight="600" mt={8} color="#e33361">
                                                    1. Become a member
                          </Box>
                                                <Box className="dm_font" fontSize={20} mt={3} textAlign="center">
                                                    Choose your profile type <br /> and <strong fontWeight="600">Sign up for Free</strong>.
                          </Box>
                                            </Box>


                                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                                <Box className="iconHolder" display="flex" flexDirection="column" alignItems="baseline">
                                                    <img src={badge} alt="Search Hotels" height="100px" />
                                                </Box>
                                                <Box className="qs_font" fontSize={25} fontWeight="600" mt={8} color="#e33361">
                                                    2. List your rewards & offers
                          </Box>
                                                <Box className="dm_font" fontSize={20} mt={3} textAlign="center">
                                                    For <strong fontWeight="600">Leisure Travelers</strong><br />
                                                    For <strong fontWeight="600">MICE Buyers</strong><br />
                                                    For <strong fontWeight="600">Corporate</strong>

                                                </Box>
                                            </Box>


                                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                                <Box className="iconHolder" display="flex" flexDirection="column" alignItems="baseline" >
                                                    <img src={month} alt="booking" height="83px" />
                                                </Box>
                                                <Box className="qs_font" fontSize={25} fontWeight="600" mt={8} color="#e33361">
                                                    3. Drive Direct Bookings
                          </Box>
                                                <Box className="dm_font" fontSize={20} mt={3} textAlign="center">
                                                    Receive <strong fontWeight="600">direct bookings</strong> and <strong fontWeight="600">RFPs</strong><br /> from our members

                          </Box>
                                            </Box>

                                        </Box>

                                        {/* <Box width="100%" display="flex" mt={20} flexDirection="column" alignItems="center" justifyContent="center">

                                            <Box className="dm_font" textAlign="center" className="qs_font" fontSize={40} fontWeight="500" color="#484848" mb={5}>So, what are you waiting for? </Box>
                                            <Box className="dm_font" textAlign="center" fontSize={25} fontWeight="300" color="#484848" mb={5}>Join this growing community and treat yourself with our partner hotels rewards today!</Box>
                                            <Box>
                                                <Box mt={4}>
                                                    <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>GET STARTED</Button>
                                                </Box>
                                            </Box>
                                        </Box> */}

                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>

                </Container>
            </Box>







            {/* <Box bgcolor="#f7f7f7" py={10}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                <Box my={16} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                    <Box width="100%" display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between">

                                        <Box width="50%" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                                            <Box className="qs_font" textAlign="left" width="100%" fontSize={40} fontWeight="500" color="#484848" mb={12}>
                                                Types of visitors who you can expect
                                             </Box>
                                            <Box className="dm_font" fontSize={20} mb={9} >
                                                Hotels Story is a closed membership of below travelers and hospitality professionals
                                                who are searching for the best hotel rewards and offers.

                                             </Box>
                                            <Box width="100%" className="dm_font" display="flex" flexDirection="column" fontSize={22} fontWeight="300" color="#484848">

                                                <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={8}>
                                                    <Box mr={3} display="flex">
                                                        <img src={mini_logo} alt="Logo" width="20px" />
                                                    </Box>
                                                    <Box>
                                                        Leisure travelers
                                                    </Box>
                                                </Box>
                                                <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={8}>
                                                    <Box mr={3} display="flex">
                                                        <img src={mini_logo} alt="Logo" width="20px" />
                                                    </Box>
                                                    <Box>
                                                        MICE buyers
                                                    </Box>
                                                </Box>

                                                <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={8}>
                                                    <Box mr={3} display="flex">
                                                        <img src={mini_logo} alt="Logo" width="20px" />
                                                    </Box>
                                                    <Box>
                                                        Event planners
                                                    </Box>
                                                </Box>

                                                <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={8}>
                                                    <Box mr={3} display="flex">
                                                        <img src={mini_logo} alt="Logo" width="20px" />
                                                    </Box>
                                                    <Box>
                                                        Corporate
                                                    </Box>
                                                </Box>

                                                <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={8}>
                                                    <Box mr={3} display="flex">
                                                        <img src={mini_logo} alt="Logo" width="20px" />
                                                    </Box>
                                                    <Box>
                                                        Hospitality industry professionals
                                                    </Box>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box width="50%" display="flex" justifyContent="center">
                                            <img src={why1} alt="why we different" height="600px" width="auto" />
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box> */}





            {/* <Box bgcolor="#ffffff">
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                <Box my={16} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Box className="qs_font" fontSize={40} fontWeight="500" color="#484848" mb={2}>
                                        Our promise for MICE Bookers/ Corporate
                    </Box>
                                    <Box className="dm_font" fontSize={25} fontWeight="300" color="#484848">
                                        Our partner hotel provides the best commission and rewards for your bookings.
                    </Box>
                                </Box>

                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box> */}





            <Box bgcolor="#fbfbfb" py={8}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box my={7} width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">


                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                    <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={9}>
                                        Commission Free Direct Bookings
                                    </Box>
                                    <Box className="dm_font" textAlign="center" fontSize={25} fontWeight="300" color="#484848" mb={14}>
                                        We drive travellers, buyers and corporate clients directly to your website   that's it. <br />Increased revenue and direct guest relationship.
                                   </Box>

                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                        <Box>
                                            <Paper className={'m-t-10'}>

                                                <Box flexDirection="column" alignItems="center" textAlign="center">
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        &nbsp;
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Commission
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Rate Party
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Brand hijacking
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Charges for ranking boosts
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>

                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Dedicated portal
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Reporting tools
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>

                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Contract flexibility
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Buyers RFPs/ Enquiries
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>

                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Corporate RFPs/ Enquiries
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>

                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Membership fees
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>

                                                </Box>
                                            </Paper>
                                        </Box>






                                        <Box mx={2} width="250px" className="hs_column">
                                            <Paper className={'m-t-10'}>
                                                <Box flexDirection="column" alignItems="center" textAlign="center">
                                                    <Box className="box1Column" px={7} py={2} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={logo} alt="hotelstory" width="75px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        </Box>

                                        <Box width="250px">
                                            <Paper className={'m-t-10'}>
                                                <Box flexDirection="column" alignItems="center" textAlign="center">
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        OTAs
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        Upto 25%
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={tick} alt="yes" width="15px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                    <Box borderBottom={1} className={classes.customBorder} width="100%"></Box>
                                                    <Box className="box1Column" px={7} py={4} fontSize={15} fontWeight="600" color="#585858">
                                                        <img src={wrong} alt="wrong" width="10px" />
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Container>
                    </Box>


                    {/* <Box className="dm_font" textAlign="center" fontSize={30} mt={15} fontWeight="300" color="#484848" mb={5}>
                        <Container maxWidth="xl">
                            <Box className="p-b-75">
                                <Box py={10}>
                                    We have an amazing team of people working hard to secure best hotel venues discounts, best available rates, rewards and a lot of other benefits just for you..
                    <Box mt={10}>
                                        <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>GET STARTED</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box> */}

                </Container>
            </Box>

            <Box bgcolor="#ffffff" py={8} borderTop={1} borderColor="#ffeafb">
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">


                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                                    <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={16}>
                                        Frequently Asked Questions
                                    </Box>
                                    <Box display="flex" flexDirection="column">
                                        <Box className="dm_font" textAlign="left" fontSize={27} fontWeight="300" lineHeight="30px" color="#484848" mb={5}>
                                            Hotels Story helps hotels to maximise profit margins
                                         </Box>

                                        <Box width="100%" className="dm_font" display="flex" flexDirection="column" fontSize={22} fontWeight="300" color="#484848">

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    Maintain ownership over your bookings
                                                </Box>
                                            </Box>

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    Direct access to all guest data
                                                </Box>
                                            </Box>

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    User-friendly interface with reporting tools
                                                </Box>
                                            </Box>

                                            <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={5}>
                                                <Box mr={3} display="flex">
                                                    <img src={mini_logo} alt="Logo" width="20px" />
                                                </Box>
                                                <Box>
                                                    Risk free partnership: We have waived our subscription fee of £9.99/ month till end of Dec 2020
                                                </Box>
                                            </Box>


                                        </Box>
                                        <Box display="flex" flexDirection="row" mt={6} alignItems="flex-start" justifyContent="flex-start">
                                            <Box className={`${classes.customBorder1} qs_font`} fontSize={27} borderRight={2} pr={6} mr={6} fontWeight={600}>Easy to set up</Box>
                                            <Box className={`${classes.customBorder1} qs_font`} fontSize={27} borderRight={2} pr={6} mr={6} fontWeight={600}>No contracts </Box>
                                            <Box className="qs_font" fontSize={27} fontWeight={600}>No hidden costs</Box>

                                        </Box>

                                        {/* <Box className="dm_font" textAlign="left" fontSize={18} lineHeight="32px" fontWeight="300" lineHeight="30px" color="#484848" mb={7}>
                                            We made listing easy. After you’ve registered your property, you’ll receive an email with login details for your portal. This is where you’ll go to update your property details, features, offers and rewards. Once submitted we will review your information to make sure we have everything we need before making your dedicated landing page live on Hotels Story platform.

                                        </Box> */}
                                    </Box>

                                    <Box display="flex" flexDirection="column" mt={7} width="100%">

                                        <Box className="dm_font" textAlign="left" fontSize={18} lineHeight="32px" fontWeight="300" color="#484848" mb={2}>
                                            Some of our frequently asked questions answered here. <br /><a href="https://hotelsstory.com/faq"> Learn more</a>


                                        </Box>
                                    </Box>

                                    {/* <Box mt={3} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                        <Box className="m-r-10">
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>Leisure Travellers</Button>
                                        </Box>
                                        <Box className="m-l-10">
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>MICE Bookers/ Corporate</Button>
                                        </Box>
                                    </Box> */}
                                </Box>
                            </Box>
                        </Container>
                    </Box>

                </Container>
            </Box>





            <Box bgcolor="#f7f7f7" py={8}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box className="hotelSory_tabPanels" width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">


                                <Box className="hotelSory_tabPanels" display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="flex-start">
                                    <Box className="qs_font" fontSize={30} fontWeight="500" color="#484848" mb={9}>
                                        Have more questions?
                                            </Box>
                                    <Box className="dm_font" textAlign="center" width="50%" fontSize={25} fontWeight="300" color="#484848" mb={0}>
                                        Schedule a call with one of our hotel development team today.
                                            </Box>

                                    <Box mt={10} mb={5} display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
                                        <Box mr={2}>
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>Make Contact</Button>
                                        </Box>

                                    </Box>
                                    <Box className="dm_font" textAlign="left" fontSize={18} lineHeight="32px" fontWeight="300" color="#484848" mb={2}>
                                            Some of our frequently asked questions answered here.<a href="https://hotelsstory.com/faq"> Learn more</a>


                                        </Box>

                                    {/* <Box width="100%" display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-evenly">
                                        <Box >
                                            <img src={why2} alt="hotels" width="" className="what_we_get" />

                                        </Box>
                                        <Box display="flex" flexDirection="column" mr={4}>

                                            <Box className="dm_font" textAlign="left" mb={9} fontSize={22} fontWeight="600" color="#484848">Find jobs and internships in the hospitality industry  </Box>
                                            <Box display="flex" flexDirection="column" alignItems="left" justifyContent="flex-start">
                                                <Box className="dm_font" fontSize={20} my={4} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="flex-start" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>Dedicated property landing page </Box>
                                                </Box>


                                                <Box className="dm_font" fontSize={20} my={4} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="flex-start" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>List meeting space capacity charts and delegate packages.</Box>
                                                </Box>


                                                <Box className="dm_font" fontSize={20} my={4} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="flex-start" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>List offers and rewards for our members</Box>
                                                </Box>


                                                <Box className="dm_font" fontSize={20} my={4} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="flex-start" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>Post job openings.</Box>
                                                </Box>
                                                <Box className="dm_font" fontSize={20} my={4} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="flex-start" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>Book Direct widget button to receive direct bookings to your website</Box>
                                                </Box>
                                                <Box className="dm_font" fontSize={20} my={4} fontWeight="300" color="#484848" display="flex" flexDirection="row" alignItems="flex-start" alignItems="center">
                                                    <Box width="25px" mr={2}>
                                                        <img src={mini_logo} alt="Logo" width="25" />
                                                    </Box>
                                                    <Box>Share offers on your timeline.</Box>
                                                </Box>

                                                <Box mt={16} display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
                                                    <Box mr={2}>
                                                        <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>SIGN UP TODAY! </Button>
                                                    </Box>

                                                </Box>
                                            </Box>
                                        </Box>

                                    </Box> */}

                                </Box>
                            </Box>
                        </Container>
                    </Box>

                </Container>
            </Box>



            <FooterWeb />

        </div >
    )



}
export default Partner
