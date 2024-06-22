// src/navigation/ChatStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatProvider } from "./aplication/context/ChatContext";
import { MainChat } from "./aplication/MainChat";
import { MainInChat } from "./aplication/in-chat/MainInChat";
import { HeaderInChat } from "./aplication/in-chat/HeaderInChat";

const Stack = createStackNavigator<RouteStackParams>();
type RouteStackParams = {
  chat: undefined;
  inChat: { chat_id: number };
};

const ChatStack = () => (
  <ChatProvider>
    <Stack.Navigator screenOptions={{ headerTitle: "Cambios" }}>
      <Stack.Screen name="chat" component={MainChat} />
      <Stack.Screen
        name="inChat"
        component={MainInChat}
        options={{
          header: ({ navigation, route }) => (
            <HeaderInChat navigation={navigation} route={route} />
          ),
        }}
      />
    </Stack.Navigator>
  </ChatProvider>
);

export default ChatStack;
