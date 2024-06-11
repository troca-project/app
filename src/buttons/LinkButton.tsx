import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { ParamsDetailRoute, RootStackParams } from "../routes/typesRoutes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface LinkButtonProps {
  route: string;
  text: string;
  type?: "primary" | "secondary";
  style?:any
}

export const LinkButton = ({ route, text, type, style }: LinkButtonProps) => {
  const navigation = useNavigation<ParamsDetailRoute>();

  const navigate = () => {
    navigation.navigate(route as never);
  };

  return (
    <TouchableOpacity style={[styles.button, styles[type ?? "primary"], style]} onPress={navigate}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  textButton:{
    color:'white'
  },
  primary: {
    backgroundColor: "blue",
  },
  secondary: {
    backgroundColor: "green",
  },
});
