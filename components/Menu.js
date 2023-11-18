import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CENTER } from "../style";

function Menu() {
  return (
    <View style={styles.box}>
      <View>
        <AntDesign name="pluscircleo" size={25} color="white" />
        <Text style={styles.boxTitle}>Props</Text>
      </View>
      <View>
        <AntDesign name="pluscircleo" size={25} color="white" />
        <Text style={styles.boxTitle}>Top Up</Text>
      </View>
      <View>
        <AntDesign name="pluscircleo" size={25} color="white" />
        <Text style={styles.boxTitle}>Pay</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#6984F3",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  boxTitle: {
    color: "#fff",
    textAlign: "center",
  },
});

export default React.memo(Menu);
