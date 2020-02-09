
import React, { useState, useEffect } from "react";
import Map from "../../Utils/GoogleMap/Map";
import Marker from "../../Utils/GoogleMap/Marker";
import { SpringBootServer, point } from "../../../StaticResource";
import NavBar from "../../Utils/GoogleMap/NavBar";

  
// import BulidingPhoto from "./TypePhoto";

const Container2 = () => {
  const [estimatedata, setEstimateData] = useState([]);

  const url = `${SpringBootServer}/estimatedata?lat=${point.lat}&lon=${point.lng}`;
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = () =>
    fetch(url)
      .then(res => res.json())
      .then(data => setEstimateData(data));

  const options = {
    center: { lat: 25.0566792, lng: 121.5246105 },
    mapTypeControl: false,
    scaleControl: true,
    zoomControlOptions: {
      position: window.google.maps.ControlPosition.LEFT_BOTTOM
    },
    fullscreenControlOptions: {
      position: window.google.maps.ControlPosition.LEFT_TOP
    },
    streetViewControl: false,
    panControl: false,
    zoom: 18
    //zoom: 16 比例尺為 100 m，地圖全長 2500 m，半徑顯示為 1250 m
    //zoom: 17 比例尺為  50 m，地圖全長 1250 m，半徑顯示為  625 m
    //zoom: 18 比例尺為  20 m，地圖全長  500 m
  };

  const gmarkers = [];

  const Visible = () => {
    gmarkers.map(marker => {
      const visible = marker.getVisible();
      marker.setVisible(!visible);
      return null;
    });
  };

  // const dataformat = {
  //   FLOORS: "十二層",
  //   POSITION: "臺北市中正區愛國東路116巷23弄15號",
  //   distance: 0.13985390447674695,
  //   B_TYPE: "住宅大樓(11層含以上有電梯)",
  //   LONGITUDE: 121.52065,
  //   B_AREA_P: 43.17,
  //   TRANS_YMD: "2019-06-28",
  //   B_TYPE_INT: 5,
  //   LEVEL: "七層",
  //   UNIT_PRICE_P: 80.61,
  //   B_AGE: 33.7,
  //   LATITUDE: 25.031985
  // };
  const cssstyle = {
    minHeight: "1103px",
    paddingTop: "74px" ,
    display: "block" 
  };
  const mapstyle = {    
    width: "100%",
    height: "90%",
    position: "relative",
    overflow: "hidden"
  };
  const resultstyle = {    
    display: "block" 
  };
  return (
    <div id="valuation"  className="g-grid none result basic"    style={cssstyle}>
    <div  className="container xs">
      <div className="result"  style={resultstyle}   >
        <div className="g-map">
          <Map id="map" options={options} gmarkers={gmarkers}   style={mapstyle} >
          </Map>
          <NavBar></NavBar>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Container2;

