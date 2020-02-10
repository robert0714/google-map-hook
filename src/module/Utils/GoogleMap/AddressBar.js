import React, { useState, useEffect } from "react";
import  Location  from "../../logic/Geocoder";

export default function AddressBar ({setLat  , setLng}) {
    const [addr,setAddr] =  useState('220新北市板橋區縣民大道二段7號6樓');
    function handleAddr (evt) {
        setAddr(evt.target.value);
        console.log("addr: "+addr);
        const lat = '';
        const lng = '';  
            
        Location(addr ,lat , lng);
        console.log('lat: ',lat); 
        console.log('lng: ',lng);    
        setLat(lat);
        setLng(lng);
    }
    return (
        <>
        <label htmlFor="addr" >地址</label>
        <input type="text" id ="addr" name="addr" value={addr}  onChange={handleAddr}/>
   
        </>
      )
}