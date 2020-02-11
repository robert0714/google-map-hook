import React, { useState, useContext } from "react";
import Location  from "../../logic/Geocoder";
import {StateContext} from '../../../contexts';

export default function AddressBar ({setLat ,  setLng }) {
    const [addr,setAddr] =  useState('220新北市板橋區縣民大道二段7號6樓');
    function test1(e){
        setLat(e);
    }
    function test2(e){
        setLng(e);
    }

    function handleAddr (evt) {
        setAddr(evt.target.value);
        console.log("addr: "+addr);
        Location(addr ,test1, test2);
    }
    return (
        <>
        <label htmlFor="addr" >地址</label>
        <input type="text" id ="addr" name="addr" value={addr}  onChange={handleAddr}/>
   
        </>
      )
}