import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Product } from "../interfaces/Product";
import colors from "../theme/colors";

export const LocationReferences = ({product}:{product:Product}) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#00000015",
        marginBottom: 10,
      }}
    >
      <Text>Rio Ceballos, Cordoba </Text>
      <Text
        style={{
          backgroundColor: colors.yellow,
          color: "#000",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      >
        <Ionicons name="location-outline" size={18} /> 10km de tu ubicación
      </Text>
    </View>
  );
};
