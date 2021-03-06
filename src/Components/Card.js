import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

export default function Card(props) {   


  // const add_to_cart = props.addCart
  const {CartLength, setCartLength} = useContext(UserContext)
  
      const add_to_cart = (() =>{

        let cartItems = JSON.parse(localStorage.getItem("productsCart"));
        let cartTotal = JSON.parse(localStorage.getItem("total"));
        

        if(cartItems !==null){
          let names =[]
          for (let i=0; i <cartItems.length; i++){
            names.push(cartItems[i].name)
          }
          if(names.includes(props.product_name)){
            return toast.info("Product Already in Cart", {position: toast.POSITION.TOP_CENTER, autoClose: 2500});
          }else{
            cartItems.push({ "image":props.product_img, "id": props.id, "qty": 1, "name":props.product_name, "price":props.current_price, "color":props.product_color, "size":props.product_size}
            )
            localStorage.setItem("productsCart", JSON.stringify(cartItems));

            localStorage.setItem("total", parseInt(cartTotal) + parseInt( props.current_price));
            setCartLength(cartItems.length)
            let msg = props.product_name + " " + "added to cart"
            toast.success(msg, {position: toast.POSITION.TOP_CENTER, autoClose: 2500});
          }
        }else{
          cartItems = [{ "image":props.product_img, "qty": 1, "id": props.id, "name":props.product_name, "price":props.current_price, "color":props.product_color, "size":props.product_size}]
          localStorage.setItem("total", props.current_price);
          localStorage.setItem("productsCart", JSON.stringify(cartItems));

          setCartLength(cartItems.length)
        }

    })
    return (
    
          <div className="col-lg-3 grid-list">
        
          <div className="grid-list-img">
                
              <div className ="icons-grid-list">
              <i className="fas fa-cart-plus item-action-grid"  onClick={add_to_cart}/>
              <i className="far fa-heart item-action-grid" />
              <i className="fas fa-search-plus item-action-grid" />
              </div>
              <Link to={`/product-details/${props.id}`}> 
              <img src={`http://localhost:8000/images/${props.product_img}`} alt="" className="card-img-top product-img-grid" />
              </Link>
              

          </div>
        

          <Link to={`/product-details/${props.id}`} className="link">
          <p className="card-title text-center mt-4">{props.product_name}</p></Link>
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
