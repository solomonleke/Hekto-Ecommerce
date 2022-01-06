import React from 'react'

function CheckoutProduct() {
    return (
        <div >
        <div className="row demo-img">
          <div className="col-lg-4 ">
            <img src=".././images/item1.png" alt="" />
          </div>
          <div className="col-lg-8">
            <h6>Ut diam consequat</h6>
            <p>Color: Brown <span style={{float: "right"}}>$32.00</span></p>
            <p>Size: XL</p>
          </div>
        </div>
            <hr/>
      </div>
    )
}

export default CheckoutProduct
