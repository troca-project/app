import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExternalStackParams } from "./typesRoutes";
import { MainInChat } from "../chat/aplication/in-chat/MainInChat";
import { HeaderInChat } from "../chat/aplication/in-chat/HeaderInChat";
import { MainOnboarding } from "../onboarding/application/MainOnboarding";
import { ChatProvider } from "../chat/aplication/context/ChatContext";

const Stack = createNativeStackNavigator<ExternalStackParams>();

export const ExternalRoutes = () => {
  return (
    <ChatProvider>
      <Stack.Navigator>
     
        <Stack.Group>
          <Stack.Screen
            name="inChat"
            component={MainInChat}
            options={{
              header: ({ navigation, route }) => (
                <HeaderInChat navigation={navigation} route={route} />
              ),
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </ChatProvider>
  );
};
