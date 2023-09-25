import { StyleSheet, Text, Safe, SafeAreaView, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_API_KEY } from "@env";
import { setDestination } from "../../redux/navReducer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import NavFavourites from "../../components/NavFavourites";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const DestinationCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="bg-white flex-1">
      
      <Text className="text-center py-5 text-xl">Hello, Sam</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          fetchDetails={true}
          styles={inputStyles}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );
            navigation.navigate("RideOption");
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
        </View>
        <NavFavourites />
      </View>
     <View className="flex-row justify-evenly py-2 mt-auto border-t border-gray-100 ">
     {/* <TouchableOpacity
     onPress={() => {
      navigation.navigate("RideScreen")
     }}
     className="flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between">
     <Icon 
      name="car"
      type="font-awesome"
      color="white"
      size={16} 
      />
<Text className="text-center text-white">
  Rides
</Text>
     </TouchableOpacity>
     <TouchableOpacity
     className="flex flex-row  w-24 px-4 py-3 rounded-full justify-between">
     <Icon 
      name="fast-food-outline"
      type="ionicon"
      color="black"
      size={16}
      />
<Text className="text-center">
  Eats
</Text>
     </TouchableOpacity> */}
     </View>
    </SafeAreaView>
  );
};

export default DestinationCard;

const inputStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
