import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { allRoutes } from "../routes/Routes";
import { RootStackParams } from "../routes/typesRoutes";
import {
  FlatList,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Header } from "../shared/Header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Constants from "expo-constants";
import Octicons from "@expo/vector-icons/Octicons";
import { Link, useIsFocused, useNavigation } from "@react-navigation/native";
import colors from "../theme/colors";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

const Drawer = createDrawerNavigator<RootStackParams>();

export const SideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: "front",
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    >
      {allRoutes.map((r: any) => (
        <Drawer.Screen key={r.name} name={r.name} component={r.component} />
      ))}
    </Drawer.Navigator>
  );
};

const DrawerContent = (props: DrawerContentComponentProps) => {
  props.navigation;
  const mockMenu = [
    {
      id: 1,
      label: "Inicio",
      icon: (props: any) => renderIconDrawer("home", props),
      to: "home",
    },
    {
      id: 2,
      label: "Buscar",
      icon: (props: any) => renderIconDrawer("search", props),
      route: "search",
    },
    {
      id: 3,
      label: "Detail",
      icon: (props: any) => renderIconDrawer("plus", props),
      route: "detail",
    },
  ];

  function renderIconDrawer(icon: any | string, props: any) {
    return (
      <View style={{ paddingLeft: 10, width: 40, alignItems: "center" }}>
        <Octicons size={24} name={icon} color={props.color}></Octicons>
      </View>
    );
  }

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingTop: Constants.statusBarHeight,
        paddingStart: 0,
        paddingEnd: 0,
      }}
      style={{ paddingTop: 0 }}
      {...props}
    >
      {/* <DrawerItemList {...props} /> */}

      <View
        style={{
          backgroundColor: colors.yellow,
          flexDirection: "column",
          justifyContent: "flex-start",
          height: 150,
        }}
      >
        <TouchableOpacity activeOpacity={0.4}>
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 999,
                backgroundColor: "#f5f5f5",
                borderWidth: 1,
                borderColor: "#262626",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Octicons size={30} name="person" />
            </View>

            <View style={{ flexDirection: "column", gap: 0 }}>
              <Text style={{ fontSize: 20, color: "#000", fontWeight: "500" }}>
                Amaru Daicz
              </Text>
              <Text style={{}}>Mi perfil</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ paddingHorizontal: 20 }}>
          <Pressable
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 25,
              backgroundColor: "#ffffff40",
              overflow: "hidden",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Octicons name="package" size={20} />
              <Text style={{}}>Mis productos</Text>
            </View>

            <Octicons name="chevron-right" style={{}} size={20} />
          </Pressable>
        </View>
      </View>

      {mockMenu.map((e, i) => {
        const focused = i === props.state.index;
        return (
          <CustomDrawerItem
            key={i}
            e={e}
            focused={focused}
            navigation={props.navigation}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

const CustomDrawerItem = ({
  e,
  focused,
  navigation,
}: {
  e: any;
  focused: boolean;
  navigation: DrawerNavigationHelpers;
}) => {
  return (
    <DrawerItem
      inactiveTintColor="#232323"
      activeTintColor="blue"
      style={{ marginHorizontal: 0, borderRadius: 0, marginVertical: 0 }}
      labelStyle={{ fontSize: 16, marginLeft: -10 }}
      pressColor="#g1g1g1"
      label={e.label}
      icon={(props) => e.icon(props)}
      onPress={() => {
        navigation.jumpTo(e.to);
      }}
      key={e.id}
      focused={focused}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#fff",
  },
});
