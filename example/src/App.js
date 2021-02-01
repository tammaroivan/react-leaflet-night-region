import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { NightRegion } from 'react-leaflet-night-region'
import './App.css'
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-night-region/dist/index.css'

const App = () => {
  return (
    <MapContainer
      center={{ lat: '20.4058379', lng: '21.7496284' }}
      zoom={3}
      minZoom={3}
      worldCopyJump={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <NightRegion
        fillColor='#00345c'
        color='#001a2e'
      />
    </MapContainer>
  )
}

export default App
