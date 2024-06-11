import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import { useNavigation } from "@react-navigation/native";
import { ParamsDetailRoute } from "../routes/typesRoutes";
import colors from "../theme/colors";
import React from "react";

export const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [haveQuery, setHaveQuery] = useState("");
  const [emptyErrorInput, setEmptyError] = useState(false)

  const { navigate } = useNavigation<ParamsDetailRoute>();

  const searchProducts = () => {
    if (!searchQuery && !haveQuery) {
      setEmptyError(true)
      return
    }
    setEmptyError(false)
    navigate("search", { expected: searchQuery, have: haveQuery });
  };

  return (
    <View >
      <View style={styles.containerSearchProducts}>
        
        <View style={{flex:1, gap:2}} >
          <Text className="font-medium">Que buscas</Text>
          <View style={[styles.inputContainer, emptyErrorInput && {borderColor:'red'}] } className="">
          <FontAwesome name="search" style={[styles.icon, emptyErrorInput && {color:'red'}]} />
            <TextInput
            className="flex-1"
              placeholder="Ej. Escritorio"
              value={searchQuery}
              onChangeText={(value) => {setSearchQuery(value); setEmptyError(false)}}
            />
          </View> 
        </View>

        <View style={{flex:1, gap:2}} >
          <Text className="font-medium">Que Tienes</Text>
          <View style={[styles.inputContainer, emptyErrorInput && {borderColor:'red'}]} >
            <FontAwesome name="search" style={[styles.icon, emptyErrorInput && {color:'red'}]} />
            <TextInput
            className="flex-1"
              placeholder="Ej. Cocina"
              value={haveQuery}
              onChangeText={(value) => {setHaveQuery(value); setEmptyError(false)}}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          paddingVertical: 14 ,
          backgroundColor: colors.blue,
          borderRadius: 10,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,

        }}
        onPress={() => searchProducts()}
        activeOpacity={.8}
      >
        <Text style={{ color: "#fff" }} className="font-bold">Ver resultados</Text>
        <Ionicons name="chevron-forward" color="#fff" size={23}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearchProducts: {
    marginBottom: 10,
    gap: 10,
    flexDirection: "row",
    height:75
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },

  touchbaleIconButton: {
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    fontSize: 20,
  },
});
