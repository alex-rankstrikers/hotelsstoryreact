import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import MyHeader from '../common/header'
import './Hotelsetup.scss'
import Rating from '@material-ui/lab/Rating';
import { loadCSS } from 'fg-loadcss';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Input from '@material-ui/core/Input';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Star from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Chip from '@material-ui/core/Chip';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import FormGroup from '@material-ui/core/FormGroup';
import EmailIcon from '@material-ui/icons/Email';
import axios from 'axios'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton'
import MyDropzone from '../common/Dropzone'
import Link from '@material-ui/core/Link'

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import usePlacesAutocomplete from 'use-places-autocomplete';

import mini_logo from '../webview/images/hotelsstory_logo.svg'
import Slider from '@material-ui/core/Slider';

//images/hotelsstory_logo.svg'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
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


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const id=`${localStorage.h_id}`
        const [data, setData] = React.useState({ hotels: [] }); 
           useEffect(() => {
          const fetchData = async () => {
            const result = await axios(
              'api/hotelsetup/'+id,{
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
                }
            )       
            setData(result.data)
          }
       
          fetchData()
        }, []);
  console.log("Data:::"+JSON.stringify(data))

  return (
    <div
      role="tabpanel"
      className="hotel_setup_body"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tapPad: {
    padding: '45x 0px 0px 0px',
  },
  benefitsBG: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.secondary,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },

}));

