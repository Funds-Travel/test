import React from 'react';
import './Package.css'


//need to make sure item is the correct reference...
export default function Package({item}) {
  return (
    <div className="col-sm-6 col-md-4 eachPackageDiv-container">
    <div className="eachPackageDiv">
      <a href= {item.link}>
        <div className="" key={item.id}>
          <ul className=" ">
            <li>
              <div className="">
                <img className="responsive-img" src={item.hotel_image} alt={item.hotel_name}/>
              </div>
                <div>
                  <h5 className="locationStyle" >{item.city_country}</h5>
                </div>
              <div className="card-content">
                <p className="fontStyle">{item.hotel_name} <br/>
                  {
                    item.star_rating > 3
                  ? <span  >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                  : <span>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                  }
                  <br /> <br /> Total Price ${item.total_price} <br />
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
      </a>
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
