import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import colors from "../theme/colors";
import { RootStack } from "../routes/RootStack";
import { PaperProvider } from "react-native-paper";
import React from "react";
import { enableFreeze } from "react-native-screens";

export const Layout = () => {
  enableFreeze(true);
  return (
    <View style={[styles.container]} className="bg-white">
      <StatusBar style="light" backgroundColor={colors.green}></StatusBar>
      <PaperProvider>
          <RootStack></RootStack>
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});
