import React, { useEffect, useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import cities from '../data/cities.json';

const markerIcon = new L.Icon({
    iconUrl:require('../img/location.png'),
    iconSize:[35,45],
    iconAnchor:[17,46],
    popupAnchor:[0,-46]
})
const sdIcon = new L.Icon({
    iconUrl:require('../img/pin.png'),
    iconSize:[35,45],
    iconAnchor:[17,46],
    popupAnchor:[0,-46]
})
function Navigation() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create a map instance when the component mounts
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    // Add a tile layer (you can use any tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add Leaflet Routing Machine to the map
    L.Routing.control({
      waypoints: [
        L.latLng(11.024734, 77.117071), // Starting point
        L.latLng(11.002492, 77.024580), // Destination point
      ],
      createMarker: function (i, waypoint, n) {
        // Customize the marker style for each waypoint
        return L.marker(waypoint.latLng, {
          icon: sdIcon,
          draggable: true, // You can make the markers draggable if needed
        });
      },
    }).addTo(map);

    cities.forEach((city,index) => {
        L.marker([city.lat,city.lng],{ icon: markerIcon }).addTo(map).bindPopup('<div><h3 class="text-xl"><b>Details</b></h3><br/><p class="font-bold text-black">Temparature : '+city.temp+'</p><br/><p class="font-bold text-black">CO2 Level : '+city.co2+'</p><br/><p class="text-green-700 font-bold">Overall : '+city.overall+' to travel</p><br/></div>')
      });
    // Cleanup function: Remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className='mt-10' ref={mapRef}></div>
  );
}


export default Navigation;
