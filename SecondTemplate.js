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
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

function SecondTemplate() {
  return (
    <View style={styles.body}>
      <View style={styles.profile}>
        <View style={styles.content}>
          <View style={styles.avatarPanel}>
            <Image
              style={styles.avatar}
              source={require("./assets/profile.jpg")}
            ></Image>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Devin Coldewey</Text>
            <Text style={styles.name}>Marketing Manager</Text>
          </View>
          <View style={styles.followPanel}>
            <TouchableOpacity style={styles.follow}>
              <Text style={styles.followText}>FOLLOW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bird}>
              <MaterialCommunityIcons
                name="bird"
                size={24}
                color="white"
                style={{ marginTop: 6 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.world}>
              <Fontisto
                name="world-o"
                size={24}
                color="white"
                style={{ marginTop: 6 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.detail}>
            <View style={{ marginTop: 7 }}>
              <Text style={styles.followContent}>323</Text>
              <Text style={styles.followContent}>Posts</Text>
            </View>
            <View style={{ marginTop: 7 }}>
              <Text style={styles.followContent}>53.2k</Text>
              <Text style={styles.followContent}>Followers</Text>
            </View>
            <View style={{ marginTop: 7 }}>
              <Text style={styles.followContent}>749K</Text>
              <Text style={styles.followContent}>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bodyContent}>
        <Text style={styles.bodyContentText}>About me</Text>
        <Text style={styles.bodyContentText}>
          Decisions: If you decide,the answer is no. If two equally difficult
          paths,choose the one more painful in the short term(pain avoidance is
          creating an illusion of equality)
        </Text>
      </View>
      <View style={styles.albumContent}>
        <Text style={styles.albumContentText}>Album</Text>
        <View style={styles.imagePanel}>
          <Image
            style={styles.album}
            source={require("./assets/profile.jpg")}
          ></Image>
          <Image
            style={styles.album}
            source={require("./assets/smith.jpg")}
          ></Image>
          <Image
            style={styles.album}
            source={require("./assets/john.png")}
          ></Image>
          <Image
            style={styles.album}
            source={require("./assets/avatar.jpg")}
          ></Image>
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
    padding: 30,
  },
  avatarPanel: {
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    borderRadius: 16,
    width: 65,
    height: 65,
  },
  name: {
    textAlign: "center",
    color: "#fff",
  },
  followContent: {
    textAlign: "center",
    color: "#000",
  },
  info: {
    marginTop: 10,
  },
  follow: {
    width: 100,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginRight: 20,
  },
  bird: {
    width: 40,
    height: 40,
    borderColor: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 40,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  world: {
    width: 40,
    height: 40,
    borderColor: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  followPanel: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  followText: {
    textAlign: "center",
    marginTop: 8,
    color: "#fff",
  },
  detail: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#FFE8FE",
    width: "100%",
    height: 60,
    justifyContent: "space-around",
    borderRadius: 10,
  },
  bodyContent: {
    marginTop: 20,
  },
  bodyContentText: {
    color: "#fff",
    fontSize: 18,
  },
  albumContent: {
    marginTop: 20,
  },
  albumContentText: {
    color: "#fff",
    fontSize: 18,
  },
  album: {
    borderRadius: 16,
    width: 140,
    height: 100,
  },
  imagePanel: {
    marginTop: 8,
    maxHeight: 400,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default React.memo(SecondTemplate);
