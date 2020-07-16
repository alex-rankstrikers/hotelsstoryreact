import React from 'react'
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

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import MUIRichTextEditor from "mui-rte";
import { jobpost } from './JobPortalFunctions';

const useStyles = makeStyles((theme) => ({
  profileAvatar: {
    margin: '-50px auto 0 auto',
    width: '100px',
    height: '100px',
    border: '4px solid #fff',
  },
}))

class PostJob extends React.Component {
  constructor() {
      super()
      this.state = {
          job_category: '',
          job_title: '',
          job_type: '',
          job_description: '',
          job_location: '',
          job_salery: '',
          job_apply_link: '',
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    // console.log(this.state);
    this.setState({ [e.target.name]: e.target.value })  
  }
  onSubmit (e) {
      e.preventDefault()
      const newJobPost = {
          job_category: this.state.job_category,
          job_title: this.state.job_title,
          job_type: this.state.job_type,
          job_description: this.state.job_description,
          job_location: this.state.job_location,
          job_salery: this.state.job_salery,
          job_apply_link: this.state.job_apply_link,
      }

      jobpost(newJobPost).then(res => {
        this.props.history.push(`/post-job`)
      })
  }

  

  render () {
  return (
  <div className="App">
  <MyHeader />   {/*Header Section */}
  <CssBaseline />

  <Box mt={16} mb={5}>
  <Container maxWidth="xl">
  <Grid container spacing={2} >
   <ProfileBar />  {/*First Grid */}
    <Grid item xs={12} sm={12} md={9}> {/*Second Grid */}
    <Paper className="m-t-10 m-b-10 p-20">
    <form noValidate onSubmit={this.onSubmit}>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={12} md={12}>
    <Typography variant="h5" gutterBottom>Post job</Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <TextField
    id="standard-select-currency-native "
    select
    fullWidth
    style={{ margin: 8 }}
    label="Category"
    margin="normal"
    name="job_category"
    value={this.state.job_category}
    onChange={this.onChange}
    SelectProps={{
    native: true,
    }}
    InputLabelProps={{
    shrink: true,
    }}
    >
    <option key="" value=""></option>
    <option key="" value="Category1">Category1</option>
    <option key="" value="Category2">Category2</option>
    <option key="" value="Category3">Category3</option>
    </TextField>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <TextField
    id="standard-full-width"
    label="Job title"
    style={{ margin: 8 }}
    placeholder=""
    fullWidth
    margin="normal"
    name="job_title"
    value={this.state.job_title}
    onChange={this.onChange}
    InputLabelProps={{
    shrink: true,
    }}
    />
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <TextField
    id="standard-select-currency-native "
    select
    fullWidth
    style={{ margin: 8 }}
    label="Job type"
    margin="normal"
    name="job_type"
    value={this.state.job_type}
    onChange={this.onChange}
    SelectProps={{
    native: true,
    }}
    InputLabelProps={{
    shrink: true,
    }}
    >
    <option key="" value=""></option>
    <option key="" value="Internshp">Internshp</option>
    <option key="" value="Full-time">Full time</option>
    <option key="" value="Part-time">Part time</option>
    <option key="" value="Apprenticeship">Apprenticeship</option>
    <option key="" value="Volunteer">Volunteer</option>
    <option key="" value="Temporary">Temporary</option>
    <option key="" value="Contract">Contract</option>
    <option key="" value="Permanent">Permanent</option>
    </TextField>
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
    <TextField
    id="standard-full-width"
    label="Description"
    style={{ margin: 8 }}
    placeholder=""
    fullWidth
    margin="normal"
    multiline
    name="job_description"
    value={this.state.job_description}
    onChange={this.onChange}
    InputLabelProps={{
    shrink: true,
    }}
    />
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <TextField
    id="standard-full-width"
    label="Location"
    style={{ margin: 8 }}
    placeholder=""
    fullWidth
    margin="normal"
    name="job_location"
    value={this.state.job_location}
    onChange={this.onChange}
    InputLabelProps={{
    shrink: true,
    }}
    />
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <TextField
    id="standard-full-width"
    label="Salery"
    style={{ margin: 8 }}
    placeholder=""
    fullWidth
    margin="normal"
    name="job_salery"
    value={this.state.job_salery}
    onChange={this.onChange}
    InputLabelProps={{
    shrink: true,
    }}
    />
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
    <TextField
    id="standard-full-width"
    label="Apply link"
    style={{ margin: 8 }}
    placeholder=""
    fullWidth
    margin="normal"
    name="job_apply_link"
    value={this.state.job_apply_link}
    onChange={this.onChange}
    InputLabelProps={{
    shrink: true,
    }}
    />
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
    <Button
    type="submit"
    variant="contained"
    color="primary"
    size="large"
    startIcon={<SaveIcon />}>
    Save
    </Button>
    </Grid>
    </Grid>  
    </form>
    </Paper>
    </Grid>

  </Grid>
  </Container>
  </Box>


  </div>
  )
  }

}

export default PostJob