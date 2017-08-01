import React from 'react';
import './Package.css'


//need to make sure item is the correct reference...
export default function Package({item}) {
  return (
    <div className="eachPackageDiv" key={item.id}>

 <img className ="" src={item.hotel_image} alt={item.hotel_name}/>
      <ul>
        <li>
          <div className="cityCountry"> {item.city_country} </div>
        </li>
      <li >
        {item.hotel_name}<br />
      </li>
      <li className="price">
       Total Price of ${item.total_price} <br /> {item.travelers} travelers
       <br /><br /><br />
      </li>
      </ul>
    </div>
  )
}
