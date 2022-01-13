import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext';

function CartProduct({img, price, qty, name, idx, color, size, wholeProduct, id}) {

  const {CartLength, setCartLength} = useContext(UserContext)
  const {cartTotal, setCartTotal} = useContext(UserContext)

  const [productqty, setProductqty]=useState(qty);
  const [priceS, setPrice] = useState(0);
  const [total, setTotal]= useState(0);
  const [productPrice, setProductPrice]=useState(0)

  const handleIncrement=()=>{
    let item = JSON.parse(localStorage.getItem('productsCart'));
    let itemTotal = JSON.parse(localStorage.getItem('total'));
    let itemSubTotal = JSON.parse(localStorage.getItem('SubTotal'));
    wholeProduct.productqty += 1;
    setProductqty(productqty+1);

    

    setProductPrice(price * wholeProduct.productqty);
    item[idx].qty = productqty+1;
    // itemTotal= productqty+1;
    localStorage.setItem("productsCart", JSON.stringify(item));
    console.log("productincart", item);
    localStorage.setItem('SubTotal',parseInt(itemTotal) + parseInt(productPrice) );
    setCartTotal(parseInt(itemSubTotal) + parseInt(productPrice));
    // updateTotal()
    
}

const handleDecrement=()=>{

    let item = JSON.parse(localStorage.getItem('productsCart'));
    let itemTotal = JSON.parse(localStorage.getItem('total'));
    let itemSubTotal = JSON.parse(localStorage.getItem('SubTotal'));
    const Subtotal= (parseInt(itemTotal) - parseInt(productPrice))
    if (productqty === 1){
      // setProductqty = 1;
        alert('Quantity cannot be less than 1')
    }else{
      wholeProduct.productqty -= 1;
        setProductqty(productqty-1);
        setProductPrice(price * wholeProduct.productqty);
        item[idx].qty = productqty-1;
        localStorage.setItem("productsCart", JSON.stringify(item));
        console.log("productincart", item);
        localStorage.setItem('SubTotal', Subtotal);
        setCartTotal(parseInt(itemSubTotal) - parseInt(productPrice));
    }
   
      
}
   
    const Delete_product = ( () =>{
     
      let cartItems = JSON.parse(localStorage.getItem("productsCart"));

      let cartTotal = JSON.parse(localStorage.getItem("total"));

      cartItems.splice(idx, idx+1);

      localStorage.setItem("productsCart",JSON.stringify(cartItems));

      localStorage.setItem("total", parseInt(cartTotal) - parseInt(productPrice));
      
      setCartLength(CartLength-1)
      
    })
    

    const change = (() =>{

      setCartLength(CartLength-1)
    

    })

    useEffect(() => {

      setProductPrice(price * productqty)
       setPrice(price)
   
    
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
               
                <p className="margin-down">${priceS}</p>
              </div>
              <div className="col-lg-2">
               
                <div className=" quantity">
                  <h6 className="margin-down" >
                   <span className="regulator"> <i class="fa fa-minus " onClick={handleDecrement} aria-hidden="true"></i></span>
                    <span className="qty-num">{productqty}</span>
                    <span  className="regulator">
                      <i class="fa fa-plus" onClick={handleIncrement} aria-hidden="true"></i>
                    </span>
                  </h6>
                </div>
              </div>
              <div className="col-lg-2">
                
                <p className="margin-down">${productPrice}</p>
              </div>
            </div>
            <hr/>
          </div>
        
    )
}

export default CartProduct
