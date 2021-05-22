import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Mainpage from './pages/MainPage';
// import AdminDashboardEmpty from './pages/AdminDashboardEmpty';
// import AdminDashboard from './pages/AdminDashboard';
// import AdminAlerts from './pages/AdminAlerts';
import Dashboard from './pages/Dashboard';
import "./assets/tailwind.css";
import './App.scss';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/"component={Mainpage} />
          <Route path="/home"component={Mainpage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
