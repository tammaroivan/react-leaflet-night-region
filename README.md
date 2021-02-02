# react-leaflet-night-region

> Add night region to react leaflet map

> Calculation algorithms based on [Leaflet.Terminator](https://github.com/joergdietrich/Leaflet.Terminator)

[![NPM](https://img.shields.io/npm/v/react-leaflet-night-region.svg)](https://www.npmjs.com/package/react-leaflet-night-region) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-leaflet-night-region
```

## Usage

```jsx
import React, { Component } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { NightRegion } from 'react-leaflet-night-region'

const App = () => {
  render() {
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
}
```

## Image
![Example](https://i.imgur.com/slcDhpV.png)

## Options

You can use the same options as in a [Leaflet Polygon](https://leafletjs.com/reference-1.7.1.html#polygon) 

## To-Dos
- [ ] Live update
- [ ] Multiple layers with different night intensity

## License

MIT © [tammaroivan](https://github.com/tammaroivan)
