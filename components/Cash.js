import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Cash() {
  return (
    <View style={{ flexDirection: "row", padding: 25 }}>
      <View style={styles.emmabox}>
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: "#fff", fontSize: 15 }}>Emma's Cash</Text>
          <Text style={{ color: "#fff", fontSize: 25, marginTop: 10 }}>
            $4,566
          </Text>
        </View>
      </View>
      <View style={styles.markbox}>
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: "#fff", fontSize: 15 }}>Mark's Cash</Text>
          <Text style={{ color: "#fff", fontSize: 25, marginTop: 10 }}>
            $4,566
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emmabox: {
    flex: 1,
    height: 150,
    width: "50%",
    backgroundColor: "#ECA15C",
    marginRight: 10,
    borderRadius: 10,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  markbox: {
    flex: 1,
    height: 150,
    width: "50%",
    backgroundColor: "#50AD84",
    marginRight: 10,
    borderRadius: 10,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  boxTitle: {
    color: "#fff",
    textAlign: "center",
  },
});

export default React.memo(Cash);
