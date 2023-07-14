import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(51.338097);
    const [lat] = useState(35.699739);
    const [zoom] = useState(14);
    const [API_KEY] = useState('cmPbB5LhZ23T4B0Jjk7c');
    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Marker({ color: "#FF0000" })
            .setLngLat([51.338097, 35.699739])
            .addTo(map.current);
    });
    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}