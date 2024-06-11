import React from "react";
import { ScrollView, Text, View } from "react-native";
import { HeaderExplore } from "./HeaderExplore";
import { SearchProducts } from "../../home/SearchProducts";
import { SomeCategories } from "./SomeCategories";
import { CategoriesProvider } from "./context/categoriesContext";
import { LinkSearchBar } from "./LinkSearchBar";
import { LastSearch } from "./LastSearch";
import { RelatedProducts } from "./RelatedProducts";
import { ProfileWidget } from "../../shared/ProfileWidget";

export const MainExplore = () => {
  return (
    <CategoriesProvider>
      <ScrollView>
        <View className="bg-slate-100 flex-1" style={{ rowGap: 20 }}>
          <HeaderExplore></HeaderExplore>
          <LinkSearchBar></LinkSearchBar>
          <SomeCategories></SomeCategories>
          <LastSearch></LastSearch>
          <RelatedProducts></RelatedProducts>
        </View>
      </ScrollView>
    </CategoriesProvider>
  );
};
