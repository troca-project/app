import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export const ButtonBasic = ({
  title,
  type,
  onPress,
}: {
  title: string;
  type?: "primary" | "secondary";
  onPress?: () => void;
}) => {
  const primary = type === "primary" || !type ? true : false;
  
  return (
    <TouchableOpacity
      style={[
        styles.base,
        { backgroundColor: primary ? "#008859" : "#00885950" },
      ]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View style={{flexDirection:'row', gap:5, justifyContent:'center', alignItems:'center', height:23}}>
        <Text style={[styles.text, { color: primary ? "white" : "#008859" }]}>
          {title}
        </Text>
        {!primary ?<Ionicons name="heart-outline" color={'#008859'} size={22}></Ionicons>  : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
