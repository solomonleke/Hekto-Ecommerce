import Header from "../Components/Header";
import Nav from "../Components/Nav";
import ProductCard from "../Components/ProductCard";
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import Card from "../Components/Card";

export default function ShopGrid() {
    const [data, setData] = useState([])
    const [paginate, setPaginate] = useState("")
  const [update, setUpdate] = useState("")


  const [Category, setCategory] = useState([])
  const [CategoryCheck, setCategoryCheck] = useState("");

  const [HoldBrand, setHoldBrand] = useState([])
  const [Brand, setBrand] = useState("")
  const [BrandFilter, setBrandFilter] = useState("")
  const [PriceFilter, setPriceFilter] = useState("")

  const [PriceFilter2, setPriceFilter2] = useState("")
  const [Range, setRange] = useState("")





  // const userContext = createContext()

  console.log("paginate", paginate)

 
  const handleCategory = (e)=>{

    if(e.target.checked === true){

      setCategoryCheck(e.target.value)
      setBrand(e.target.id)
      console.log("id_cat" ,e.target.id);
    }else{
      setCategoryCheck("")
      setBrand("")
    }
  }

  const handleBrand = (e)=>{

    if(e.target.checked === true){

      setBrandFilter(e.target.value)
      
    }else{

      setBrandFilter("")
     
    }
  }

  const handlePrice = (e)=>{

    if(e.target.checked === true){

      setPriceFilter(e.target.value)
      setRange(e.target.id)
    
    }else{
      setPriceFilter("")
      setRange("")
    }
  }

  const handlePrice1 = (e)=>{

      setPriceFilter2(e.target.value)
      setRange(e.target.id)  
  }
  

  const fetch_product = (() =>{

    if(CategoryCheck !==""){

        fetch(`http://localhost:8000/api/categoryCheck/${CategoryCheck}`)
        .then(res => res.json())
        .then(json => {
            
          console.log( "categorized" , json)
       
            // console.log(json);
            localStorage.setItem('data', JSON.stringify(json.data));
            setData(json);
        })
        .catch(error => {
            
          console.log("error", error);
          
      })
    }else 
    
    if(paginate >= 1){

  
        fetch(`http://localhost:8000/api/paginatedProducts/${paginate}`)
        .then(res => res.json())
        .then(json => {
            
          console.log( "page" , json)
       
            // console.log(json);
            localStorage.setItem('data', JSON.stringify(json.data));
            setData(json.data);
        })
        .catch(error => {
            
          console.log("error", error);
          
      })
    }else{
            
      fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(json => {
          
        console.log(json.products)
     
          // console.log(json);
          localStorage.setItem('data', JSON.stringify(json.data));
          setData(json.products);
      })
      .catch(error => {
          
        console.log("error", error);
        
    })
    }


  })

  const fetch_category = ()=>{
    fetch(`http://localhost:8000/api/category`)
    .then(res => res.json())
    .then(json => {
        
      console.log( "category" , json)
    
        localStorage.setItem('category', JSON.stringify(json.data));
        setCategory(json);
    })
    .catch(error => {
        
      console.log("error", error);
      
  })
  }

  const fetch_brand = ()=>{

    if(Brand !== ""){
      fetch(`http://localhost:8000/api/brand/${Brand}`)
      .then(res => res.json())
      .then(brand => {
        
        setHoldBrand(brand);
      })
      .catch(error => {
          
        console.log("error", error);
        
    })
    }
}

  
  const updated = (jsn) =>{
    setUpdate(jsn)
 
  }


  useEffect(() => {

     fetch_product()
     fetch_category();
     fetch_brand();
     
      return () => {
        
      }
  }, [paginate, CategoryCheck, Brand, BrandFilter, PriceFilter, Range])


    return (
             <div>
                <Nav
                active5 = "active"
                />

                <Header
                title = "shop grid "
            
                />
                <div className="container">

            
                <div className="section-4">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="search-right">
                        <p className="title">Ecommerce Acceories &amp; Fashion item </p>
                        <p className="stat">About 9,620 results (0.62 seconds)</p>
                    </div>
                    </div>
                    <div className="col-lg-6 d-inline-flex">
                    <div className="search-div1">
                        <span className="search-text filter-icon">Per Page:</span>
                        <input className="search-input" size={1} value={paginate} onChange={((e) =>(setPaginate(e.target.value)))} type="text" />
                    </div>
                    <div className="search-div2">
                        <span className="search-text filter-icon">Sort By:</span>
                        <select className="search-input" aria-label=".form-select-sm select example">
                        <option selected>Best Match</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
                    <div className="search-div3">
                        <span className="search-text">View:</span>
                        <Link className='filter-icon-anc' to="/shopList"><i className="fas fa-list filter-icon" /></Link> 
                        <Link className='filter-icon-anc' to="/shopGrid"><i className="fas fa-th-large filter-icon" /></Link> 
                        <input className="search-input" size={15} type="text" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="main">
                <div className="row">
                    <div className="col-lg-3">
                    <div className="right-filter">
                        <p>Categories</p>
                        <ul className="right-filter-ul">
                        {
                            Category.map((item)=>(
        
                              <li className>
                              <input className="form-check-input form-check-input2" onChange={handleCategory} value={item.categories} type="checkbox" defaultValue id={item.id} />
                              <label className="form-check-label">{item.categories}</label>
                            </li>
                            ))
                        
                          }
                        </ul>
                    </div>
                    <div className="right-filter">
                        <p>Product Brand</p>
                            <ul className="right-filter-ul">
                          
                              {
                                Brand !=="" ? (
                                  HoldBrand.map((item) =>(
                                    <li className>
                                    <input id={item.id} className="form-check-input form-check-input3" value={item.brand} onChange={handleBrand}  type="checkbox" defaultValue   />
                                    <label className="form-check-label">{item.brand}</label>
                                  </li>
                                  
                                  ))
                                ):(
                                  <li className>
                                  <input  className="form-check-input form-check-input3" checked  type="checkbox" defaultValue   />
                                  <label className="form-check-label">All Brand</label>
                                </li>
                                )
                              }
                            </ul>
                    </div>
                    
                    <div className="right-filter">
                    <p>Price Filter</p>
                    <ul className="right-filter-ul">
                      <li className>
                        <input className="form-check-input form-check-input2" id={0} value={292929292929292929292929} name="price" onChange={(e)=>handlePrice(e)} type="radio" defaultValue  />
                        <label className="form-check-label">All price</label>
                      </li>
                      <li className>
                        <input className="form-check-input form-check-input2" id={0} value={1500} name="price" onChange={(e)=>handlePrice(e)} type="radio" defaultValue  />
                        <label className="form-check-label">$0.00 - $1500.00</label>
                      </li>
                      <li className>
                        <input className="form-check-input form-check-input2" id={1500} value={3500} name="price" onChange={handlePrice}  type="radio" defaultValue  />
                        <label className="form-check-label">$1500.00 - $3500.00</label>
                      </li>
                      <li className>
                        <input className="form-check-input form-check-input2" id={1500} value={5000} name="price" onChange={handlePrice}  type="radio" defaultValue  />
                        <label className="form-check-label">$1500.00 - $5040.00</label>
                      </li>
                      <li className>
                        <input className="form-check-input form-check-input2" id={5000}  value={101000000} name="price" onChange={handlePrice}  type="radio" defaultValue />
                        <label className="form-check-label">$6000.00 +</label>
                      </li>
                    </ul>
                  </div>
                    <span className="bottom-search">
                        <input type="text" size className="search search-text" id={0}  value={PriceFilter2} onChange={handlePrice1} style={{width: '65%'}} />
                        <i className="fas fa-search input-search-icon" />
                    </span>
                    </div>
                    <div className="col-lg-9">
                    <div className="row">
                    
                   
                  
                    {  
                      PriceFilter2 !=="" ? (

                        data.filter(data => (Number(data.Price)) >= Range && (Number(data.Price)) <= PriceFilter2)
                          
                          
                        .map((item) =>(
          
          
                            <Card
                            product_name = {item.Name}
                            id = {item.id}
                            product_color = {item.Color}
                            product_size = {item.Size}
                            product_img = {item.Picture_url1}
                            current_price ={item.Price}
                            formal_price ={item.SlicedPercentage}
                            short_desc = {item.Description}
                           
                            />
        
          
                        ))


                      ):(
                        PriceFilter !== "" ? (

                      
                          data.filter(data => (Number(data.Price)) >= Range && (Number(data.Price)) <= PriceFilter)
                          
                          
                          .map((item) =>(
            
            
                              <Card
                              product_name = {item.Name}
                              id = {item.id}
                              product_color = {item.Color}
                              product_size = {item.Size}
                              product_img = {item.Picture_url1}
                              current_price ={item.Price}
                              formal_price ={item.SlicedPercentage}
                              short_desc = {item.Description}
                             
                              />
          
            
                          ))
  
                        ):(
  
                          BrandFilter !== "" ? (
  
                            data.filter(data => data.Brand_id == BrandFilter)
                          
                          
                            .map((item) =>(
              
              
                                <Card
                                product_name = {item.Name}
                                id = {item.id}
                                product_color = {item.Color}
                                product_size = {item.Size}
                                product_img = {item.Picture_url1}
                                current_price ={item.Price}
                                formal_price ={item.SlicedPercentage}
                                short_desc = {item.Description}
                               
                                />
            
              
                            ))
              
  
                          ): (
                                 
                          data.map((item) =>(
            
            
                            <Card
                            product_name = {item.Name}
                            id = {item.id}
                            product_color = {item.Color}
                            product_size = {item.Size}
                            product_img = {item.Picture_url1}
                            current_price ={item.Price}
                            formal_price ={item.SlicedPercentage}
                            short_desc = {item.Description}
                            
                            />
        
          
                        ))
          
                          ) 
                        )
                      ) 

                      
                       

                       
          
                      }
                   
                      <span></span>
                    </div>

                    </div>
                </div>
                </div>
            
            </div>
          </div>
    )
}

