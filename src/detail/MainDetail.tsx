import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";
import { HomeStackParams, RootStackParams } from "../routes/typesRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Header } from "../shared/Header";
import { CarrouselProduct } from "./CarrouselProduct";
import { HeaderDetailProduct } from "./HeaderDetailProduct";
import { ButtonBasic } from "../buttons/ButtonBasic";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LocationReferences } from "./LocationReferences";
import { ProductDetails } from "./ProductDetails";
import { ExpectedProducts } from "./ExpectedProducts";
import { InitOffer } from "./InitOffer";
import { useLayoutEffect } from "react";

export const MainDetail = ({route}:{route:any}) => {
  const { params: product } =
    useRoute<NativeStackScreenProps<HomeStackParams, "detail">["route"]>(); //RECIBIR EL ID Y RECUPERAR EL PRODUCTO NO TODO EL PRODUCTO POR PARAMS!!
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
          title: product.title , // Establece el título del encabezado como el nombre del producto
      });
  }, [navigation, product.title]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="light" backgroundColor="#212121"></StatusBar>
      <ScrollView>
        <View style={{}}>
          {/* <HeaderDetailProduct product={product} /> */}
          <CarrouselProduct images={product.images}></CarrouselProduct>
          <ProductDetails product={product}></ProductDetails>
          <LocationReferences product={product}></LocationReferences>
          <ExpectedProducts product={product}></ExpectedProducts>
          <InitOffer product={product}></InitOffer>
        </View>
      </ScrollView>
    </View>
  );
};
