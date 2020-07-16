import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './Register.scss'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Link from '@material-ui/core/Link'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField'
import logo from './images/Hotel-Story-Logo-Red.svg'
import axios from 'axios'


import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        width: '100%',
        // marginTop:'20px',
    },
    inputInput: {
        border: 'solid 1px #ced4da',
        paddingLeft: '10px',
        background: '#fff',
        borderRadius: '3px',
        width: '100%',
        color: '#495057'
    },
    inputPassword: {
        '.MuiInput-input': {
            fontSize: '40px',
        }
    },
    formControl: {
        width: '100%',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexColumn:{
        flexDirection:'column',
    },
    customBorder: {
        borderColor: '#cccccc7a',
    },
    radioLabel: {
        fontWeight: '500',
    },
    selectTitle: {
        width: '97%'
    },
    invalidFeedback:{
        color:"red",
        fontSize: '13px',
    }
}))




function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`register-tabpanel-${index}`}
            aria-labelledby={`register-tab-${index}`}
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
        id: `register-tab-${index}`,
        'aria-controls': `register-tabpanel-${index}`,
    }
}



function Register(props) {

    const classes = useStyles()
    const [valueOption, setValueOpt] = React.useState('female');

    const handleChangeOpt = (event) => {
        setValueOpt(event.target.value);
    };





    const [value, setValue] = React.useState(0)

    // const handleChange = (event, newValue) => {
    //     setValue(newValue)
    // }

    const [title, setTitle] = React.useState('');

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };


    const [letSignin, setsigninValue] = React.useState('yes');

    const handleChangesignin = (event) => {
        setsigninValue(event.target.value);
    };

    const [user, setUser] = useState({
        user_type:'',
        company_name: '',
        title: '',
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    //const registering = useSelector(state => state.registration.registering);
    //const dispatch = useDispatch();

    // reset login status
    /*useEffect(() => {
        dispatch(userActions.logout());
    }, []); */

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }
    let history = useHistory()
    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
        
        if (user.company_name && user.title && user.first_name && user.last_name && user.email && user.password) {
            
           // dispatch(userActions.register(user));
           const newUser = {
            agent_type:user.user_type,
            travel_agency: user.company_name,
            title: user.title,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password
        }
           return axios
           .post(
               'api/register',newUser,
               {
                   headers: { 'Content-Type': 'application/json' }
               }
           )
           .then(response => {
               if (response) {
                   history.push('/login')                
                   //return response.data.token
               }             
              
           })
           .catch(err => {
               console.log(err)
           })

        }
    }
       

    return (
        <form name="form" onSubmit={handleSubmit}>
        <div className="hotel_story">

            <Box className="register_Page" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box className="login_banner" width="25%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                    {/* <Box className="register_tab_content" mb={30}>
                        <Box width="100%">
                            <Box mt={10} display="flex" flexDirection="column" justifyContent="flex-start">
                                <Tabs value={value} onChange={handleChange} className="register_tabs" aria-label="register tabs example" display="flex" flexDirection="column" justifyContent="space-around">
                                    <Tab label="Leisure Travellers" {...a11yProps(0)} />
                                    <Tab label="Buyer" {...a11yProps(1)} />
                                    <Tab label="Corporate" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                        </Box>


                        <TabPanel value={value} index={0} className="reg_tabPanel_handle">
                            <Box p={4} width="100%" color="#fff" fontSize={18} className="tab_content">
                                Are you ready to travel? Find the best hotel deals and benefits as a member.
                        </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1} className="reg_tabPanel_handle">
                            <Box p={4} width="100%" color="#fff" fontSize={18} className="tab_content">
                                MICE buyers search for the best venues and rooms for your clients.
                        </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2} className="reg_tabPanel_handle">
                            <Box p={4} width="100%" color="#fff" fontSize={18} className="tab_content">
                                Search for the best hotel rooms and venues for your next trip or events.
                        </Box>
                        </TabPanel>
                    </Box> */}
                    <Box className="qs_font" color="#ffffff" fontSize={30} fontWeight="500">
                        Why do I need a membership?
                    </Box>
                    <Box className="qs_font" color="#ffffff" fontSize={14} width="415px" my={8} textAlign="center" lineHeight="22px" >
                        {/* Sign up your restaurant and start saving time and money. */}
                        Many of the major booking or Online travel websites don’t allow hotels to offer cheaper prices on other websites. We are offering you the guaranteed best deals directly from our partner hotels. So we have to keep our booking environment private and dedicated only to our members.
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        {/* <a href="#" > SIGN UP</a> */}
                        <Box className="qs_font" color="#ffffff" fontSize={18} mb={2}> Already on HotelsStory? </Box>
                        <Box>
                            <Link href="/login1">
                                <Button variant="outlined" size="large" className="signup_btn huge_btn baseBtn p-r-42 p-l-42 post_story_btn" disableElevation>SIGN IN</Button>
                            </Link>
                        </Box>
                    </Box>

                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" className="right_container" width="75%" justifyContent="center">
                    <Box display="flex" flexDirection="column" alignItems="center" width="70%">
                        <Box my={7}>
                            <img src={logo} width="180px" alt="logo" />
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
                            <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600"> Are you a</Box>
                            <Box width="100%">

                                <RadioGroup aria-label="gender" className={classes.flexColumn} name="gender1" value={valueOption} onChange={handleChangeOpt}>
                                    <FormControlLabel value="users" control={<Radio />} label="Leisure traveller " />
                                    <Box mb={4} fontSize={12}>Are you ready to travel? Find the best hotel deals and benefits as a member.</Box>
                                    <FormControlLabel value="agent" control={<Radio />} label="Buyer" />
                                    <Box mb={4} fontSize={12}>MICE buyers search for the best venues and rooms for your clients.</Box>
                                    <FormControlLabel value="corporate" control={<Radio />} label="Corporate" />
                                    <Box mb={3} fontSize={12}>Search for the best hotel rooms and venues for your next trip or events.</Box>
                                </RadioGroup>
                                {submitted && !user.user_type &&
                        <Box className={classes.invalidFeedback}>Choose User Type</Box>
                    }
                            </Box>
                        </Box>
                        <Box borderBottom={1} borderColor="grey.100" my={7} className={classes.customBorder} width="100%"></Box>

                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
                            <Box width="100%" textAlign="left" mb={2} fontSize={19} fontWeight="600"> Company Details</Box>
                            <Box width="100%" textAlign="left" mb={4} fontSize={15} lineHeight="23px"> Choose an existing Company to join or create a New Company.<br />
                            TIP: Check variations of the Company name to avoid duplication e.g. "RankStrikers Co" & "The RankStrikers Co".</Box>
                            {/* <Box width="100%" textAlign="left" mb={2} fontSize={15}> Company name*</Box> */}
                            <Box width="100%">
                                <TextField id="company_name" name="company_name" label="Company Name"
                                    classes={{
                                        root: classes.inputRoot + (submitted && !user.first_name ? ' is-invalid' : '')
                                    }} value={user.company_name} onChange={handleChange}/>
                                    
                                            {submitted && !user.company_name &&
                        <Box className={classes.invalidFeedback}>Company Name is required</Box>
                    }
                                {/* <InputBase
                                    placeholder="Company Name"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'company name' }}
                                /> */}
                            </Box>
                        </Box>


                        {/* <Box borderBottom={1} borderColor="grey.100" my={7} className={classes.customBorder} width="100%"></Box> */}

                        <Box display="flex" flexDirection="column" alignItems="center" mt={15} justifyContent="center" width="100%">
                            <Box width="100%" textAlign="left" mb={2} fontSize={19} fontWeight="600" > Contact Details</Box>
                            <Box display="flex" flexDirection="row" width="100%" alignItems="flex-end" justifyContent="space-between">
                                <Box display="flex" flexDirection="column" alignItems="center" mr={2} width="20%">
                                    {/* <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600">Title *</Box> */}
                                    <Box display="flex" width="100%" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={title}
                                                onChange={handleChangeTitle}
                                            >
                                                <MenuItem value={1}>Mr</MenuItem>
                                                <MenuItem value={2}>Mrs</MenuItem>
                                                <MenuItem value={3}>Ms</MenuItem>
                                                <MenuItem value={4}>Mx</MenuItem>
                                            </Select>
                                        </FormControl>
                                       
                                           
                                        {/* <Select
                                            value={title}
                                            onChange={handleChangeTitle}
                                            displayEmpty
                                            className={classes.selectEmpty}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="" disabled>
                                                Choose Title
          </MenuItem>
                                            <MenuItem value={1}>Mr</MenuItem>
                                            <MenuItem value={2}>Mrs</MenuItem>
                                            <MenuItem value={3}>Ms</MenuItem>
                                            <MenuItem value={4}>Mx</MenuItem>
                                        </Select> */}
                                    </Box>
                                </Box>

                                <Box display="flex" flexDirection="column" alignItems="center" width="40%" mr={2}>
                                    {/* <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600">First Name *</Box> */}
                                    <Box width="100%">
                                        <TextField id="first_name" name="first_name" label="First Name"
                                            classes={{
                                                root: classes.inputRoot + (submitted && !user.first_name ? ' is-invalid' : '')
                                            }} value={user.first_name} onChange={handleChange}/>
                                            {submitted && !user.first_name &&
                        <Box className={classes.invalidFeedback}>First Name is required</Box>
                    }
                                        {/* <InputBase
                                            placeholder="First Name"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'First name' }}
                                        /> */}
                                    </Box>
                                </Box>

                                <Box display="flex" flexDirection="column" alignItems="center" width="40%" ml={1}>
                                    {/* <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600">Last Name *</Box> */}
                                    <Box width="100%">
                                        <TextField id="last_name" name="last_name"  label="Last Name"
                                            classes={{
                                                root: classes.inputRoot + (submitted && !user.last_name ? ' is-invalid' : '')
                                            }} value={user.last_name} onChange={handleChange} />
                                            {submitted && !user.last_name &&
                        <Box className={classes.invalidFeedback}>Last Name is required</Box>
                    }
                                        {/* <InputBase
                                            placeholder="Last Name"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'Last name' }}
                                        /> */}
                                    </Box>
                                </Box>
                            </Box>

                            <Box display="flex" flexDirection="row" width="100%" justifyContent="space-between" mt={8}>
                                <Box display="flex" flexDirection="column" alignItems="center" width="50%" mr={2}>
                                    {/* <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600">Email Address *</Box> */}
                                    <Box width="100%">
                                        <TextField id="email" name="email" label="Enter Email"
                                            classes={{
                                                root: classes.inputRoot + (submitted && !user.email ? ' is-invalid' : '')
                                            }} value={user.email} onChange={handleChange} />
                                            {submitted && !user.email &&
                        <Box className={classes.invalidFeedback}>Email is required</Box>
                    }
                                        {/* <InputBase
                                            placeholder="Email Address"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'Email Address' }}
                                        /> */}
                                    </Box>
                                </Box>

                                <Box display="flex" flexDirection="column" alignItems="center" width="50%" ml={1}>
                                    {/* <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600">Referred By</Box> */}
                                    <Box width="100%">
                                        <TextField id="referred-by" label="Referred By"
                                            classes={{
                                                root: classes.inputRoot
                                            }} />
                                        {/* <InputBase
                                            placeholder="Referred Code"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'refered by' }}
                                        /> */}
                                    </Box>
                                </Box>
                            </Box>



                            <Box display="flex" flexDirection="row" width="100%" justifyContent="space-between" mt={8}>
                                <Box display="flex" flexDirection="column" alignItems="center" width="50%" mr={2}>
                                    {/* <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600">Password *</Box> */}
                                    <Box width="100%">
                                        <TextField id="password" name="password" label="Enter Password" type="password"
                                            classes={{
                                                root: classes.inputRoot + (submitted && !user.password ? ' is-invalid' : '')
                                            }} onChange={handleChange}/>
                                            {submitted && !user.password &&
                        <Box className={classes.invalidFeedback}>Password is required</Box>
                    }
                                        {/* <InputBase
                                            type="password"
                                            placeholder="Password"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'password' }}
                                        /> */}
                                    </Box>
                                </Box>

                                <Box display="flex" flexDirection="column" alignItems="center" width="50%" ml={1}>
                                    {/* <Box width="100%" textAlign="left" mb={2} fontSize={15} fontWeight="600">Confirm Password *</Box> */}
                                    <Box width="100%">
                                        <TextField id="cnfm_password" name="cnfm_password" label="Confirm Password"
                                            classes={{
                                                root: classes.inputRoot +(submitted && !user.password ? ' is-invalid' : '')
                                            }} onChange={handleChange}/>
                                            {submitted && !user.cnfm_password &&
                        <Box className={classes.invalidFeedback}>Confirm Password is required</Box>
                    }
                                        {/* <InputBase
                                            type="password"
                                            placeholder="Confirm Password"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'confirm password' }}
                                        /> */}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box width="100%">
                            <Box width="100%" textAlign="left" mt={15} mb={2} fontSize={23}>
                                KEEP IN TOUCH
                           </Box>
                            <Box borderBottom={1} borderColor="grey.100" mb={6} className={classes.customBorder} width="100%"></Box>
                            <Box width="100%" textAlign="left" mb={4}>
                                Receive special offers, new hotel announcements, travel recommendations,
                                and news from Hotelsstory.com:
                           </Box>

                            <Box width="100%">

                                <RadioGroup aria-label="letSignin" name="letSignin" value={letSignin} onChange={handleChangesignin}>
                                    <FormControlLabel value="yes" control={<Radio />} label=" Yes, please sign me up" classes={{
                                        label: classes.radioLabel
                                    }} />
                                    <FormControlLabel value="no" control={<Radio />} label="No, not at this time" classes={{
                                        label: classes.radioLabel
                                    }} />
                                </RadioGroup>

                            </Box>

                            <Box mt={4}>
                                By clicking "SUBMIT",you agree to our Terms Of Service and Privacy Policy.
                            </Box>
                        </Box>

                        <Box display="flex" flexDirection="row" alignItems="flex-end" my={8} justifyContent="flex-end" width="100%">
                            <Button type="submit" variant="contained" size="large" color="secondary" height="50px" className="login_btn huge_btn baseBtn p-r-51 p-l-51 post_story_btn" disableElevation>SUBMIT</Button>
                        </Box>

                    </Box>

                </Box>

            </Box>


        </div>
        </form>
    )
}

export default Register
