import { Route, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, Pressable, Text, View, StatusBar } from "react-native";
import { capitalize } from "../../utils/capitalize";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { Badge, Tooltip } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParams } from "../../routes/typesRoutes";

export const HeaderCategory = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {

  const { params:{id, name} } =  useRoute<NativeStackScreenProps<HomeStackParams, 'category'>['route']>();
    console.log(id, name);
    
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View className="bg-white flex-row items-center" style={{ elevation: 2 }}>
      <View className="flex-row font-bold flex-1 items-center">

        <View className="flex-row gap-7  py-4 ">
          <Pressable
            onPress={goBack}
            className="flex px-4"
            android_ripple={androidRipple}
          >
            <Ionicons name="chevron-back" size={23}></Ionicons>
          </Pressable>
        </View>

        <Text className="text-lg font-semibold text-center">
            {capitalize(name)} 
        </Text>

        


      </View>
    </View>
  );
};

const androidRipple = {
  borderless: true,
  foreground: Platform.OS === "android" && Platform.Version >= 23,
  radius: 20,
};
