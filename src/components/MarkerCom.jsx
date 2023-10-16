import React from 'react'
import { useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer as LeafletMap,Popup, TileLayer, Marker } from 'react-leaflet';
import osm from '../osm-provider.js';
import L from 'leaflet';

import cities from '../data/cities.json';
const markerIcon = new L.Icon({
    iconUrl:require('../img/location.png'),
    iconSize:[35,45],
    iconAnchor:[17,46],
    popupAnchor:[0,-46]
})

const MarkerCom = () => {
    const [center, setCenter] = useState({ lat: 11.003008, lng: 77.050046 })
    const ZOOM_LEVEL = 14;
    const mapref = useRef();

    
    return (
        <section className='w-full bg-gray-800'>
            <div className='w-full p-5 mt-10 h-screen'>
            <h1>Marker</h1>
            <LeafletMap 
                className='rounded-lg'
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapref}
            >
                <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
                
                {
                    cities.map((city) =>
                        <Marker 
                    position={[city.lat,city.lng]}
                    icon={markerIcon}
                    key={city.id}
                    >
                        <Popup>
                            <b>This Will Show the Pollution Level</b>
                        </Popup>
                </Marker>
                    )
                }
            </LeafletMap>
        </div>
        </section>
    )
}

export default MarkerCom;