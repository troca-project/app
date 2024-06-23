// src/navigation/ChatStack.js
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatProvider } from "./aplication/context/ChatContext";
import { MainChat } from "./aplication/MainChat";
import { MainInChat } from "./aplication/in-chat/MainInChat";
import { HeaderInChat } from "./aplication/in-chat/HeaderInChat";
import { log } from "react-native-reanimated";

const Stack = createStackNavigator<RouteStackParams>();
type RouteStackParams = {
  chat: undefined;
  inChat: { chat_id: number };
};

const ChatStack = ({route, navigation}) => {
  console.log(route, navigation);

  return (
  <ChatProvider>
    <Stack.Navigator screenOptions={{ headerTitle: "Cambios"  }}>
      <Stack.Screen name="chat" component={MainChat} />
   
    </Stack.Navigator>
  </ChatProvider>
)};

export default ChatStack;