function MyHotelSetup(props) {
  const classes = useStyles();
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  const id = `${localStorage.h_id}`
  const hotelid = props.match.params.hotelid;

  let history = useHistory()

  const [age, setAge] = React.useState('');
  const handleSingleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();

  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  // const { apivalue, setApiValue } = usePlacesAutocomplete();

  // const handleApiInput = e => {
  //   // Place a "string" to update the value of the input element
  //   setApiValue(e.target.value);
  // };
  //   console.log(apivalue);


  const {
    apivalue,
    suggestions: { status, data },
    setApiValue
  } = usePlacesAutocomplete();

  const handleSelect = ({ description }) => () => {
    // When user select a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    console.log(description);
    setApiValue(description, false);
  };

  const renderSuggestions = () =>
    data.map(suggestion => (
        <li
          key={suggestion.id}
          onClick={handleSelect(suggestion)}
        >
          {/* Render suggestion text */}
        </li>
      )
    )



















  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };


  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };


  // const getUploadParams = ({ file, meta }) => {
  //   const formData = new FormData()
  //   formData.append('fileField', file)

  //   submitFormB("multipart/form-data", formData);
  //   console.log('####' + file);
  // }

 const getUploadParams = ({ meta }) => { return { url: 'http://localhost:8080/hotelsstory/server/public/uploads/profile' } }




  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }


  const [checkedItems, setCheckedItems] = React.useState({}); //plain object as state

  const [showAssign, setShowAssign] = useState(false);


  const [Hotels, setHotels] = React.useState({ Hotels: [] });
  const [property_type, setProperty_type] = React.useState({ Hlmasterpropertytype: [] });

  const [HotelAirport, setAirport] = React.useState({ HotelAirportInfo: [] });
  const [Facilities, setFacilities] = React.useState({ Facilities: [] });
  const [OtherFacilities, setOtherFacilities] = React.useState({ OtherFacilities: [] });
  const [MeeEveDDR, setMeeEveDDR] = React.useState({ MeetingEventsDDR: [] });
  const [Capchart, setCapacitychart] = React.useState({ Capacitychart: [] });
  const [Currency, setCurrency] = React.useState({ Currencylist: [] });
  
  {/* Hotel Media Finish */ }
  const [VideosLibrary, setVideosLibrary] = React.useState({ HotelVideosLibrary: [] });
  const [FactsheetsLibrary, setFactsheetsLibrary] = React.useState({ HotelFactsheetsLibrary: [] });
  const [Virtualtour, setVirtualtour] = React.useState({ HotelVirtualTour: [] });
  

  {/* Hotel Media Finish */ }

  {/* Venue Features Finish */ }
  const [venueAvailable, setVenueAvailable] = React.useState('');
  const [meeting_description, setMeeting_description] = React.useState('');
  const [meet_meeting_room, setMeet_meeting_room] = React.useState('');
  const [meet_max_capacity, setMeet_max_capacity] = React.useState('');
  const [meet_ballroom, setMeet_ballroom] = React.useState('');
  const [meet_breakout_room, setMeet_breakout_room] = React.useState('');

  const [VenueFeature, setVenueFeature] = React.useState({ VenueFeature: [] });
  const [VenueFeatureVal, setVenueFeatureVal] = React.useState({ VenueFeatureVal: [] });

  const [fields, setFields] = useState([{ value: null, value1: null }]);
  const [fields1, setFields1] = useState([{ value: null, value1: null }]);

  function handleChange1(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleChange3(i, event) {
    const values = [...fields1];
    values[i].value = event.target.value;
    setFields1(values);
  }

  function handleChange2(i, event) {
    const values = [...fields];
    values[i].value1 = event.target.files[0];
    setFields(values);
  }

  function handleChange4(i, event) {
    const values = [...fields1];
    values[i].value1 = event.target.files[0];
    setFields1(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null, value1: null });
    setFields(values);
  }

  function handleAdd1() {
    const values = [...fields1];
    values.push({ value: null, value1: null });
    setFields1(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  function handleRemove1(i) {
    const values = [...fields1];
    values.splice(i, 1);
    setFields1(values);
  }
  {/* Venue Features Finish */ }

  {/* Seasonal Rates Finish */ }
  const [SeasonalRates, setSeasonalRates] = React.useState({ SeasonalRates: [] });
  const [srJan, setsrJan] = React.useState('');
  const [srFeb, setsrFeb] = React.useState('');
  const [srMar, setsrMar] = React.useState('');
  const [srApr, setsrApr] = React.useState('');
  const [srMay, setsrMay] = React.useState('');
  const [srJun, setsrJun] = React.useState('');
  const [srJul, setsrJul] = React.useState('');
  const [srAug, setsrAug] = React.useState('');
  const [srSep, setsrSep] = React.useState('');
  const [srOct, setsrOct] = React.useState('');
  const [srNov, setsrNov] = React.useState('');
  const [srDec, setsrDec] = React.useState('');
  {/* Seasonal Rates Finish */ }

  const [CapacityClone, setCapacityClone] = useState([{
    capacity_title: null, capacity_floor: null, capacity_dimensions: null, capacity_theatre: null,
    capacity_boardroom: null, capacity_ushape: null, capacity_classroom: null, capacity_banquet: null,
    capacity_cocktail: null, capacity_currency: null, capacity_rate_startfrom: null, capacity_day_light: null,
  }]);

  function capacity_titleChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_title = event.target.value;
    setCapacityClone(values);
  }
  function capacity_floorChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_floor = event.target.value;
    setCapacityClone(values);
  }
  function capacity_dimensionsChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_dimensions = event.target.value;
    setCapacityClone(values);
  }
  function capacity_theatreChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_theatre = event.target.value;
    setCapacityClone(values);
  }
  function capacity_boardroomChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_boardroom = event.target.value;
    setCapacityClone(values);
  }
  function capacity_ushapeChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_ushape = event.target.value;
    setCapacityClone(values);
  }
  function capacity_classroomChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_classroom = event.target.value;
    setCapacityClone(values);
  }
  function capacity_banquetChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_banquet = event.target.value;
    setCapacityClone(values);
  }
  function capacity_cocktailChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_cocktail = event.target.value;
    setCapacityClone(values);
  }
  function capacity_currencyChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_currency = event.target.value;
    setCapacityClone(values);
  }
  function capacity_rate_startfromChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_rate_startfrom = event.target.value;
    setCapacityClone(values);
  }
  function capacity_day_lightChange(i, event) {
    const values = [...CapacityClone];
    values[i].capacity_day_light = event.target.value;
    setCapacityClone(values);
  }
  function capacitychartAdd() {
    const values = [...CapacityClone];
    values.push({
      capacity_title: null, capacity_floor: null, capacity_dimensions: null, capacity_theatre: null,
      capacity_boardroom: null, capacity_ushape: null, capacity_classroom: null, capacity_banquet: null,
      capacity_cocktail: null, capacity_currency: null, capacity_rate_startfrom: null, capacity_day_light: null
    });
    setCapacityClone(values);
  }

  function capacitychartRemove(i) {
    const values = [...CapacityClone];
    values.splice(i, 1);
    setCapacityClone(values);
  }
  // const capacitychartDynRemove = CChart => () => {
  //   const rows = [...rows];
  //   rows.splice(index, 1);
  //   setRows(rows);
  //   let items = CapacityClone.filter(cap => cap.id =! CChart.id.id);
  //   setCapacityClone(items);
  //   console.log(setCapacityClone)
  // };

  function capacitychartDynRemove(i) {
    const deldata4 = {
      cap_id: i
    }
    return axios
      .post('../api/delete-capacitychart', deldata4,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const [videolink, setVideolink] = useState([{ video_title: null, video_link: null }]);
  function videotitleChange(i, event) {
    const values = [...videolink];
    values[i].video_title = event.target.value;
    setVideolink(values);
  }
  function videolinkChange(i, event) {
    const values = [...videolink];
    values[i].video_link = event.target.value;
    setVideolink(values);
  }
  function handleVideoAdd() {
    const values = [...videolink];
    values.push({ video_title: null, video_link: null });
    setVideolink(values);
  }

  function handleVideoRemove(i) {
    const values = [...videolink];
    values.splice(i, 1);
    setVideolink(values);
  }
  function handleVideodynRemove(i) {
    const deldataV = {
      video_id: i
    }
    return axios
      .post('../api/delete-videolink', deldataV,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
const [virtuallink, setVirtuallink] = useState([{ virtual_title: null, virtual_link: null }]);
  function virtualtitleChange(i, event) {
    const values = [...virtuallink];
    values[i].virtual_title = event.target.value;
    setVirtuallink(values);
  }
  function virtuallinkChange(i, event) {
    const values = [...virtuallink];
    values[i].virtual_link = event.target.value;
    setVirtuallink(values);
  }
  function handleVirtualAdd() {
    const values = [...virtuallink];
    values.push({ virtual_title: null, virtual_link: null });
    setVirtuallink(values);
  }

  function handleVirtualRemove(i) {
    const values = [...virtuallink];
    values.splice(i, 1);
    setVirtuallink(values);
  }
  function handleVirtualdynRemove(i) {
    const deldataVir = {
      virtual_id: i
    }
    return axios
      .post('../api/delete-virtuallink', deldataVir,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
const [hlfactsheet, setHlfactsheet] = useState([{ factsheet_title: null, factsheet_file: null }]);
  function facttitleChange(i, event) {
    const values = [...hlfactsheet];
    values[i].factsheet_title = event.target.value;
    setHlfactsheet(values);
  }
  function factfileChange(i, event) {
    const values = [...hlfactsheet];
    values[i].factsheet_file = event.target.files[0];
    setHlfactsheet(values);
  }
  function handleFactsheetAdd() {
    const values = [...hlfactsheet];
    values.push({ factsheet_title: null, factsheet_file: null });
    setHlfactsheet(values);
  }

  function handleFactsheetRemove(i) {
    const values = [...hlfactsheet];
    values.splice(i, 1);
    setHlfactsheet(values);
  }
  function handleFactsheetdynRemove(i) {
    const deldataF = {
      fact_id: i
    }
    return axios
      .post('../api/delete-hlfactsheet', deldataF,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const [MEFL, setMEFL] = React.useState({ MeetingEventsFactsheetsLibrary: [] });
  const [BuyCom, setBuyCom] = React.useState({ BuyerCommission: [] });
  const [CorDiscount, setCorDiscount] = React.useState({ Cor_discount: [] });
  const [LeiDiscount, setLeiDiscount] = React.useState({ Le_discount: [] });
  const [AccessPage, setAccessPage] = React.useState({ HotelsAccessPagesMaster: [] });
  const [AssignRole, setAssignRole] = React.useState({ HotelAssignRole: [] });

  const [hotel_name, setHotelName] = React.useState('');
  const [star_rating, setStar_rating] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [address_1, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');
  const [main_phone, setMainphone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [url, setUrl] = React.useState('');

  const [airportinfo, setAirportinfo] = useState([{ airport_name: null, airport_dist: null, airport_miles: null }]);
  function ChangeAirportName(i, event) {
    const values = [...airportinfo];
    values[i].airport_name = event.target.value;
    setAirportinfo(values);
  }
  function ChangeAirportDist(i, event) {
    const values = [...airportinfo];
    values[i].airport_dist = event.target.value;
    setAirportinfo(values);
  }
  function ChangeAirportKm(i, event) {
    const values = [...airportinfo];
    values[i].airport_miles = event.target.value;
    setAirportinfo(values);
  }

  function airportAdd() {
    const values = [...airportinfo];
    values.push({ airport_name: null, airport_dist: null, airport_miles: null });
    setAirportinfo(values);
  }

  function airportRemove(i) {
    const values = [...airportinfo];
    values.splice(i, 1);
    setAirportinfo(values);
  }
  function airportDynRemove(i) {
    const deldata1 = {
      airport_id: i
    }
    return axios
      .post('../api/delete-airport', deldata1,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  function ddrRemove(i) {
      const deldata2 = {
        ddr_id: i
      }
      return axios
        .post('../api/delete-ddr', deldata2,
          {
            headers: { 'Content-Type': 'application/json' }
          })
        .then(response => {
          if (response) {
            history.push('/hotelsetup/' + hotelid)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  function floorplanRemove() {
      const deldata3 = {
        hotelid: hotelid
      }
      return axios
        .post('../api/delete-floorplan', deldata3,
          {
            headers: { 'Content-Type': 'application/json' }
          })
        .then(response => {
          if (response) {
            history.push('/hotelsetup/' + hotelid)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  function factsheetRemove(i) {
      const deldata5 = {
        f_id: i
      }
      return axios
        .post('../api/delete-factsheet', deldata5,
          {
            headers: { 'Content-Type': 'application/json' }
          })
        .then(response => {
          if (response) {
            history.push('/hotelsetup/' + hotelid)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

  const handleDrop = files => {
    // Push all the axios request promise into a single array

  }

  const [floor_plan, setFloor_plan] = React.useState('');
  const [meeting_img_1, setMeeting_img_1] = React.useState('');
  const [meeting_img_2, setMeeting_img_2] = React.useState('');
  const [meeting_img_3, setMeeting_img_3] = React.useState('');
  const [meeting_img_4, setMeeting_img_4] = React.useState('');
  const [meeting_img_5, setMeeting_img_5] = React.useState('');
  const [meeting_img_6, setMeeting_img_6] = React.useState('');
  const [meeting_img_7, setMeeting_img_7] = React.useState('');
  const [meeting_img_8, setMeeting_img_8] = React.useState('');

  const [hotel_description, setHotel_description] = React.useState('');
  const [no_of_rooms, setNo_of_rooms] = React.useState('');
  const [no_of_villas, setNo_of_villas] = React.useState('');
  const [no_of_apartment, setNo_of_apartment] = React.useState('');
  const [room_description, setRoom_description] = React.useState('');
  const [res_description, setRes_description] = React.useState('');
  const [bar_description, setBar_description] = React.useState('');

  const [hl_profile_image, setHl_profile_image] = React.useState(null);
  const [room_image, setRoom_image] = React.useState('');
  const [res_image, setRes_image] = React.useState('');
  const [bar_image, setBar_image] = React.useState('');

  const [HotelBuyCom, setHotelBuyCom] = React.useState('');
  const [cliben, setCliben] = React.useState({ cliben: [] });
  const [clibenval, setClibenval] = React.useState({ clibenval: [] });
  const [CorpBen, setCorpBen] = React.useState({ CorpBen: [] });
  const [HotelCorpBen, setHotelCorpBen] = React.useState({ HotelCorpBen: [] });
  const [LeiBen, setLeiBen] = React.useState({ LeiBen: [] });
  const [HotelLeiBen, setHotelLeiBen] = React.useState({ HotelLeiBen: [] });

  const [CovidFacilities, setCovidFacilities] = React.useState({ CovidFacilities: [] });
  const [HotelFacility, setHotelFacility] = React.useState({ HotelFacility: [] });

  const [buyer_benefit_link, setBuyer_benefit_link] = React.useState('');
  const [buyer_benefit_code, setBuyer_benefit_code] = React.useState('');
  const [corporate_discount, setCorporate_discount] = React.useState('');
  const [corporate_benefit_link, setCorporate_benefit_link] = React.useState('');
  const [corporate_benefit_code, setCorporate_benefit_code] = React.useState('');
  const [leisure_discount, setLeisure_discount] = React.useState('');
  const [leisure_benefit_link, setLeisure_benefit_link] = React.useState('');
  const [leisure_benefit_code, setLeisure_benefit_code] = React.useState('');

  const [certify, setCertify] = React.useState('');
  const [terms_condition, setTerms_condition] = React.useState('');

  
  const updateForm1 = (e) => {
    e.preventDefault();
    const form1data = {
      hotel_mid: hotelid,
      hotel_name: hotel_name,
      property_type: personName,
      star_rating: star_rating,
      description: description,
      address_1: address_1,
      postcode: postcode,
      main_phone: main_phone,
      email: email,
      url: url,
      airportinfo: airportinfo,
    }
    return axios
      .post('../api/updatedForm1', form1data,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          //console.log(response)
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })

  }
  function submitForm2(contentType, OffersData, setResponse) {
    return axios
      .post(
        'api/updatedForm2', OffersData,
        {
          headers: { 'Content-Type': contentType, Authorization: `Bearer ${localStorage.usertoken}` }
        },
      )
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function submitForm3(contentType, OffersData) {
    return axios
      .post(
        '../api/updatedForm3', OffersData,
        {
          headers: { 'Content-Type': contentType, Authorization: `Bearer ${localStorage.usertoken}` }
        },
      )
      .then(response => {
        if (response) {
          //console.log(response);
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => { console.log(err) })
  }
  function submitFormB(contentType, OffersData) {
    return axios
      .post(
        '../api/savehlimg', OffersData,
        {
          headers: { 'Content-Type': contentType, Authorization: `Bearer ${localStorage.usertoken}` }
        },
      )
      .then(response => {
        if (response) {
          //console.log(response);
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => { console.log(err) })
  }
  function submitHotelmedia(contentType, OffersData) {
    return axios
      .post(
        '../api/updatedHotelmedia', OffersData,
        {
          headers: { 'Content-Type': contentType, Authorization: `Bearer ${localStorage.usertoken}` }
        },
      )
      .then(response => {
        if (response) {
          //console.log(response);
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => { console.log(err) })
  }

  function uploadWithFormData3() {

    let factsheets = fields;
    let daypacks = fields1;

    const formData = new FormData();
    formData.append("hl_id_3", hotelid);
    formData.append("venueAvailable", venueAvailable);
    formData.append("meeting_description", meeting_description);
    formData.append("meet_meeting_room", meet_meeting_room);
    formData.append("meet_max_capacity", meet_max_capacity);
    formData.append("meet_ballroom", meet_ballroom);
    formData.append("meet_breakout_room", meet_breakout_room);
    formData.append("VenueFeatureVal", VenueFeatureVal.VenueFeatureVal);
    formData.append("floor_plan", floor_plan);
    formData.append("srJan", srJan);
    formData.append("srFeb", srFeb);
    formData.append("srMar", srMar);
    formData.append("srApr", srApr);
    formData.append("srMay", srMay);
    formData.append("srJun", srJun);
    formData.append("srJul", srJul);
    formData.append("srAug", srAug);
    formData.append("srSep", srSep);
    formData.append("srOct", srOct);
    formData.append("srNov", srNov);
    formData.append("srDec", srDec);

    for (let i = 0; i < CapacityClone.length; i++) {
      formData.append(`Ctitle[${i}]`, CapacityClone[i].capacity_title);
      formData.append(`Cfloor[${i}]`, CapacityClone[i].capacity_floor);
      formData.append(`Cdimensions[${i}]`, CapacityClone[i].capacity_dimensions);
      formData.append(`Ctheatre[${i}]`, CapacityClone[i].capacity_theatre);
      formData.append(`Cboardroom[${i}]`, CapacityClone[i].capacity_boardroom);
      formData.append(`Cushape[${i}]`, CapacityClone[i].capacity_ushape);
      formData.append(`Cclassroom[${i}]`, CapacityClone[i].capacity_classroom);
      formData.append(`Cbanquet[${i}]`, CapacityClone[i].capacity_banquet);
      formData.append(`Ccocktail[${i}]`, CapacityClone[i].capacity_cocktail);
      formData.append(`Ccurrency[${i}]`, CapacityClone[i].capacity_currency);
      formData.append(`Crate[${i}]`, CapacityClone[i].capacity_rate_startfrom);
      formData.append(`Cday_light[${i}]`, CapacityClone[i].capacity_day_light);
    }

    for (let i = 0; i < daypacks.length; i++) {
      formData.append(`Dimages[${i}]`, daypacks[i].value1);
      formData.append(`Dtitles[${i}]`, daypacks[i].value);
    }

    for (let i = 0; i < factsheets.length; i++) {
      formData.append(`Fimages[${i}]`, factsheets[i].value1);
      formData.append(`Ftitles[${i}]`, factsheets[i].value);
    }

    submitForm3("multipart/form-data", formData);
  }
  
  function uploadHotelmedia() {

    let videosec = videolink;
    let factsec = hlfactsheet;
    let virtualsec = virtuallink;

    const formData = new FormData();
    formData.append("hl_id", hotelid);

    for (let i = 0; i < videosec.length; i++) {
      formData.append(`Vtitle[${i}]`, videosec[i].video_title);
      formData.append(`Vlink[${i}]`, videosec[i].video_link);
    }
    for (let i = 0; i < factsec.length; i++) {
      formData.append(`Ftitle[${i}]`, factsec[i].factsheet_title);
      formData.append(`Ffile[${i}]`, factsec[i].factsheet_file);
    }
    for (let i = 0; i < virtualsec.length; i++) {
      formData.append(`Virtitle[${i}]`, virtualsec[i].virtual_title);
      formData.append(`Virlink[${i}]`, virtualsec[i].virtual_link);
    }

    submitHotelmedia("multipart/form-data", formData);
  }

  const updateForm4 = (e) => {
    e.preventDefault();
    const form4data = {
      hl_id_4: hotelid,
      buyercommission: HotelBuyCom,
      clibenval: clibenval.clibenval,
      HotelCorpBen: HotelCorpBen.HotelCorpBen,
      HotelLeiBen: HotelLeiBen.HotelLeiBen,
      buyer_benefit_link: buyer_benefit_link,
      buyer_benefit_code: buyer_benefit_code,
      corporate_discount: corporate_discount,
      corporate_benefit_link: corporate_benefit_link,
      corporate_benefit_code: corporate_benefit_code,
      leisure_discount: leisure_discount,
      leisure_benefit_link: leisure_benefit_link,
      leisure_benefit_code: leisure_benefit_code
    }
    // console.log(form4data);
    return axios
      .post('../api/updatedForm4', form4data,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const assignroleadd = { hotel_id: hotelid, first_name: '', last_name: '', user_email: '', access_page1: '', access_page2: '', access_page3: '' };

  const [event, setRoleadd] = useState(assignroleadd);

  const rolehandleChange = e => {
    const { name, value } = e.target;
    setRoleadd({ ...event, [name]: value });

    if (e.target.type === 'checkbox' && !e.target.checked) {
      setRoleadd({ ...event, [name]: '' });
    } else {
      setRoleadd({ ...event, [name]: value });
    }
  }

  const handleAssignSubmit = e => {
    e.preventDefault();
    // console.log(event);
    return axios.post('../api/add-assign', event, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })

    // if (event.organization && event.org_type) {
    //     handleChange(e, props.addEvent(event));
    // }
  }

  const updateForm6 = (e) => {
    e.preventDefault();
    const form6data = {
      hotel_id: hotelid,
      certify: certify.certify,
      terms_condition: terms_condition.terms_condition
    }
    // console.log(form6data);
    return axios
      .post('../api/updatedForm6', form6data,
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        if (response) {
          history.push('/hotelsetup/' + hotelid)
        }
      })
      .catch(err => {
        console.log(err)
      })

  }

  useEffect(() => {
    const fetchData = async () => {

      const result = await axios(
        '../api/hotelsetup/' + hotelid, {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      }
      )
      setAirport(result.data)
      setFacilities(result.data)
      setOtherFacilities(result.data)
      setMeeEveDDR(result.data)
      setCapacitychart(result.data)
      setCurrency(result.data)
      setVideosLibrary(result.data)
      setFactsheetsLibrary(result.data)
      setVirtualtour(result.data)

      {/* Venue Features Finish */ }
      setVenueAvailable(result.data.Hotels.meeting_room_status)
      setMeeting_description(result.data.Hotels.meeting_description)
      setMeet_meeting_room(result.data.Hotels.meet_meeting_room)
      setMeet_max_capacity(result.data.Hotels.meet_max_capacity)
      setMeet_ballroom(result.data.Hotels.meet_ballroom)
      setMeet_breakout_room(result.data.Hotels.meet_breakout_room)

      setVenueFeature(result.data)
      setVenueFeatureVal({ VenueFeatureVal: result.data.VenueFeatureVal })
      {/* Venue Features Finish */ }

      {/* Seasonal Rates Finish */ }
      setSeasonalRates(result.data)
      setsrJan(result.data.SRatesJan)
      setsrFeb(result.data.SRatesFeb)
      setsrMar(result.data.SRatesMar)
      setsrApr(result.data.SRatesApr)
      setsrMay(result.data.SRatesMay)
      setsrJun(result.data.SRatesJun)
      setsrJul(result.data.SRatesJul)
      setsrAug(result.data.SRatesAug)
      setsrSep(result.data.SRatesSep)
      setsrOct(result.data.SRatesOct)
      setsrNov(result.data.SRatesNov)
      setsrDec(result.data.SRatesDec)
      {/* Seasonal Rates Finish */ }

      setMEFL(result.data)
      setBuyCom(result.data)
      setLeiBen(result.data)
      setCorDiscount(result.data)
      setLeiDiscount(result.data)

      setAccessPage(result.data)
      setAssignRole(result.data)
      setHotels(result.data)
      setProperty_type(result.data)

      setHotelName(result.data.Hotels.hotel_name)
      setStar_rating(result.data.Hotels.star_rating)
      setDescription(result.data.Hotels.description)

      setMeeting_description(result.data.Hotels.meeting_description)
      setMeet_meeting_room(result.data.Hotels.meet_meeting_room)
      setMeet_max_capacity(result.data.Hotels.meet_max_capacity)
      setMeet_ballroom(result.data.Hotels.meet_ballroom)
      setMeet_breakout_room(result.data.Hotels.meet_breakout_room)

      setFloor_plan(result.data.Hotels.floor_plan)
      setMeeting_img_1(result.data.Hotels.meeting_img_1)
      setMeeting_img_2(result.data.Hotels.meeting_img_2)
      setMeeting_img_3(result.data.Hotels.meeting_img_3)
      setMeeting_img_4(result.data.Hotels.meeting_img_4)
      setMeeting_img_5(result.data.Hotels.meeting_img_5)
      setMeeting_img_6(result.data.Hotels.meeting_img_6)
      setMeeting_img_7(result.data.Hotels.meeting_img_7)
      setMeeting_img_8(result.data.Hotels.meeting_img_8)

      if (result.data.HodelAddress != null) {
      setAddress(result.data.HodelAddress.address_1)
      setPostcode(result.data.HodelAddress.postcode)
      }
      if (result.data.HotelMainContacts != null) {
      setMainphone(result.data.HotelMainContacts.main_phone)
      setEmail(result.data.HotelMainContacts.email)
      setUrl(result.data.HotelMainContacts.url)
      }

      if (result.data.HotelProperty != null) {
      setHotel_description(result.data.HotelProperty.hotel_description)
      setNo_of_rooms(result.data.HotelProperty.no_of_rooms)
      setNo_of_villas(result.data.HotelProperty.no_of_villas)
      setNo_of_apartment(result.data.HotelProperty.no_of_apartment)
      setRoom_description(result.data.HotelProperty.room_description)
      setRes_description(result.data.HotelProperty.res_description)
      setBar_description(result.data.HotelProperty.bar_description)

      setHl_profile_image(result.data.HotelProperty.hl_profile_image)
      setRoom_image(result.data.HotelProperty.room_image)
      setRes_image(result.data.HotelProperty.res_image)
      setBar_image(result.data.HotelProperty.bar_image)
      }
      if (result.data.HotelBuyCom != null) {
        setHotelBuyCom(result.data.HotelBuyCom.buyer_com_id)
      }
      //setCliBen(result.data.CliBen)
      setClibenval({ clibenval: result.data.clibenval })
      setCliben(result.data)
      setHotelCorpBen({ HotelCorpBen: result.data.HotelCorpBen })
      setCorpBen(result.data)
      setHotelLeiBen({ HotelLeiBen: result.data.HotelLeiBen })
      setLeiBen(result.data)

      setHotelFacility({ HotelFacility: result.data.HotelFacility })
      setCovidFacilities(result.data)
      if (result.data.MemberBenefit != null) {
        setBuyer_benefit_link(result.data.MemberBenefit.buyer_benefit_link)
        setBuyer_benefit_code(result.data.MemberBenefit.buyer_benefit_code)
        setCorporate_discount(result.data.MemberBenefit.corporate_discount)
        setCorporate_benefit_link(result.data.MemberBenefit.corporate_benefit_link)
        setCorporate_benefit_link(result.data.MemberBenefit.corporate_benefit_code)
        setLeisure_discount(result.data.MemberBenefit.leisure_discount)
        setLeisure_benefit_link(result.data.MemberBenefit.leisure_benefit_link)
        setLeisure_benefit_code(result.data.MemberBenefit.leisure_benefit_code)
      }
      if (result.data.Payments != null) {
        setCertify({ certify: result.data.Payments.certify })
        setTerms_condition({ terms_condition: result.data.Payments.terms_condition })
      }
      console.log(property_type);
      if (result.data.property_type) {
        setPersonName(result.data.property_type);
      }
    }
    fetchData()
  }, []);

  function uploadWithFormData2() {
    const formData = new FormData();
    formData.append("hl_id_2", hotelid);
    formData.append("hotel_description", hotel_description);
    formData.append("hl_profile_image", hl_profile_image);
    formData.append("room_image", room_image);
    formData.append("res_image", res_image);
    formData.append("bar_image", bar_image);
    formData.append("no_of_rooms", no_of_rooms);
    formData.append("no_of_villas", no_of_villas);
    formData.append("no_of_apartment", no_of_apartment);
    formData.append("room_description", room_description);
    formData.append("res_description", res_description);
    formData.append("HotelFacility", HotelFacility.HotelFacility);
    submitForm2("multipart/form-data", formData);
    //console.log("Success Data####"+JSON.stringify(msg))
  }

  const certifyChange = e => {
    if (e.target.type === 'checkbox' && !e.target.checked) {
      setCertify({ certify, [e.target.name]: '' });
    } else {
      setCertify({ certify, [e.target.name]: Number(e.target.value) });
    }
  }
  const termsChange = e => {
    if (e.target.type === 'checkbox' && !e.target.checked) {
      setTerms_condition({ terms_condition, [e.target.name]: '' });
    } else {
      setTerms_condition({ terms_condition, [e.target.name]: Number(e.target.value) });
    }
  }

  //console.log(hl_profile_image)
  // console.log(HotelFacility)
  return (
    <div className={classes.root}>
      <MyHeader />
      <AppBar position="static" color="default" className="m-t-65">
        <Tabs
          value={value} handleChange
          className="hotelsetup_tabs_container"
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Basic Info" className="hotelsetup_tab" {...a11yProps(0)} />
          <Tab label="Property Info" className="hotelsetup_tab" {...a11yProps(1)} />
          <Tab label="Meeting or Venue details" className="hotelsetup_tab" {...a11yProps(2)} />
          <Tab label="Hotel Media" className="hotelsetup_tab" {...a11yProps(3)} />
          <Tab label="Members Benefits" className="hotelsetup_tab" {...a11yProps(4)} />
          <Tab label="Assign Role" className="hotelsetup_tab" {...a11yProps(5)} />
          <Tab label="Terms" className="hotelsetup_tab" {...a11yProps(6)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Container maxWidth="xl" className="tab_content_container">
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Paper className="m-b-12" p={5}>
                <Box p={3} textAlign="left" className="dm_font page_heading" fontSize={25} mt={4} mb={6}>Start by telling us your property's name, contact details and address.</Box>
                <form onSubmit={updateForm1} autoComplete="off">
                  <Box p={3} mb={5}>
                    <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                        <FormControl component="fieldset" fullWidth>
                          {/* <Box textAlign="left" fontSize={20} >Hotel Name *</Box> */}
                          <TextField id="standard-basic" label="Hotel Name" value={hotel_name}
                            onChange={e => setHotelName(e.target.value)} />
                          {/* <TextField fullWidth
                            id="standard-basic"
                            name="hotel_name"
                            value={hotel_name}
                            onChange={e => setHotelName(e.target.value)} /> */}
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                        <FormControl className={classes.formControl} fullWidth >
                          <InputLabel id="demo-mutiple-chip-label">Property Type *</InputLabel>
                          <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={personName}
                            name="personName"
                            onChange={handleChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                              <div className={classes.chips}>
                                {selected.map((value) => (
                                  <Chip key={value} label={value} className={classes.chip} />
                                ))}
                              </div>
                            )}
                            MenuProps={MenuProps}
                          >
                            {property_type.Hlmasterpropertytype.map((Pro) => (
                              <MenuItem key={Pro.hl_property_description} value={Pro.hl_property_description} style={getStyles(Pro.hl_property_description, personName, theme)}>
                                {Pro.hl_property_description}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={2} lg={2} spacing={2}>
                        <FormControl component="fieldset">
                          <Box component="fieldset" mb={3} className="star_rating" borderColor="transparent">
                            <Typography component="legend" className="txt_legend">Star Rating</Typography>
                            <Rating
                              name="simple-controlled"
                              value={star_rating}
                              onChange={(event, newValue) => {
                                setStar_rating(newValue);
                              }}
                            />
                          </Box>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="description">
                        {/* <Box textAlign="left" fontSize={20} >Hotel Description *</Box> */}
                        {/* <TextareaAutosize fullWidth aria-label="minimum height" name="description" value={description} onChange={e => setDescription(e.target.value)} rowsMin={10} placeholder="Minimum 3 rows" /> */}

                        <TextField
                          id="standard-textarea"
                          label="Hotel Description"
                          name="description" value={description} onChange={e => setDescription(e.target.value)} rowsMin={10}
                          placeholder="Description"
                          multiline
                        />

                        {/* <TextField
                          id="standard-full-width"
                          multiline
                          inputProps={{ 'aria-label': 'naked' }}
                          style={{ margin: 8, width: '100%', fontSize: '4px', }}
                          placeholder="Description"
                          fullWidth
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        /> */}
                      </Grid>

                      <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                        {/* <Box textAlign="left" fontSize={20} >Address *</Box> */}
                        <FormControl component="fieldset" fullWidth>
                          <TextField id="standard-basic" label="Address" name="address_1" value={address_1}  onChange={e => setAddress(e.target.value)}/>
                        </FormControl>
                      </Grid>
                      <Box>{renderSuggestions()}</Box>
                      <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                        {/* <Box textAlign="left" fontSize={20} >Zip Code / Postal Code *</Box> */}
                        <FormControl component="fieldset" fullWidth>
                          <TextField className="full_width" label="Zip Code" id="standard-basic" name="postcode" value={postcode} onChange={e => setPostcode(e.target.value)} />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                        {/* <Box textAlign="left" fontSize={20} >Hotel Main Phone *</Box> */}
                        <FormControl component="fieldset" fullWidth>
                          <TextField id="standard-basic" label="Hotel Main Phone" name={main_phone} value={main_phone} onChange={e => setMainphone(e.target.value)} />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                        {/* <Box textAlign="left" fontSize={20} >Hotel Email *</Box> */}
                        <FormControl component="fieldset" fullWidth>

                          <TextField id="standard-basic" label="Hotel Email" name={email} value={email} onChange={e => setEmail(e.target.value)} />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                        {/* <Box textAlign="left" fontSize={20} >Hotel Website Url *</Box> */}
                        <FormControl component="fieldset" fullWidth>
                          <TextField id="standard-basic" label="Hotel Website Url" name={url} value={url} onChange={e => setUrl(e.target.value)} />
                          {/* <TextField fullWidth id="standard-basic" name={url} value={url} onChange={e => setUrl(e.target.value)} /> */}
                        </FormControl>
                      </Grid>

                    </Grid>
                  </Box>
                  <Box display="flex" flexDirection="column" mb={0} p={3}>
                    <Box display="flex" flexDirection="row" width="100%" className="m-b-0">
                      <Box width="59%" fontSize={20} fontWeight="600" className="dm_font">Airport Name </Box>
                      <Box width="40%" fontSize={20} fontWeight="600" className="dm_font">Distance to Hotel</Box>
                    </Box>

                    {airportinfo.map((Ainfo, idx) => {
                      return (
                        <Box display="flex" flexDirection="row">
                          <Box width="60%" mr={2}>
                            <FormControl component="fieldset" fullWidth>
                              <TextField
                                id="standard-basic"
                                label="Airport Name"
                                value={Ainfo.airport_name || ""}
                                onChange={e => ChangeAirportName(idx, e)} />
                            </FormControl>
                          </Box>
                          <Box width="20%" mr={3}>
                            <FormControl component="fieldset" fullWidth>
                              <TextField
                                id="standard-basic"
                                label="Distance"
                                value={Ainfo.airport_dist || ""}
                                onChange={e => ChangeAirportDist(idx, e)} />
                            </FormControl>
                          </Box>
                          <Box width="13%" mr={3}>
                            <FormControl component="fieldset" fullWidth>

                              <InputLabel id="demo-mutiple-chip-label">Kms/ Miles</InputLabel>
                              <Select fullWidth
                                labelId="demo-simple-select-label"
                                value={Ainfo.airport_miles || ""}
                                id="demo-simple-select"
                                onChange={e => ChangeAirportKm(idx, e)} >
                                <MenuItem value={1}>Kms</MenuItem>
                                <MenuItem value={2}>Miles</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                          <Box width="7%" display="flex" alignItems="flex-end" justifyContent="space-evenly" className="hand_cursor">
                            <Icon className="fa fa-plus-circle" color="secondary" onClick={() => airportAdd()} />
                            <Icon className="fa fa-minus-circle" color="secondary" onClick={() => airportRemove(idx)} />
                          </Box>
                        </Box>
                      );
                    })}
                    {HotelAirport.HotelAirportInfo.map(HotelAI => (
                      <Box display="flex" flexDirection="row">
                        <Box width="60%" mr={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField
                              id="standard-basic"
                              label="Airport Name"
                              value={HotelAI.airport_name} />
                          </FormControl>
                        </Box>
                        <Box width="20%" mr={3}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField
                              id="standard-basic"
                              label="Distance"
                              value={HotelAI.airport_km} />
                          </FormControl>
                        </Box>
                        <Box width="13%" mr={3}>
                          <FormControl component="fieldset" fullWidth>
                            <InputLabel id="demo-mutiple-chip-label">Kms/ Miles</InputLabel>
                            <Select fullWidth
                              labelId="demo-simple-select-label"
                              value={HotelAI.airport_miles}
                              id="demo-simple-select">
                              <MenuItem value={1}>Kms</MenuItem>
                              <MenuItem value={2}>Miles</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Box width="7%" display="flex" alignItems="center" justifyContent="space-evenly" className="hand_cursor">
                          <Icon className="fa fa-plus-circle" color="secondary" onClick={() => airportAdd()} />
                          <Icon className="fa fa-minus-circle" color="secondary" onClick={() => airportDynRemove(HotelAI.id)} />
                        </Box>
                      </Box>
                    ))}

                  </Box>
                  <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                    <ButtonGroup disableElevation variant="contained" color="secondary">
                      <Button type="submit" color="primary" className="left_curvy_button tab_btn_setup huge_btn baseBtn p-r-51 p-l-51 post_story_btn m-r-0">Save</Button>
                      <Button type="submit" className="right_curvy_button  huge_btn tab_btn_setup baseBtn p-r-51 p-l-51 post_story_btn">Save & Next</Button>
                    </ButtonGroup>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Container maxWidth="xl" className="tab_content_container">
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className="m-b-12" p={5}>
                <Box p={3} textAlign="left" className="dm_font page_heading" fontSize={25} mt={4} mb={6} >Provide property basic details like no. of rooms, restaurants, and GDS codes.</Box>
                <form autoComplete="off">
                  <Box p={3} mb={5}>
                    <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="description">
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font">Hotel Details</Box>

                        <TextField
                          id="standard-textarea"
                          label="Hotel Description"
                          name="hotel_description" onChange={e => setHotel_description(e.target.value)} value={hotel_description} rowsMin={10}
                          placeholder="Hotel Description"
                          multiline
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        {/* <TextField fullWidth 
                        id="standard-basic" 
                        type="file" 
                        name="hl_profile_image" 
                        label="Hero image" 
                        onChange={(e) => setHl_profile_image(e.target.files[0])}/>  */}
                        <Box className="m-b-0" fontSize={16} color="#8b8275"> Choose Hero Image:</Box>
                        <Box className="filedropper">
                          <Dropzone
                            getUploadParams={getUploadParams}
                            onChangeStatus={handleChangeStatus}
                            onSubmit={handleSubmit}
                            accept="image/*,audio/*,video/*"
                          />
                        </Box>

                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="m-t-0 m-b-0">
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font m-b-0" width="100%" mt={1}>Bedrooms Details</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                        <FormControl component="fieldset" fullWidth>
                          <TextField fullWidth id="standard-basic" name="no_of_rooms" value={no_of_rooms} onChange={e => setNo_of_rooms(e.target.value)} label="No Of Rooms *" />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                        <FormControl component="fieldset" fullWidth>
                          <TextField fullWidth id="standard-basic" name="no_of_villas" onChange={e => setNo_of_villas(e.target.value)} value={no_of_villas} label="No Of Villas (If Applicable)" />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                        <FormControl component="fieldset" fullWidth>
                          <TextField fullWidth id="standard-basic" name="no_of_apartment" onChange={e => setNo_of_apartment(e.target.value)} value={no_of_apartment} label="No Of Residential Apartments (If Applicable)" />
                        </FormControl>
                      </Grid>


                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="description m-t-0 m-b-0" className="description">
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font  m-b-0" mt={1} width="100%">Rooms Details</Box>
                        <TextField
                          id="standard-textarea"
                          label="Room Description"
                          name="room_description" onChange={e => setRoom_description(e.target.value)} value={room_description} rowsMin={10}
                          placeholder="Hotel Description"
                          multiline
                        />
                        {/* <TextareaAutosize fullWidth aria-label="minimum height" name="room_description" onChange={e => setRoom_description(e.target.value)} value={room_description} rowsMin={10} placeholder="Minimum 3 rows" /> */}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box className="m-b-0" fontSize={16} color="#8b8275"> Upload Room Picture(s):</Box>
                        <Box className="filedropper">
                          {/* <TextField fullWidth 
                          id="standard-basic" 
                          type="file" 
                          name="room_image" 
                          label="Upload file" 
                          onChange={(e) => setRoom_image(e.target.files[0])}/>  */}
                          <MyDropzone />
                        </Box>

                      </Grid>
                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}> */}
                      <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font m-b-0" mt={1} width="100%"><b>Does your property have Restaurants & Bars</b></Box>
                      {/* </Grid> */}


                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="description">
                        {/* <Box textAlign="left" fontSize={20} >Hotel Restaurant Description</Box> */}
                        <TextField
                          id="standard-textarea"
                          label="Restaurant Description"
                          name="res_description" onChange={e => setRes_description(e.target.value)} value={res_description} rowsMin={10}
                          placeholder="Restaurant Description"
                          multiline
                        />
                        {/* 
                        <TextareaAutosize fullWidth aria-label="minimum height" name="res_description" onChange={e => setRes_description(e.target.value)} value={res_description} rowsMin={10} placeholder="Minimum 3 rows" /> */}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>

                        <Box className="m-b-0" fontSize={16} color="#8b8275"> Upload Restaurant Picture(s):</Box>
                        <Box className="filedropper">
                          {/* <TextField fullWidth 
                          id="standard-basic" 
                          type="file" 
                          name="res_image" 
                          label="Upload file" 
                          onChange={(e) => setRes_image(e.target.files[0])}/>  */}
                          <MyDropzone />
                        </Box>
                      </Grid>
                      <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font" mt={0} width="100%"> Bar Details</Box>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="description">
                        <TextField
                          id="standard-textarea"
                          label="Bar Description"
                          name="bar_description" onChange={e => setBar_description(e.target.value)} value={bar_description} rowsMin={10}
                          placeholder="Bar Description"
                          multiline
                        />
                        {/* <TextareaAutosize fullWidth aria-label="minimum height" name="bar_description" onChange={e => setBar_description(e.target.value)} value={bar_description} rowsMin={10} placeholder="Minimum 3 rows" /> */}
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>

                        <Box className="m-b-0" fontSize={16} color="#8b8275"> Upload Bar Picture(s):</Box>
                        <Box className="filedropper">
                          {/* <TextField fullWidth 
                          id="standard-basic" 
                          type="file" 
                          name="bar_image" 
                          label="Upload file" 
                          onChange={(e) => setBar_image(e.target.files[0])}/>  */}
                          <MyDropzone />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font" mt={0} width="100%">Most Popular Facilities</Box>
                        <Box textAlign="left" fontSize={15} >Guests look for these facilities the most when they’re searching for properties.</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          {Facilities.Facilities.map((fac) => (
                            <Grid item xs={12} sm={12} md={3} className="p-20"><p>
                              <FormControlLabel
                                value={String(fac.title)}
                                checked={HotelFacility.HotelFacility.includes(fac.title)}

                                onChange={e => {
                                  if (e.target.checked) {
                                    const newState = {
                                      ...HotelFacility,
                                      HotelFacility: [...HotelFacility.HotelFacility, e.target.value]
                                    };
                                    setHotelFacility(newState);
                                  } else {
                                    const newState = {
                                      ...HotelFacility,
                                      HotelFacility: HotelFacility.HotelFacility.filter(prev => prev !== e.target.value)
                                    };

                                    setHotelFacility(newState);
                                  }
                                }}
                                checked={HotelFacility.HotelFacility.includes(fac.title)}

                                control={<Checkbox color="secondary" />}
                                label={fac.title}
                                labelPlacement="end"
                              />
                            </p></Grid>
                          ))}
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font" mt={0} width="100%">Sanitary Precaustions</Box>
                        <Box textAlign="left" fontSize={15} >Guests look for these facilities in the COVID-19 situation.</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          {CovidFacilities.CovidFacilities.map((covidfac) => (
                            <Grid item xs={12} sm={12} md={3} className="p-20"><p>
                              <FormControlLabel
                                value={String(covidfac.title)}
                                checked={HotelFacility.HotelFacility.includes(covidfac.title)}

                                onChange={e => {
                                  if (e.target.checked) {
                                    const newState = {
                                      ...HotelFacility,
                                      HotelFacility: [...HotelFacility.HotelFacility, e.target.value]
                                    };
                                    setHotelFacility(newState);
                                  } else {
                                    const newState = {
                                      ...HotelFacility,
                                      HotelFacility: HotelFacility.HotelFacility.filter(prev => prev !== e.target.value)
                                    };

                                    setHotelFacility(newState);
                                  }
                                }}
                                checked={HotelFacility.HotelFacility.includes(covidfac.title)}

                                control={<Checkbox color="secondary" />}
                                label={covidfac.title}
                                labelPlacement="end"
                              />
                            </p></Grid>
                          ))}
                        </FormGroup>
                      </Grid>
                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}> */}
                      <Box display="flex" flexDirection="column">
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font" mt={0} width="100%">Other Facilities </Box>
                        <Box textAlign="left" fontSize={15} >Other facilities for properties.</Box>
                      </Box>
                      {/* </Grid> */}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          {OtherFacilities.OtherFacilities.map((otherfac) => (
                            <Grid item xs={12} sm={12} md={3} className="p-20"><p>
                              <FormControlLabel
                                value={String(otherfac.title)}
                                checked={HotelFacility.HotelFacility.includes(otherfac.title)}

                                onChange={e => {
                                  if (e.target.checked) {
                                    const newState = {
                                      ...HotelFacility,
                                      HotelFacility: [...HotelFacility.HotelFacility, e.target.value]
                                    };
                                    setHotelFacility(newState);
                                  } else {
                                    const newState = {
                                      ...HotelFacility,
                                      HotelFacility: HotelFacility.HotelFacility.filter(prev => prev !== e.target.value)
                                    };

                                    setHotelFacility(newState);
                                  }
                                }}
                                checked={HotelFacility.HotelFacility.includes(otherfac.title)}

                                control={<Checkbox color="secondary" />}
                                label={otherfac.title}
                                labelPlacement="end"
                              />
                            </p></Grid>
                          ))}

                        </FormGroup>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                    <ButtonGroup disableElevation variant="contained" color="secondary">
                      <Button type="button" color="primary" className="left_curvy_button tab_btn_setup huge_btn baseBtn p-r-51 p-l-51 post_story_btn m-r-0">Cancel</Button>
                      <Button type="button" onClick={uploadWithFormData2} className="right_curvy_button  huge_btn tab_btn_setup baseBtn p-r-51 p-l-51 post_story_btn">Save & Next</Button>
                      {/* <Button type="submit">Save</Button>
                      <Button type="submit">Save & Next</Button> */}
                    </ButtonGroup>
                  </Box>

                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </TabPanel>


      <TabPanel value={value} index={2}>
        <Container maxWidth="xl" className="tab_content_container">
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className="m-b-12" p={5}>
                <Box p={3} textAlign="left" className="dm_font page_heading" fontSize={25} mt={4} mb={6} >Provide details about the Meetings (or) Venues</Box>

                <Box p={3} textAlign="left" fontSize={13} display="flex" flexDirection="row" alignItems="center">
                  <Box textAlign="left" className="dm_font" fontSize={20} fontWeight="600" mr={3}> Does Your Property have venues?</Box>
                  <Box >
                    <RadioGroup aria-label="venueexist"
                      className={classes.flexRow}
                      value={venueAvailable}
                      onChange={e => setVenueAvailable(e.target.value)}  >
                      <FormControlLabel value="1" checked={venueAvailable == '1'} control={<Radio />} label="Yes " />
                      <FormControlLabel value="2" checked={venueAvailable == '2'} control={<Radio />} label="No" />
                    </RadioGroup>
                  </Box>
                </Box>


                <form autoComplete="off">
                  <Box p={3} mb={5}>
                    <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        {/* <Box textAlign="left" fontSize={13} ><b>Venue details</b></Box> */}
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font" mt={3} width="100%"> Venue Details</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="description">
                        {/* <Box textAlign="left" fontSize={13} >Venue Space Description *</Box> */}

                        <TextField
                          id="standard-textarea"
                          label="Meeting Description"
                          name="meeting_description" onChange={e => setMeeting_description(e.target.value)} value={meeting_description} rowsMin={10}
                          placeholder="Meeting Description"
                          multiline
                        />
                        {/* 
                  <TextareaAutosize fullWidth aria-label="minimum height" name="meeting_description" onChange={e => setMeeting_description(e.target.value)} value={meeting_description} rowsMin={10} /> */}
                      </Grid>

                      <Grid container item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            {/* <Box textAlign="left" fontSize={13} >No Of Meeting Rooms *</Box>
                      <TextField fullWidth id="standard-basic" name="meet_meeting_room" onChange={e => setMeet_meeting_room(e.target.value)} value={meet_meeting_room} /> */}

                            <TextField fullWidth id="standard-basic" name="meet_meeting_room" onChange={e => setMeet_meeting_room(e.target.value)} value={meet_meeting_room} label="No Of Meeting Rooms" />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            {/* <Box textAlign="left" fontSize={13} >Max. Capacity *</Box>
                      <TextField fullWidth id="standard-basic" name="meet_max_capacity" onChange={e => setMeet_max_capacity(e.target.value)} value={meet_max_capacity} /> */}
                            <TextField fullWidth id="standard-basic" name="meet_max_capacity" onChange={e => setMeet_max_capacity(e.target.value)} value={meet_max_capacity} label="Max. Capacity " />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          {/* <Box textAlign="left" fontSize={13} >No Of Ballroom</Box> */}
                          <FormControl component="fieldset" fullWidth>
                            {/* <TextField fullWidth id="standard-basic" name="meet_ballroom" onChange={e => setMeet_ballroom(e.target.value)} value={meet_ballroom} /> */}
                            <TextField fullWidth id="standard-basic" name="meet_ballroom" onChange={e => setMeet_ballroom(e.target.value)} value={meet_ballroom} label="No Of Ballroom" />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          {/* <Box textAlign="left" fontSize={13} >No Of Breakout Rooms</Box> */}
                          <FormControl component="fieldset" fullWidth>
                            {/* <TextField fullWidth id="standard-basic" name="meet_breakout_room" onChange={e => setMeet_breakout_room(e.target.value)} value={meet_breakout_room} /> */}
                            <TextField fullWidth id="standard-basic" name="meet_breakout_room" onChange={e => setMeet_breakout_room(e.target.value)} value={meet_breakout_room} label="No Of Breakout Rooms" />
                          </FormControl>
                        </Grid>
                      </Grid>


                      {fields1.map((field, idx) => {
                        return (
                          <Grid container spacing={2} className="m-b-30 p-10 m-l-3 delegate_bg_color">
                            <Grid item xs={10} sm={10} md={11} lg={11} spacing={2}>
                              <FormControl component="fieldset" fullWidth>
                                <TextField
                                  fullWidth
                                  id="standard-basic"
                                  label="Day Delegate Pack Title"
                                  value={field.value || ""}
                                  onChange={e => handleChange3(idx, e)} />
                              </FormControl>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={1} spacing={1} className="dispflex" display="flex" justifyContent="space-evenly" alignItems="flex-end">
                              <Box display="flex" justifyContent="space-evenly" alignItems="flex-end" className="m-b-0" width="100%">
                                <Icon className="fa fa-plus-circle" color="secondary" onClick={() => handleAdd1()} />
                                <Icon className="fa fa-minus-circle" color="secondary" onClick={() => handleRemove1(idx)} />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                              <FormControl component="fieldset" fullWidth>
                                {/* <TextField fullWidth id="standard-basic" type="file"
                                  onChange={e => handleChange4(idx, e)}
                                  label="Image 1 *"
                                  InputLabelProps={{ shrink: true, }} /> */}
                                <Box className="filedropper">
                                  <MyDropzone />
                                </Box>
                              </FormControl>
                            </Grid>
                          </Grid>
                        );
                      })}


                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} >
                        {/* <Box textAlign="left" mt={5} fontSize={13} ><b>View Day Delegate List</b></Box> */}
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font" mt={9} width="100%">View Day Delegate List</Box>
                        <Box display="flex" mt={5} >
                          <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Day Delegate Pack Title</TableCell>
                                  <TableCell>Action</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {MeeEveDDR.MeetingEventsDDR.map(MEDDR => (
                                  <TableRow>
                                    <TableCell>
                                      {MEDDR.ddr_title}
                                    </TableCell>
                                    <TableCell>
                                      <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                                        <ButtonGroup disableElevation variant="contained" color="secondary">
                                          <Button><a href={"http://localhost:8080/hotelsstory/server/public/uploads/ddr/"+MEDDR.ddr_file} target={"_BLANK"}><VisibilityIcon /></a></Button>
                                          <Button type="button" onClick={ddrRemove(MEDDR.id)}><DeleteIcon /></Button>
                                        </ButtonGroup>
                                      </Box>
                                    </TableCell>
                                  </TableRow>

                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} >
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Capacity Chart</b></Box>
                        <Box display="flex" mt={5} >
                          <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Room Name  </TableCell>
                                  <TableCell>Floor</TableCell>
                                  <TableCell>Dimensions</TableCell>
                                  <TableCell>Theatre</TableCell>
                                  <TableCell>Boardroom</TableCell>
                                  <TableCell>U - Shape</TableCell>
                                  <TableCell>Classroom</TableCell>
                                  <TableCell>Banquet</TableCell>
                                  <TableCell>Cocktail</TableCell>
                                  <TableCell>Currency</TableCell>
                                  <TableCell>Rate starting from </TableCell>
                                  <TableCell>Day Light  </TableCell>
                                  <TableCell>Action</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {CapacityClone.map((chart, idx) => {
                                  return (
                                    <TableRow>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Name"
                                          value={chart.capacity_title || ""}
                                          onChange={e => capacity_titleChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Floor"
                                          value={chart.capacity_floor || ""}
                                          onChange={e => capacity_floorChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Dimensions"
                                          value={chart.capacity_dimensions || ""}
                                          onChange={e => capacity_dimensionsChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Theatre"
                                          value={chart.capacity_theatre || ""}
                                          onChange={e => capacity_theatreChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Boardroom"
                                          value={chart.capacity_boardroom || ""}
                                          onChange={e => capacity_boardroomChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="U-Shape"
                                          value={chart.capacity_ushape || ""}
                                          onChange={e => capacity_ushapeChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Classroom"
                                          value={chart.capacity_classroom || ""}
                                          onChange={e => capacity_classroomChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Banquet"
                                          value={chart.capacity_banquet || ""}
                                          onChange={e => capacity_banquetChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Cocktail"
                                          value={chart.capacity_cocktail || ""}
                                          onChange={e => capacity_cocktailChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <Select fullWidth
                                          labelId="demo-simple-select-label"
                                          value={chart.capacity_currency || ""}
                                          id="demo-simple-select"
                                          onChange={e => capacity_currencyChange(idx, e)} >
                                          {Currency.Currencylist.map(Curr => (
                                            <MenuItem value={Curr.code}>{Curr.code}</MenuItem>
                                          ))}
                                        </Select>
                                      </TableCell>
                                      <TableCell>
                                        <TextField
                                          id="standard-basic"
                                          label="Cocktail"
                                          value={chart.capacity_rate_startfrom || ""}
                                          onChange={e => capacity_rate_startfromChange(idx, e)} />
                                      </TableCell>
                                      <TableCell>
                                        <Select fullWidth
                                          labelId="demo-simple-select-label"
                                          value={chart.capacity_day_light || ""}
                                          id="demo-simple-select"
                                          onChange={e => capacity_day_lightChange(idx, e)} >
                                          <MenuItem value={1}>Yes</MenuItem>
                                          <MenuItem value={2}>No</MenuItem>
                                        </Select>
                                      </TableCell>
                                      <TableCell>
                                        <Box display="flex" alignItems="center" className="hand_cursor">
                                          <Icon className="fa fa-plus-circle" color="secondary" onClick={() => capacitychartAdd()} />
                                          <Icon className="fa fa-minus-circle" color="secondary" onClick={() => capacitychartRemove(idx)} />
                                        </Box>
                                      </TableCell>
                                    </TableRow>
                                  );
                                })}
                                {Capchart.Capacitychart.map(CChart => (
                                  <TableRow>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.title!='null' ? CChart.title:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.floor!='null' ? CChart.floor:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.dimensions!='null' ? CChart.dimensions:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.theatre!='null' ? CChart.theatre:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.boardroom!='null' ? CChart.boardroom:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.ushape!='null' ? CChart.ushape:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.classroom!='null' ? CChart.classroom:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.banquet!='null' ? CChart.banquet:''} />
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.cocktail!='null' ? CChart.cocktail:''} />
                                    </TableCell>
                                    <TableCell>
                                      <Select fullWidth
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={CChart.currency}
                                        onChange={handleSingleChange}
                                      >
                                        {Currency.Currencylist.map(Curr => (
                                          <MenuItem value={Curr.code}>{Curr.code}</MenuItem>
                                        ))}
                                      </Select>
                                    </TableCell>
                                    <TableCell>
                                      <TextField id="standard-basic" value={CChart.rate_startfrom} />
                                    </TableCell>
                                    <TableCell>
                                      <FormControl className={classes.formControl} fullWidth>
                                        <Select fullWidth
                                          labelId="demo-simple-select-label"
                                          id="demo-simple-select"
                                          value={CChart.day_ligiht}
                                          onChange={handleSingleChange}
                                        >
                                          <MenuItem value={1}>Yes</MenuItem>
                                          <MenuItem value={2}>No</MenuItem>
                                        </Select>
                                      </FormControl>
                                    </TableCell>
                                    <TableCell>
                                      <Box display="flex" alignItems="center" className="hand_cursor">
                                        <Icon className="fa fa-plus-circle" color="secondary" onClick={() => capacitychartAdd()} />
                                        <Icon className="fa fa-minus-circle" color="secondary" onClick={capacitychartDynRemove(CChart.id)} />
                                      </Box>
                                    </TableCell>

                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </Grid>


                      {/* Floor Plan Finish */}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Floor Plan</b></Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                        <TextField fullWidth id="standard-basic" type="file" name="floor_plan"
                          onChange={(e) => setFloor_plan(e.target.files[0])} />
                      </Grid>
                      {floor_plan!='' ? <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                        <Box display="flex" mt={5} >
                          <ButtonGroup disableElevation variant="contained" color="secondary">
                            <Button><a href={"http://localhost:8080/hotelsstory/server/public/uploads/meeting/"+floor_plan} target={"_BLANK"}><VisibilityIcon /></a></Button>
                            <Button type="button" onClick={floorplanRemove}><DeleteIcon /></Button>
                          </ButtonGroup>
                        </Box>
                      </Grid> :''}
                      {/* Floor Plan Finish */}


                      {/* Venue Features Finish */}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Features</b></Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          {VenueFeature.VenueFeature.map(Fea => (
                            <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                              <FormControlLabel
                                value={Fea.id}
                                checked={VenueFeatureVal.VenueFeatureVal.includes(Fea.id)}
                                onChange={e => {
                                  if (e.target.checked) {
                                    const newState = {
                                      ...VenueFeatureVal,
                                      VenueFeatureVal: [...VenueFeatureVal.VenueFeatureVal, Number(e.target.value)]
                                    };
                                    setVenueFeatureVal(newState);
                                  } else {
                                    const newState = {
                                      ...VenueFeatureVal,
                                      VenueFeatureVal: VenueFeatureVal.VenueFeatureVal.filter(prev => prev !== Number(e.target.value))
                                    };

                                    setVenueFeatureVal(newState);
                                  }
                                }}
                                checked={VenueFeatureVal.VenueFeatureVal.includes(Fea.id)}
                                control={<Checkbox color="primary" />}
                                label={Fea.title}
                                labelPlacement="end"
                              />
                            </Grid>
                          ))}
                        </FormGroup>
                      </Grid>
                      {/* Venue Features Finish */}


                      {/* Seasonal Pack Finish */}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} >
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Shoulder Seasonal Packages</b></Box>
                        <Box display="flex" mt={5} >
                          <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Month </TableCell>
                                  <TableCell>Season</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Jan</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srJan}
                                      onChange={e => setsrJan(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srJan == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srJan == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srJan == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Feb</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srFeb}
                                      onChange={e => setsrFeb(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srFeb == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srFeb == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srFeb == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Mar</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srMar}
                                      onChange={e => setsrMar(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srMar == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srMar == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srMar == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Apr</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srApr}
                                      onChange={e => setsrApr(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srApr == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srApr == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srApr == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>May</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srMay}
                                      onChange={e => setsrMay(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srMay == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srMay == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srMay == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Jun</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srJun}
                                      onChange={e => setsrJun(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srJun == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srJun == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srJun == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Jul</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srJul}
                                      onChange={e => setsrJul(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srJul == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srJul == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srJul == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Aug</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srAug}
                                      onChange={e => setsrAug(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srAug == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srAug == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srAug == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Sep</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srSep}
                                      onChange={e => setsrSep(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srSep == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srSep == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srSep == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Oct</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srOct}
                                      onChange={e => setsrOct(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srOct == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srOct == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srOct == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Nov</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srNov}
                                      onChange={e => setsrNov(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srNov == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srNov == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srNov == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Dec</TableCell>
                                  <TableCell>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={srDec}
                                      onChange={e => setsrDec(e.target.value)} >
                                      <FormControlLabel value="Low" checked={srDec == 'Low'} control={<Radio color="primary" />} label="Low" />
                                      <FormControlLabel value="Shoulder" checked={srDec == 'Shoulder'} control={<Radio color="primary" />} label="Shoulder" />
                                      <FormControlLabel value="High" checked={srDec == 'High'} control={<Radio color="primary" />} label="High" />
                                    </RadioGroup>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </Grid>
                      {/* Seasonal Pack Finish */}

                      {/* Factsheet Features Finish */}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={13} ><b>Promote your venue to MICE buyers</b></Box>
                        <Box textAlign="left" fontSize={13} ><b>Add Factsheet</b></Box>
                      </Grid>

                      {fields.map((field, idx) => {
                        return (
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                              <FormControl component="fieldset" fullWidth>
                                <TextField
                                  fullWidth
                                  id="standard-basic"
                                  label="Factsheet title"
                                  value={field.value || ""}
                                  onChange={e => handleChange1(idx, e)} />
                              </FormControl>
                            </Grid>
                            <Grid item xs={10} sm={10} md={5} lg={5} spacing={2}>
                              <Box className="filedropper">
                                <MyDropzone />
                              </Box>

                              <FormControl component="fieldset" fullWidth>
                                {/*<TextField fullWidth id="standard-basic" type="file" name="meeting_img_1" 
            onChange={e => handleChange2(idx, e)}
            label="Image 1 *" 
            InputLabelProps={{ shrink: true, }} />*/}
                              </FormControl>
                            </Grid>
                            <Grid item xs={2} sm={2} md={1} lg={1} spacing={2}>
                              <Icon className="fa fa-plus-circle" color="secondary" onClick={() => handleAdd()} />
                              <Icon className="fa fa-minus-circle" color="secondary" onClick={() => handleRemove(idx)} />
                            </Grid>
                          </Grid>
                        );
                      })}


                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} >
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font m-t-0" mt={8} width="100%">View Factsheet List</Box>
                        <Box display="flex" mt={5} >
                          <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Factsheet Title</TableCell>
                                  <TableCell>Action</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {MEFL.MeetingEventsFactsheetsLibrary.map(MEDDR => (
                                  <TableRow>
                                    <TableCell>
                                      {MEDDR.factsheets_title}
                                    </TableCell>
                                    <TableCell>
                                      <ButtonGroup disableElevation variant="contained" color="secondary">
                                        <Button><a href={"http://localhost:8080/hotelsstory/server/public/uploads/factsheets/"+MEDDR.pdf_file} target={"_BLANK"}><VisibilityIcon /></a></Button>
                                        <Button type="button" onClick={factsheetRemove(MEDDR.id)}><DeleteIcon /></Button>
                                      </ButtonGroup>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </Grid>
                      {/* Factsheet Features Finish */}



                      <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                          <Box textAlign="left" mt={5} fontSize={13} ><b>Meeting and Events Images</b></Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_1" onChange={e => setMeeting_img_1(e.target.value)} label="Image 1 *" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_2" onChange={e => setMeeting_img_2(e.target.value)} label="Image 2" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_3" onChange={e => setMeeting_img_3(e.target.value)} label="Image 3" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_4" onChange={e => setMeeting_img_4(e.target.value)} label="Image 4" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_5" onChange={e => setMeeting_img_5(e.target.value)} label="Image 5" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_6" onChange={e => setMeeting_img_6(e.target.value)} label="Image 6" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_7" onChange={e => setMeeting_img_7(e.target.value)} label="Image 7" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" type="file" name="meeting_img_8" onChange={e => setMeeting_img_8(e.target.value)} label="Image 8" InputLabelProps={{ shrink: true, }} />
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Box display="flex" textAlign="right" mb={10} mt={10} >
                        <ButtonGroup disableElevation variant="contained" color="secondary">
                          <Button variant="contained" color="primary" onClick={uploadWithFormData3}
                            className="baseBtn p-r-15 p-l-15" disableElevation>Save</Button>
                          <Button onClick={uploadWithFormData3}>Save & Next</Button>
                        </ButtonGroup>
                      </Box>

                    </Grid>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container maxWidth="xl" className="tab_content_container">
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Paper className="m-b-12" p={5}>
                <Box p={3} textAlign="left" className="dm_font page_heading" fontSize={25} mt={4} mb={6}>Great photos, videos, factsheet, virtual links invite our buyer to get the full experience of your property.</Box>
                <form onSubmit={updateForm1} autoComplete="off">
                  <Box p={3} mb={5}>
                    <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box className="m-b-0" fontSize={16} color="#8b8275"> Upload Hotel Image(s):</Box>
                        <Box className="filedropper">
                          {/* <TextField fullWidth 
                          id="standard-basic" 
                          type="file" 
                          name="hotel_image" 
                          label="Upload file" 
                          onChange={(e) => setRoom_image(e.target.files[0])}/>  */}
                          <MyDropzone />
                        </Box>
                      </Grid>
                      <Box className="m-b-0" fontSize={16} color="#8b8275">Hotel Videos:</Box>
                      {videolink.map((video, idx) => {
                        return (
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={5} lg={5} spacing={2}>
                              <FormControl component="fieldset" fullWidth>
                                <TextField
                                  fullWidth
                                  id="standard-basic"
                                  label="Video title"
                                  value={video.video_title || ""}
                                  onChange={e => videotitleChange(idx, e)} />
                              </FormControl>
                            </Grid>
                            <Grid item xs={10} sm={10} md={6} lg={6} spacing={2}>
                             <FormControl component="fieldset" fullWidth>
                                <TextField
                                  fullWidth
                                  id="standard-basic"
                                  label="Video link"
                                  value={video.video_link || ""}
                                  onChange={e => videolinkChange(idx, e)} />
                              </FormControl>
                            </Grid>
                            <Grid item xs={2} sm={2} md={1} lg={1} spacing={2}>
                              <Icon className="fa fa-plus-circle" color="secondary" onClick={() => handleVideoAdd()} />
                              <Icon className="fa fa-minus-circle" color="secondary" onClick={() => handleVideoRemove(idx)} />
                            </Grid>
                          </Grid>
                        );
                      })}
                          <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Video Title </TableCell>
                                  <TableCell>Video Link</TableCell>
                                  <TableCell>Action</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                               {VideosLibrary.HotelVideosLibrary.map(VL => (
                                  <TableRow>
                                    <TableCell>{VL.videos_title!='null' ? VL.videos_title:''}
                                    </TableCell>
                                    <TableCell>{VL.link!='null' ? VL.link:''}</TableCell>
                                    <TableCell>
                                      <Box display="flex" alignItems="center" className="hand_cursor">
                                        <Icon className="fa fa-minus-circle" color="secondary" onClick={() => handleVideodynRemove(VL.id)}/>
                                      </Box>
                                    </TableCell>

                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <Box className="m-b-0" fontSize={16} mt={10} color="#8b8275">Hotel Factsheet:</Box>
                          {hlfactsheet.map((fact, idx) => {
                            return (
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={5} lg={5} spacing={2}>
                                  <FormControl component="fieldset" fullWidth>
                                    <TextField
                                      fullWidth
                                      id="standard-basic"
                                      label="Factsheet title"
                                      value={fact.factsheet_title || ""}
                                      onChange={e => facttitleChange(idx, e)} />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={10} sm={10} md={6} lg={6} spacing={2}>
                                 <FormControl component="fieldset" fullWidth>
                                    <TextField fullWidth id="standard-basic" type="file" name="factsheet_file"
                                    onChange={(e) => factfileChange(idx, e)} />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={2} sm={2} md={1} lg={1} spacing={2}>
                                  <Icon className="fa fa-plus-circle" color="secondary" onClick={() => handleFactsheetAdd()} />
                                  <Icon className="fa fa-minus-circle" color="secondary" onClick={() => handleFactsheetRemove(idx)} />
                                </Grid>
                              </Grid>
                            );
                          })}
                          <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Factsheet Title </TableCell>
                                  <TableCell>Action</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                               {FactsheetsLibrary.HotelFactsheetsLibrary.map(FL => (
                                  <TableRow>
                                    <TableCell>{FL.factsheets_title!='null' ? FL.factsheets_title:''}
                                    </TableCell>
                                    <TableCell>
                                      <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                                        <ButtonGroup disableElevation variant="contained" color="secondary">
                                        <Button><a href={"http://localhost:8080/hotelsstory/server/public/uploads/factsheets/"+FL.pdf_file} target={"_BLANK"}><VisibilityIcon /></a></Button>
                                        <Button type="button" onClick={handleFactsheetdynRemove(FL.id)}><DeleteIcon /></Button>
                                        </ButtonGroup>
                                      </Box>
                                    </TableCell>

                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                      <Box className="m-b-0" fontSize={16} mt={10} color="#8b8275">Hotel Virtual Links:</Box>
                      {virtuallink.map((virtual, idx) => {
                        return (
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={5} lg={5} spacing={2}>
                              <FormControl component="fieldset" fullWidth>
                                <TextField
                                  fullWidth
                                  id="standard-basic"
                                  label="Virtual title"
                                  value={virtual.virtual_title || ""}
                                  onChange={e => virtualtitleChange(idx, e)} />
                              </FormControl>
                            </Grid>
                            <Grid item xs={10} sm={10} md={6} lg={6} spacing={2}>
                             <FormControl component="fieldset" fullWidth>
                                <TextField
                                  fullWidth
                                  id="standard-basic"
                                  label="Virtual link"
                                  value={virtual.virtual_link || ""}
                                  onChange={e => virtuallinkChange(idx, e)} />
                              </FormControl>
                            </Grid>
                            <Grid item xs={2} sm={2} md={1} lg={1} spacing={2}>
                              <Icon className="fa fa-plus-circle" color="secondary" onClick={() => handleVirtualAdd()} />
                              <Icon className="fa fa-minus-circle" color="secondary" onClick={() => handleVirtualRemove(idx)} />
                            </Grid>
                          </Grid>
                        );
                      })}
                      <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Virtual Title </TableCell>
                              <TableCell>Virtual Link</TableCell>
                              <TableCell>Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                           {Virtualtour.HotelVirtualTour.map(Vir => (
                              <TableRow>
                                <TableCell>{Vir.virtual_tour_link_title!='null' ? Vir.virtual_tour_link_title:''}
                                </TableCell>
                                <TableCell>{Vir.virtual_tour_link!='null' ? Vir.virtual_tour_link:''}</TableCell>
                                <TableCell>
                                  <Box display="flex" alignItems="center" className="hand_cursor">
                                    <Icon className="fa fa-minus-circle" color="secondary" onClick={() => handleVirtualdynRemove(Vir.id)}/>
                                  </Box>
                                </TableCell>

                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Box>
               
                  <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                    <ButtonGroup disableElevation variant="contained" color="secondary">
                      <Button variant="contained" color="primary" onClick={uploadHotelmedia}
                            className="baseBtn p-r-15 p-l-15" disableElevation>Save</Button>
                      <Button  onClick={uploadHotelmedia}>Save & Next</Button>
                    </ButtonGroup>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Container maxWidth="xl" className="tab_content_container">
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={classes.benefitsBG} p={5}>
                <form onSubmit={updateForm4} autoComplete="off">
                  <Box p={3} mb={5}>
                    <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>

                         <Box p={3} textAlign="center" fontSize={13} >
                          <b>How your commission works for our MICE buyers and agents!</b>
                        </Box> 
                      </Grid>*/}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        {/* <Box p={3} fontSize={13} >
                          You pay the agreed commission directly to our buyers and agents who send an enquiry through our platform.    Premium partner hotels will get direct buyers contact details.    We don’t charge any commission for enquiries.
                        </Box> */}

                        <Box width="100%" className="dm_font" display="flex" flexDirection="column" fontSize={20} fontWeight="300" color="#484848">

                          <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={3}>
                            <Box mr={3} display="flex" className="m-b-0">
                              <img src={mini_logo} alt="Logo" width="20px" />
                            </Box>
                            <Box className="m-b-0">
                              You pay the agreed commission directly to our buyers and agents who send an enquiry through our platform.
                            </Box>
                          </Box>


                          <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={3}>
                            <Box mr={3} display="flex" className="m-b-0">
                              <img src={mini_logo} alt="Logo" width="20px" />
                            </Box>
                            <Box className="m-b-0">
                              Premium partner hotels will get direct buyers contact details.
                            </Box>
                          </Box>


                          <Box display="flex" flexDirection="row" justifyContent="flex-start" width="100%" alignItems="center" mb={3}>
                            <Box mr={3} display="flex" className="m-b-0">
                              <img src={mini_logo} alt="Logo" width="20px" />
                            </Box>
                            <Box className="m-b-0">
                              We don’t charge any commission for enquiries.
                            </Box>
                          </Box>


                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} className="m-b-10">
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font">Buyer Commission</Box>
                        <Box textAlign="left" mt={4} fontSize={17} >Select how much commission you like to offer to MICE buyers and travel agents who are sending enquiries from our platform.</Box>
                        <Box mt={8}>


                          <Slider
                            defaultValue={80}
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            valueLabelDisplay="on"
                          />

                          {/* <RadioGroup aria-label="venueexist"
                            className={classes.flexColumn}
                            value={venueAvailable}
                            onChange={e => setVenueAvailable(e.target.value)}  >
                            <FormControlLabel value="1" checked={venueAvailable == '1'} control={<Radio />} label="20% " />
                            <FormControlLabel value="2" checked={venueAvailable == '2'} control={<Radio />} label="15%" />
                            <FormControlLabel value="3" checked={venueAvailable == '3'} control={<Radio />} label="10%" />
                            <FormControlLabel value="4" checked={venueAvailable == '4'} control={<Radio />} label="5%" />
                          </RadioGroup> */}
                        </Box>
                      </Grid>
                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                            <RadioGroup row aria-label="position" name="HotelBuyCom" value={HotelBuyCom} defaultValue="top">
                              {BuyCom.BuyerCommission.map(BuyCom => (
                                <FormControlLabel onChange={e => setHotelBuyCom(e.target.value)} checked={BuyCom.id == HotelBuyCom ? checked : ''} value={BuyCom.id} control={<Radio color="primary" />} label={BuyCom.buyer_commission} />
                              ))}
                            </RadioGroup>
                          </Grid>
                        </FormGroup>
                      </Grid> */}

                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font">Benefit for Buyer Clients</Box>
                        <Box textAlign="left" mt={4} fontSize={17} >Provide atleast 3 benefits you like to offer for our buyer’s clients.</Box>
                        <Box className="description">

                          <TextField
                            id="standard-textarea"
                            label="List of Benefits"
                            name="list_of_benefits" //onChange={e => setMeeting_description(e.target.value)} value={meeting_description}
                            rowsMin={10}
                            placeholder="List of Benefits"
                            multiline
                          />
                        </Box>
                      </Grid>



                      {/* 
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Benefit for Buyer Clients</b></Box>
                        <Box textAlign="left" mt={2} fontSize={13} >Provide atleast 3 benefits you like to offer for our buyer’s clients.</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          {cliben.cliben.map((cli) => (
                            <Grid item xs={12} sm={12} md={3} className="p-20"><p>
                              <FormControlLabel
                                value={cli.bcbm_id}
                                checked={clibenval.clibenval.includes(cli.bcbm_id)}

                                onChange={e => {
                                  if (e.target.checked) {
                                    const newState = {
                                      ...clibenval,
                                      clibenval: [...clibenval.clibenval, Number(e.target.value)]
                                    };
                                    setClibenval(newState);
                                  } else {
                                    const newState = {
                                      ...clibenval,
                                      clibenval: clibenval.clibenval.filter(prev => prev !== Number(e.target.value))
                                    };

                                    setClibenval(newState);
                                  }
                                }}
                                checked={clibenval.clibenval.includes(cli.bcbm_id)}

                                control={<Checkbox color="primary" />}
                                label={cli.title}
                                labelPlacement="end"
                              />
                            </p></Grid>
                          ))}
                        </FormGroup>
                      </Grid> */}

                        <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                          <FormControl component="fieldset" fullWidth>

                            <TextField fullWidth id="standard-basic" name="buyer_benefit_link" onChange={e => setBuyer_benefit_link(e.target.value)} value={buyer_benefit_link} label="Link" />
                            {/* <Box textAlign="left" fontSize={13} >Link *</Box> */}
                            {/* <TextField fullWidth id="standard-basic" name="buyer_benefit_link" onChange={e => setBuyer_benefit_link(e.target.value)} value={buyer_benefit_link} /> */}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="buyer_benefit_code" onChange={e => setBuyer_benefit_code(e.target.value)} value={buyer_benefit_code} label="Referral Code" />
                            {/* <Box textAlign="left" fontSize={13} >Referral Code</Box>
                            <TextField fullWidth id="standard-basic" name="buyer_benefit_code" onChange={e => setBuyer_benefit_code(e.target.value)} value={buyer_benefit_code} /> */}
                          </FormControl>
                        </Grid>




                      <Grid item xs={12} sm={12} md={12} lg={12} className="m-t-60 m-b-10" spacing={2}>
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font">Corporate Discount</Box>
                        <Box textAlign="left" mt={4} fontSize={17} >Select how much discount you like to offer to corporate.</Box>
                        <Box mt={8}>


                          <Slider
                            defaultValue={20}
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            valueLabelDisplay="on"
                          />
                          {/* 
                          <RadioGroup aria-label="venueexist"
                            className={classes.flexColumn}
                            value={venueAvailable}
                            onChange={e => setVenueAvailable(e.target.value)}  >
                            <FormControlLabel value="1" checked={venueAvailable == '1'} control={<Radio />} label="20% " />
                            <FormControlLabel value="2" checked={venueAvailable == '2'} control={<Radio />} label="15%" />
                            <FormControlLabel value="3" checked={venueAvailable == '3'} control={<Radio />} label="10%" />
                            <FormControlLabel value="4" checked={venueAvailable == '4'} control={<Radio />} label="5%" />
                          </RadioGroup> */}
                        </Box>
                      </Grid>



                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Corporate Discount</b></Box>
                        <Box textAlign="left" mt={2} fontSize={13} >Select how much discount you like to offer to corporate.</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                            <RadioGroup row aria-label="position" name="corporate_discount" value={corporate_discount} defaultValue="top">
                              {CorDiscount.Cor_discount.map(CorDis => (
                                <FormControlLabel value={CorDis.id} checked={CorDis.id == corporate_discount ? checked : ''} control={<Radio color="primary" />} onChange={e => setCorporate_discount(e.target.value)} label={CorDis.discount} />
                              ))}
                            </RadioGroup>
                          </Grid>
                        </FormGroup>
                      </Grid> */}

                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font">Corporate Benefits</Box>
                        <Box textAlign="left" mt={4} fontSize={17} >Provide atleast 3 benefits you like to offer for our corporate.</Box>
                        <Box className="description">

                          <TextField
                            id="standard-textarea"
                            label="List of Benefits"
                            name="list_of_benefits_corporate" //onChange={e => setMeeting_description(e.target.value)} value={meeting_description}
                            rowsMin={10}
                            placeholder="List of Benefits"
                            multiline
                          />
                        </Box>
                      </Grid>
                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Corporate Benefits</b></Box>
                        <Box textAlign="left" mt={2} fontSize={13} >Provide atleast 3 benefits you like to offer for our corporate.</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          {CorpBen.CorpBen.map((corp) => (
                            <Grid item xs={12} sm={12} md={3} className="p-20"><p>
                              <FormControlLabel
                                value={corp.id}
                                checked={HotelCorpBen.HotelCorpBen.includes(corp.id)}

                                onChange={e => {
                                  if (e.target.checked) {
                                    const newState = {
                                      ...HotelCorpBen,
                                      HotelCorpBen: [...HotelCorpBen.HotelCorpBen, Number(e.target.value)]
                                    };
                                    setHotelCorpBen(newState);
                                  } else {
                                    const newState = {
                                      ...HotelCorpBen,
                                      HotelCorpBen: HotelCorpBen.HotelCorpBen.filter(prev => prev !== Number(e.target.value))
                                    };

                                    setHotelCorpBen(newState);
                                  }
                                }}
                                checked={HotelCorpBen.HotelCorpBen.includes(corp.id)}

                                control={<Checkbox color="primary" />}
                                label={corp.title}
                                labelPlacement="end"
                              />
                            </p></Grid>
                          ))}
                        </FormGroup>
                      </Grid> */}

                        <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="corporate_benefit_link" onChange={e => setCorporate_benefit_link(e.target.value)} value={corporate_benefit_link} label="Link" />
                            {/* <Box textAlign="left" fontSize={13} >Link *</Box>
                            <TextField fullWidth id="standard-basic" name="corporate_benefit_link" onChange={e => setCorporate_benefit_link(e.target.value)} value={corporate_benefit_link} /> */}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="corporate_benefit_code" onChange={e => setCorporate_benefit_code(e.target.value)} value={corporate_benefit_code} label="Referral Code" />
                            {/* <Box textAlign="left" fontSize={13} >Referral Code</Box>
                            <TextField fullWidth id="standard-basic" name="corporate_benefit_code" onChange={e => setCorporate_benefit_code(e.target.value)} value={corporate_benefit_code} /> */}
                          </FormControl>
                        </Grid>



                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Leisure Travelers Discount</b></Box>
                        <Box textAlign="left" mt={2} fontSize={13} >Select how much commission you like to offer to Leisure travelers.</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                            <RadioGroup row aria-label="position" name="leisure_discount" value={leisure_discount}>
                              {LeiDiscount.Le_discount.map(LeiDis => (
                                <FormControlLabel value={LeiDis.id} checked={LeiDis.id == leisure_discount ? checked : ''} control={<Radio color="primary" />} onChange={e => setLeisure_discount(e.target.value)} label={LeiDis.le_discount} />
                              ))}
                            </RadioGroup>
                          </Grid>
                        </FormGroup>
                      </Grid> */}
                      <Grid item xs={12} sm={12} md={12} lg={12} className="m-t-60" spacing={2}>
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font">Leisure Travelers Discount</Box>
                        <Box textAlign="left" mt={4} fontSize={17} >Select how much commission you like to offer to Leisure travelers.</Box>


                        <Box mt={8}>


                          <Slider
                            defaultValue={50}
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            valueLabelDisplay="on"
                          />
                          {/* <RadioGroup aria-label="venueexist"
                            className={classes.flexColumn}
                            value={venueAvailable}
                            onChange={e => setVenueAvailable(e.target.value)}  >
                            <FormControlLabel value="1" checked={venueAvailable == '1'} control={<Radio />} label="20% " />
                            <FormControlLabel value="2" checked={venueAvailable == '2'} control={<Radio />} label="15%" />
                            <FormControlLabel value="3" checked={venueAvailable == '3'} control={<Radio />} label="10%" />
                            <FormControlLabel value="4" checked={venueAvailable == '4'} control={<Radio />} label="5%" />
                          </RadioGroup> */}
                        </Box>
                      </Grid>

                      {/* <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" mt={5} fontSize={13} ><b>Leisure Travelers Benefits</b></Box>
                        <Box textAlign="left" mt={2} fontSize={13} >Provide atleast 3 benefits you like to offer for our Leisure travelers.</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <FormGroup aria-label="position" row>
                          {LeiBen.LeiBen.map((lei) => (
                            <Grid item xs={12} sm={12} md={3} className="p-20"><p>
                              <FormControlLabel
                                value={lei.id}
                                checked={HotelLeiBen.HotelLeiBen.includes(lei.id)}

                                onChange={e => {
                                  if (e.target.checked) {
                                    const newState = {
                                      ...HotelLeiBen,
                                      HotelLeiBen: [...HotelLeiBen.HotelLeiBen, Number(e.target.value)]
                                    };
                                    setHotelLeiBen(newState);
                                  } else {
                                    const newState = {
                                      ...HotelLeiBen,
                                      HotelLeiBen: HotelLeiBen.HotelLeiBen.filter(prev => prev !== Number(e.target.value))
                                    };

                                    setHotelLeiBen(newState);
                                  }
                                }}
                                checked={HotelLeiBen.HotelLeiBen.includes(lei.id)}

                                control={<Checkbox color="primary" />}
                                label={lei.title}
                                labelPlacement="end"
                              />
                            </p></Grid>
                          ))}
                        </FormGroup>
                      </Grid> */}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={20} fontWeight="600" className="dm_font">Leisure Travelers Benefits</Box>
                        <Box textAlign="left" mt={4} fontSize={17} >Provide atleast 3 benefits you like to offer for our Leisure travelers.</Box>
                        <Box className="description">

                          <TextField
                            id="standard-textarea"
                            label="List of Benefits"
                            name="list_of_benefits_traveler" //onChange={e => setMeeting_description(e.target.value)} value={meeting_description}
                            rowsMin={10}
                            placeholder="List of Benefits"
                            multiline
                          />
                        </Box>
                      </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="leisure_benefit_link" onChange={e => setLeisure_benefit_link(e.target.value)} value={leisure_benefit_link} label="Link" />
                            {/* <Box textAlign="left" fontSize={13} >Link *</Box>
                            <TextField fullWidth id="standard-basic" name="leisure_benefit_link" onChange={e => setLeisure_benefit_link(e.target.value)} value={leisure_benefit_link} /> */}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="leisure_benefit_code" onChange={e => setLeisure_benefit_code(e.target.value)} value={leisure_benefit_code} label="Referral Code" />
                            {/* <Box textAlign="left" fontSize={13} >Referral Code</Box>
                            <TextField fullWidth id="standard-basic" name="leisure_benefit_code" onChange={e => setLeisure_benefit_code(e.target.value)} value={leisure_benefit_code} /> */}
                          </FormControl>
                        </Grid>

                    </Grid>
                  </Box>
                  <Box display="flex" className="btn_section" display="flex" justifyContent="center" textAlign="right" mb={10} px={4} py={6}>
                    <ButtonGroup disableElevation variant="contained" color="secondary">
                      <Button type="submit" color="primary" className="left_curvy_button tab_btn_setup huge_btn baseBtn p-r-51 p-l-51 post_story_btn m-r-0">Cancel</Button>
                      <Button type="submit" className="right_curvy_button  huge_btn tab_btn_setup baseBtn p-r-51 p-l-51 post_story_btn">Save & Next</Button>
                      {/* <Button type="submit">Save</Button>
                      <Button type="submit">Save & Next</Button> */}
                    </ButtonGroup>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Container maxWidth="xl" className="tab_content_container">
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className="m-b-12" p={5}>
                <form autoComplete="off">
                  <Box p={3} mb={5}>
                    <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6} spacing={2}>
                        <Box textAlign="left" fontSize={13} ><b>Assigned User</b></Box>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} spacing={2}>
                        <Box textAlign="right">
                          <Button variant="outlined" color="secondary" onClick={() => setShowAssign(!showAssign)}>
                            Invite
                          </Button>
                        </Box>
                      </Grid>

                      {showAssign && <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} spacing={2}>
                          <Box textAlign="left" fontSize={13} ><b>Add Assign</b></Box>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} spacing={2}>
                          <Box textAlign="right">
                            <Button onClick={() => setShowAssign(!showAssign)}><CloseIcon /></Button>
                          </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="first_name" onChange={rolehandleChange} value={event.first_name} label="First Name" />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="last_name" onChange={rolehandleChange} value={event.last_name} label="Last Name" />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} spacing={2}>
                          <FormControl component="fieldset" fullWidth>
                            <TextField fullWidth id="standard-basic" name="user_email"
                              onChange={rolehandleChange} value={event.user_email} label="Email" />
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                          <Box textAlign="left" mt={3} fontSize={13} ><b>Provide access to below pages</b></Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                          <FormGroup aria-label="position" row>
                            <Grid item xs={12} sm={12} md={2} lg={2} spacing={2}>
                              <FormControlLabel value={1}
                                control={<Checkbox color="secondary" />}
                                label="Admin"
                                onChange={rolehandleChange}
                                labelPlacement="end"
                                name="access_page1"
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={2} lg={2} spacing={2}>
                              <FormControlLabel value={2}
                                control={<Checkbox color="secondary" />}
                                label="Sales Team"
                                onChange={rolehandleChange}
                                labelPlacement="end"
                                name="access_page2"
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={2} lg={2} spacing={2}>
                              <FormControlLabel value={3}
                                control={<Checkbox color="secondary" />}
                                label="Accounts team"
                                onChange={rolehandleChange}
                                labelPlacement="end"
                                name="access_page3"
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
                              <Box textAlign="right">
                                <Button type="submit" onClick={handleAssignSubmit} variant="contained" color="secondary">
                                  Add
                      </Button>
                              </Box>
                            </Grid>
                          </FormGroup>
                        </Grid>
                      </Grid>}
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2} >
                        <Box display="flex" mt={5} >
                          <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>First Name</TableCell>
                                  <TableCell>Last Name</TableCell>
                                  <TableCell>Email</TableCell>
                                  <TableCell>Access</TableCell>
                                  <TableCell>Created At</TableCell>
                                  <TableCell>Action</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {AssignRole.HotelAssignRole.map(AssignRole => (
                                  <TableRow>
                                    <TableCell>{AssignRole.first_name}</TableCell>
                                    <TableCell>{AssignRole.last_name} </TableCell>
                                    <TableCell>{AssignRole.email} </TableCell>
                                    <TableCell>{AssignRole.role_id} </TableCell>
                                    <TableCell>{AssignRole.created_at} </TableCell>
                                    <TableCell>
                                      <ButtonGroup disableElevation variant="contained" color="secondary">
                                        <Button><EditIcon /></Button>
                                        <Button><DeleteIcon /></Button>
                                        <Button><EmailIcon /></Button>
                                      </ButtonGroup>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </Grid>

                    </Grid>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Container maxWidth="xl" className="tab_content_container">
          <Grid container spacing={2} xs={12} sm={12} md={12} lg={12}>
            <Grid item md={1} lg={1}></Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Paper className="m-b-12" p={5}>
                <form onSubmit={updateForm6} autoComplete="off">
                  <Box p={3} mb={5}>
                    <Grid container xs={12} sm={12} md={12} lg={12} spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={13}>You are almost done – just a few final things to consider</Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                        <Box textAlign="left" fontSize={16}>GENERAL AGREEMENT TERMS AND CONDITIONS</Box>
                        <Box textAlign="left" mt={2} fontSize={15}>Introduction</Box>
                        <Box textAlign="left" mt={3} fontSize={15}><b>Welcome to HotelsStrory.com.</b></Box>
                        <Box textAlign="left" mt={3} fontSize={15}>This page tells you the terms on which you may use our website www.hotelsstory.com as a registered user. By using the site, you accept the terms and conditions.</Box>
                        <Box textAlign="left" mt={3} fontSize={15}><b>Who we are?</b></Box>
                        <Box textAlign="left" mt={3} fontSize={15}>www.hotelsstory.com is operated by Rank Strikers LTD, a UK Limited company registered in England under company number 10122910. Our registered office is at Aldgate Tower, 2 Leman Street, London E1 8FA</Box>
                        <Box textAlign="left" mt={3} fontSize={15}><b>Use of the Site</b></Box>
                        <Box textAlign="left" mt={3} fontSize={15}>You have permission for temporary use of the site, but we can withdraw or change our service at any time without telling you and without being legally responsible to you. You must treat all identification codes, passwords, and other security information as confidential. If we think you have failed to keep confidentiality, we are allowed to disable any security information (including your passwords and codes).</Box>
                        <Box textAlign="left" mt={3} fontSize={15}>You agree to follow our acceptable use policy</Box>
                        <Box textAlign="left" mt={3} fontSize={15}>If you allow anyone else to use our site, you must make sure that they read these terms first, and that they follow them. Only use the site as allowed by law and these terms. If you don't, we may suspend your usage, or stop it completely.</Box>
                        <Box textAlign="left" mt={3} fontSize={15}>We frequently update the site and make changes to it, but we don't have to do this, and material on the site may be out-of-date. No material on the site is intended to contain advice, and you shouldn't rely on it. We exclude all legal responsibility and costs for reliance placed on the site by anyone. We follow our privacy policy in handling information about you. You can read our policy at https://hotelsstory.com/privacy-policy.
By using the site, you agree to us handling this information and confirm that data you provide is accurate.</Box>
                        <Box textAlign="left" mt={5} fontSize={15}><b>HOTELSSTORY.COM uses the following Hotel Listing Terms and Conditions:</b></Box>
                        <Box p={5}>
                          <Box textAlign="left" fontSize={15}><b>1. Information, liability, and complaints</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>Information to be included in the Websites must comply with formats and standards provided by HOTELSSTORY.COM. The Hotel is always responsible for a correct and up-to-date statement of the information, including cancellation and policies. The Hotel will also indemnify HOTELSSTORY.COM in respect of every liability arising out of the infringement of copyrights (e.g. regarding to photographic material provided by the Hotel) and claims by Buyers and their clients concerning erroneous. Information of the Hotel on the website or any other claims related to services provided by the hotel. HOTELSSTORY.COM excludes any liability in respect of the hotel which is related to a (temporary) breakdown of the Websites. Complaints made by Buyers or its Guests are to be dealt with by the Hotel, without mediation by HOTELSSTORY.COM.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>2. Our Legal Responsibility to You</b></Box>
                          <Box textAlign="left" mt={3} fontSize={15}>We do not guarantee the accuracy of material on our site. As far as legally possible, we exclude legal responsibility for the following:</Box>
                          <Box textAlign="left" mt={2} fontSize={15}>a. Any loss to you arising from use of our site</Box>
                          <Box textAlign="left" mt={2} fontSize={15}>b. Loss of income, profit, business, data, contracts, goodwill, or savings.</Box>
                          <Box textAlign="left" mt={2} fontSize={15}>c. We also exclude, as far as legally possible, all terms and warranties or promises implied by law or by statutes.</Box>
                          <Box textAlign="left" mt={2} fontSize={15}>d. We don't exclude legal responsibility for death or personal injury owing to our negligence, or legal responsibility for fraud or fraudulent misrepresentation, or for anything else where exclusion is not allowed by the law.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>3. Translation</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>If HOTELSSTORY.COM has any indications that the information about the Hotel on the Website is not correct, HOTELSSTORY.COM retains the right to exclude or adapt the information. HOTELSSTORY.COM is entitled to offer the information and special offers made by the hotel on the website via or in collaboration with (the websites of) third parties.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>4. Authorisation by the Hotel</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>The Hotel is bound to accept the buyer’s guests/clients as a contractual party, and to deal with the enquiries in compliance with all the information contained in it, including any supplementary information and/or wishes made known by the buyer for their guests/clients. Buyers will be contacting Hotels directly for further booking process on confirmed availability or enquiries accepted by both parties.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>5. Buyers Commission, benefits and client benefits guarantee</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>The Hotel is due to pay HOTELSSTORY.COM Buyers a commission based on a percentage of the stayed room sales, meeting rooms and other benefits as agreed by the Hotel on the websites, except in the case of a timely cancellation by the Buyers or their guest/client. The other components may comprise breakfast, meals (half-board or full board), complimentary nights, etc. The commission due will be directly dealt with the Buyers.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>6. Guarantee of the enquiries made by the agent or their guests</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>Guarantee of the enquiries and booking is based on the credit card details provided by the Buyers or guest or the person responsible for the booking. The hotel is responsible for the verification of the validity of these credit card details. If the credit card offers no guarantee, the hotel will invite the Buyers or guest to guarantee the booking in an alternative matter. If the agent or guest is unable or unwilling to do this, the hotel may cancel the booking. If the guarantee made by the agent or guest may not be affected for any reason this shall always be for the account and for the risk of the hotel. The reservation to the agent or guest is guaranteed, in case of an overbooking, the hotel takes full responsibility to accommodate the guest and will pay commission to the agent.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>7. Monitoring of data</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>Adjustments to the enquiries statement, reported by the Hotel, are monitored constantly by HOTELSSTORY.COM, to ensure their correctness. For this purpose, we get feedback from the buyers. If the monitoring shows frequent misrepresentations of data, resulting in damage to HOTELSSTORY.COM, or a systematically high number of adjustments made by the hotel, HOTELSSTORY.COM will exclude the Hotel from further participation.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>8. Premium partner hotel invoices and payment</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>Invoices will always be settled by direct debit or stripe payments directly made on our platform. If HOTELSSTORY.COM can facilitate this method in the country where the hotel is located. If HOTELSSTORY.COM is not able to facilitate direct debit, payment will go via bank transfer, with our bank details mentioned on the invoice or subscription page. Other means of payment like cheques or via so-called payment agencies cannot be processed by HOTELSSTORY.COM and will therefore not be accepted. HOTELSSTORY.COM retains the right to terminate the participation of the Hotel In case of systematic late payment of the invoices.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>9. Ranking</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>The order in which the hotels are listed on the website, the so-called ranking, is determined unilaterally by HOTELSSTORY.COM. This ranking is automated and based, amongst others, on the current buyers' commission percentage to be paid by the hotel, the benefits stated by the hotel, the so-called conversion (i.e. the number of HOTELSSTORY.COM related to the number of visits of the hotel-page on the website), the agent's reviews. The Hotel can advantageously influence its ranking by increasing the current commission percentage or the benefits for Buyers or to their clients. This can be done online and by the hotel itself. It is not possible to claim to HOTELS STORY about the ranking decided by HOTELSSTORY.COM.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>10. Assignment</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>HOTELSSTORY.COM has the right to assign the delivery of Its services to its partners or third parties.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>11. Termination</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>Hotel and HOTELSSTORY.COM may terminate this agreement at the end of the contract period. Parties cannot charge each other for any damage upon terminating the agreement over the termination of the agreement, the hotel has to honour all enquiries HOTELSSTORY.COM for the upcoming period and is still due to pay any commissions to the travel Buyers for the upcoming confirmed bookings.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>12. Variation</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>We change these terms from time to time and you must check them for changes because they are binding on you.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>13. Applicable Law</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>The Parties will use their best efforts to negotiate in good faith and settle any dispute that may arise out of or relate to this Agreement or any breach of it. The English courts have the only right to hear claims related to our site, and all disputes are governed by English law.</Box>
                          <Box textAlign="left" mt={3} fontSize={15}><b>14. Contact Us</b></Box>
                          <Box textAlign="left" mt={2} fontSize={15}>Please email us at join@hotelsstory.com to contact us about any issues.</Box>
                        </Box>
                        <Box textAlign="left" mt={5} fontSize={15}>To complete your registration, please tick the boxes below:</Box>
                        <Box textAlign="left" mt={3} fontSize={15}>
                          <FormControlLabel
                            name="certify"
                            value={1}
                            onChange={certifyChange}
                            checked={certify.certify == 1 ? checked : ''}
                            type="checkbox"
                            control={<Checkbox color="secondary" />}
                            label=" I certify that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon request. Hotelsstory.com reserves the right to verify and investigate any details provided in this registration."
                            labelPlacement="end"
                          />
                        </Box>
                        <Box textAlign="left" mt={3} fontSize={15}>
                          <FormControlLabel
                            name="terms_condition"
                            value={1}
                            onChange={termsChange}
                            checked={terms_condition.terms_condition == 1 ? checked : ''}
                            type="checkbox"
                            control={<Checkbox color="secondary" />}
                            label="I have read, accepted, and agreed to the General Terms and Privacy Statement."
                            labelPlacement="end"
                          />
                        </Box>
                        <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
                          <Box textAlign="right" mt={3} mb={3}>
                            <Button type="submit" variant="contained" color="secondary">
                              Submit For Approval
                            </Button>
                          </Box>
                        </Grid>

                      </Grid>

                    </Grid>
                  </Box>
                </form>
              </Paper>
            </Grid>
            <Grid item md={1} lg={1}></Grid>
          </Grid>
        </Container>


      </TabPanel>
    </div>
  );
}

export default MyHotelSetup


