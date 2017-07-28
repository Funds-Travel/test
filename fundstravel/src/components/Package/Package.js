import React from 'react';
import './Package.css';

export default function Package({item}) {
  return (
    <div className="eachPackageDiv" key={item.id}>
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
