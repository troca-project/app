import { View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

export const TabIcon = ({focused, color, icon}:{focused:boolean, color:string, icon:any} ) => {
        return (
            <View style={{ }}>
              <Octicons size={24} name={icon} color={color}></Octicons>
            </View>
          );

}