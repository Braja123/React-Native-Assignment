import { View, Text, StyleSheet, Button } from "react-native";
import { Colors } from "../../constants/styles";
import IconButton from "../../components/ui/IconButton";
import call from "react-native-phone-call";

const UserDetails = ({ route }) => {
  const { name, email, address, phone, website, company } = route.params;

  const callUser = () => {
    const args = {
      number: phone, // String value with the number to call
      prompt: true, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.compName}>{company.name}</Text>

        <View style={styles.textContainer}>
          <IconButton icon="location" color={Colors.primary700} size={24} />
          <Text style={styles.text}>{address.city}</Text>
        </View>

        <View style={styles.textContainer}>
          <IconButton
            icon="call"
            color={Colors.primary700}
            size={24}
            onPress={callUser}
          />
          <Text style={styles.text}>{phone}</Text>
        </View>

        <View style={styles.textContainer}>
          <IconButton icon="mail" color={Colors.primary700} size={24} />
          <Text style={styles.text}>{email}</Text>
        </View>

        <View style={styles.textContainer}>
          <IconButton icon="aperture" color={Colors.primary700} size={24} />
          <Text style={styles.text}>{website}</Text>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.address}>Address</Text>

        <View style={styles.addressRow}>
          <Text style={styles.text}>{address.street}, </Text>
          <Text style={styles.text}>{address.suite}</Text>
        </View>

        <View style={styles.addressRow}>
          <Text style={styles.text}>{address.city}, </Text>
          <Text style={styles.text}>{address.zipcode}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  nameStyle: {
    fontSize: 24,
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#1b1a06",
  },
  compName: {
    fontSize: 16,
    paddingBottom: 10,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    color: "black",
    paddingTop: 8,
  },
  address: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 8,
  },
  addressRow: {
    flexDirection: "row",
  },
  firstContainer: {
    borderBottomColor: Colors.primary200,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  secondContainer: {
    paddingTop: 5,
  },
});

export default UserDetails;
