import React, { useState, useEffect } from "react";

export default function Location ( address ,lat ,lng  ) {
      //input成功的查詢地址 用addr取代成為真正輸入的地址
    const geocoder = new window.google.maps.Geocoder();  //換算地址為座標用
    // const [ lat ,setLat] =  useState([]);
    // const [ lng ,setLng] =  useState([]); 
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == window.google.maps.GeocoderStatus.OK) { //轉換成功的話
            console.log('可轉換'); 
              lat = results[0].geometry.location.lat();
              lng = results[0].geometry.location.lng();   
           
              
            console.log('lat: ',lat); 
            console.log('lng: ',lng);    
            return {lat, lng} ;
        } else { //轉換失敗的流程
            console.log('轉換失敗');
            alert("Geocode was not successful for the following reason: " + status);
            return false;
        }
    });
    // setLat(lat); 
    // setLng(lng); 

     
}