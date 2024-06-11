import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SearchProducts } from "./SearchProducts";
import { BannerInit } from "./BannerInit";
import { useEffect, useState } from "react";
import { ProductCardBasic } from "../shared/ProductCardBasic";
import { Product } from "../interfaces/Product";
import { Header } from "../shared/Header";
import { ProductsSet } from "./ProductsSet";
import { LandingText } from "./LandingText";
import React from "react";
import { ProfileWidget } from "../shared/ProfileWidget";
import { SomeCategories } from "../explore/aplication/SomeCategories";


export const MainHome = () => {
  const [filtredProducts, setFiltredProducts] = useState<Product[]>([]);  
  const [allProducts, setallProducts] = useState<Product[]>([]);  

  useEffect(() => {
    console.log('fetchMAIN');
    
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res: any) => {
        console.log(res.products);
        
        setFiltredProducts(res?.products?.slice(0, 10));
        setallProducts(res?.products?.slice(0, 10));
      });
  }, []);
 
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <View style={[styles.containerHome, {rowGap:20}]}>
          <ProfileWidget></ProfileWidget>
          <BannerInit></BannerInit>
          <SomeCategories></SomeCategories>

          {/* <SearchProducts></SearchProducts> */}

          {filtredProducts && filtredProducts.length > 0 ? (
            <View className="px-3">
              <ProductsSet products={filtredProducts} title="Nuevas publicaciones"></ProductsSet>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent: "flex-start",
    paddingTop: 15,
  },
  cardText: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorTextCard: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  boxInit: {
    width: Dimensions.get("window").width - 21,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingRight: 0,
    backgroundColor: "green",
    borderRadius: 15,
    marginBottom: 10,
  },
});
