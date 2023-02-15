import axios from "axios";
import { useContext, useEffect, useState } from "react";

import UserList from "../../components/Users/UserList";

import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://react-native-course-e30b0-default-rtdb.firebaseio.com/message.json?auth=" +
          token
      )
      .then((response) => setFetchedMessage(response.data));
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <UserList />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
