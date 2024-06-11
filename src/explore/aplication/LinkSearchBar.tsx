import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import colors from "../../theme/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import androidRipple from "../../utils/androidRipple";
import { useNavigation } from "@react-navigation/native";

export const LinkSearchBar = () => {
  const { navigate } = useNavigation<any>();

  const navigateToSearchBar = () => {
    navigate("searchBar");
  };
  

  return (
    <View className={`px-3`}>
       <Text className="text-xl font-bold mb-3">Buscar</Text>
      <View className={``}>
        <Pressable
          className="w-full relative z-10"
          onPress={navigateToSearchBar}
        >
          {({ pressed }) => (

            <View
              className={`flex-row items-center relative h-12 rounded-md bg-white border border-slate-200 ${pressed && ' border-slate-300'}`}
              style={{transform:[{scale:pressed ? 0.97 : 1}]}}
            >
              <View className="">
                <View className="pl-4">
                  <FontAwesome
                    className="pl-5"
                    size={20}
                    color={"#232323"}
                    name="search"
                  />
                </View>
              </View>
              <TextInput
                editable={false}
                className="absolute rounded-md top-0 left-0 h-full pl-12 w-full"
                placeholder="Buscar"
              ></TextInput>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
};
