import NavBar from './Components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Dashboard from './Components/Pages/Dashboard';
import ApplicationStatus from './Components/Pages/ApplicationStatus';
import UserRegistration  from './Components/Pages/UserRegistration';

import Footer from './Components/Footer';
import CompanyDashboard from './Components/Pages/CompanyDashboard';
import CompanyNavbar from './Components/CompanyNavbar';
import HomeCompany from './Components/Pages/HomeCompany';
import CompanyApplications from './Components/Pages/CompanyApplications';
import CompanyRegisteration from './Components/Pages/CompanyRegisteration';

function App() {
  return (
      <>
      {/* <NavBar/> */}
      <CompanyNavbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/applicationstatus" component={ApplicationStatus}/>
        <Route exact path="/userregistration" component = {UserRegistration}/>
        <Route exact path="/companyhome" component = {HomeCompany}/>
        <Route exact path="/companydashboard" component = {CompanyDashboard}/>
        <Route exact path="/companyapplications" component = {CompanyApplications}/>
        <Route exact path="/companyregistration" component = {CompanyRegisteration}/>
      </Switch>
      <Footer/>
      </>
  );
}

export default App;
