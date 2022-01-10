import React from "react";

function CartTotals() {
  return (
    <div className="total-checkout">
      <h4 className="mt-2 cart-total-txt">Subtotals <span style={{float: "right"}}>£219.00</span></h4>
      <hr />
      <h4 className="mt-4 cart-total-txt2">Totals <span style={{float: "right"}}>£325.00</span></h4>
      <hr />
      <input className="mt-4" type="checkbox" />
      <label
        style={{ marginLeft: "4px" }}
        htmlFor=""
        className="cart-total-txt3"
      >
        Shipping & taxes calculated at checkout
      </label>
      <button className="proceed-btn2 mt-4">Buy Now</button>
    </div>
  );
}

export default CartTotals;
