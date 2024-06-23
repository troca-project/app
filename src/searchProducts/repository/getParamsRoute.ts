import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../routes/typesRoutes";

export const  getParamsRoute = <
StackParamList extends Record<string, object | undefined>,
ScreenName extends keyof StackParamList
>(screenName: ScreenName): RouteProp<StackParamList, ScreenName>['params'] => {
// Obtén la ruta usando useRoute y devuelve los parámetros
return useRoute<RouteProp<StackParamList, ScreenName>>().params;
}