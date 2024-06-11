import { NavigationContainer } from "@react-navigation/native";
import { Layout } from "./src/layout/Layout";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import 'react-native-gesture-handler';
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={{flex:1, flexGrow:1}}>
          <Layout></Layout>
    </SafeAreaView>
  );
}
