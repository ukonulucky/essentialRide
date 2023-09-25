import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import MapView, {Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_API_KEY } from "@env";
import axios from 'axios';
import {setTravelTime} from "../redux/navReducer"

const  Map = () => {
  const origin = useSelector(state => state.nav.origin)
  const dispatch =  useDispatch()
  const destination = useSelector(state => state.nav.destination)
  console.log("destination data",destination, "origin data",origin)
  const [myRegion, setMyRegion] = useState({
        latitude: origin?.location.lat,
        longitude:origin?.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        // latitudeDelta: 0.005,
        // longitudeDelta: 0.005
      }) 

      const myMap = useRef(null)
      useEffect(() => {
        if(!origin || !destination) return;

        // zoom to fit between markers
         myMap.current.fitToSuppliedMarkers(["origin, destination"],{
          edgePadding: {
            top: 50,
            right:50,
            bottom:50,
            left: 50
          }

         })
      }, [destination, origin])
      
      useEffect(() => {
        if(!destination || !origin) return;
      async function getDisance() {
        try {
          const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_API_KEY}
          `) 
          console.log("this is the distance returned",response.data.rows[0].elements)
          
          if(response.status === 200){
            console.log("dispach ran")
            dispatch(setTravelTime(response.data.rows[0].elements[0]))
          }
         } catch (error) {
          console.log(error.message)
         }
      }
      getDisance()
      },[destination,origin,GOOGLE_MAP_API_KEY])

    return (
      <MapView
      ref={myMap}
      showsUserLocation={true}
     mapType="mutedStandard"
    region={myRegion}
    style={{
      flex:1
    }} >
      {
    origin && destination &&  <MapViewDirections
    origin={origin.description}
    destination={destination.description}
    apikey={GOOGLE_MAP_API_KEY}
    strokeWidth={3}
    strokeColor="black"
  />
      }
      {
      origin &&  <Marker 
        coordinate={
          {
            latitude: origin.location.lat,
            longitude:origin.location.lng
          }
        } 
        title="Origin"
        identifier="origin"
        description={origin.description}
        
        />
      }

{
      destination &&  <Marker 
        coordinate={
          {
            latitude: destination.location.lat,
            longitude:destination.location.lng
          }
        } 
        title="Destination"
        identifier="destination"
        description={destination.description}
        
        />
      }
      </MapView>
    )
  
    
}

export default Map