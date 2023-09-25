import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import React from "react";
import Map from "../../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DestinationCard from "./DestinationCard";
import RideOpition from "./RideOpition";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function RideScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation()
  return (
    <View>
      <View className={"h-1/2 relative"}>

   <TouchableOpacity onPress={() => {
    navigation.goBack()
   }} className="bg-gray-200 absolute top-8 left-8 z-50 p-3 rounded-full shadow-lg">
    <Icon
    name="menu"
    />
   </TouchableOpacity>
       
        <Map />
      </View>
      <View className={"h-1/2"}>
        <Stack.Navigator>
          <Stack.Screen
            name="DestinationCard"
            component={DestinationCard}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="RideOption"
            component={RideOpition}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
