import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

// This function will be responsible for managing the actual auth-context state and which will be used as a wrapper around our app components that wanna interact with the context.
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  // This function will triggered whenever a user did login or signup successfully
  // Here we will expect that token
  function authenticate(token) {
    setAuthToken(token);
    // This will store the new item in the storage
    // "token" is used to retrieve and delete the item
    // The second argument that pass to setItem(), is the item you want to store and that should always be a string
    // So if you have a non-string value, like number - you should converted to a string first
    // and Object could be converted to JSON, which is a string.
    // Here "token" is already a sting so you can store directly
    AsyncStorage.setItem("token", token);
  }

  //   Here we simply clear the token
  function logout() {
    setAuthToken(null);
    // It will remove the token from the device
    AsyncStorage.removeItem("token");
  }

  //   This "value" will be passed to all the context users.
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
