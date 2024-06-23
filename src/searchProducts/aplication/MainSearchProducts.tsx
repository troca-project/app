import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Header } from "../../shared/Header";
import Constants from "expo-constants";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams, RootStackParams } from "../../routes/typesRoutes";
import { ResultSearchProducts } from "./ResultsSearchProducts";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/Product";
import React from "react";
import { getParamsRoute } from "../repository/getParamsRoute";

export const MainSearchProducts = () => {
  const { title, type, have, query } = getParamsRoute<HomeStackParams, 'search'>('search');
  const [allProducts, setAllProducts] = useState<Product[]>();
  const [productsFiltred, setProductsFiltred] = useState<Product[]>();

  useEffect(() => {

    fetch("https://dummyjson.com/products") // ENDPOINT PARA BUSCAR POR LOS PARAMETROS EXPECTED, HAVE | CAMBIAR NOMBRES DE PARAMS
      .then((res) => res.json())
      .then((res: any) => {
        console.log('RESPUESTA RECIBIDA!-');
        

        res.products.map((p: any) => (p.expectedProducts = ["Motosierra"]));
        res.products[0].state = "new";
        res.products[0].color = "red";
        res.products[1].color = "blue";
        setAllProducts(res.products);
        setProductsFiltred(res.products);
        
        // const filtredProducts = res.products.filter(
        //   (p: Product) =>
        //     p.title.toLowerCase().includes(params?.query?.toLowerCase()) &&
        //     (!params?.have ||
        //       p.expectedProducts
        //         .map((e) => e.toLowerCase())
        //         .includes(params?.have?.toLowerCase()))
        // );

      });
  }, [query]);

  return (
    <View className="flex-1 bg-white ">
      <View className="flex-1">
        <View className="flex-1">
          <ResultSearchProducts
            products={productsFiltred}
            setProducts={setProductsFiltred}
            ></ResultSearchProducts>
        </View>
      </View>
    </View>
  );
};

