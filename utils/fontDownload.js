import * as Font from "expo-font"

export const loadFont = async () => {
   await Font.loadAsync({
      "Poppins-SemiBold" : require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
      "Poppins-Regular" : require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Black" : require("../assets/fonts/poppins/Poppins-Black.ttf"),
    "Poppins-Light" : require("../assets/fonts/poppins/Poppins-Light.ttf"),
    "Poppins-Medium" : require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Axiforma-Black" : require("../assets/fonts/axiforma/Axiforma-Black.ttf"),
    "Axiforma-Medium" : require("../assets/fonts/axiforma/Axiforma-Medium.ttf"),
    "Axiforma-Light" : require("../assets/fonts/axiforma/Axiforma-Light.ttf"),
    "Axiforma-SemiBold" : require("../assets/fonts/axiforma/Axiforma-SemiBold.ttf"),
    "Axiforma-Bold" : require("../assets/fonts/axiforma/Axiforma-Bold.ttf"),
    "Axiforma-Regular" : require("../assets/fonts/axiforma/Axiforma-Regular.ttf"),
    "Gotham-Regular" : require("../assets/fonts/gotam/GothamPro.ttf"),
    "Gotham Pro" : require("../assets/fonts/gotam/GothamPro-Medium.ttf"),
    "Gotham-Light" : require("../assets/fonts/gotam/GothamPro-Light.ttf"),
    "Gotham-Bold" : require("../assets/fonts/gotam/GothamPro-Bold.ttf"),
    "Gotham-Medium" : require("../assets/fonts/gotam/GothamPro-Medium.ttf")
   })
}


