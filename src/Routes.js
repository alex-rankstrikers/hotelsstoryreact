import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

//import Login from './components/authentication/Login'
//import Register from './components/authentication/Register'
import MyDashboard from './components/dashboard'
import Listing from './components/listing'
import Details from './components/details'
import Home from './components/webview/Home'
import Faq from './components/webview/Faq'
import Login from './components/webview/Login'
import Partner from './components/webview/Partner'
import Register from './components/webview/Register'
import history from './History'
import Offers from './components/offers/Offers'
import OfferAdd from './components/offers/Offersform'
import OfferEdit from './components/offers/Offersformedit'

import Offerslist from './components/offers/Offerslist'
import Profile from './components/users/Profile'
import JobProfile from './components/job_portal/Job_Profile'
import Hotelsetup from './components/hotelsetup/Hotelsetup'
import Leads from './components/leads/Leads'
import ViewLeads from './components/leads/view-leads'
import BuyerLeads from './components/buyerleads/buyer-leads'
import BuyerViewLeads from './components/buyerleads/buyer-view-leads'
import VenueBooking from './components/buyerleads/venue-booking'
import VenueBookingHotel from './components/buyerleads/venue-booking-hotel'
import RoomBooking from './components/buyerleads/room-booking'
import HotelsOffers from './components/offers/HotelsOffers'

import RoomBookingHotel from './components/buyerleads/room-booking-hotel'
import Editprofile from './components/users/Editprofile'
import Groupinfo from './components/hotelsetup/Groupinfo'
import Viewgrouphotels from './components/hotelsetup/Viewgrouphotels'

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />          
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" component={MyDashboard} />
          <Route path="/listing" component={Listing} />
          <Route path="/details" component={Details} />
          <Route path="/hotelsetup/:hotelid" component={Hotelsetup} />
          <Route path="/view-hotel/:slug" component={Details} />
          <Route path="/hotelsetup" component={Hotelsetup} />
          <Route  path="/leads" component={Leads} />  
          <Route  path="/view-leads/:leadid" component={ViewLeads} />
          <Route  path="/buyer-leads" component={BuyerLeads} />  
          <Route  path="/buyer-view-leads/:leadid" component={BuyerViewLeads} />
          <Route  path="/venue-booking" component={VenueBooking} />
          <Route  path="/venue-booking/:hotelid" component={VenueBookingHotel} /> 
          <Route  path="/room-booking" component={RoomBooking} />
          <Route  path="/room-booking/:hotelid" component={RoomBookingHotel} /> 
          <Route  path="/offers" component={Offers} />
          <Route  path="/hotelsetup" component={Hotelsetup} />          
          <Route  path="/add-offer" component={OfferAdd} />
          <Route  path="/edit-offer/:id" component={OfferEdit} />
          <Route  path="/hotel-offers/:id" component={HotelsOffers} />          
          <Route  path="/offers-list" component={Offerslist} />
          <Route  path="/profile" component={Profile} />
          <Route  path="/job-profile" component={JobProfile} />
          <Route path="/home" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/partner" component={Partner} />
          <Route path="/edit-profile" component={Editprofile} />
          <Route path="/group-info" component={Groupinfo} />
          <Route path="/view-group-hotels/:grpid" component={Viewgrouphotels} />
        </Switch>
      </Router>
    )
  }
}
