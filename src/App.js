import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Review from './components/Review/Review';
import Shipment from "./components/Shipment/Shipment";
import Shop from './components/Shop/Shop';

export const reviewContext = createContext()
// export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({})

   
  
  return (
      <reviewContext.Provider value={[cart, setCart, loggedInUser, setLoggedInUser]}>
    <div className="App">
      <h1>email: {loggedInUser.email}</h1>
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/shop" component={Shop} />
        <Route path="/review" component={Review} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/shipment" component={Shipment} />
        <Route path="*" component={NoMatch} />
      </Switch>
      </Router>
    </div>
    </reviewContext.Provider>
  );
}

export default App;
