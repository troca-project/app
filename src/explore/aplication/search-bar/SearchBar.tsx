import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import androidRipple from "../../../utils/androidRipple";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ExploreStackParams, ParamsSearchRoute } from "../../../routes/typesRoutes";
import { SuggestionsSearchBar } from "./SuggestionsSearchBar";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { navigate, goBack, getState } = useNavigation<ParamsSearchRoute>();
  console.log(getState());

  const handleSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const handleNavigate = (value: string) => {
    navigate('search' , {query:searchQuery, have:''});
    
  }
  
  return (
    <View>
      <View className={`flex-row suggestions w-full items-center`}>
        <View
          className={`flex-row items-center relative justify-between  rounded-m border border-slate-200 h-14 flex-1 bg-white px-3`}
          style={{ elevation: 2 }}
        >
            <View className="flex-1 flex-row items-center relative h-full">
              <View className="">
                <Pressable
                  onPress={goBack}
                  android_ripple={{ borderless: true }}
                  className="z-10"
                >
                  <Ionicons name="chevron-back" size={28} />
                </Pressable>
              </View>

              <TextInput
                value={searchQuery}
                autoFocus
                returnKeyType="search"
                onSubmitEditing={() => handleNavigate}
                onChangeText={handleSearchQuery}
                className="absolute rounded-md top-0 left-0 h-full pl-12 w-full"
                placeholder="Buscar"
              ></TextInput>
            </View>

            {
              searchQuery && 

              <Pressable
                    onPress={() => setSearchQuery('')}
                    android_ripple={{ borderless: true }}
                    className="z-10"
                  >
                    <Ionicons name="close" size={28} />
              </Pressable>
            }
    
      
        </View>

      </View>

      <View>
        <SuggestionsSearchBar searchQuery={searchQuery}></SuggestionsSearchBar>
      </View>
    </View>
  )}

