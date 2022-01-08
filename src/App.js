import logo from './logo.svg';
import './App.css';
import './Homepage.css';
import './Day1.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ShopLeft from './Screens/ShopLeft';
import ShopGrid from './Screens/ShopGrid';
import Footer from './Components/Footer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homepage from './Screens/Homepage';
import ProductDetails from './Screens/ProductDetails';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OrderCompleted from './Screens/OrderCompleted';
import ShoppingCart from './Screens/ShoppingCart';
import ShippingInfo from './Screens/ShippingInfo';
import About from './Screens/About';
import Contact from './Screens/Contact';
import { UserContext } from './Context/UserContext';
import { useContext, useState } from 'react';

function App() {



  const cart_product = JSON.parse(localStorage.getItem("productsCart"));




  const [cartTotal, setCartTotal] = useState(0);
  const [jwt, setJwt]= useState('');
  const [userId, setUserId]= useState('');

  const [CartLength, setCartLength] = useState(
    
    cart_product?.length
   
  );
  return (
    <div className="App">
  <UserContext.Provider  value= {{CartLength, setCartLength, cartTotal, setCartTotal,jwt, setJwt, userId, setUserId}}>

   <BrowserRouter>

   
    <Routes>
   
      <Route path="/" element = {<Homepage/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/shopList" element = {<ShopLeft/>} />
      <Route path="/shopGrid" element = {<ShopGrid/>} />
      <Route path="/product-details/:id" element = {<ProductDetails/>} />
    
      <Route path="/login" element = {<Login/>} />
      <Route path="/register" element = {<Register/>} />
      <Route path="/product-details" element = {<ProductDetails/>} />
      <Route path="/order-completed" element = {<OrderCompleted/>} />
      <Route path="/shopping-cart" element = {<ShoppingCart/>} />
      <Route path="/product" element = {<ShoppingCart/>} />
     
    </Routes>
    
   <Footer/>


   </BrowserRouter>
   </UserContext.Provider>
    </div>
  );
}

export default App;
