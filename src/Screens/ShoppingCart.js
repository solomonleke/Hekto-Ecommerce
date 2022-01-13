import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CalculateShopping from "../Components/CalculateShopping";
import CartProduct from "../Components/CartProduct";
import CartTotals from "../Components/CartTotals";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { UserContext } from "../Context/UserContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()


function ShoppingCart() {
  const navigate = useNavigate();

  const [data, setData] = useState("")
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  
  const Total = (() =>{
    
    
   const cartTotal = JSON.parse(localStorage.getItem("SubTotal"));
    
    setData(cartTotal);
    
    
  })
  console.log("my cart" , data)

  const cart_product = JSON.parse(localStorage.getItem("productsCart"));
  
  console.log("data", data)

  useEffect(() => {

   Total()

      return () => {
        
      }
  }, [Total])
  const {CartLength, setCartLength} = useContext(UserContext)


  


  const clearCart = (() =>{

    localStorage.clear()
    setCartLength(0)
  })

  const update_cart = (() => {
    navigate("/shopList")

  })
  const checkout = () =>{

    if(user_id == null){
      let intendedRoute = "/product";
      
      localStorage.setItem("route", JSON.stringify(intendedRoute));
      navigate("/login")
    
      toast.error("Please Log in", {position: toast.POSITION.TOP_CENTER, autoClose: 3000});
    }else{
      navigate("/product")
    }

  }

  return (
    <div>
    <Nav/>
    <Header
    title = "Shopping Cart"

    />
      <div className="container shopping-div">
        <div className="shopping-cart">
          <div className="row">
            <div className="col-lg-8">
            {
              cart_product !== null ? (

                <div className="row">
                <div className="col-lg-6">
                  <h6 className="mb-4">Product</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Price</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Quantity</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Total</h6>
                </div>
              </div>

              ): ("")
            }
              
              {
                cart_product ==null ? (
                      <h1 className="text-center empty"> cart is empty </h1>
                ) : (
                     
                cart_product.map((item, index) => (
      
                  <CartProduct  key = {index} idx = {index} id={item.id}  img={item.image} wholeProduct = {cart_product} price={item.price} qty={item.qty} name={item.name} color={item.color} size={item.size} />
                ))
                )
                
               
              }
             
             
              {
                cart_product !== null ? (
                  <div className="row">
                  <div className="col-lg-3"><button className="update-cart-btn" onClick={update_cart}>Update Cart</button></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"><button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button></div>
              </div>
                ) : (
                  ""
                )
              }

             
            </div>
            <div className="col-lg-4">
              <h6 style={{ textAlign: "center" }} className="mb-4">
                Cart Totals
              </h6>
               <div className="total-checkout">
                    <h4 className="mt-2 cart-total-txt">Subtotals <span style={{float: "right"}}>${data}</span></h4>
                    <hr />
                    <h4 className="mt-4 cart-total-txt2">Totals <span style={{float: "right"}}>${data}</span></h4>
                    <hr />
                    <input className="mt-4" type="checkbox" />
                    <label
                      style={{ marginLeft: "4px" }}
                      htmlFor=""
                      className="cart-total-txt3"
                    >
                      Shipping & taxes calculated at checkout
                    </label>
                <button className="proceed-btn2 mt-4" onClick={checkout} >Proceed To Checkout</button>
               </div>
              <h6 style={{ textAlign: "center" }} className="mb-4 mt-4">
                Calculate Shopping
              </h6>
              <CalculateShopping />
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default ShoppingCart;
