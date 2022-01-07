import React, { useEffect, useState } from 'react'

function SingleProduct() {

  const [data, setdata] = useState([]);



  const fetch_single_product = (() => {
    fetch_single_product
        fetch(`http://localhost:8000/api/products/${id}`)
        .then(res => res.json())
        .then(json => {
            
          console.log(json.products)
            // console.log(json);
            localStorage.setItem('data', JSON.stringify(json.data));
            setdata(json.products);
        })
        .catch(error => {
            
          console.log("error", error);
          
      })
      })


  useEffect(() => {

    fetch_single_product()

  }, [])
    return (
        <div className="container">
      <div
        className="row"
        style={{
          boxShadow: "0px 0px 25px 10px #F6F4FD",
          borderRadius: "2px",
          backgroundColor: "#fff",
          marginBlock: "100px"
        }}
      >
        <div className="col-lg-2">
          <img className="details-img"
            src=".././images/mainpic.png"
            style={{ padding: "8px 8px 4px" }}
            alt="bag1"
          />
          <img  className="details-img"
            src=".././images/pic2.png"
            style={{ padding: "4px 8px" }}
            alt="bag2"
          />
          <img  className="details-img"
            src=".././images/pic3.png"
            style={{ padding: "4px 8px" }}
            alt="bag3"
          />
        </div>
        <div className="col-lg-4">
          <img  className="details-img-main"
            src=".././images/pic2.png"
            style={{ padding: "8px 4px" }}
            alt="bag4"
          />
        </div>
        <div className="col-lg-6">
          <div className="" style={{ padding: "8px 25px", marginBlock: "15%"}}>
            <div className="">
              <div className="col-lg-12">
                <p
                  className="card-title"
                  style={{ fontFamily: "Josefin Sans", fontSize: "24px" }}
                >
                  Dictum morbi
                </p>
              </div>
            </div>
            <div className="prices">
              <span>
                <i className="fa fa-star" style={{ color: "yellow" }} />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
              </span>
              <span style={{ color: "blue" }}>(22)</span>
            </div>
            <div>
              <span className="card-price">$26.00</span>
              <span className="card-price-former">$52.00</span>
            </div>
            <div className="item-description">
              <p
                style={{
                  color: "blue",
                  marginBottom: 0,
                  fontFamily: "Josefin Sans",
                }}
              >
                Color
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "5px",
                  fontFamily: "Josefin Sans",
                  color: "blue",
                }}
              >
                Add To Cart
              </button>
              <span>
                <i className="fa fa-heart" style={{ padding: "0 8px" }} />
              </span>
            </div>
            <div>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Categories:
              </p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>Tags:</p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Share:
                <span>
                  <i
                    className="fab fa-facebook"
                    style={{ color: "blue", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fab fa-instagram"
                    style={{ color: "#FB2E86", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fab fa-twitter-square"
                    style={{ color: "blue", paddingLeft: "8px" }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SingleProduct
