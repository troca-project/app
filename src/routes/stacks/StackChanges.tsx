import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { MainChat } from "../../chat/aplication/MainChat";
import { MainInChat } from "../../chat/aplication/in-chat/MainInChat";
import { ChatProvider } from "../../chat/aplication/context/ChatContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatEntity } from "../../chat/domain/chatEntitys";
import { RootStackParams } from "../typesRoutes";

export type ChangesStackParams = {
  chat: undefined;
  inChat: {
    chat_id: number;
    title: string;
  };
};

export type ParamsInChat = NativeStackNavigationProp<RootStackParams, "inChat">;

const Stack = createStackNavigator<ChangesStackParams>();

export const StackChanges = () => {
  return (
      <Stack.Navigator
        initialRouteName="chat"
        detachInactiveScreens
        screenOptions={{}}
      >
        <Stack.Screen
          name="chat"
          options={{headerTitle:'Cambios'}}
          component={MainChat}
        ></Stack.Screen>

        <Stack.Screen
          name="inChat"
          options={{}}
          component={MainInChat}
          
        ></Stack.Screen>
      </Stack.Navigator>
  );
};
