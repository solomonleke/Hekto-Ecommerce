import React from 'react'

function CheckoutProduct({img, name, color, size, price, qty}) {
    return (
        <div >
        <div className="row demo-img">
          <div className="col-lg-4 ">
            <img src={`http://localhost:8000/images/${img}`} className="checkout_img" alt="" />
          </div>
          <div className="col-lg-8">
            <h6>{name}</h6>
            <p>Color: {color} <span style={{float: "right"}}>${price}</span></p>
            <p>Quantity: {qty}</p>
            <p>Size: {size}</p>
          </div>
        </div>
            <hr/>
      </div>
    )
}

export default CheckoutProduct
