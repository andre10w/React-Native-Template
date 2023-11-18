import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

function ThirdTemplate() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.body}>
      <View style={styles.profile}>
        <Text style={styles.profileContent}>Welcome</Text>
      </View>
      <View style={styles.registerPanel}>
        <View style={styles.registerBody}>
          <Text style={styles.registerTitle}>Register with</Text>
          <View style={styles.community}>
            <View style={styles.face}>
              <AntDesign name="facebook-square" size={24} color="blue" />
            </View>
            <View style={styles.apple}>
              <AntDesign name="apple1" size={24} color="black" />
            </View>
            <View style={styles.google}>
              <AntDesign name="google" size={24} color="black" />
            </View>
          </View>
          <View>
            <Text>Name</Text>
            <TextInput placeholder="Name" style={styles.input} />
            <Text>Email</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <Text>Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="Enter a password"
              style={styles.input}
            />
          </View>
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.paragraph}>
              I agree with the Terms and Conditions
            </Text>
          </View>
          <View style={styles.buttonPanel}>
            <TouchableOpacity style={styles.signup}>
              <Text style={{ textAlign: "center", marginTop: 13 }}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signin}>
              <Text style={{ textAlign: "center", marginTop: 13, color: "#ED198F" }}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  profile: {
    height: 300,
    borderRadius: 10,
    backgroundColor: "#ED198F",
    flexDirection: "row",
    justifyContent: "center",
    padding: 50,
    display: "inline",
    marginBottom: 385,
  },
  profileContent: {
    fontSize: 30,
    color: "#fff",
  },
  registerPanel: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    alignSelf: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  registerBody: {
    alignItems: "center",
    width: "100%",
    height: 540,
    marginTop: 120,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  registerTitle: {
    marginTop: 10,
    fontSize: 20,
  },
  community: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  face: {
    borderWidth: 2,
    padding: 15,
    marginRight: 40,
    borderRadius: 10,
    borderColor: "blue",
  },
  apple: {
    borderWidth: 2,
    padding: 15,
    marginRight: 40,
    borderRadius: 10,
    borderColor: "blue",
  },
  google: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    borderColor: "blue",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkbox: {
    borderRadius: 5,
    marginRight: 25,
  },
  paragraph: {
    fontSize: 15,
  },
  buttonPanel: {
    marginTop: 15,
  },
  signup: {
    borderWidth: 0,
    width: 300,
    height: 50,
    margin: "auto",
    backgroundColor: "rgba(255, 6, 137, 09)",
    borderRadius: 10
  },
  signin: {
    marginTop: 15,
    borderWidth: 2,
    borderColor: "#ED198F",
    width: 300,
    height: 50,
    borderRadius: 10
  },
});
export default React.memo(ThirdTemplate);
