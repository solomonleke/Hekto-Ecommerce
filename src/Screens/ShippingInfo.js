import React from "react";
import CartTotals from "../Components/CartTotals";
import CheckoutProduct from "../Components/CheckoutProduct";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";

function ShippingInfo() {
  return (
    <div>
     
      <Nav/>
      <Header
      title = "Hekto Demo"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="demo-txt">Hecto Demo</h4>
            <p className="demo-Ptxt">Cart/ Information/ Shipping/ Payment</p>
            <div className="info-div">
              <h5 className="contact-info">Contact Information</h5>

              <h6 className="contact-info-p">
                Already have an account? Log in
              </h6>
              <div>
                <input
                  className="checkout-input"
                  type="text"
                  placeholder="Email or mobile phone number"
                  name=""
                  id=""
                />

                <input className="checkout-input-checkbox" type="checkbox" />
                <label className="input-checkbox-label" htmlFor="">
                  Keep me up to date on news and excluive offers
                </label>

                <div className="row shipping-add-div">
                  <h4 className="shipping-txt">Shipping Address</h4>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="First name (optional)"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Address"
                  name=""
                  id=""
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Appaetnentment,suit,e.t.c (optional)"
                  name=""
                  id=""
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="City"
                  name=""
                  id=""
                />

                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Bangladesh"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <button className="proceed-btn">Continue Shopping</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 checked-out-prod" >

          <CheckoutProduct/>
          <CheckoutProduct/>
          <CheckoutProduct/>
          <CheckoutProduct/>

          <CartTotals/>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default ShippingInfo;
