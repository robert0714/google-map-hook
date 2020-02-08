import { useEffect } from "react";
const InfoWindow = ({ data, map, marker }) => {
  useEffect(() => {
    createInfoWindow();
    
  });

  const createInfoWindow = () => {
    console.log("Hi")
    var wincontent = '<h3 class="popover-header">' + data.B_TYPE + '</h3><div class="popover-body"><ul class="reset"><li>單價：' + data.UNIT_PRICE_P + '萬元/坪</li><li>總坪數：' + data.B_AREA_P + '坪</li><li>屋齡：' + data.B_AGE + '年</li><li>移轉樓層：' + data.LEVEL + '</li><li>總樓層數：' + data.FLOORS + '</li><li>交易日期：' + data.TRANS_YMD + '</li></ul></div>';  
    const infowindow = new window.google.maps.InfoWindow({
        content: wincontent
    });

    marker.addListener('mouseover', function () {
        infowindow.open(map, marker); //設定點選 marker 打開資訊視窗事件
    });

    marker.addListener('mouseout', function () {
        infowindow.close(); //設定點選 marker 打開資訊視窗事件
    });

    return null;
  };

  return null;
};

export default InfoWindow;
