import { View , Text} from "react-native"
import { Product } from "../interfaces/Product"

export const HeaderDetailProduct = ({product}:{product:Product}) => {
    return(
        <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 12, color: "#0000008C", marginBottom:5 }}>Usado</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: "#000000E6",
            opacity: 0.9,
          }}
        >
          {product.title}
        </Text>
      </View>
    )
}