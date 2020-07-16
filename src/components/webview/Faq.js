
import React from 'react'
import './Faq.scss'

import FooterWeb from './Footer'
import { makeStyles } from '@material-ui/core/styles'


import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Typography from '@material-ui/core/Typography'
import logo from './images/Hotel-Story-Logo-Red.svg'

import mini_logo from './images/hotelsstory_logo.svg'

const useStyles = makeStyles((theme) => ({

    heading: {
        fontSize: theme.typography.pxToRem(15),
        // flexBasis: '33.33%',
        flexShrink: 0,
        width: '100%',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    mr10: {
        marginRight: '10px',
    }

}))


function Faq(props) {

    const classes = useStyles()

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="hotel_story">

            <Box className="header faq_banner_bg">

                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" py={3}>
                        <img src={logo} alt="HotelStory Logo" height="65px" />
                    </Box>


                    <Box className="faq_banner_container">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" justifyContent="flex-start" pt={{ xs: 0, ipad: 34 }}>
                                    <Box mt={15} display="flex" flexDirection="column" justifyContent="flex-start">
                                        <Box className="dm_font themeColor_blue" fontSize={43} fontWeight="500" width="100%">
                                            FAQ Features
                                            {/* Join the first social networking <br />platform for travellers. */}
                                        </Box>
                                        {/* <Box className="qs_font themeColor_blue" fontSize={27} fontWeight="500" mt={7}>
                                            Get instant rewards and low rates from our partner hotels.
                    </Box> */}

                                        <Box className="qs_font themeColor_blue" fontSize={{ xs: 25, iphone6: 30 }} textAlign="left" lineHeight="40px" fontWeight="500" mt={12} mb={20}>
                                            Explore all the features of HotelStory FAQ and <br />how they can help you to know a more about us.
                                         </Box>

                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                    {/* <Box className="faq_banner_container">
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Container maxWidth="xl">
                                <Box display="flex" flexDirection="column" justifyContent="flex-start">
                                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                                        <Box className="dm_font themeColor_blue" textAlign="center" fontSize={37} fontWeight="500" mt={10}>
                                            FAQ Features
                                           </Box>
                                        <Box className="qs_font themeColor_blue" fontSize={27} textAlign="center" fontWeight="500" mt={12} mb={20}>
                                            Explore all the features of HotelStory FAQ and how they can help <br />you to know amore about us.
                                         </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Box> */}
                </Container>

            </Box>

            <Box bgcolor="#fbfbfb" py={10}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <Container maxWidth="xl">
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                                <Box my={16} display="flex" width="100%" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Box className="qs_font" textAlign="center" fontSize={40} fontWeight="500" color="#484848" mb={20}>
                                        General FAQs
                                    </Box>

                                    {/* <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" width="100%">
                                        <Box className="dm_font faq_card" textAlign="left" width="100%" width="100%" borderRadius="3px" py={5} px={4}>
                                            <Box onClick={() => setShowFaq(!showFaq)} className="showhand qs_font qns"> How do I join HotelsStory.com?</Box>
                                            {showFaq &&
                                                <Box className="ans" fontWeight="fontWeightMedium" bgcolor="#ffffff" px={2} py={4} my={2}>
                                                    Complete the <Link href="https://www.partner.hotelsstory.com/apply-to-join">online form</Link>, contact us at join@hotelsstory.com or call us on +44 (0) 20 3287 5761.
                                            </Box>
                                            }

                                        </Box>
                                    </Box>


                                    <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" width="100%">
                                        <Box className="dm_font faq_card" textAlign="left" width="100%" width="100%" borderRadius="3px" py={5} px={4}>
                                            <Box onClick={() => setShowFaq1(!showFaq1)} className="showhand qs_font qns"> How do I join HotelsStory.com?</Box>
                                            {showFaq1 &&
                                                <Box className="ans" fontWeight="fontWeightMedium" bgcolor="#ffffff" px={2} py={4} my={2}>
                                                    Complete the <Link href="https://www.partner.hotelsstory.com/apply-to-join">online form</Link>, contact us at join@hotelsstory.com or call us on +44 (0) 20 3287 5761.
                                            </Box>
                                            }

                                        </Box>
                                    </Box> */}




                                    {/* <Box className="dm_font" textAlign="center" fontSize={25} fontWeight="300" color="#484848">
                                        <button onClick={this.toggleDiv.bind(this, 'div1')}>Toggle Div1</button>
                                        <Box ref="div1">
                                            I'm 1
                                            Get the best and lowest hotel prices than anywhere else. Guaranteed. Get the best and lowest hotel prices than anywhere else. Guaranteed.
                                            Get the best and lowest hotel prices than anywhere else. Guaranteed. Get the best and lowest hotel prices than anywhere else. Guaranteed.
                                        </Box>

                                    </Box>  */}




                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className={classes.heading}>How do I join HotelsStory.com?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Complete the <a href="https://www.partner.hotelsstory.com/apply-to-join">online form</a> , contact us at join@hotelsstory.com or call us on +44 (0) 20 3287 5761.
                                              </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography className={classes.heading}>Do I have to sign a contract?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                No. You only need to accept the terms and conditions when you fill out the activation form. You can read the terms and conditions <a href="https://hotelsstory.com/hotelier_terms_and_conditions">here</a>.
                                             </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3bh-content"
                                            id="panel3bh-header"
                                        >
                                            <Typography className={classes.heading}>Types of guests who you can expect</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <Box mb={2}> Hotels Story is a closed membership of below travelers and hospitality professionals.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  <strong> Leisure travelers:</strong> Travelers who are actively looking for the best hotel deals and rewards. </Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> <strong> MICE buyers:</strong> Meeting and event bookers who are searching for meeting space, venues and rooms for their clients. </Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> <strong>Corporate:</strong> Who wants to book venues and rooms for their next events or meetings. </Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>What type of offer, discounts or rewards should I provide to HotelsStory members?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  This is entirely up to you to decide!</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  The only requirements are that you give a minimum discount of</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>    5% for guests or leisure members.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> 5% commission for our MICE buyers.</Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>How do I receive bookings and RFPs?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2} display="inline">  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> <Box> <strong>Leisure members:</strong> All our registered leisure members will search for the best hotel deals, rewards and discounts which are coming directly from the hotels. They simply have to select the best deals and we will direct them to your website. </Box> </Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>    <strong>MICE buyers and corporate clients:</strong> They can either contact hotels directly or send RFPs/ enquiries through our RFP tool.</Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>What about my rate parity agreements with other booking websites?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Before being able to search and book hotels directly, all members need to login with a personal or business HotelsStory account. Your rates or offers will not be publicly advertised and you can therefore offer discounts without breaking the restrictive parity agreements of regular online travel agents.
		</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>What will I get for the Essential package (Free listings)?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  Dedicated property landing page.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> List Meeting space capacity charts and delegate packages to target MICE buyers and Corporate</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> List offers and rewards for buyers, corporate and our members</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Tools to share your offers on your timeline</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Book Direct widget button on your dedicated landing page to receive direct bookings to your website</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Receive limited RFP requests from MICE bookers and Corporate</Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>Do Hotels need to pay?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  Limited time Covid offer: No subscription fees until Dec 2020.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  From Jan 2021 start paying only when an RFP or enquiry is confirmed.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  £9.99 only per month (when billed annually).</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  Or £12.99 monthly (pay as you go).</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>   No commitment - cancel Premium package anytime with degrading to Free listing.</Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>What will I get for Paid listings?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Our premium package provides access to all features and tools to promote your hotel to our leisure travelers, MICE buyers and corporate.
                                                <br /><br />
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> All features of the  ESSENTIAL package plus more tools and insights</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Start receiving more direct bookings to your website</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Receive unlimited RFP’s / enquiries</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>  Events: Organise and invite buyers for exclusive events</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Enable Live Chat: Buyers can chat with partner hotels in real-time</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Track return on investment – ROI</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Get real-time insights on members and buyer's activities</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Check page views, website click throughs and RFP enquiries</Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>What if I don’t renew my Premium package?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                All non-paid listings will revert to an ‘Essential’ listing, showing only the property details, and offers. These properties will not have access to RFPs and reporting tools.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>Do buyers pay?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                No, it is free for <a href="https://hotelsstory.com/buyers">buyers to register</a>.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Box className="qs_font" textAlign="center" fontSize={40} fontWeight="500" color="#484848" mt={20} mb={16}>
                                        Partner Hotels FAQs
                                    </Box>
                                    <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>What will happen after I sign up?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Here's how it works: <br /><br />

                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>You sign up by &nbsp;<a href="https://www.partner.hotelsstory.com/apply-to-join"> registering </a>&nbsp; with your contact details.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> A confirmation email with our portal extranet link will be sent.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Log in to our extranet link and list your property details, images, meeting space capacity, features and special offers for agents.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> It will take only 15 mins to complete your property profile.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Agree with the terms and conditions and submit for review.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> One of our team members will review your property details and approve within 1-2 working days.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>You will get a confirmation email once your property is listed on our website.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>Our team is here to provide you with advice to get your property up and running, as well as helping you avoid common mistakes. Let us know if you need any help in registering your property.</Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>RFPs process?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box> Buyer or corporate send enquiries via Hotels Story platform.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>Partner hotels will be alerted via email and can access RFPs/ enquiries via partner hotel extranet portal.</Box>
                                                <Box mb={2} display="flex" alignItems="flex-start" justifyContent="flex-start">  <Box mr={2}>  <img src={mini_logo} alt="hotelsstory" width="15px" /> </Box>Contact buyers or corporates directly to fulfil their RFPs.</Box>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>I would like a demo, who can I contact?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Please contact us at <a href="maoilto:join@hotelsstory.com">join@hotelsstory.com</a> and one of our hotel development team will be in touch with you within 1-2 working days.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                        >
                                            <Typography className={classes.heading}>How often should I use your platform?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                We strongly recommend your sales and marketing team to update new offers and rewards for our buyers and leisure clients. Your hotel team should be actively involved in our social networking reward platform in order to gain more attraction.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>



                                    <Box mt={19}>
                                        <Box className="qs_font" textAlign="center" fontSize={25} fontWeight="600" color="#484848" mb={5}>List your property for FREE today!</Box>
                                        <Box mt={10} textAlign="center">
                                            <Button variant="contained" size="large" color="secondary" height="50px" className="getStarted_btn huge_btn baseBtn p-r-35 p-l-35 post_story_btn" disableElevation>GET STARTED</Button>
                                        </Box>
                                    </Box>

                                </Box>

                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Box>




















            <Box bgcolor="#172730" py={5}>
                <Container maxWidth className="p-0 pos_rel" position="relative">
                    <Box display="flex" flexDirection="row" alignItems="center" color="#fff" fontSize={16} justifyContent="center">
                        &copy; 2020 HotelsStory.com is part of Rank Strikers Ltd. Registered in England and Wales No. 11549333.

          </Box>
                </Container>
            </Box>


            <FooterWeb />

        </div>
    )



}
export default Faq
