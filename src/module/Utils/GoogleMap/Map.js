import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
    this.state = {map: this.props.map? this.props.map:""}
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
