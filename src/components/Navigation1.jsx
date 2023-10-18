import React, { useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import cities from '../data/cities.json';
import Search from './Search';

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
  const routingControlRef = useRef(null);
  const [startPoint, setStartPoint] = useState({ lat: 11.024734, lng: 77.117071 });
  const [endPoint, setEndPoint] = useState({ lat: 11.002492, lng: 77.024580 });

  useEffect(() => {
    // Create a map instance when the component mounts
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
    

    // Add a tile layer (you can use any tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add Leaflet Routing Machine to the map
    routingControlRef.current = L.Routing.control({
      waypoints: [
        L.latLng(startPoint.lat, startPoint.lng), // Starting point
        L.latLng(endPoint.lat, endPoint.lng), // Destination point
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
        L.marker([city.lat,city.lng],{ icon: markerIcon }).addTo(map).bindPopup('<div><h3 className="text-xl"><b>Details</b></h3><br/><p className="font-bold text-black">Temparature : '+city.temp+'</p><br/><p className="font-bold text-black">CO2 Level : '+city.co2+'</p><br/><p className="text-green-700 font-bold">Overall : '+city.overall+' to travel</p><br/></div>')
      });
    // Cleanup function: Remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (routingControlRef.current) {
      routingControlRef.current.setWaypoints([
        L.latLng(startPoint.lat, startPoint.lng),
        L.latLng(endPoint.lat, endPoint.lng)
      ]);
    }
  }, [startPoint, endPoint]);

  const handleOnSearchChange1 = (searchdata) =>{
    console.log(searchdata);
    const [lat, lng] = searchdata.value.split(',');
    setStartPoint({ lat: parseFloat(lat), lng: parseFloat(lng) });
  }
  const handleOnSearchChange2 = (searchdata) =>{
    console.log(searchdata);
    const [lat, lng] = searchdata.value.split(',');
    setEndPoint({ lat: parseFloat(lat), lng: parseFloat(lng) });
  }

  return (
    <div className='w-full mt-6'>
      {/* <div className='ml-4'>
        <div>
          <label>From: </label>
          <input
          className='border-2'
            type="text"
            value={startPoint.lat + ',' + startPoint.lng}
            onChange={(e) => {
              const [lat, lng] = e.target.value.split(',');
              setStartPoint({ lat: parseFloat(lat), lng: parseFloat(lng) });
            }}
            placeholder="Starting Point (lat,lng)"
          />
        </div>

        <div className='mt-6'>
          <label>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
          className='border-2'
            type="text"
            value={endPoint.lat + ',' + endPoint.lng}
            onChange={(e) => {
              const [lat, lng] = e.target.value.split(',');
              setEndPoint({ lat: parseFloat(lat), lng: parseFloat(lng) });
            }}
            placeholder="Ending Point (lat,lng)"
          />
        </div>
      </div> */}
      <div className='ml-4'>
        <div>
          <label>From: </label>
          <Search onSearchChange={handleOnSearchChange1} />
        </div>

        <div className='mt-6'>
          <label>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <Search onSearchChange={handleOnSearchChange2} />
        </div>
      </div>
      <div className='mt-10' ref={mapRef}></div>
      
    </div>
  );
}


export default Navigation;
