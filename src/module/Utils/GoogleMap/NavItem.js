
import React, { useState, useEffect } from "react";

export default function NavItem ({ id, dataId, className ,value,labelName }) {
   const [isChecked, setIsChecked] = useState(false);

   const changeHandler = () => {
      setIsChecked(!isChecked);
   };
    
   return (
         <li>
            <label className={className} htmlFor={id}  >{labelName}
               <input id={id} type="checkbox"   data-id={dataId}   onChange={changeHandler} />
               <span className="checkmark"></span>
            </label>
         </li>
   )
 }

 