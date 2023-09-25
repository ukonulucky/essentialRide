import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const data = [
    {
        id: 1,
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen:"RideScreen"
    },
    {
        id: 2,
        title: "Get a Worker",
        image: "https://tse3.mm.bing.net/th?id=OIP.qYiDe6Rd9JGPDfyjjtQxqwHaFQ&pid=Api&P=0&h=180",
        screen:"EatScreen"
    }

]

const NavOptions = () => {
    const selectedLocation = useSelector(state => state.nav.origin)
    const navigation = useNavigation()
  return (
      <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          horizontal
          renderItem={({ item }) => {
              return <TouchableOpacity
                disabled={!selectedLocation}
                  className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
                  onPress={() => {
                      navigation.navigate(item.screen)
                  }}
              >
                <View  className={`${!selectedLocation && "opacity-30"}`}>
                <Image
                      style={{
                          width: 120,
                          height: 120,
                          resizeMode:"contain"
                      }}
                      source={{
                       uri:item.image
                   }}
                    /> 
                      <Text className="mt-2 text-lg font-semibold">
                        { item.title }
                      </Text>
                      <View className="p-2 w-10 bg-black rounded-full mt-4 ">
                      <Icon
                          type='antdesign'
                          name="arrowright"
                          color="white"
                          className=""
                      />
                      </View>
                </View>
                
              </TouchableOpacity>
          }}
      />
      
  )
}

export default NavOptions

const styles = StyleSheet.create({})