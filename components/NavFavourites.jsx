import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const NavFavourites = () => {
const data = [
    {
        id: '1',
        icon:"home",
        location:"Home",
        destination:"Martins Street, Ikeja Lagos"
    },
    {
        id: '2',
        icon:"briefcase",
        location:"Work",
        destination:"Samuel Street, Ikeja Lagos"
    }
   
]


  return (
   <FlatList
   data={data}
   keyExtractor={(item) => item.id}
   ItemSeparatorComponent={() => <View style={{
    height:0.5
   }} className="bg-gray-200">

   </View>}
   renderItem={({item: {location, destination,icon}}) => {
  return <TouchableOpacity
  className="flex-row items-center p-5"
  >
    <Icon   
  className="mr-4 rounded-full bg-gray-300 p-3"
  name={icon}
  color={"white"} 
  type='ionicon'
  size={15}
    />
     <View>
        <Text
        style={{
            fontFamily:"Axiforma-Bold"
        }}
        className="font-semibold text-[14px]">{location}</Text>
        <Text
        style={{
            fontFamily:"Gotham-Regular"
        }}
        className="text-gray-500">{destination}</Text>
     </View>
  </TouchableOpacity>
   }}
   />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})