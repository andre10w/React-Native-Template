import { StatusBar } from "expo-status-bar";
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
import Constants from "expo-constants";
import FirstTemplate from "./FirstTemplate";
import SecondTemplate from "./SecondTemplate";
import ThirdTemplate from "./ThirdTemplate";

export default function App() {
  const [template, setTemplate] = useState(1);

  const renderTemplate = () => {
    switch (template) {
      case 1:
        return <FirstTemplate />;
      case 2:
        return <SecondTemplate />;
      case 3:
        return <ThirdTemplate />;
    }
  };

  return (
    // https://reactnative.dev/docs/view
    <SafeAreaView style={styles.container}>
      {renderTemplate()}
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.box} onPress={() => setTemplate(1)}>
          <Text style={styles.text}>Template1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => setTemplate(2)}>
          <Text style={styles.text}>Template2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => setTemplate(3)}>
          <Text style={styles.text}>Template3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236",
    paddingTop: Constants.statusBarHeight,
  },
  box: {
    backgroundColor: "#6984F3",
    width: 100,
    height: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
});
