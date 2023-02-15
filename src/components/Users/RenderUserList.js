import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/styles";

const RenderUserList = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  const navigation = useNavigation();

  const toDetailsPage = () => {
    navigation.navigate("UserDetails", {
      id,
      name,
      email,
      address,
      phone,
      website,
      company,
    });
  };
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.buttonPressed}
      onPress={toDetailsPage}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.nameStyle}>{name}</Text>
        </View>
        <View>
          <Text style={styles.emailStyle}>{email}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.accent500,
    margin: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  nameStyle: {
    fontSize: 24,
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#1b1a06",
  },
  emailStyle: {
    fontSize: 20,
    color: "#1b1a06",
  },
});

export default RenderUserList;
