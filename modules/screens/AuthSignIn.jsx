import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import AuthHeader from "../../components/authHeader";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaSigIn } from "../../utils/YubValidation";
import { useForm, Controller } from "react-hook-form";

const AuthSignIn = ({ navigation }) => {
  const formOptions = { resolver: yupResolver(validationSchemaSigIn) };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    navigation.navigate("HomeScreen");
  };

  const [checked, setChecked] = useState(false);

  const [hidePassWord, setHidePassWord] = useState(true);

  // used to hide the keyboard popup when user clicks on the screen
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      <SafeAreaView className="bg-gray-100 h-screen relative">
        <StatusBar hidden={false} />
        <View className="pl-4 w-full mt-8">
          <AuthHeader
            navigation={navigation}
            url={"auth/home"}
            headingText={" "}
          />
        </View>

        <View className="flex flex-col gap-y-4 items-center justify-center mt-2">
          <Text
            style={{
              fontFamily: "Axiforma-Black",
            }}
            className="text-[#2B2B2B] font-[600] text-[34px] leading-[52.19px]"
          >
            Hello Again!
          </Text>
          <View className="flex items-center justify-center gap-y-1 mt-2">
            <Text
              style={{
                fontFamily: "Gotham Pro",
              }}
              className="flex items-center justify-center gap-y-1 mt-2"
            >
              Fill your details or continue with
            </Text>
            <Text
              style={{
                fontFamily: "Gotham Pro",
              }}
              className="font-[400] text-gray-400 text-[16px] leading-[24px]"
            >
              {" "}
              social media
            </Text>
          </View>
        </View>
        <View className="items-center space-y-4 mt-2">
          <View className="flex-col items-start">
            <View
              className="flex 
           flex-row 
           w-[327px]
           bg-white
           py-[10px]
           px-2
           rounded-[20px]
           items-center"
            >
              <Image
                source={require("../../assets/envelope.png")}
                className="w-[30] h-[30] mx-[10px]"
              />

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={(data) => {
                      onChange(data.trim());
                    }}
                    value={value}
                    style={{
                      fontFamily: "Gotham Pro",
                    }}
                    className="flex-1 pl-2 text-gray-800 font-bold 
                    text-[16px]"
                  />
                )}
                name="email"
              />
            </View>
            <View className="px-6">
              {errors.email && (
                <Text
                  className="text-red-500
                    font-bold "
                >
                  {errors.email.message}
                </Text>
              )}
            </View>
          </View>
          <View
            className="flex 
            flex-row 
            w-[327px]
            bg-white
            py-[10px]
            px-2
            rounded-[20px]
            items-center"
          >
            <Image
              source={require("../../assets/lock.png")}
              className="w-[30] h-[30] mx-[10px]"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="***************"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{
                    fontFamily: "Gotham Pro",
                  }}
                  className="flex-1 pl-2 text-gray-800 font-bold 
                    text-[16px]"
                  inputMode="text"
                  secureTextEntry={hidePassWord ? true : false}
                />
              )}
              name="password"
            />

            {hidePassWord ? (
              <TouchableWithoutFeedback
                onPress={() => setHidePassWord(!hidePassWord)}
              >
                <Image
                  source={require("../../assets/eye-slash.png")}
                  className="w-[30] h-[30] mx-[10px] 
                placeholder-color-black"
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => setHidePassWord(!hidePassWord)}
                className="mx-[10px]"
              >
                <AntDesign name="eyeo" size={30} color="black" />
              </TouchableWithoutFeedback>
            )}
          </View>

          <View className="w-4/5 px-6">
            {errors.password && (
              <Text
                style={{
                  fontFamily: "Gotham Pro",
                }}
                className="text-red-500
                    font-bold"
              >
                {errors.password.message}
              </Text>
            )}
          </View>
          <View
            className="flex flex-row items-end mb-4 mx-4   w-4/5 
            justify-end item-center"
          >
            <TouchableWithoutFeedback
              onPress={() => {
                // navigation.navigate("auth/ForgotPassword");
              }}
              className="flex flex-row items-end mb-4 w-full"
            >
              <Text
                style={{
                  fontFamily: "Gotham Pro",
                }}
                className="text-gray-700
      text-[14px] text-right"
              >
                Forgot password ?
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View className="mx-auto w-[327px]">
          <TouchableWithoutFeedback onPress={handleSubmit(onSubmit)}>
            <Text
              style={{
                fontFamily: "Gotham Pro",
              }}
              className="flex w-[327px] mx-auto h-12  items-center justify-center flex-row bg-[#4425F5] rounded-xl border-0 text-white text-[16px]  text-center text-sm font-normal py-3"
            >
              Sign In
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View
          className="flex  justify-center  mt-2  flex-row
          rounded-lg py-4 absolute bottom-0 items-center w-full"
        >
          <Text
            style={{
              fontFamily: "Gotham Pro",
            }}
            className="text-gray-700 font-bold"
          >
            Don't have an account?
          </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("auth/signUp")}
          >
            <Text
              style={{
                fontFamily: "Gotham Pro",
              }}
              className="text-blue-700 font-bold ml-2"
            >
              Register
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});

export default AuthSignIn;
