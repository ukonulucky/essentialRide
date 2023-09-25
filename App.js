import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import store from "./redux/store";
import { Provider } from "react-redux";
import HomeScreen from "./modules/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EatScreen from "./modules/screens/EatScreen";
import RideScreen from "./modules/screens/RideScreen";
import Welcome from "./modules/screens/Welcome";
import AuthSignIn from "./modules/screens/AuthSignIn";
import AuthSignUp from './modules/screens/AuthSignUp';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{
              flex: 1,
            }}
            keyboardVerticalOffset={Platform.OS ==="ios" ? -64 : 0}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="auth/signIn"
                component={AuthSignIn}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
            name='auth/signUp'
            component={AuthSignUp}
            options={{
              headerShown: false
            } }
          />
              <Stack.Screen
                component={RideScreen}
                name="RideScreen"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                component={EatScreen}
                name="EatScreen"
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
