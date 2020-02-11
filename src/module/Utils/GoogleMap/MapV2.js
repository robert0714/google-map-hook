import React, { useEffect, useRef } from "react";
import { functions, isEqual, omit } from "lodash";
export default React.memo(MapV2, shouldNotUpdate);
function MapV2({ id, options, onMount, className, style }) {
  const ref = useRef();
  const key = "AIzaSyDq38KGxDrWNbji5SjRwC1cT0twrsDhafc";

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(ref.current, options);

      if (typeof onMount === `function`) {
        onMount(map);
      }
    };
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.google.com/maps/api/js?key=${key}`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else {
      onLoad();
    }
  }, [onMount, options]);

  return <div id={id} style={style} {...{ ref, className }} />;
}

function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)];
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs));
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every((fn, idx) => {
      let x = fn.toString();
      let y = nextFuncs[idx].toString();
      debugger;
      return x === y;
    });
  return noPropChange && noFuncChange;
}

MapV2.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 18,
    mapTypeControl: false,
    scaleControl: true,
    zoomControlOptions: {
      position: window.google.maps.ControlPosition.LEFT_BOTTOM
    },
    fullscreenControlOptions: {
      position: window.google.maps.ControlPosition.LEFT_TOP
    },
    streetViewControl: false,
    panControl: false
    //zoom: 16 比例尺為 100 m，地圖全長 2500 m，半徑顯示為 1250 m
    //zoom: 17 比例尺為  50 m，地圖全長 1250 m，半徑顯示為  625 m
    //zoom: 18 比例尺為  20 m，地圖全長  500 m
  },
  style: {
    width: "100%",
    height: "90%",
    align: "center"
  }
};
