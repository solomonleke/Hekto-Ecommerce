import React, { useContext, useEffect, useState } from "react";
import CartTotals from "../Components/CartTotals";
import CheckoutProduct from "../Components/CheckoutProduct";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { UserContext } from "../Context/UserContext";

function ShippingInfo() {

  const [data, setdata] = useState([]);

  const [total, setTotal] = useState("");

  const { userInfo, setUserInfo}= useContext(UserContext);

  const [contacts, setContacts] = useState({
    email:'',
    firstname:'',
    lastname:'',
    address:'',
    apartment:'',
    city:'',
    country:'',
    postalcode:''
  });

  const [button, setButton]= useState('');

  const handleChange = (e) =>{
    setContacts({...contacts, [e.target.id]: e.target.value})
}

  const cart_product = JSON.parse(localStorage.getItem("productsCart"));

  const cartTotal = JSON.parse(localStorage.getItem("total"));

  const handleSubmit = ((e)=>{
    let user_id = JSON.parse(localStorage.getItem('user_id'))
        let contacted = contacts;
        contacted['user_id'] = user_id ;
        if (contacts.email==='' || contacts.lastname===''|| contacts.address===''|| contacts.city===''||contacts.country===''||contacts.postal===''){
            alert('please fill up all the required fields')
        }else if(button === 'Update'){
            var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(contacted),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/update", requestOptions)
        .then(response => response.json())
        .then(result =>{
                if(result){
                    alert('contact updated saved.')
                }
                
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });

        }else{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(contacted),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/contact", requestOptions)
        .then(response => response.json())
        .then(result =>{
                if(result){
                    setContacts({...contacts, [e.target.id]: ''})
                    alert('contact succesfully saved.')
                    console.log(result)
                }
                
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });

    }
  })

  const checkContact=(e)=>{
    let user_id = JSON.parse(localStorage.getItem('user_id'))
    fetch(`http://127.0.0.1:8000/api/contact/${user_id}`)
    .then(response => response.json())
    .then(result =>{
            if(result.contact.length !== 0){
                result.contact.map((respond)=>(
                    setContacts({
                        ...contacts, 
                        email:respond.email, 
                        firstname:respond.firstname, 
                        lastname:respond.lastname,
                        address:respond.address,
                        apartment:respond.apartment===null ? '':respond.apartment,
                        city:respond.city,
                        country:respond.country,
                        postalcode:respond.postalcode,
                    })
                   
                ));
                setButton('Update')
                localStorage.setItem("contactInfo", JSON.stringify("true"));
                setUserInfo(result)
            }else{
                setButton('Save')
                localStorage.setItem("contactInfo",  JSON.stringify("false"));
            }
            
        }
     )
}

useEffect(() => {
   checkContact()
}, [contacts])


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
                  onChange={handleChange}
                  value={contacts.email}
                  id="email"
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
                      onChange={handleChange}
                      value={contacts.firstname}
                      id="firstname"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Last name"
                      onChange={handleChange}
                      value={contacts.lastname}
                      id="lastname"
                    />
                  </div>
                </div>

                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Address"
                  name=""
                  id=""
                  onChange={handleChange}
                  value={contacts.address}
                  id="address"
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Apartment"
                  name=""
                  id=""
                  onChange={handleChange}
                  value={contacts.apartment}
                  id="apartment"
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="City"
                  name=""
                  id=""
                  onChange={handleChange}
                  value={contacts.city}
                  id="city"
                />

                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="country"
                      onChange={handleChange}
                      value={contacts.country}
                      id="country"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Postal Code"
                      onChange={handleChange}
                      value={contacts.postalcode}
                      id="postalcode"
                    />
                  </div>
                </div>
                <button className="proceed-btn" onClick={handleSubmit}>{button}</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 checked-out-prod" >

          {
            cart_product !==null ? (
              cart_product.map((item, i) =>(

                <CheckoutProduct
                key={i}
                      name={item.name}
                      color={item.color}
                      size={item.size}
                      img= {item.image}
                      price = {item.price}
                      qty = {item.qty}
                />
              ))
            ): (
                ""
            )

          }

         
          

          <CartTotals/>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default ShippingInfo;
