import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedCard({title, price, image, color ,id}) {
    return (
        <div className="col-lg-3">
            <div className="card card-feature">
           
                 <div className="image-feature">
                    <div className ="icons-feature">
                    <i className="fas fa-cart-plus item-action" />
                    <i className="far fa-heart item-action" />
                    <i className="fas fa-search-plus item-action" />
                    </div>
                  <Link to={`/product-details/${id}`}><img src={`http://localhost:8000/images/${image}`} alt="" className="featured-img card-img-top" /></Link>  
                    <div id='btn'>
                    
                    <button className="btn-feature">view details</button>             
                    </div>
                 </div>
                 <div className="card-details">
                 <p className="card-title-feature text-center">{title}</p>
                 <div className="circled">
                 <span className="sm-circled-feature circle1 " />
                 <span className="sm-circled-feature circle2" />
                 <span className="sm-circled-feature circle3" />
               </div>

                <p className="color-code text-center">Code - {color}</p>
                 
     
                 <div className="prices-bottom text-center">
                     <span className="card-price">${price}</span>
                    
                     <br/>
          
                  </div>    
                 </div>
            </div>
           
        </div>
    )
}
