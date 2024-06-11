import { Platform } from "react-native";

export default {
    borderless: false,
    foreground: Platform.OS === "android" && Platform.Version >= 23,
    radius: 500,
  };
  