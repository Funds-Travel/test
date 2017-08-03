import React from 'react';
import './Package.css'


//need to make sure item is the correct reference...
export default function Package({item}) {
  return (
    <div className="col m4">
        <div className="card hoverable" key={item.id}>
          <ul>
            <li>
              <div className="card-image">
                <img className="responsive-img" src={item.hotel_image} alt={item.hotel_name}/>
              </div>
              <div className="card-content">
                <p>{item.hotel_name} 
                  {
                    item.star_rating > 3
                  ? <span>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                  : <span>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                  }
                  <br /> Total Price of ${item.total_price} <br /> 
                  {
                    item.travelers > 1
                  ? <span>
                      <i className="fa fa-plane" aria-hidden="true"></i>
                      <i className="fa fa-plane" aria-hidden="true"></i>
                    </span>
                  : <i className="fa fa-plane" aria-hidden="true"></i>
                  }
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

  // <div className= "eachPackageDiv"key={item.id}>
  //
  // <img className ="" src={item.hotel_image} alt={item.hotel_name}/>
  //   <ul>
  //     <li>
  //       <div className="cityCountry"> {item.city_country} </div>
  //     </li>
  //   <li >
  //     {item.hotel_name}<br />
  //   </li>
  //   <li className="price">
  //    Total Price of ${item.total_price} <br /> {item.travelers} travelers
  //    <br /><br /><br />
  //   </li>
  //   </ul>
  // </div>
