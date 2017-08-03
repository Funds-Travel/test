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
                <p>{item.hotel_name} <br /> Total Price of ${item.total_price} <br /> {item.travelers} travelers</p>
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
