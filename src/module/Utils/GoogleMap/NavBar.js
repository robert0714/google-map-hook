
import React, { useState, useEffect } from "react";
import NavItem from "../../Utils/GoogleMap/NavItem";

class NavBar extends React.Component {
    boxclick(e,data) {
         console.log("robert: "+e);
         console.log("robert: "+data);
      }
    render() {
        const navstyle = {
            top: "20%" 
          };
        return (
          <div >
            <nav className="nav"  style={navstyle} ></nav>
            <div>
                <ul className="reset">
                        <NavItem labelName="電梯大樓 / 華廈"  id="6box"  dataId="f-1" value="6" className= "g-checkbox mg-0 filter f-1"  ></NavItem>
                        <NavItem labelName="無電梯公寓"  id="1box"  dataId="f-2" value="1" className= "g-checkbox mg-0 filter f-2"  ></NavItem>
                        <NavItem labelName="套房"  id="7box"  dataId="f-3" value="7" className= "g-checkbox mg-0 filter f-3"  ></NavItem>
                        <NavItem labelName="別墅 / 透天厝"  id="2box"  dataId="f-4" value="2" className= "g-checkbox mg-0 filter f-4"  ></NavItem>
                        <NavItem labelName="店面 (店鋪)"  id="3box"  dataId="f-5" value="3" className= "g-checkbox mg-0 filter f-5"  ></NavItem>
                        <NavItem labelName="辦公商業大樓"  id="4box"  dataId="f-6" value="4" className= "g-checkbox mg-0 filter f-6"  ></NavItem>
                </ul>
            </div>
         </div>
        );
      }
}

export default NavBar;