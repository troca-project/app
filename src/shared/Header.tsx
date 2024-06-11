import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { LinkButton } from "../buttons/LinkButton";
import colors from "../theme/colors";
import {
  DrawerActionHelpers,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const Header = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  const toogleMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>

      <Pressable onPress={toogleMenu}>
        <FontAwesome
          name="bars"
          style={{ fontSize: 25, color: "#fff" }}
        ></FontAwesome>
      </Pressable>

      <LinkButton
        route="home"
        text="HOME"
        type="secondary"
        style={{ marginRight: 10 }}
      ></LinkButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 70,
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.green,
  },
  iconButton: {
    padding: 10,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "flex-start",
  },
  menu: {
    backgroundColor: "#fff",
    width: "60%",
    flexGrow: 1,
    maxHeight: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});
