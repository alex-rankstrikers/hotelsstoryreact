import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import ProfileBar from '../users/profile_bar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import MyDropzone from '../common/Dropzone'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
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
  
    offer_form_single_field: {
      marginBottom: '30px',
    }
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Students',
  'Solo',
  'Families',
  'Couples',
  'Business travelers',
  'Senior Citizen',
  'Weekend Gateway',
  'Winter deals',
  'Summer deals',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
//let history = useHistory()


function MyOfferList() {
  const [showText, setShowText] = React.useState(false);
  function submitForm(contentType, OffersData, setResponse) {
    
     return axios
             .post(
                 'api/add-offers',OffersData,
                 {
                     headers: { 'Content-Type': contentType, Authorization: `Bearer ${localStorage.usertoken}` }
                 },
             )
             .then(response => {
              setShowText(! showText)                
             })
             .catch(err => {
                 console.log(err)
             })
  
   }
const classes = useStyles();
const theme = useTheme();

const [title, setTitle] = React.useState("");
const [description, setDescription] = React.useState("");
const [link, setLink] = React.useState("");
const [start_date, setStart_date] = React.useState("");
const [end_date, setEnd_date] = React.useState("");
const [terms_conditions, setTerms_conditions] = React.useState("");
const [deals_for, setDeals_for] = React.useState("");
const [sub_deals_for_mice_leisure, setSub_deals_for_mice_leisure] = React.useState("");
const [sub_deals_for_traveller, setSub_deals_for_traveller] = React.useState("");
const [file, setFile] = React.useState(null);
const [offer_code, setOffer_code] = React.useState("");

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  }

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setPersonName(value)
  }
 

  
    function uploadWithFormData(){
      const h_id=`${localStorage.h_id}`
      const formData = new FormData();
      formData.append("h_id",h_id);
      formData.append("title",title);
      formData.append("description",description);
      formData.append("link",link);
      formData.append("start_date",start_date);
      formData.append("end_date", end_date);
      formData.append("terms_conditions",terms_conditions);
      formData.append("deals_for",deals_for);
      formData.append("sub_deals_for_mice_leisure",sub_deals_for_mice_leisure);
      formData.append("sub_deals_for_traveller",sub_deals_for_traveller);
      formData.append("offer_code",offer_code);
      formData.append('file', file);
		//files.forEach(file => {
		//formData.append('file', file);
		//})
      //formData.append("uploadFile",files); 
      submitForm("multipart/form-data", formData);
     //console.log("Success Data####"+JSON.stringify(msg))
      }
    
      const [showBuyer, setshowBuyer] = React.useState(false);

		

		const handleChangeStatus = ({ meta }, status) => {
		console.log(status, meta)
		}

		const handleSubmit = (files, allFiles) => {
		console.log(files.map(f => f.meta))
		allFiles.forEach(f => f.remove())
		}
      
      
  return (
    <div className="App">
      <MyHeader />
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <ProfileBar />
            <Grid item xs={12} sm={12} md={9} >
              <Paper className="m-b-10" p={5}>
               <Box p={3} fontWeight="fontWeightBold" textAlign="left" fontSize={18} >Add Rewards / Deals</Box>
                 
               <Box p={3}  textAlign="center" fontSize={18} >
            {showText && <Alert variant="outlined" severity="success">
            Offers added successfully
            </Alert>}
            </Box>
              <form autoComplete="off">
                      <Box p={3} mb={5}>
                      <Grid container xs={12} sm={12} md={12} spacing={2}>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset">
                      <FormLabel component="legend">Rewards / Deals for</FormLabel>
                      <RadioGroup row aria-label="deals_for" name="deals_for" defaultValue="top" vaue={deals_for} 
                      onChange={(e) => { setDeals_for(e.target.value )}}>
                      <FormControlLabel value="1" control={<Radio color="primary" />} label="Buyers" onClick={() => setshowBuyer(! showBuyer)} />
                      <FormControlLabel value="2" control={<Radio color="primary" />} label="Corporate" onClick={() => setshowBuyer(! showBuyer)}/>
                      <FormControlLabel value="3" control={<Radio color="primary" />} label="Travellers" onClick={() => setshowBuyer('')}/>
                      </RadioGroup>
                      </FormControl>
                      </Grid>
                      {showBuyer &&
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset">
                      <FormLabel component="legend">Buyer Type</FormLabel>
                      <RadioGroup row aria-label="sub_deals_for_mice_leisure" name="sub_deals_for_mice_leisure" vaue={sub_deals_for_mice_leisure} 
                      onChange={(e) => { setSub_deals_for_mice_leisure(e.target.value )}} defaultValue="top">
                      <FormControlLabel value="1" control={<Radio color="primary" />} label="MICE offers " />
                      <FormControlLabel value="2" control={<Radio color="primary" />} label="Leisure offers" />
                      </RadioGroup>
                      </FormControl>
                      </Grid>
                    }
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl  fullWidth>
                      <InputLabel id="demo-mutiple-name-label" fullWidth>Offers Type</InputLabel>
                      <Select
                      labelId="demo-mutiple-name-label"
                      id="demo-mutiple-name" name="sub_deals_for_traveller"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<Input />}
                      MenuProps={MenuProps} fullWidth
                      >
                      {names.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                      {name}
                      </MenuItem>
                      ))}
                      </Select>
                      </FormControl>
                      </Grid>
 <Grid item xs={6} sm={12} md={6} spacing={2}>
 <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth name="title"
                      id="title"
                      label="Rewards / Deals title" 
                      className={classes.textField}
                      vaue={title} 
                      onChange={(e) => { setTitle(e.target.value )}} 
                       />
                      </FormControl>
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth
                      id ="start_date"
                      label="Rewards / Deals start date"
                      type="date" name="start_date" 
                      className={classes.textField}
                      InputLabelProps={{
                      shrink: true,
                      }}
                      vaue={start_date} 
                      onChange={(e) => { setStart_date(e.target.value )}}
                      />
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth
                      id="end_date"
                      label="Rewards / Deals end date"
                      type="date" name="end_date"
                      className={classes.textField}
                      InputLabelProps={{
                      shrink: true,
                      }}
                      vaue={end_date} 
                      onChange={(e) => { setEnd_date(e.target.value )}}
                      />
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth id="standard-basic" label="Offer code" name="offer_code" vaue={offer_code} 
                      onChange={(e) => { setOffer_code(e.target.value )}} />
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth id="standard-basic" name="link"  label="Any web link here" vaue={link} 
                      onChange={(e) => { setLink(e.target.value )}}/>
                      </FormControl> 
                      </Grid>
 <Grid item xs={6} sm={12} md={6} spacing={2}> 
 <FormControl component="fieldset" fullWidth>
 <TextField fullWidth id="standard-basic" type="file" name="file" label="Upload PDF file" onChange={(e) => setFile(e.target.files[0])}/>
 </FormControl>

 {/*<Box className="m-b-0" fontSize={13}> Upload PDF File(s):</Box>
        <Box className="filedropper">
          <MyDropzone   maxFiles={1} multiple={false}
        canCancel={false}/>
        </Box> 
 <MyDropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
      inputContent={(files, extra) => (extra.reject ? 'Image, audio and video files only' : 'Drag Files')}
      />*/}
                      </Grid>
                       
                      <Grid item xs={6} sm={12} md={6} spacing={2}> 
                      
                      {/*<FormControl component="fieldset" fullWidth >
                      <TextareaAutosize aria-label="minimum height" name="description" vaue={description} 
                      onChange={(e) => { setDescription(e.target.value )}}  rowsMin={3} placeholder="Rewards / Deals description" />
                    </FormControl>*/}
                      <FormControl component="fieldset" fullWidth className={classes.offer_form_single_field}>
                      <TextField
                      id="standard-textarea"
                      label="Rewards / Deals Description"
                      name="description" rowsMin={10}
                      placeholder="Rewards / Deals Description"
                      multiline
                      />
                      </FormControl>
                      </Grid>
                        <Grid item xs={6} sm={12} md={6} spacing={2}>  { /*<FormControl component="fieldset" fullWidth>
                       <TextareaAutosize aria-label="minimum height" vaue={terms_conditions} 
                      onChange={(e) => { setTerms_conditions(e.target.value )}}  name="terms_conditions" rowsMin={3} placeholder="Terms and condition" />
                        </FormControl> */}
                        <FormControl component="fieldset" fullWidth className={classes.offer_form_single_field}>
        {/* <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Terms and condition" /> */}
        <TextField
          id="standard-textarea"
          label="Terms and Conditions"
          name="description" rowsMin={10}
          placeholder="Terms and Conditions"
          multiline
        />
      </FormControl>
                        
                        </Grid>
                        </Grid>
                      </Box>
            <Box display="flex" alignRight="right" justifyContent="center" mb={3} p={2}>
            <Button variant="contained" color="primary" onClick={uploadWithFormData} className="baseBtn p-r-15 p-l-15" disableElevation>Save</Button>
            </Box>
                       </form>   
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default MyOfferList
