    
      
var iniTacka=new google.maps.LatLng(30.3595, -97.98937);



var mapInit = {
  center:iniTacka,
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  

  var map=new google.maps.Map(document.getElementById('map'),mapInit);


 var p1 = ["p1",30.3095, -97.93937, "Bee Cave Coffee Co.", "<strong>Bee Cave Coffee Co.</strong><br><a href='http://beecavecoffee.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/cBdxQXPvk1R2' target='_blank'>Directions</a>"]

function markerInfo (param)
{ 
  var infos={};
  var markeri={};
  var LLng = new google.maps.LatLng(param[1],param[2]);
  markeri["marker"+param[0]] = new google.maps.Marker({
  position: LLng,
  title: param[3],
  map: map
  });
  markeri["marker"+param[0]].setMap(map);

  infos["infow"+param[0]] = new google.maps.InfoWindow({
    content: param[4]
  });

  infos["infow"+param[0]].open(map, markeri["marker"+param[0]]);

}

markerInfo(p1);



//google.maps.event.addDomListener(window, 'load', initialize);








      /*var myLatLng = {lat: -25.363, lng: 131.044};
      var myLatLng2 = {lat: -25.393, lng: 131.094};
      //var map = $('#map');

      function addMarker(LatLng)
      {
        var map = new google.maps.Map(document.getElementById('map'),{
          zoom: 4,
          center: LatLng
        });

        var marker = new google.maps.Marker({
          position: LatLng,
          map: map,
          title: 'Hello World!'
        });
      }

      function initMap() {
        

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

 
      }

      initMap();
      addMarker(myLatLng);
      addMarker(myLatLng2);*/
   