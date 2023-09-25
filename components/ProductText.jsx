import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FadeCarousel, { Bearing } from "react-native-fadecarousel";
import { carouselItems } from './fadeCarousel'
import * as Animatable from 'react-native-animatable';


const ProductText = () => {

    const renderCarouselItem = carouselItems.map((item) => {
        return (
            <View 
            style={styles.carouselItemDiv} 
            key={item.id}
          
            >
               {
                 item.testArray[1].map((i) => {
                    return <View key={i.key}   >
                     <Animatable.View animation={item.testArray[0].animationType} duration={2000} key={i.key}>
                     <Animatable.Text animation={fadeIn} duration={6000} className="text-white text-2xl font-medium capitalize" >{i.text}</Animatable.Text>
                    </Animatable.View>
                   
                    </View>
                 })
               }
               <Animatable.View animation={item.comment.animationType} duration={2000}>
                     <Animatable.Text animation={fadeIn} duration={6000}  style={{
                       color:"red"
                     }} className="text-[16px] font-bolder" >{item.comment.text}</Animatable.Text>
             </Animatable.View>
             
             </View>
        );
      });

  return (
    <FadeCarousel
        loop
        entranceBearing={Bearing.Left}
        fadeAnimationDuration={2}
        autoPlay={{ enable: true, delay: 6100 }}
      >
        {[...renderCarouselItem]}
      </FadeCarousel>
  
  )
}

const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
export default ProductText

const styles = StyleSheet.create({ 
    carouselItemDiv: {
      position:"absolute",
      bottom: 220,
      left:0,
      right:0,
      justifyContent: "flex-end",
      paddingStart:18,
      rowGap: 10
    }
    
  });
  