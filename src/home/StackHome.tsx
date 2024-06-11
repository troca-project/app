import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParams } from "../routes/typesRoutes";
import { MainHome } from "./MainHome";
import { MainDetail } from "../detail/MainDetail";
import { MainSearchProducts } from "../searchProducts/aplication/MainSearchProducts";
import { MainExplore } from "../explore/aplication/MainExplore";
import { HeaderSearchProducts } from "../searchProducts/aplication/HeaderSearchProducts";
import React from "react";
import { FiltersProvider } from "../searchProducts/aplication/context/FiltersContext";
import { MainSearchBar } from "../explore/aplication/search-bar/MainSearchBar";
import { MainCategory } from "../category/aplication/MainCategory";
import { HeaderCategory } from "../category/aplication/HeaderCategories";

const Stack = createStackNavigator<HomeStackParams>();

export const StackHome = () => {
  return (
    <FiltersProvider>
      <Stack.Navigator initialRouteName="home" >
        <Stack.Screen options={{headerShown:false}} name="home" component={MainHome}></Stack.Screen>
        <Stack.Screen name="detail" component={MainDetail}></Stack.Screen>
        <Stack.Screen options={{ header:(props) => <HeaderSearchProducts route={props.route} navigation={props.navigation}/> }} name="search" component={MainSearchProducts}></Stack.Screen>
        <Stack.Screen name="category"  options={{header:({navigation}) => <HeaderCategory navigation={navigation}/> }} component={MainCategory}></Stack.Screen>

      </Stack.Navigator>
    </FiltersProvider>
  );
};
