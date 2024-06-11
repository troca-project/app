import React, { useEffect, useState } from "react";
import { Pressable, Text, View, Image, ScrollView } from "react-native";
import { getAllCategories } from "./use-case/categoryUseCase";
import { useCategories } from "./context/categoriesContext";
import colors from "../../theme/colors";
import { BannerInit } from "../../home/BannerInit";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParams, ParamsCategoryRoute } from "../../routes/typesRoutes";

export const SomeCategories = () => {

  const [allCategories, setAllCategories] = useState<any[] | undefined>(
    undefined
  );

  const { navigate } = useNavigation<ParamsCategoryRoute>()

  const [wrapCategories, setWrapCategories] = useState('flex-nowrap')
  const isWrap = wrapCategories === 'flex-wrap'

  const getCategories = async () => setAllCategories(await getAllCategories());


  const handleDisplayCategory = () => {
    setWrapCategories( isWrap ? 'flex-nowrap' : 'flex-wrap') 
  }

  const navigateCategory = (category:any) => {
    console.log(category);
    
    navigate('category', {id:category.id, name:category.name})
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View className="px-3">

      <View className={`w-full flex-row justify-between items-center  mb-3 `}>
        <Text className="text-xl font-bold">Categorías</Text>

        <Pressable className="p-1" android_ripple={{borderless:true}} onPress={handleDisplayCategory}>
          <MaterialIcons name={isWrap ? 'view-column' : 'grid-view'} size={25}/>
        </Pressable>
      </View>

      <ScrollView horizontal={!isWrap} showsHorizontalScrollIndicator={false}  >
        <View className={`flex-row justify-start gap-3 ${wrapCategories}`}>
          {allCategories?.map((c) => (
            <Pressable key={c.id} className="" onPress={() => navigateCategory(c)} style={{}}>

              <View className="">
                <View className="items-center">
                  <Pressable
                    onPress={() => navigateCategory(c)}
                    className="w-full rounded-full overflow-hidden items-center"
                    android_ripple={{ borderless: false, foreground: true }}
                  >
                    <View
                      className="bg-white  border border-slate-300 rounded-full"
                      style={{}}
                    >
                      <Image
                        className="rounded-full"
                        source={{ uri: c.image }}
                        style={{ objectFit: "cover", height: 65, width: 65 }}
                      ></Image>
                    </View>
                  </Pressable>
                  <Text className="mt-1" style={{ fontSize: 12 }}>
                    {c.name}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}

          <Pressable className="" style={{}}>
            <View className="">
              <View className="items-center">
                <Pressable
                  className="w-full rounded-full overflow-hidden items-center"
                  android_ripple={{ borderless: false, foreground: true }}
                >
                  <View
                    className="bg-white justify-center items-center border border-slate-300 rounded-full" style={{ height: 65, width: 65 }}
                  >
                    <View className="" style={{marginBottom:-3, marginRight:-2}}>
                      <Octicons name="plus" color="gray" size={30} />
                    </View>
                  </View>
                </Pressable>
                <Text className="mt-1" style={{ fontSize: 12 }}>
                  Ver mas
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
