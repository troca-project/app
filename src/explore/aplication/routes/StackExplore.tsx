import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { MainExplore } from "../MainExplore";
import { MainSearchBar } from "../search-bar/MainSearchBar";
import { MainSearchProducts } from "../../../searchProducts/aplication/MainSearchProducts";
import { HeaderSearchProducts } from "../../../searchProducts/aplication/HeaderSearchProducts";
import { FiltersProvider } from "../../../searchProducts/aplication/context/FiltersContext";
import { MainDetail } from "../../../detail/MainDetail";
import { ExploreStackParams } from "../../../routes/typesRoutes";
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderCategory } from "../../../category/aplication/HeaderCategories";
import { MainCategory } from "../../../category/aplication/MainCategory";

const Stack = createStackNavigator<ExploreStackParams>();

export const StackExplore = () => {
  return (
    <FiltersProvider>
      <Stack.Navigator  initialRouteName="explore" detachInactiveScreens screenOptions={{}}>
        <Stack.Screen name="explore" options={{headerShown:false}}  component={MainExplore}></Stack.Screen>
        <Stack.Screen name="search" options={{headerShown:true, detachPreviousScreen:true,  header:(props) => <HeaderSearchProducts route={props.route} navigation={props.navigation}/>,  }}  component={MainSearchProducts}></Stack.Screen>
        <Stack.Screen name="searchBar"  options={{headerShown:false, }}   component={MainSearchBar}></Stack.Screen>
        <Stack.Screen name="detail" component={MainDetail}></Stack.Screen>
        <Stack.Screen name="category"  options={{header:({navigation}) => <HeaderCategory navigation={navigation}/> }} component={MainCategory}></Stack.Screen>
        </Stack.Navigator>
    </FiltersProvider>
  );
};
