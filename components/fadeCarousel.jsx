import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import Carousel from 'react-native-snap-carousel';


export const carouselItems = [
  {
    image: require("../assets/landingSlider/slider5.png"),
   testArray:[{
  animtionType:""
   },  [
    {
    text:"Convenient Ride:",
    key:1
   }
   ,{
    text:"Your  Luxury Ride",
    key:2
   },{
    text:"just A Click Away",
    key: 3
   }
  ]],
    comment: {
      text: "With Essential",
      animationType:"slideInUp"
    },
    id:1
  },
  {
    image: require("../assets/landingSlider/slider2.png"),
    testArray:[{
 animationType:""
    },  [
      {
        text:"Safety Plus.....",
        key:4
       },{
        text:"Your Best ride app",
        key:5
       },{
        text:"For Safe ride,",
        key: 6
       },
       {
        text:"Luxury and More",
        key: 7
       }
    
    ]],
    comment: {
      text: "With Essential ride",
      animationType:"slideInDown"
    },
    id:2
  },
  {
    image: require("../assets/landingSlider/slider3.png"),
    testArray:[{
      animationType:""
    },
    [
      {
        text:"Good Time Management",
        key:1
       },{
        text:"....And We'll Bring it all",
        key:2
       },{
        text:"to You Too, In Record",
        key: 3
       },
       {
        text:"Time.",
        key: 4
       }
    ]],
    comment: {
      text: "With Essential ride",
      animationType:""
    },
    id:3
  },
  {
    image: require("../assets/landingSlider/slider4.png"),
    testArray:[
      {
        animationType:"slideInUp"
      },
      [
        {
          text:"A Pocket Friendly",
          key:7
         },{
          text:"Service...That Saves You",
          key:8
         },{
          text:"The Seconds That",
          key: 9
         },
         {
          text:"Matter.",
          key: 10
         }
      ]

    ],
    comment: {
      text:"With Essential ride",
      animationType:""
    },
    id:4
  },
  
];

const FadeCarouselScreen = () => {


  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };


  const renderCarouselItem = ({item}) => {
    return (
      <View key = {item.id} style={{
        flex: 1,
        width: deviceWidth,
        height: deviceHeight
      }}
      
      >
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={{
            width: deviceWidth,
            height: deviceHeight,
             
          }}
         
        >
           <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0)','rgba(0,0,0,0.4)', "rgba(0,0,0,0.8)"]}
        style={styles.overlay}
      />
       
        </ImageBackground>
      </View>
    );
  };

  const carouselRef = useRef(null);

  const handleSnapToItem = (index) => {
    // Check if the carousel reached the last item
    if (index === carouselItems .length - 1) {
      setTimeout(() => {
        carouselRef.current?.snapToItem(0, false);
      }, 250);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "gray",
      }}
      
    >
       <Carousel
      data={[...carouselItems, ...carouselItems]}
      renderItem={renderCarouselItem}
      sliderWidth={deviceWidth}
      itemWidth={deviceWidth}
      scrollDirection={'horizontal'}
       loop={true}
      autoplay={true}
      autoplayInterval={6000}
      onSnapToItem={handleSnapToItem}
      autoplayDelay={0}

    />
      
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItemContainer: {
    flex: 1,
  },
  carouselItemDiv: {
    position:"absolute",
    bottom: 220,
    left:0,
    right:0,
    justifyContent: "flex-end",
    paddingStart:18,
    rowGap: 10
  },
  carouselText: {
    color: "white",
    fontSize: 20,
    backgroundColor: "red",

  },

  container: {
    flex: 1,
    position: "relative"
  },
  sliderWrapper: {
    flexDirection: "column",
    rowGap: 20,
    marginHorizontal: 40,
    marginBottom: 50,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
     position: "absolute",
     bottom:0,
     top:200,
    border:"2px solid blue",
  },
  heading:{
    color: "white",
    fontFamily:"Poppins-Medium",
    fontWeight:300,
    letterSpacing:2,
    lineHeight:36,
    fontSize:30

  }
  ,
  comment: {
    color: "#E32654",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Poppins-Black",
  },
});

export default FadeCarouselScreen;
