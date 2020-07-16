import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './Login.scss'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

// import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField'
import logo from './images/Hotel-Story-Logo-Red.svg'
import axios from 'axios'
//import { history } from '../../../_helpers';
//import { loginValidation } from '../../_validation'
//import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        width: '100%'
    },
    invalidFeedback:{
        color:"red",
        fontSize: '13px',
    }
    // inputInput: {
    //     border: 'solid 1px #ced4da',
    //     paddingLeft: '10px',
    //     background: '#fff',
    //     borderRadius: '3px',
    //     width: '100%',
    //     color: '#495057'
    // },
    // inputPassword: {
    //     '.MuiInput-input': {
    //         fontSize: '40px',
    //     }
    // }
}))



function Login(props) {

    const classes = useStyles()
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    //const loggingIn = useSelector(state => state.authentication.loggingIn);
    //const dispatch = useDispatch();

    // reset login status
    // useEffect(() => { 
    //     dispatch(userActions.logout()); 
    // }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }))
    }
    let history = useHistory()
    function handleSubmit(e) { 
        console.log("Onclik Data")
        e.preventDefault()
        setSubmitted(true)
        if (email && password) {
           // dispatch(userActions.login(email, password));
           return axios
        .post(
            'api/login',
            {
                email: email,
                password: password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(response => {
            if (response) {
                localStorage.setItem('usertoken', response.data.token)
                history.push('/profile')                
                //return response.data.token
            }
           
           
        })
        .catch(err => {
            console.log(err)
        })

        }
    }
 
        return (
            <form  onSubmit={handleSubmit}>
        <div className="hotel_story">

            <Box className="" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box className="login_banner" width="25%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box className="qs_font" color="#ffffff" fontSize={40} fontWeight="500">
                        Welcome!
                    </Box>
                    <Box className="qs_font" color="#ffffff" fontSize={14} width="290px" my={5} textAlign="center" lineHeight="22px" >
                        Sign up your restaurant and start saving time and money.
                    </Box>
                    <Box>
                        {/* <a href="#" > SIGN UP</a> */}
                        <Link href="/register1">
                            <Button variant="outlined" size="large" className="signup_btn huge_btn baseBtn p-r-42 p-l-42 post_story_btn" disableElevation>SIGN UP</Button>
                        </Link>
                    </Box>

                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" width="75%" justifyContent="center">
                    <Box display="flex" flexDirection="column" alignItems="center" width="320px">
                    
                        <Box mb={10}>
                            <img src={logo} width="180px" alt="logo" />
                        </Box>
                       
                        <Box display="flex" flexDirection="column" alignItems="center" mb={5} justifyContent="center" width="100%">
                            {/* <Box width="100%" textAlign="left" mb={2} fontSize={15}> Email</Box> */}
                            <Box width="100%">
                                <TextField id="email" label="Enter Email"
                                    classes={{
                                        root: classes.inputRoot + (submitted && !email ? ' is-invalid' : '')
                                    }} name="email" value={email} onChange={handleChange}  />
                                     {submitted && !email &&
                        <Box  className={classes.invalidFeedback}>Email is required</Box>
                    }
                                {/* <InputBase
                                    placeholder="Enter Email"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'Enter Email' }}
                                /> */}
                            </Box>
                        </Box>

                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
                            {/* <Box width="100%" textAlign="left" mb={2} fontSize={15}> Password</Box> */}
                            <Box width="100%">
                            <TextField id="password" label="Enter Password" type="password"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput +(submitted && !password ? ' is-invalid' : '')
                                    }}  name="password" value={password} onChange={handleChange}/>
                                {/* <InputBase
                                    placeholder="Enter Password"
                                    type="password"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'Enter Password' }}
                                /> */}
                                    {submitted && !password &&
                                                            <Box className={classes.invalidFeedback}>Password is required</Box>
                                                        }
                            </Box>
                        </Box>
                        <Box mt={1} width="100%" color="#a9a9a9" className="forgotlinkBox" fontSize={12}>
                            <a href="http://www.hotelsstory.com">Forgot Password?</a>
                        </Box>
                        <Box display="flex" flexDirection="row" mt={2} alignItems="flex-end" justifyContent="flex-end" width="100%">
                            <Button type="submit" variant="contained" size="large" color="secondary" height="50px" className="login_btn huge_btn baseBtn p-r-51 p-l-51 post_story_btn" disableElevation>LOGIN</Button>
                        </Box>
                    </Box>
                    

                </Box>

            </Box>


        </div>
        </form>
    )
}

export default Login
