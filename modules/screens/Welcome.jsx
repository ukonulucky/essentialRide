import { useCallback, useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  Image,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";

import * as SplashScreen from "expo-splash-screen";
const { width, height } = Dimensions.get("window");

import FadeCarouselScreen from "../../components/fadeCarousel";
import { loadFont } from "../../utils/fontDownload";
import { TouchableWithoutFeedback } from "react-native";
import FadeCarousel, { Bearing } from "react-native-fadecarousel";
import ProductText from "../../components/ProductText";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Welcome({ navigation }) {
  const opacity = useState(new Animated.Value(1))[0];
  const [appIsReady, setAppIsReady] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [itemToShow, setItemToShow] = useState("time");

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadFont();
        console.log("fonts loaded");
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (appIsReady) {
    setTimeout(() => {
      setAnimate(true);
    }, 6500);
    setTimeout(() => {
      fadeOut();
    }, 10);
  }

  const optionsArray = [
    {
      key: 1,
      text: "Efficient Ride",
    },
    {
      key: 2,
      text: "Fast Drive",
    },
    {
      key: 3,
      text: "Luxury Ride",
    },
  ];

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  const optionsEle = optionsArray.map((i) => {
    return (
      <Animatable.View key={i.key}>
        <Animatable.Text
          animation={fadeIn}
          duration={200}
          style={[
            {
              color: "#222",
              fontFamily: "Gotham-Regular",
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 24,
              textAlign: "center",
            },
          ]}
        >
          {i.text}
        </Animatable.Text>
      </Animatable.View>
    );
  });

  function fadeOut() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {!animate ? (
        <View style={styles.Welcome} className="bg-gray-200">
          <View className="w-5/6 h-[354.42px] relative  rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px]">
            <Animated.View
              style={{
                opacity,
              }}
              className="mx-auto w-full h-full rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px] flex-col justify-center items-center inline-flex opacity-1 bg-white  space-x-0 absolute top-0 left-0"
            ></Animated.View>
            <View className="absolute top-0 left-0 w-full h-full">
              <View className="h-[340] relative flex flex-row items-center">
                {/* <Image
                  source={require("../../assets/logo.jpg")}
                  style={{ width: 280, height: 280 }}
                  className="mx-auto mb-10"
                /> */}

                <Text
                  style={{ fontFamily: "Axiforma-SemiBold" }}
                  className="text-[#2B2B2B] font-bolder text-[55px] mt-0   absolute  w-full text-center"
                >
                  Essential Ride
                </Text>
              </View>
            </View>

            <View
              style={{ fontFamily: "Axiforma-SemiBold" }}
              className="absolute bottom-2 w-full"
            >
              <FadeCarousel
                entranceBearing={Bearing.Left}
                fadeAnimationDuration={2}
                autoPlay={{ enable: true, delay: 2000 }}
              >
                {[...optionsEle]}
              </FadeCarousel>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.pic}>
          <FadeCarouselScreen />
          <ProductText />
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.content}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("auth/signIn")}
              >
                <Text style={styles.button1}>Sign In</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("auth/signUp")}
              >
                <Text style={styles.button2}>Sign Up</Text>
              </TouchableWithoutFeedback>
              {/* shop/home */}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  pic: {
    flex: 1,
    position: "relative",
  },
  Welcome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: 150,
    height: 50,
    marginTop: 50,
    marginLeft: 20,
  },
  button1: {
    color: "white",
    width: "100%",
    textAlign: "center",
    paddingVertical: 13,
    backgroundColor: "#4425F5",
    borderRadius: 10,
    borderWidth: 0,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    letterSpacing: 2,
    height: 50,
  },
  button2: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "white",
    letterSpacing: 2,
    width: "100%",
    textAlign: "center",
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "whitesmoke",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 13,
  },
  content: {
    flexDirection: "column",
    rowGap: 20,
    marginHorizontal: 20,
    marginBottom: 50,
  },
});
