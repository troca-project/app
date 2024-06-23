import { NavigationProp } from "@react-navigation/native";

export interface ChatStackParams{
    inChat:ParamsInChat
}

export interface ParamsInChat{
    title:string,
    chat_id:number
}

export type ChatStackNavigationProp = NavigationProp<ChatStackParams>;
