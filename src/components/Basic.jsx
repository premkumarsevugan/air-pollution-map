import React from 'react'
import { useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import osm from '../osm-provider.js'


const Basic = () => {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 })
    const ZOOM_LEVEL = 9;
    const mapref = useRef();

    return (
        <div>
            <h1>Basic</h1>
            <LeafletMap
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapref}
            >
                <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}></TileLayer>
            </LeafletMap>
        </div>
    )
}

export default Basic