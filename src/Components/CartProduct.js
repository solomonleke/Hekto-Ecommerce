import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';

function CartProduct({img, price, qty, name, idx, color, size}) {

  const {CartLength, setCartLength} = useContext(UserContext)
  const {cartTotal, setCartTotal} = useContext(UserContext)

  
   
    const Delete_product = ( () =>{

      const cart_product = JSON.parse(localStorage.getItem("productsCart"));
     
      let cartItems = JSON.parse(localStorage.getItem("productsCart"));

      let cartTotal = JSON.parse(localStorage.getItem("total"));

      cartItems.splice(idx, idx+1);

      localStorage.setItem("productsCart",JSON.stringify(cartItems));

      localStorage.setItem("total", cartTotal-100);
      
      setCartLength(CartLength-1)
      
      // localStorage.setItem("total", parseInt(cartTotal) - parseInt(props.current_price));

    

      
    })
    

    const change = (() =>{

      setCartLength(CartLength-1)
      setCartTotal(cartTotal-100)

    })

    useEffect(() => {

     
    
    }, [change])

    return (
        
            <div >
            <div className="row">
              <div className="col-lg-6">
                 
               
                <div className="row">
                  <div className="col-lg-3">
                  <div className="delete-product">
                  <i className="fas fa-times-circle delete" onClick={Delete_product} />
                    <img src={`http://localhost:8000/images/${img}`} alt="" className="cart-img" />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h6>{name}</h6>
                    <p>
                      Color: {color}{" "}
                      {/* <span style={{ float: "right" }}>$32.00</span> */}
                    </p>
                    <p>Size: {size}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
               
                <p className="margin-down">${price}</p>
              </div>
              <div className="col-lg-2">
               
                <div className=" quantity">
                  <h6 className="margin-down" >
                   <span className="regulator"> <i class="fa fa-minus " aria-hidden="true"></i></span>
                    <span className="qty-num">{qty}</span>
                    <span  className="regulator">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>
                  </h6>
                </div>
              </div>
              <div className="col-lg-2">
                
                <p className="margin-down">${price * qty}</p>
              </div>
            </div>
            <hr/>
          </div>
        
    )
}

export default CartProduct
