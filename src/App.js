
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import AllServices from './component/AllServices/AllServices';
import Blogs from './component/Blogs/Blogs';
import AllDoctors from './component/AllDoctors/AllDoctors';

import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRouter from './component/PrivateRouter/PrivateRouter';
import Footer from './component/Footer/Footer'
import { NotFound } from 'http-errors';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/all-services'>
              <AllServices></AllServices>
            </Route>
            <PrivateRouter path='/AllServiceCard/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRouter>
            <PrivateRouter path='/ServiceCard/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRouter>
            <PrivateRouter path='/doctors'>
              <AllDoctors></AllDoctors>
            </PrivateRouter>
            <PrivateRouter path='/blogs'>
              <Blogs></Blogs>
            </PrivateRouter>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
