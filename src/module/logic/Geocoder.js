 import Map from "../Utils/GoogleMap/Map";


export function location ( addr ,options ) {
    const address = addr; //input成功的查詢地址 用addr取代成為真正輸入的地址
    const geocoder = new window.google.maps.Geocoder();  //換算地址為座標用
    // const map = new window.google.maps.Map(document.getElementById('map'), {
    //     center: {lat: 25.0566792, lng: 121.5246105},
    //     mapTypeControl: false,
    //     zoomControlOptions: {
    //         position: google.maps.ControlPosition.LEFT_BOTTOM
    //     },
    //     fullscreenControlOptions: {
    //         position: google.maps.ControlPosition.LEFT_TOP
    //     },
    //     streetViewControl: false,
    //     panControl: false,
    //     zoom: 18
    // });
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