import WelcomeScreen from "../screens/userScreens/WelcomeScreen";
import UserDetails from "../screens/userScreens/UserDetails";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/styles";
import { useContext } from "react";
import { Provider } from "react-redux";
import store from "../store/redux/store";
import { AuthContext } from "../store/auth-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.primary100 },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "User Lists",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="exit"
                color={tintColor}
                size={24}
                onPress={authCtx.logout}
              />
            ),
          }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{ title: "User Details" }}
        />
      </Stack.Navigator>
    </Provider>
  );
}

export default AuthenticatedStack;
