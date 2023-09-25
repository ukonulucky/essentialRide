import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { formatCurrency } from '../../utils/formatCurency'


const RideOpition = () => {
  const { width, height } = Dimensions.get('window');
  
    const state = useSelector(state => state.nav)
    console.log(state)
    const navigation = useNavigation() 
    const [selected, setSelected] = useState(null)

const data = [
  {
    id:"1",
    title:"Essential-VIP",
    multiplier: 1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"2",
    title:"Essential-Luxury",
    multiplier: 1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"3",
    title:"Essential-VVIP",
    multiplier: 1.75,
    image:"https://links.papareact.com/7pf"
  }
]
 const surgeChargeRate = 120;
  return (
   <SafeAreaView className="h-full w-full">
   <View className="relative h-full w-full p-0">
   <View className="h-[60px] items-center justify-center flex-row relative">
      <TouchableOpacity onPress={() => {
        navigation.goBack()
      }} className="absolute left-[20px]">
         <Icon 
         name="chevron-left"
         type='fontawasome'
         size={40}
         />
      </TouchableOpacity>
      <Text className="text-center text-xl">Select a Ride - {state.travelTime?.distance.text}</Text>
    </View>
    <View className=""
    style={{
      height: height/2 - 128
    }}
    >
    <FlatList
    showsVerticalScrollIndicator={false} 
    data ={data}
    keyExtractor={(item) => item.id}
    renderItem={({item: {id, title, image, multiplier}, item}) => {
      const rideCost =  formatCurrency(state.travelTime?.duration.value, surgeChargeRate, multiplier)
  return <TouchableOpacity className="flex-row items-center justify-between px-2"
  style={{
    backgroundColor: id === selected?.id ? "#e2e8f0": "white"
  }}
  onPress={() => {
    setSelected(item)
  }}>
    <Image 
    style={{
      width:100,
      height:100,
      resizeMode:"contain"
    }}
    source={{
      uri:image    }}
    />
    <View className="-ml-6" >
      <Text className="text-xl font-semibold">{title}</Text>
      <Text>{state.travelTime?.duration.text}</Text>
    </View>
    <Text className="text-xl">{
     rideCost
    }</Text>

  </TouchableOpacity>
    }}
    />
      </View>
    <View className="absolute bottom-2 w-full px-3 flex items-center">
      <TouchableOpacity  
      disabled={!selected}
      style={{
        backgroundColor: !selected ? "#e2e8f0": "black"
      }}
      className="bg-black py-3 h-[60px] w-full">
        <Text className="text-center text-white text-xl"> Choose {selected?.title}</Text>
      </TouchableOpacity>
    </View>
   </View>
   </SafeAreaView>
  ) 
}

export default RideOpition

const styles = StyleSheet.create({})