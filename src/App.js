import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import MyLoginPage from './components/authentication/Login';
// import MyRegisterPage from './components/authentication/reg';

// import MyDashboard from './components/dashboard'
import Routes from '../src/Routes'
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
