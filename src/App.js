import './App.css';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import All from './components/pages/All';
import Products from './components/pages/Products';
import Shop from './components/pages/Shop';
import Detail from './components/pages/Detail';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Review from './components/pages/Review';
import Payment from './components/pages/Payment';
import Confirmation from './components/pages/Confirmation';
import MyOrders from './components/pages/MyOrders';
import MyAccount from './components/pages/MyAccount';
import Favourites from './components/pages/Favourites';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home  />
          </Route>
          <Route exact path="/login">
            <Login  />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/all">
            <All />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/shops">
            <Shop />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
          <Route exact path="/orders">
            <MyOrders />
          </Route>
          <Route exact path="/account">
            <MyAccount />
          </Route>
          <Route exact path="/Favourites">
            <Favourites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
