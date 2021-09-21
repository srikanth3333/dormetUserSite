import React, {useEffect, useState} from 'react'
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
import CategoryProducts from './components/pages/CategoryProducts';
import Search from './components/pages/Search';
import PageNotFound from './components/basic/PageNotFound';
import {cartCount} from './components/api/cartCount';
import ShopProducts from './components/pages/ShopProducts';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from './components/navigation/Navbar';

function App() {

  const [userToken, setUserToken] = useState('')
  const [word,setWord] = useState('')


  const retrieveToken = (mobile) => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append('username', mobile);
    data.append('password', 'zxcvbnm321');

    var config = {
      method: 'post',
      url: 'https://smyworks.com/api-token-auth/',
      data : data
    };

    axios(config)
    .then(function (response) {
      setUserToken(response.data.token)
      localStorage.setItem('user_token',response.data.token)
      cartCount(setWord,response.data.token)
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  useEffect(() => {
    var mobile = localStorage.getItem('mobile_number')
    retrieveToken(mobile)
  }, [word])
  
  return (
    <div className="app">
      <Router>
        <Navbar  token={userToken} userCart={word} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            {userToken ? <Redirect to="/" /> : <Login  />}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/all">
              <All  />
          </Route>
          <Route exact path="/products/">
            <Products />
          </Route>
          <Route exact path="/products/shops/:id">
            <ShopProducts />
          </Route>
          <Route exact path="/products/category/:id">
            <CategoryProducts />
          </Route>
          <Route exact path="/products/search/:query">
            <Search />
          </Route>
          <Route exact path="/shops">
            <Shop />
          </Route>
          <Route exact path="/detail/:id">
            <Detail changeWord={word => setWord(word)} userCart={word} token={userToken} />
          </Route>
          <Route exact path="/cart">
            <Cart changeWord={word => setWord(word)} token={userToken} />
          </Route>
          <Route exact path="/checkout">
            <Checkout token={userToken} />
          </Route>
          <Route exact path="/review">
            <Review token={userToken} />
          </Route>
          <Route exact path="/payment">
            <Payment changeWord={word => setWord(word)} token={userToken} />
          </Route>
          <Route exact path="/confirmation/:id">
            <Confirmation token={userToken} />
          </Route>
          <Route exact path="/orders">
            <MyOrders token={userToken} />
          </Route>
          <Route exact path="/account">
            <MyAccount token={userToken} />
          </Route>
          <Route exact path="/Favourites">
            <Favourites token={userToken} />
          </Route>
          <Route exact path="*">
            <PageNotFound  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
