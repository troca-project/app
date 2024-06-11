import React from "react";
import { Image, Text, View } from "react-native";

export const BannerUploadProduct = () => {
  return (
    <View className="px-3">
      <View className="rounded-xl bg-white p-4">
        <View className="flex-row">
          <View>
            
            <Image  style={{ objectFit: "cover", height: 65, width: 65 }} source={{uri:''}}></Image>

          </View>
          
          <View>
            <Text className="text-lg ">
                Publica tu cambio
            </Text>

          </View>
        </View>
      </View>
    </View>
  );
};

