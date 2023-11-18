import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Balance() {
  return (
    <TouchableOpacity style={styles.box}>
      {/* <FontAwesome5 name={iconName} size={80} color={iconColor} /> */}
      <View>
        <Text style={styles.label}>Available Balance</Text>
        <Text style={styles.labelBalance}>$3,578</Text>
        <Text style={styles.label}>See Details</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#6984F3",
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
  },
  label: {
    color: "#fff",
    marginTop: 9,
    fontSize: 15,
  },
  labelBalance: {
    color: "#fff",
    marginTop: 9,
    fontSize: 25,
  }
});

export default React.memo(Balance);
