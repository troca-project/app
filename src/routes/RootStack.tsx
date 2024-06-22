import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { allRoutes } from "./Routes";
import { RootStackParams } from "./typesRoutes";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainInChat } from "../chat/aplication/in-chat/MainInChat";
import { ChatProvider } from "../chat/aplication/context/ChatContext";
import { RootBottomTab } from "./RootBottomTab";
import { MainOnboarding } from "../onboarding/application/MainOnboarding";

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStack = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="onboarding" screenOptions={{}}>
        <Stack.Screen
          name="root"
          component={RootBottomTab} 
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="onboarding"
          component={MainOnboarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
