import { View, Text } from "react-native";
import { Product } from "../interfaces/Product";
import { HeaderDetailProduct } from "./HeaderDetailProduct";

export const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <View style={{ }}>
      <View style={{ paddingHorizontal: 15 }}>
        <Text
        className="font"
          style={{
            lineHeight:25,
            borderBottomWidth: 1,
            paddingBottom: 10,
            borderColor: "#00000015",
          }}
        >
          {product.description}
        </Text>
      </View>
    </View>
  );
};
