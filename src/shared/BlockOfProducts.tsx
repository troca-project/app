import React from "react";
import { Pressable, Text, View } from "react-native";
import { ProductCardBasic } from "./ProductCardBasic";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import androidRipple from "../utils/androidRipple";
import colors from "../theme/colors";

export const BlockOfProducts = ({
  products,
  title,
  titleFooter,
  action,
}: {
  products: any[];
  title: string;
  titleFooter?: string;
  action?: () => void;
}) => {
  return (
    <View className="px-3">
      <View className="bg-white rounded" style={{ elevation: 5 }}>
        <View className="py-3 px-3 border-b border-slate-300">
          <Text className="font-medium ">{title}</Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {products.map((p, i) => (
            <View
              className={`${
                i % 2 === 0 ? "border-r" : ""
              } border-b border-slate-300 p-1`}
              style={{ width: "50%" }}
              key={p.id}
            >
              <ProductCardBasic bgImage="white" product={p}></ProductCardBasic>
            </View>
          ))}
        </View>

        {action && (
          <Pressable onPress={action} android_ripple={androidRipple}>
            <View className="py-3 px-3 flex-row items-center justify-between">
              <Text style={{color:colors.green}} className="font-medium">{titleFooter}</Text>

              <Ionicons color={colors.green} name="chevron-forward" size={25}></Ionicons>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
};
