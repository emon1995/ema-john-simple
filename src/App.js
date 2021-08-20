import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import NoMatch from "./components/NoMatch/NoMatch";
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

export const reviewContext = createContext()

function App() {
  const [cart, setCart] = useState([]);

   const handleAddProduct = (product) => {
    // console.log('Product add', product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    
    <Router>
      <reviewContext.Provider value={[handleAddProduct, cart, setCart]}>
    <div className="App">
    <Header />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/shop" component={Shop} />
        <Route path="/review" component={Review} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
    </reviewContext.Provider>
    </Router>
    
  );
}

export default App;
