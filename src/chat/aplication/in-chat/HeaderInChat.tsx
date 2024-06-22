import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import androidRipple from "../../../utils/androidRipple";
import Octicons from "@expo/vector-icons/Octicons";
import { getChat } from "../../use-cases/chatUseCases";
import { ChatEntity } from "../../domain/chatEntitys";

export const HeaderInChat = ({ navigation, route }) => {
  const { chat_id } = route.params;
  const [chat, setChat] = useState<ChatEntity>();

  const getChatinfo = async () => {
    setChat(await getChat(chat_id));
  };

  useEffect(() => {
    getChatinfo();
  }, []);

  return (
    <View>
      <View className=" bg-white">
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex p-4"
            android_ripple={{ borderless: true, radius: 23 }}
          >
            <Ionicons name="chevron-back" size={23}></Ionicons>
          </Pressable>

          <View className="flex-row items-center gap-2 flex-1 overflow-hidden">
            <View className="rounded-full border border-slate-300">
              <Image
                className="w-8 h-8 rounded-full"
                source={{
                  uri: "https://dcdn.mitiendanube.com/stores/126/629/products/img_07881-f91ec3b026ac8502f415175876801878-1024-1024.jpg",
                }}
              />
            </View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="overflow-hidden text-ellipsis font-medium text-lg"
            >
              {chat?.product_sender}
            </Text>
            <Octicons name="sync" size={20}></Octicons>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="flex-1 overflow-hidden text-ellipsis font-medium text-lg"
            >
              {" "}
              {chat?.product_receiver}
            </Text>
          </View>

          <Pressable
            className="flex p-4"
            android_ripple={{ borderless: true, radius: 23 }}
          >
            <Ionicons name="ellipsis-vertical" size={23}></Ionicons>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
