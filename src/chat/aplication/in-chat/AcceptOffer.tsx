import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { ChatEntity } from "../../domain/chatEntitys";
import colors from "../../../theme/colors";
import androidRipple from "../../../utils/androidRipple";

type AcceptOfferProps = {
  chat?: ChatEntity;
};

export const AcceptOffer: FC<AcceptOfferProps> = ({ chat }) => {
  const user_id = 10;

  if (!chat || chat.accepted || chat.sender_id === user_id) {
    return null;
  } 

  return (
    <View className=" bg-white">
      <View style={{}} className="py-4 px-3 border-y border-b-2 border-slate-300  justify-center items-center">
        <Text className="mb-4">Quiere intercambiar <Text className="font-bold">{chat.product_sender}</Text></Text>
        <View className="flex-row flex-wrap justify-center gap-4">
          <Pressable android_ripple={{...androidRipple, color:'white'}} className="py-2 flex-1 items-center rounded border border-red-600" style={{backgroundColor:colors["green"], borderColor:colors.green}}>
            <Text className="text-white font-medium">Aceptar</Text>
          </Pressable>

          <Pressable android_ripple={androidRipple} className="py-2 flex-1 items-center rounded border ">
            <Text className=" font-medium ">Rechazar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
