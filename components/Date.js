import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";

function Date() {
  const MIN_HEIGHT = 50;
  const MAX_HEIGHT = 250;
  const [height, setHeight] = useState(150);
  return (
    <View style={styles.box}>
      <View style={styles.textbox}>
        {/* <FontAwesome5 name={iconName} size={80} color={iconColor} /> */}
        <Text style={{ color: "#fff" }}>Expenses for October</Text>
        <Text style={{ color: "#fff" }}>$2,455</Text>
      </View>
      <View>
        <Slider
          style={styles.slider}
          minimumValue={MIN_HEIGHT}
          maximumValue={MAX_HEIGHT}
          minimumTrackTintColor="#9a5871"
          maximumTrackTintColor="#000000"
          // thumbImage={Platform.OS === "android" && sliderThumbImage}
          onValueChange={(value) => setHeight(Math.round(value))}
          value={height}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#343863",
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 25,
  },
  textbox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  slider: {
    width: "100%",
    height: 40,
    transform: Platform.OS === "android" ? [{ scale: 1.1 }] : [],
  },
});

export default React.memo(Date);
