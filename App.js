import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";

import AuthStack from "./src/navigations/AuthenticateScreen";
import AuthenticatedStack from "./src/navigations/UserScreen";

import AuthContextProvider, { AuthContext } from "./src/store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      // Key should be same as previosly used in setItem()
      // getItem will return a promise so wrap it inside async
      const storedToken = await AsyncStorage.getItem("token");

      //   So we only autolog in the user if we did find a storedToken here
      if (storedToken) {
        // setAuthToken(storedToken);
        authCtx.authenticate(storedToken);
      }
      // No matter we are trying to get the token or not, either way we are done trying to login
      setIsTryingLogin(false);
    }
    fetchToken();
  });

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
