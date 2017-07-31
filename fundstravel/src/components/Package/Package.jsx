import React from 'react';
import './Package.css'


//need to make sure item is the correct reference...
export default function Package({item}) {
  return (
    <div className="eachPackageDiv" key={item.id}>
      <div className="cityCountry"> City/Country </div>
 <img className ="" src={item.hotel_image} alt={item.hotel_name}/>
      <ul>
      <li >
        {item.hotel_name}<br />
      </li>
      <li className="price">
       Total Price of ${item.total_price} for {item.travelers} traveler(s)
       <br /><br />
      </li>
      </ul>
    </div>
  )
}
