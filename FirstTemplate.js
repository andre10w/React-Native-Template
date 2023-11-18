import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import Balance from "./components/Balance";
import Menu from "./components/Menu";
import Date from "./components/Date";
import Cash from "./components/Cash";

function FirstTemplate() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi Emma!</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.avatar}
            source={require("./assets/profile.jpg")}
          ></Image>
          <Image
            style={styles.avatar}
            source={require("./assets/avatar.jpg")}
          ></Image>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Balance />
        </View>
        <View style={styles.sectionMenu}>
          <Menu />
        </View>
        <View style={styles.sectionDate}>
          <Date />
        </View>
        <Text style={styles.cashText}>Cash & Checking</Text>
        <View style={styles.sectionDate}>
          <Cash />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    height: 70,
    borderBottomWidth: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#16192e",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  avatar: {
    borderRadius: 16,
    width: 45,
    height: 45,
    marginRight: 4,
  },
  section: {
    marginTop: 30,
    flex: 1 / 3,
    marginVertical: 5,
  },
  sectionMenu: {
    marginTop: 5,
    flex: 1 / 6,
    marginVertical: 5,
  },
  sectionDate: {
    marginTop: 10,
    flex: 1 / 6,
    marginVertical: 5,
  },
  genderSelection: {
    // ...ROW,
    marginHorizontal: -10,
  },
  weightAndAgeSelection: {
    // ...ROW,
    marginHorizontal: -10,
  },
  cashText: {
    marginTop: 5,
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    padding: 15,
  },
});
export default React.memo(FirstTemplate);
