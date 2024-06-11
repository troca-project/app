import {
  View,
  Image,
  Text,
  Pressable,
  Touchable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Product } from "../interfaces/Product";
import { useNavigation } from "@react-navigation/native";
import { ParamsDetailRoute } from "../routes/typesRoutes";
import { ExpectedProducts } from "../detail/ExpectedProducts";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const ProductCardBasic = ({
  product,
  bgImage,
  bgText,
}: {
  product: Product;
  bgImage?: string;
  bgText?: string;
}) => {
  const { navigate } = useNavigation<ParamsDetailRoute>();

  const handlePressProduct = () => {
    navigate("detail", product);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      key={product.id}
      onPress={handlePressProduct}
      style={{
        width: "100%",
        borderRadius: 10,
      }}
    >
      <View className="relative">
        <Image
          className={bgImage || "bg-slate-100"}
          style={{ width: "100%", height: 200, objectFit: "contain" }}
          source={{ uri: product.thumbnail }}
        ></Image>

      </View>

      <View className={bgText}>
        <View className="px-2" style={{paddingBottom: 5 }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontSize: 12, color: "gray" }}
          >
            {product.brand}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontWeight: "600" }}
          >
            {product.title}
          </Text>
        </View>

        <ExpectedProducts overflowChips product={product}></ExpectedProducts>
      </View>
    </TouchableOpacity>
  );
};
