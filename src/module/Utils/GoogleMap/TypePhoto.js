import icon1 from "../../../img/filter-icon1.png";
import icon2 from "../../../img/filter-icon2.png";
import icon3 from "../../../img/filter-icon3.png";
import icon4 from "../../../img/filter-icon4.png";
import icon5 from "../../../img/filter-icon5.png";
import icon6 from "../../../img/filter-icon6.png";
import {  } from "../../../img/";
const getImage = type => {
  switch (type) {
    case 5:
    case 6:
      return icon1;
    case 1:
      return icon2;
    case 7:
      return icon3;
    case 2:
      return icon4;
    case 3:
      return icon5;
    case 4:
      return icon6;
    default:
      alert("索求出錯");
  }
};
export default getImage;
