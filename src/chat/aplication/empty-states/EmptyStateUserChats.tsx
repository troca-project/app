import React from "react";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import colors from "../../../theme/colors";
export const EmptyStateUserChats = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="relative mb-16 nmr">
        <Octicons name="sync" color={'#000'} size={45}></Octicons>
        <View
          className="absolute w-20 h-20 -top-10 -left-10 rounded-full opacity-20 "
          style={{ backgroundColor: colors.green }}
        ></View>
        <View
          className="absolute w-20 h-20 -left-5 rounded-full opacity-20 "
          style={{ backgroundColor: colors.green }}
        ></View>
        <View
          className="absolute w-20 h-20 -left-20 rounded-full opacity-20 "
          style={{ backgroundColor: colors.green }}
        ></View>
        <View
          className="absolute w-20 h-20 -left-20 rounded-t-full opacity-20 "
          style={{ backgroundColor: colors.green }}
        ></View>
        <View
          className="absolute w-20 h-20 -top-10 -left-24 rounded-b-full opacity-20 "
          style={{ backgroundColor: colors.green }}
        ></View>
      </View>
      <Text className="text-xl mb-2 font-bold">Parece que no tenes cambios activos</Text>
    </View>
  );
};
