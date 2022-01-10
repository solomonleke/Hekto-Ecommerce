import React, { useContext } from "react";
import { PaystackConsumer } from 'react-paystack';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function CartTotals() {

  const { userInfo, setUserInfo}= useContext(UserContext);
  const cartTotal = JSON.parse(localStorage.getItem("total"));
  const cart_product = JSON.parse(localStorage.getItem("productsCart"));
  const email = JSON.parse(localStorage.getItem("email"));
  const id = JSON.parse(localStorage.getItem("user_id"));

  const navigate = useNavigate();

  const reference =  (new Date()).getTime().toString();


  const config = {
    reference,
    email: email,
    amount:  cartTotal * 100,
    publicKey: 'pk_test_ca0fd4afd284f5b8b057a8ffcb6d7ccaa2c29b2c',
};

const saveOrder = ()=>{
 
  cart_product.map((item, i) =>{
    let payload = {

      "user_id": `${id}`,
      "product_id": `${item.id}`,
      "product_qty": `${item.qty}`,
      "product_price": `${item.price}`,
      "product_total": `${item.qty}`,
      "trans_total": `${cartTotal}`,
      "trans_ref": `${config.reference}`,
      "trans_status": "pending",
  
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: 'follow'
      };


    fetch("http://localhost:8000/api/payment", requestOptions )
        .then((res)=> res.json())
        .then((response) =>{
          console.log("success order", response);
        })
        .catch();

       
        

  });

}



// you can call this function anything
const handleSuccess = (reference) => {

  fetch(`http://localhost:8000/api/payment/${reference.reference}`)
        .then((res)=> res.json())
        .then((response) =>{
          console.log("success order", response);
        })
        .catch();

        localStorage.removeItem("productsCart");
        localStorage.removeItem("total");
        navigate("/order-completed");
 
        console.log("success",reference);
};

// you can call this function anything
const handleClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const componentProps = {
  ...config,
  text: 'Paystack Button Implementation',
  onSuccess: (reference) => handleSuccess(reference),
  onClose: handleClose
};
  return (
    <div className="total-checkout">
      <h4 className="mt-2 cart-total-txt">Subtotals <span style={{float: "right"}}>$219.00</span></h4>
      <hr />
      <h4 className="mt-4 cart-total-txt2">Totals <span style={{float: "right"}}>${cartTotal}</span></h4>
      <hr />
      <input className="mt-4" type="checkbox" />
      <label
        style={{ marginLeft: "4px" }}
        htmlFor=""
        className="cart-total-txt3"
      >
        Shipping & taxes calculated at checkout
      </label>
      
      <PaystackConsumer {...componentProps} >
      {({initializePayment}) => <button className="proceed-btn2 mt-4" onClick={() => {
        fetch("http://localhost:8000/api/products")
        .then(res=> saveOrder())
        .then(res => initializePayment(handleSuccess, handleClose))
        
       
      }}>Buy Now</button>}
    </PaystackConsumer>
    </div>
  );
}

export default CartTotals;
