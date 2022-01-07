import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function SingleProduct() {

  const [data, setdata] = useState([]);
 
  const [mainImg, setMainImg] = useState("");

  const {CartLength, setCartLength} = useContext(UserContext)


  const {id} = useParams();

  const fetch_single_product = ((id) => {
    

        fetch(`http://localhost:8000/api/products/${id}`)
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('data', JSON.stringify(json.data));
            setdata(json.products);
            console.log("single", json.products)
        })
        .catch(error => {
            
          console.log("error", error);
          
      })
      })

      const img1 = `http://localhost:8000/images/${data.Picture_url1}`
      const img2 = `http://localhost:8000/images/${data.Picture_url2}`
      const img3 = `http://localhost:8000/images/${data.Picture_url3}`
      const img4 = `http://localhost:8000/images/${data.Picture_url4}`

     

      const changeImg = ((singleImg) =>{

        setMainImg(singleImg)
      })

  useEffect(() => {

    fetch_single_product(id)

   
  }, [])


  
  // const add_to_cart = props.addCart
  
  
      const add_to_cart = (() =>{

        let cartItems = JSON.parse(localStorage.getItem("productsCart"));
        let cartTotal = JSON.parse(localStorage.getItem("total"));
        

        if(cartItems !==null){
          let names =[]
          for (let i=0; i <cartItems.length; i++){
            names.push(cartItems[i].name)
          }
          if(names.includes(data.Name)){
            return alert("Product Already in Cart");
          }else{
            cartItems.push({ "image":data.Picture_url1, "id": data.id, "qty": 1, "name":data.Name, "price":data.Price, "color":data.Color, "size":data.Size}
            )
            localStorage.setItem("productsCart", JSON.stringify(cartItems));
            
            localStorage.setItem("total", parseInt(cartTotal) + parseInt( data.Price));
            setCartLength(cartItems.length)
          }
        }else{
          cartItems = [{ "image":data.Picture_url1, "id": data.id, "qty": 1, "name":data.Name, "price":data.Price, "color":data.Color, "size":data.Size}]
          localStorage.setItem("total", data.Price);
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
            src={img4}
            style={{ padding: "8px 8px 4px" , cursor: "pointer"}}
            alt="bag1"
            onClick={() => changeImg(img4)}
          />
          <img  className="details-img"
            src={img3}
            style={{ padding: "4px 8px" , cursor: "pointer" }}
            alt="bag2"
            onClick={() => changeImg(img3)}
          />
          <img  className="details-img"
            src={img2}
            style={{ padding: "4px 8px" , cursor: "pointer" }}
            alt="bag3"
            onClick={() => changeImg(img2)}
          />
        </div>
        <div className="col-lg-4">
          <img  className="details-img-main"
            src={mainImg == "" ? (img1): (mainImg)  }
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
                 {data.Name}
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
              <span className="card-price">${data.Price}</span>
              <span className="card-price-former">${data.SlicedPercentage}</span>
            </div>
            <div className="item-description">
              <p
                style={{
                  color: "blue",
                  marginBottom: 0,
                  fontFamily: "Josefin Sans",
                }}
              >
                Color : {data.Color}
              </p>
              <p>
                    {data.Description}
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
                onClick={add_to_cart}
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
