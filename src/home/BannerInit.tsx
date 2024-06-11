import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import colors from "../theme/colors";
import React from "react";

export const BannerInit = () => {
  return (
    <View className="px-3">
      <ScrollView
        className=""
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={20}
        snapToInterval={Dimensions.get("window").width - 15}
        style={{ flexGrow: 0,  }}
      >
        <View style={[styles.boxInit, { marginRight: 10 }]}>
          <Text style={styles.TextCard}>
            Intercambia lo que ya no necesitas, descubre algo nuevo.
          </Text>
          <Image
            style={{
              width: 135,
              height: 100,
              flex: 1,
              transform: [{ rotate: "-40deg" }, { translateY: -10 }],
              objectFit: "cover",
            }}
            source={require("../../assets/nike.png")}
          ></Image>
        </View>

        <View
          style={[
            styles.boxInit,
            { backgroundColor: colors.yellow, marginRight: 10 },
          ]}
        >
          <Text style={[styles.TextCard, { color: "#000" }]}>
            Transforma lo innecesario en algo valioso.
          </Text>
          <Image
            style={{
              width: 135,
              height: 100,
              flex: 1,
              transform: [{ rotate: "-40deg" }, { translateY: -10 }],
              objectFit: "cover",
            }}
            source={require("../../assets/nike.png")}
          ></Image>
        </View>

        <View style={[styles.boxInit, { backgroundColor: colors.blue }]}>
          <Text style={styles.TextCard}>
            Transforma lo innecesario en algo valioso.
          </Text>
          <Image
            style={{
              width: 135,
              height: 100,
              flex: 1,
              transform: [{ rotate: "-40deg" }, { translateY: -10 }],
              objectFit: "cover",
            }}
            source={require("../../assets/nike.png")}
          ></Image>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardText: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextCard: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    flex: 1,
  },
  boxInit: {
    width: Dimensions.get("window").width - 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingRight: 0,
    backgroundColor: colors.green,
    borderRadius: 15,

  },
});
