import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { LayoutMessages } from "./LayoutMessages";
import { SendMessage } from "./SendMessage";
import { useMessages } from "../context/ChatContext";
import { socket } from "../../../socket-io/socket";

export const MainInChat = ({navigation, route}) => {
  const  {chat_id} = route.params
  const {setChatId} = useMessages()

  useEffect(()=> {
    setChatId(chat_id)
    socket.emit("join_room", chat_id);

  }, [chat_id])
  
  return (
      <View className="h-full ">
        <LayoutMessages chat_id={chat_id}></LayoutMessages>
      </View>
  );
};