import { Route } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Platform, Pressable, Text, View, StatusBar } from "react-native";
import { getParamsRoute } from "../repository/getParamsRoute";
import { capitalize } from "../../utils/capitalize";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { ModalFilters } from "./ModalFilters";
import { Badge, Tooltip } from 'react-native-paper';
import { useFilters } from "./context/FiltersContext";
import { StackNavigationProp } from "@react-navigation/stack";

export const HeaderSearchProducts = ({
  route,
  navigation,
}: {
  route: Route<string>;
  navigation: StackNavigationProp<any>;
}) => {
  const {
    params: { query, have, title, type },
  } = getParamsRoute("search");

  console.log(query);
  
  const [modalFilters, setModalVisible] = useState(false);
  const {countFilters, setFilters} = useFilters()

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    console.log("close");
  };

  const goBack = () => {
    setFilters({state:null})
    navigation.goBack()
  }

  return (
      <View className="bg-white flex-row items-center" style={{ elevation: 2 }}>
        <View className="flex-row font-bold justify-between flex-1 items-center">
          <View className="flex-row gap-7 pl-3 py-4">
              <Pressable onPress={goBack} className="flex px-1" android_ripple={androidRipple}>
                <Ionicons name="chevron-back" size={23}></Ionicons>
              </Pressable>

          </View>

          <Text className="text-lg font-semibold text-center">
            {capitalize( type === 'category' ? title || ' ' : title || query )}
          </Text>

          <View className="flex-row gap-7 pr-3 py-4 relative">

            
          <Tooltip title="Filtros" titleMaxFontSizeMultiplier={3}>
            <Pressable
              onPress={openModal}
              className="flex px-1"
              android_ripple={androidRipple}
              >
              <FontAwesome name="sliders" size={23}></FontAwesome>
              {countFilters ? <Badge className="absolute -top-2 -right-2">{countFilters}</Badge> : null }
            </Pressable>
          </Tooltip> 

{/*           
          <Pressable className="flex px-1" onPress={() => navigation.navigate('searchBar')} android_ripple={androidRipple}>
            <Ionicons name="search" size={23}></Ionicons>
          </Pressable> */}
          </View>
        </View>

        <ModalFilters visible={modalFilters} onClose={closeModal}>
        </ModalFilters>
        
      </View>
  );
};

const androidRipple = {
  borderless: true,
  foreground: Platform.OS === "android" && Platform.Version >= 23,
  radius: 20,
};
