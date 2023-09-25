import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {  TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import { headerStyle } from './UniversalStyles'
import { useNavigation } from '@react-navigation/native'


const AuthHeader = ({ headingText}) => {
 
const navigation = useNavigation()
    const handleRouteFunc = () => {
        navigation.goBack()
        
      }
  return (
    <TouchableWithoutFeedback
    onPress={() => {
      handleRouteFunc()
    }}
    
    >
    <View className="flex-row items-center justify-center  w-full relative">
    
        <View className="border-solid border-[2px] border-gray-200 rounded-xl
      flex-row items-center   justify-center w-[50px] h-[50px] bg-white absolute left-0 z-index-2"> 
       <TouchableOpacity>
<Ionicons name="arrow-back" size={25} color="gray" icon="arrow-left"
      style={styles.icon}
      />
      </TouchableOpacity>
     
        </View>
      
       
      <View className="flex-1  w-full justify-center items-center">
             <Text  style={styles.headingTextStyle
            
            } className={headerStyle} >
             {
              headingText ? headingText : ""
             }
            </Text>
      </View>
      </View>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    icon:{
        fontWeight: "200",
      },
      iconDiv:{
      //  display:"flex",
      // //  width:30,
      // //  height:30,
      //  alignItems:"center",
      //  justifyContent:"center",
      //  borderWidth: 0,
      // //  borderColor:"black",
      // //  borderStyle:"solid",
      // //  borderRadius:15,
      // //  backgroundColor:"gray",
      // //  opacity:0.4,
      },
      headerDiv:{
  padding:10
      },
      headingTextStyle:{
      // color:"black",
      fontSize:18,
      fontWeight:"400",
      fontFamily:"Axiforma-Medium"
      }
      
})

export default AuthHeader