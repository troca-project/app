import React, { useEffect, useState } from "react";
import { Pressable, Text, View, Image } from "react-native";
import androidRipple from "../../utils/androidRipple";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../routes/typesRoutes";
import { getSubcategoriesByCategory } from "./use-case/categories-use-case";

export const SubCategories = () => {
  //OBTENER LA CATEGORIA GENERAL Y RECUPERAR LAS SUBCATEGORIAS PARA MOSTRAR
  const { params:{id:category_id, name} } =  useRoute<NativeStackScreenProps<HomeStackParams, 'category'>['route']>();
  const [subCategories, setSubcategories] = useState<any[]>([])

  const getSubcategories = async () => setSubcategories(await getSubcategoriesByCategory(category_id))

  useEffect(() => {
    getSubcategories()

  }, [])


  const { navigate } = useNavigation<any>();

 
  const handlePressSubCategory = (subCategory: any) => {
    navigate("search", {query: subCategory.id, type:'category', title:subCategory.title});
  };

  return (
    <View className="px-3">
      <Text className="text-xl font-bold mb-3">Que estas buscando?</Text>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="flex-row flex-wrap gap-2">
          {subCategories.map((e) => (
            <Pressable
              onPress={() => handlePressSubCategory(e)}
              android_ripple={androidRipple}
              key={e.id} 
              className="px-3 py-2 grow overflow-hidden bg-white rounded border border-slate-300"
            >
              <View className="">
                <Text className="text-center">{e.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
