import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import Manage from './component/Manage/Manage';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import CheckOut from './component/CheckOut/CheckOut';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkOut/:productId">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <PlaceOrder />
            </PrivateRoute>
            <Route className="/manage"> 
              <Manage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
