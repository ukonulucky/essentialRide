import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/authHeader";

import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../components/Checkbox";
import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaSignUp } from "../../utils/YubValidation";
import { useForm, Controller } from "react-hook-form";

const AuthSignUp = ({ navigation }) => {
  const [isChecked, setChecked] = useState(true);

  const disPatch = useDispatch();

  const formOptions = { resolver: yupResolver(validationSchemaSignUp) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("HomeScreen")
  };

  const [hidePassWord, setHidePassWord] = useState(true);
  const handleChecked = () => {
    setChecked(!isChecked);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const submitHandler = async (details) => {
    try {
      console.log("clicked");
      // const res = await axios.post(
      //   "https://api.hospyta.com/api/v1/auth/register",
      //   {
      //     ...details,
      //   }
      // );
      // if (res.status == 201) {
      //   disPatch(registerUser(details));
      //   console.log(res.data);
      //   navigation.navigate("auth/TOF");
      // }
      navigation.navigate("HomeScreen")
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      <SafeAreaView className="bg-gray-100">
        <StatusBar hidden={false} />
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 50}
        >
          <ScrollView>
            <View className="ml-[30px] w-full mt-4">
              <AuthHeader headingText={" "} />
            </View>
            <View className="flex flex-col gap-y-2 items-center justify-center mt-2">
              <Text className="text-[#2B2B2B] font-[600] text-[34px] leading-[52.19px]">
                Register Account
              </Text>
              <View className="flex items-center justify-center gap-y-1 mt-2">
                <Text className="font-[400] text-gray-400 text-[16px] leading-[24px]">
                  Fill your details or continue with
                </Text>
                <Text className="font-[400] text-gray-400 text-[16px] leading-[24px]">
                  {" "}
                  social media
                </Text>
              </View>
            </View>

            <View className="items-center gap-y-4 mt-2">
              <View
                className="flex 
           flex-row 
           w-[327px]
           bg-white
           py-[10px]
           px-2
           rounded-[20px]
           items-center
           "
              >
                <Image
                  source={require("../../assets/Profile.png")}
                  className="w-[30] h-[30] mx-[10px]"
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="First name"
                      inputMode="text"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="flex-1  min-w-[200px]  pl-2 text-black font-bold"
                      style={{
                        fontFamily: "Gotham Pro",
                      }}
                    />
                  )}
                  name="firstName"
                />
              </View>
              <View className="w-[327px]">
                {errors.firstName && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.firstName.message}
                  </Text>
                )}
              </View>
              <View
                className="flex 
          flex-row 
          w-[327px] 
          bg-white
          py-[10px]
          px-2
          rounded-[20px]
          items-center
            "
              >
                <Image
                  source={require("../../assets/Profile.png")}
                  className="w-[30] h-[30] mx-[10px]"
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Last name"
                      inputMode="text"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="flex-1 pl-2  text-black font-bold"
                      style={{
                        fontFamily: "Gotham Pro",
                      }}
                    />
                  )}
                  name="lastName"
                />
              </View>
              <View className="w-[327px]">
                {errors.lastName && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.lastName.message}
                  </Text>
                )}
              </View>
              <View
                className="flex 
          flex-row 
          w-[327px]
          bg-white
          py-[10px]
          px-2
          rounded-[20px]
          items-center
          "
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
                      placeholder="email"
                      inputMode="email"
                      onBlur={onBlur}
                      onChangeText={(data) => onChange(data.trim())}
                      value={value}
                      keyboardType="email-address"
                      className="flex-1 pl-2 text-gray-800 font-bold 
                    text-[16px] "
                      style={{
                        fontFamily: "Gotham Pro",
                      }}
                    />
                  )}
                  name="email"
                />
              </View>
              <View className="w-[327px]">
                {errors.email && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.email.message}
                  </Text>
                )}
              </View>
              <View
                className="flex 
      flex-row 
      w-[327px]
      bg-white
      py-[10px]
      px-2
      rounded-[20px]
      items-center
      "
              >
                <Image
                  source={require("../../assets/Profile.png")}
                  className="w-[30] h-[30] mx-[10px]"
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Password"
                      inputMode="text"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="visible-password"
                      secureTextEntry={hidePassWord ? true : false}
                      className="flex-1 pl-2 text-gray-800 font-bold 
                 text-[16px] "
                      style={{
                        fontFamily: "Gotham Pro",
                      }}
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
            placeholder-color-black
            "
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
              <View className="w-[327px]">
                {errors.password && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.password.message}
                  </Text>
                )}
              </View>
            </View>

            <View className="flex flex-row gap-x-4 items-center mt-2 w-[327px] mb-4 mx-auto">
              <CheckBox isChecked={isChecked} setChecked={handleChecked} />

              <Text
                className="text-gray-500
      text-[14px]"
              >
                I accept all the Terms & Conditions
              </Text>
            </View>

            <View className="mx-4">
              <TouchableWithoutFeedback
                disabled={isChecked ? false : true}
                onPress={handleSubmit(onSubmit)}
              >
                <Text className="flex w-[327px] mx-auto h-12  items-center justify-center flex-row bg-[#4425F5] rounded-xl border-0 text-white text-[16px]  text-center text-sm font-normal py-3">
                  Register
                </Text>
              </TouchableWithoutFeedback>
            </View>

            <View
              className="flex items-center justify-center gap-x-4 mt-2  flex-row bg-white
      rounded-lg py-2 h-12 w-[327px] mx-auto"
            >
              <Text className="text-gray-700 font-bold ">
                Already have an account?
              </Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("auth/signIn")}
              >
                <Text className="text-blue-700 font-bold ml-2">Sign In</Text>
              </TouchableWithoutFeedback>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});

export default AuthSignUp;
