import React, { useState } from "react";
import { Button, Text, View } from "react-native";

import {Map, MapView, InfoWindow, Marker, GoogleApiWrapper, GoogleMapReact} from 'google-maps-react';



 
export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 

<MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />


        Geolocation.getCurrentPosition();
        
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
 export default GoogleApiWrapper({
    
      //hide
    apiKey: 'AIzaSyCJiRkvKSm7cBgMNkfJWJfPfTOMnQl8kj0'
  })(MapContainer)