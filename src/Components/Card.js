import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';

export default function Card(props) {


  // const add_to_cart = props.addCart
  const {CartLength, setCartLength} = useContext(UserContext)
  
      const add_to_cart = (() =>{

        let cartItems = JSON.parse(localStorage.getItem("productsCart"));
        let cartTotal = JSON.parse(localStorage.getItem("total"));
        

        if(cartItems !==null){
          let data = { "image":props.product_img, "name":props.product_name, "price":props.current_price, "color":props.product_color, "size":props.product_size}
          let names =[]
          for (let i=0; i <cartItems.length; i++){
            names.push(cartItems[i].name)
          }
          if(names.includes(props.product_name)){
            return alert("Product Already in Cart");
          }else{
            cartItems.push({ "image":props.product_img, "id": props.id, "qty": 1, "name":props.product_name, "price":props.current_price, "color":props.product_color, "size":props.product_size}
            )
            localStorage.setItem("productsCart", JSON.stringify(cartItems));

            let totalPrice = cartItems.reduce(function (accumulator, item) {
              return accumulator + item.qty * item.price;
            }, 0);
            
            localStorage.setItem("total", parseInt(cartTotal) + parseInt( props.current_price));
            setCartLength(cartItems.length)
          }
        }else{
          cartItems = [{ "image":props.product_img, "qty": 1, "id": props.id, "name":props.product_name, "price":props.current_price, "color":props.product_color, "size":props.product_size}]
          localStorage.setItem("total", props.current_price);
          localStorage.setItem("productsCart", JSON.stringify(cartItems));
          setCartLength(cartItems.length)
        }

        // const cart =[
        //   props.product_img, props.product_name, props.current_price, props.product_color, props.product_size
        // ]


        // localStorage.setItem('cart-data', JSON.stringify(cart));
          
            // alert(cart)
    })
    return (
    
          <div className="col-lg-3 grid-list">
        
          <div className="grid-list-img">
                
              <div className ="icons-grid-list">
              <i className="fas fa-cart-plus item-action-grid"  onClick={add_to_cart}/>
              <i className="far fa-heart item-action-grid" />
              <i className="fas fa-search-plus item-action-grid" />
              </div>
              <img src={`http://localhost:8000/images/${props.product_img}`} alt="" className="card-img-top product-img-grid" />


          </div>
        


          <p className="card-title text-center mt-4">{props.product_name}</p>
          <div className=" text-center">
          <span className="sm-circle bg-warning " />
          <span className="sm-circle bg-danger" />
          <span className="sm-circle bg-primary" />
        </div>

        <div className="prices-bottom text-center">
        <span className="card-price">${props.current_price}</span>
        <span className="card-price-former">${props.formal_price}</span>
        <br/>
       
      </div>
          </div>
       
    )
}
