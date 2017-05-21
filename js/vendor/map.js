$(document).ready(function () {
  if ($('#contacts-map').length) {
      var searchMap = function() {
        var map = $('#contacts-map');
        var markerPosition = new google.maps.LatLng(38.707975, -77.023151);
        if ($(window).width() <= 1023) {
          var centerPosition = new google.maps.LatLng(38.707975, -77.023151);
        } else {
          var centerPosition = new google.maps.LatLng(38.707339, -77.009890);
        }
        var infowindow = new google.maps.InfoWindow({
          content: data
        });
        var styles =  [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#353535"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#c3c3c3"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#353535"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#575757"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#575757"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2b2b2b"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#5d5d5d"
              }
            ]
          }
        ];
        var mapOptions = {
          zoom: 15,
          center: centerPosition,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: styles
        };
        var map = new google.maps.Map(document.getElementById("contacts-map"), mapOptions);
        const marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {
            lat: 38.707975,
            lng: -77.023151
          },
          icon: {
            url: ('../riffpoint/images/marker.png'),
            scaledSize: new google.maps.Size(23, 35)
          }
        });

        marker.addListener('mouseover', toggleBounce);
        google.maps.event.addListener(marker, 'click', function() {
          marker.setAnimation(null);
          infowindow.setContent($('.contact address').text());
          infowindow.open(map, marker);
        });

        function toggleBounce() {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function() {
            marker.setAnimation(null);
          }, 4000)
        }
        var data = '';
        marker.setMap(map);
      }
      searchMap();
    }
});
