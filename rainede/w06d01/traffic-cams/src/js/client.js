const googleMap = googleMap || {};
const google =google; // set on window by google API

googleMap.addInfoWindowForCamera = function (camera, marker){
  google.maps.event.addListener(marker,'click', () => {
    //close previously open window
    if (typeof this.infoWindow !== 'undefined') this.infoWindow.close();
    this.infoWindow = new google.maps.InfoWindow({
      content: `<img src="http://www.tfl.gov.uk/tfl/livetravelnews/trafficcams/cctv/${ camera.file }"><p>${ camera.location }</p>`
    });
    this.infoWindow.open(this.map, marker);
    this.map.setCenter(marker.getPosition());
    this.map.setZoom(15);
  });
};

googleMap.createMarkerForCamera = function (camera){
  const latlng = new google.maps.LatLng(camera.lat, camera.lng);
  const marker = new google.maps.Marker({
    position: latlng,
    map: this.map,
    icon: './images/marker.png',
    animation: google.maps.Animation.DROP
  });

  this.addInfoWindowForCamera(camera, marker);
  // marker.addListener('click', this.toggleBounce);

};

googleMap.loopThroughCameras = function(data){
  $.each(data.cameras, (index, camera) => {
    // value of this is changed for this
    setTimeout(() => {
      googleMap.createMarkerForCamera(camera);
    //console.log(camera);
    }, index * 50);

  });
};


googleMap.getCameras = function(){
  $.get('http://localhost:3000/cameras').done(this.loopThroughCameras);
//  $.get('http://localhost:3000/cameras').done(data => console.log(data.cameras));
};

googleMap.mapSetup = function(){
  //needs to be in vanilla javascript
  const canvas = document.getElementById('map-canvas');

  const mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng( 51.506178,-0.088369 ),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    // //snazzymaps.com
    // styles:
    // [{"featureType":"landscape.natural.landcover","elementType":"labels.text","stylers":[{"visibility":"on"},{"invert_lightness":true}]},{"featureType":"landscape.natural.landcover","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"},{"invert_lightness":true}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#ffffff"}]}]

  };

  this.map = new google.maps.Map(canvas, mapOptions);
  this.getCameras();
};


$(googleMap.mapSetup.bind(googleMap));





// $(()=>{
//   $.get('http://localhost:3000/cameras').done(data =>{
//     console.log(data.cameras);
//   });
// });
