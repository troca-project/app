import { MainDetail } from "../detail/MainDetail";
import { StackHome } from "../home/StackHome";
import { MainSearchProducts } from "../searchProducts/aplication/MainSearchProducts";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { RootStack } from "./RootStack";
import { RootBottomTab } from "./RootBottomTab";

interface RouteConfig {
    name:string;
    component:React.ComponentType<any>;
    options:NativeStackNavigationOptions;
}

export const allRoutes:RouteConfig[] = [
    {
        name:"root", 
        component:require('./RootBottomTab').RootBottomTab, 
        options:{
            headerShown:false
        }
    },
]

