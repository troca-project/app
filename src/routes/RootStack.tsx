import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { allRoutes } from "./Routes";
import { RootStackParams } from "./typesRoutes";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainInChat } from "../chat/aplication/in-chat/MainInChat";
import { RootBottomTab } from "./RootBottomTab";
import { MainOnboarding } from "../onboarding/application/MainOnboarding";
import { HeaderInChat } from "../chat/aplication/in-chat/HeaderInChat";
import { ExternalRoutes } from "./ExternalRoutes";

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="externalRoutes" screenOptions={{}}>
        <Stack.Screen
          name="root"
          component={RootBottomTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="externalRoutes" component={ExternalRoutes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
