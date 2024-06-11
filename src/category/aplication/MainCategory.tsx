import React from "react";
import { Text, View } from "react-native";
import { SubCategories } from "./SubCategories";
import { BlockOfRelated } from "./BlockOfRelated";
import { ScrollView } from "react-native-gesture-handler";
import { BannerCategory } from "./BannerCategory";
import { BannerUploadProduct } from "../../shared/BannerUploadProduct";

export const MainCategory = ({ route }) => {
  const category_id = route.params.id;
  const category_name = route.params.name;
  console.log(category_id,'asd');
  
  return (
    <ScrollView>
      <View className="py-3" style={{ rowGap: 20 }}>
        <SubCategories></SubCategories>
        {/* <BannerCategory></BannerCategory> */}
        <BlockOfRelated route={route} category_id={category_id}></BlockOfRelated>
        <BannerUploadProduct></BannerUploadProduct>
      </View>
    </ScrollView>
  );
};