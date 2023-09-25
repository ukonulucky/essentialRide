import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

import NavOptions from "../../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin } from "../../redux/navReducer";
import NavFavourites from "../../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5 border-solid border-black">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          fetchDetails={true}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLenght={2}
          returnKeyType={"Search"}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAP_API_KEY,
            language: "en",
          }}
          onFail={() => {
            alert("Network failure");
          }}
          onNotFound={() => {
            alert("Place not found");
          }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
