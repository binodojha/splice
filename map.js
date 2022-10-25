
    // set map options
    // var mylatLng = { lat:28.397362, lng:84.12576};
    
    // var mapOptions = {
    //     center: mylatLng,
    //     zoom:7,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    
    // // // create map
    // var map = new google.maps.Map(document.getElementById("googleMap"));


function initMap() {
    var uluru = {lat:27.700001, lng:85.333336};
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }


//   function () {
              
//     var CustomOp = {
//         center:new google.maps.LatLng(
//                 28.502212, 77.405603), 
//         zoom:17, 
//         mapTypeId:google.maps.MapTypeId.ROADMAP
//     };
      
//     // Map object
//     var map = new google.maps.Map(
//         document.getElementById("googleMap"),
//         CustomOp
//     );
// }