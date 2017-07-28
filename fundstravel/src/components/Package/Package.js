import React from 'react';
import './Package.css';

export default function Package({item}) {
  return (
    <div className="eachPackageDiv">
    <img src={item.hotel_image} alt={item.hote_name}/>

      <ul>
      <li >
        {item.hotel_name}<br />
        {item.hotel_location}
      </li>
      <li>
       Total Price of ${item.total_price} for {item.travelers} traveler(s)<br />
      <span className="descriptSpan">{item.hotel_description}</span>
      </li>
      </ul>
    </div>
  )
}
