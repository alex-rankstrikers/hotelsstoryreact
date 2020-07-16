import React from 'react'
import './Footer.scss'

import { makeStyles } from '@material-ui/core/styles'


import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    footerlink: {
        color: '#fff',
        fontSize: '14px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    footerlinkColor: {
        color: '#ffffff',
        textDecoration: 'none'
    }




}))



function Footer(props) {

    const classes = useStyles()

    return (
        <div>

            <Box bgcolor="#172730" py={5}>
                <Container maxWidth="xl" className="p-0 pos_rel" position="relative">

                    <Box display="flex" flexDirection="row" alignItems="flex-start" mt={5} justifyContent="space-between">
                        <Box display="flex" flexDirection="column" ml={20}>
                            <Box fontSize={16} className="qs_font" mb={5} color="#fff" fontWeight="500"> About</Box>
                            <Box fontSize={14} mb={3} className="qs_font" color="#fff" fontWeight="500"> <a href="https://hotelsstory.com/index.php/who_we_are" className={classes.footerlink}>Who we are</a></Box>
                            <Box fontSize={14} mb={3} className="qs_font" color="#fff" fontWeight="500"> <a href="https://hotelsstory.com/index.php/login" className={classes.footerlink}>Our partner hotels</a></Box>
                        </Box>


                        <Box display="flex" flexDirection="column">
                            <Box fontSize={16} className="qs_font" mb={5} color="#fff" fontWeight="500"> Registration</Box>
                            <Box fontSize={14} mb={3} className="qs_font" color="#fff" fontWeight="500"> <a href="https://hotelsstory.com/index.php/buyers" className={classes.footerlink}>Register as a buyer</a></Box>
                            <Box fontSize={14} mb={3} className="qs_font" color="#fff" fontWeight="500"> <a href="http://partner.hotelsstory.com/" className={classes.footerlink}>Our Hotel membership</a></Box>
                            <Box fontSize={14} mb={3} className="qs_font" color="#fff" fontWeight="500"> <a href="https://hotelsstory.com/index.php/faq" className={classes.footerlink}>Our FAQs</a></Box>
                        </Box>

                        <Box display="flex" flexDirection="column" mr={20}>
                            <Box fontSize={16} className="qs_font" mb={5} color="#fff" fontWeight="500"> Usefull Links</Box>
                            <Box display="flex" flexDirection="row">
                                <Box fontSize={19} mr={3} className="qs_font" color="#fff" fontWeight="500" >
                                    <a href="https://twitter.com/luvhotelsstory" className={classes.footerlink}>
                                        <Box mr={1}><TwitterIcon /> </Box> </a>
                                    {/* <Box>Twitter</Box> */}
                                </Box>
                                <Box fontSize={19} mr={3} className="qs_font" color="#fff" fontWeight="500"> <a href="https://www.facebook.com/Luvhotelsstory-102600891421706/?modal=admin_todo_tourq" className={classes.footerlink}>
                                    <Box mr={1}><FacebookIcon /></Box> </a>
                                    {/* <Box mr={1}> Facebook</Box> */}
                                </Box>
                                <Box fontSize={19} mr={3} className="qs_font" color="#fff" fontWeight="500"> <a href="https://www.linkedin.com/company/luvhotelsstory" className={classes.footerlink}>
                                    <Box mr={1}><LinkedInIcon /> </Box> </a>
                                    {/* <Box >LinkedIn</Box> */}
                                </Box>
                                <Box fontSize={19} mr={0} className="qs_font" color="#fff" fontWeight="500"> <a href="https://www.instagram.com/luvhotelsstory" className={classes.footerlink}>  <Box mr={1}><InstagramIcon /></Box> </a>
                                    {/* <Box>Instagram</Box> */}
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" mt={10} mb={6}>
                        <Box display="flex" flexDirection="row" ml={20} alignItems="center" color="#dadada" fontSize={14} justifyContent="center">

                            &copy; 2020 HotelsStory.com is part of Rank Strikers Ltd. Registered in England and Wales No. 11549333.

                    </Box>
                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" mr={20}>
                            <Box className=" qs_font" fontSize={14} color="#fff" borderRight={0} pr={6} mr={6} fontWeight={600}><a href="https://hotelsstory.com/index.php/terms-and-conditions" className={classes.footerlinkColor}>Terms</a></Box>
                            <Box className=" qs_font" fontSize={14} color="#fff" fontWeight={600}><a href="https://hotelsstory.com/index.php/privacy-policy" className={classes.footerlinkColor}> Privacy Policy</a></Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </div>

    )
}
export default Footer
