import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
    this.state = {map: this.props.map? this.props.map:""}
  }
  location ( addr   ) {
    const address = addr; //input成功的查詢地址 用addr取代成為真正輸入的地址
    const geocoder = new window.google.maps.Geocoder();  //換算地址為座標用

    geocoder.geocode({'address': address}, function (results, status) {
        if (status == window.google.maps.GeocoderStatus.OK) { //轉換成功的話
            console.log('可轉換'); 
            const  lat = results[0].geometry.location.lat();
            const  lng = results[0].geometry.location.lng();           
            return {lat, lng} ;
        } else { //轉換失敗的流程
            console.log('轉換失敗');
            alert("Geocode was not successful for the following reason: " + status);
            return false;
        }
    });
}
  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.setState({map:map})
  }

  componentDidMount() {
    const key = "AIzaSyDq38KGxDrWNbji5SjRwC1cT0twrsDhafc";
    if (!window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://maps.google.com/maps/api/js?key=${key}`;
      script.id = "googleMaps";
      document.body.appendChild(script);
      script.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  renderChildren() {
    const { children } = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.state.map,
        gmarkers:this.props.gmarkers
      });
    });
  }
  render() {
    return (
      <div
        style={{ width: "100%", height: "90%", align: "center" }}
        id={this.props.id}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

export default Map;
