import { Marker } from 'mapbox-gl';
const buildMarker = require('./marker');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiamxlZTkwOTAiLCJhIjoiY2prazU3d29lMW16MDNwbzN2OTFrZzh2aiJ9.-L3Kfm74hWkXkorTApUvOw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = buildMarker('house', [-74.009151, 40.705086]);
marker.addTo(map);
