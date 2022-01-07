import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function ProductCard(props) {


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
        return alert("Product Already in Cart");
      }else{
        cartItems.push({ "image":props.product_img, "id": props.id, "qty": 1, "name":props.product_name, "price":props.current_price, "color":props.product_color, "size":props.product_size}
        )
        localStorage.setItem("productsCart", JSON.stringify(cartItems));

        // update the total price in the local Storage
        localStorage.setItem("total", parseInt(cartTotal) + parseInt( props.current_price));
        setCartLength(cartItems.length)
      }
    }else{
      cartItems = [{ "image":props.product_img, "qty": 1, "id": props.id, "name":props.product_name, "price":props.current_price, "color":props.product_color, "size":props.product_size}]
      localStorage.setItem("total", props.current_price);
      localStorage.setItem("productsCart", JSON.stringify(cartItems));
      setCartLength(cartItems.length)
    }

  })
  
    return (
        <div className="card card-pro">
                <div className="card-body">
                  <div className="single-item row">
                    <div className="col-4 ">
                    <Link to={`/product-details/${props.id}`} className="link">
                  <img src={`http://localhost:8000/images/${props.product_img}`} alt="" className="card-img-top product-img" /></Link>
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-lg-4">
                        <Link to={`/product-details/${props.id}`} className="link">
                          <p className="card-title">{props.product_name}</p></Link>
                        </div>
                        <div className="col-lg-8">
                          <div className>
                            <span className="sm-circle bg-warning " />
                            <span className="sm-circle bg-danger" />
                            <span className="sm-circle bg-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="prices">
                        <span className="card-price">${props.current_price}</span>
                        <span className="card-price-former">${props.formal_price}</span>
                        <span>
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star" />
                        </span>
                      </div>
                      <div className="item-description">
                        <p>{props.short_desc}</p>
                      </div>
                      <div className>
                        <i className="fas fa-cart-plus item-actions"  onClick={add_to_cart} />
                        <i className="far fa-heart item-actions" />
                        <i className="fas fa-search-plus item-actions" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    )
}
