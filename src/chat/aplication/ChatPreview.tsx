import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import androidRipple from "../../utils/androidRipple";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { ExploreStackParams } from "../../routes/typesRoutes";
import { ParamsInChat } from "../../routes/stacks/StackChanges";
import { ChatEntity } from "../domain/chatEntitys";

export const ChatPreview = ({chat}:{chat:ChatEntity}) => {
    const {navigate} = useNavigation<ParamsInChat>()

    const handlePressChat = (chat_id) => {
        navigate('inChat', {title:chat.title, chat_id})
    }

    console.log(chat);
    
    
  return ( 

    <Pressable onPress={()=> handlePressChat(chat.id)} android_ripple={androidRipple}>
      <View className="">
        <View className="px-4 py-3 bg-white">
          <View
            className="flex-row flex-1 items-center justify-between"
            style={{ gap: 15 }}
          >
            <View className="flex-row flex-1 items-center gap-x-4">
              <View>
                <Image
                  width={52}
                  height={52}
                  className="rounded-full"
                  style={{}}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR330N0O-B5QJmfx2QXtcDi7QB4xivl4SV7OQ&s",
                  }}
                ></Image>
              </View>

              <View className="flex-1 overflow-hidden">
                <View className="flex-row " style={{gap:10}}>
                  <Text
                    style={{width:'auto', fontSize:16 }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="font-medium "
                  >
                    {chat.product_sender}
                  </Text>
                  <View className="items-center">
                    <Octicons size={20} name="sync" />
                  </View>

                  <Text
                    style={{ fontSize:16 }} 
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="font-medium flex-1 "
                  >
                    {chat.product_receiver}
                  </Text>

                  <Text  className="text-gray-600 text-xs">20:53</Text> 

                </View>

                <View className="mt-1">
                  <Text className="text-gray-600">Hola, que te parece</Text>
                </View>
              </View>

              {/* RECUPERAR LA HORA DEL ULTIMO MENSAJE ENVIADO POR ALGUNO DEL CHAT !! */}
            </View>

            {/* <View className="justify-self-end">
              <Ionicons size={25} name="information-circle-outline" />
            </View> */}
          </View>
        </View>


      </View>
    </Pressable>
  );
};
