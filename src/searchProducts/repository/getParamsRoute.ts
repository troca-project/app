import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../routes/typesRoutes";

export function getParamsRoute<ScreenName extends keyof HomeStackParams>(screenName: ScreenName) {
    return useRoute<NativeStackScreenProps<HomeStackParams, ScreenName>['route']>();
  }