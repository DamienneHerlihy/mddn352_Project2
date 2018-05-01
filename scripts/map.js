function myMap() {
  
  var position1 = new google.maps.LatLng(-41.2904017,174.7686615);
  var position2 = new google.maps.LatLng(-41.2905022,174.7817372);
  var position3 = new google.maps.LatLng(-41.2790335,174.778878);
  
  
  var mapCanvas = document.getElementById("map");
  
  var mapView = {center: position1,position2,position3, 
    zoom: 13,

    styles: [
            {elementType: 'geometry', stylers: [{color: '#E8E8E8'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#E8E8E8'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#989898'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#818181'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#818181'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#E1E1E1'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#818181'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#FDFDFD'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#747474'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#747474'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#ECECEC'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#DDDDDD'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#838383'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#EAEAEA'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#595959'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#D2D2D2'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#595959'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#D2D2D2'}]
            }
    ]


  };
  
  var map = new google.maps.Map(mapCanvas, mapView);
  
  var marker1 = new google.maps.Marker({position:position1, });
  marker1.setMap(map);
  google.maps.event.addListener(marker1,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Victoria University of Wellington, Kelburn Campus"
    });
  infowindow.open(map,marker1);
  });
  
    var marker2 = new google.maps.Marker({position:position2, });
  marker2.setMap(map);
  google.maps.event.addListener(marker2,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Museum of New Zealand, Te Papa Tongarewa"
    });
  infowindow.open(map,marker2);
  });
  
   var marker3 = new google.maps.Marker({position:position3, });
  marker3.setMap(map);
  google.maps.event.addListener(marker3,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Victoria University of Wellington, Pipitea Campus"
    });
  infowindow.open(map,marker3);
  });
}