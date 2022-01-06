import React, { useContext, useEffect, useState } from "react";
import CalculateShopping from "../Components/CalculateShopping";
import CartProduct from "../Components/CartProduct";
import CartTotals from "../Components/CartTotals";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { UserContext } from "../Context/UserContext";

function ShoppingCart() {

  const [data, setData] = useState("")
  
  const Total = (() =>{
    
    
   const cartTotal = JSON.parse(localStorage.getItem("total"));
    
    setData(JSON.parse(localStorage.getItem("total")));
    
    
  })
  console.log("my cart" , data)

  const cart_product = JSON.parse(localStorage.getItem("productsCart"));
  
  console.log("data", data)
  useEffect(() => {

    setData(JSON.parse(localStorage.getItem("total")));

      return () => {
        
      }
  }, [])
  const {CartLength, setCartLength} = useContext(UserContext)

  const clearCart = (() =>{

    localStorage.clear()
    setCartLength(0)
  })

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

              {
                
                
                cart_product.map((item, index) => (
      
                  <CartProduct  key = {index} idx = {index}  img={item.image} price={item.price} qty={item.qty} name={item.name} color={item.color} size={item.size} />
                ))
              }
             
             


              <div className="row">
                  <div className="col-lg-3"><button className="update-cart-btn">Update Cart</button></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"><button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button></div>
              </div>
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
                <button className="proceed-btn2 mt-4">Proceed To Checkout</button>
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
