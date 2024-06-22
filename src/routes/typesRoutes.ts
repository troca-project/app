import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product } from "../interfaces/Product";

export type RootStackParams = {
  root: undefined;
  onboarding:undefined;
};

export type HomeStackParams = {
  home: undefined;
  detail: Product;
  search:{
    type?:'query'|'category';
    title?:string;
    query:string;
    have:string
  };
  searchBar:undefined;
  category:{id:number, name:string};
};

export type ExploreStackParams = {
  explore: undefined;
  searchBar:undefined;
  search:{
    type?:'query'|'category';
    title?:string;
    query:string;
    have:string;
  };

  detail: Product;
  category:{id:number, name:string, category:any};
};



export type ParamsDetailRoute = NativeStackNavigationProp<HomeStackParams, 'detail'>
export type ParamsCategoryRoute = NativeStackNavigationProp<HomeStackParams, 'category'>
export type ParamsSearchRoute = NativeStackNavigationProp<HomeStackParams, 'search'>

