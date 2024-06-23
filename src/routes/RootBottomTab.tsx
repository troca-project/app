import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../theme/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParams } from "../routes/typesRoutes";
import { MainDetail } from "../detail/MainDetail";
import { MainSearchProducts } from "../searchProducts/aplication/MainSearchProducts";
import { MainHome } from "../home/MainHome";
import { tabRoutes } from "./BottomTabRoutes";
import { TabIcon } from "../bottom-tab/TabIcon";
import React from "react";

const Tab = createBottomTabNavigator();

export const RootBottomTab = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { paddingVertical: 8 },
          tabBarStyle: { height: 60 },
          tabBarActiveTintColor: colors.green,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          unmountOnBlur: false,
        }}
      >
        {tabRoutes.map((r) => (
          <Tab.Screen
            options={{...r.options}}
            name={r.name}
            key={r.name}
            component={r.component}
            initialParams={r.initialParams}
          />
        ))}
      </Tab.Navigator>
  );
};
