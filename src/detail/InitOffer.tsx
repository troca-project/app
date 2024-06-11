import { View } from "react-native"
import { ButtonBasic } from "../buttons/ButtonBasic"
import { Product } from "../interfaces/Product"

export const InitOffer = ({product}:{product:Product} ) => {
    return(
        <View style={{paddingHorizontal:15}}>
              <ButtonBasic title="Iniciar oferta"></ButtonBasic>
          <ButtonBasic
            title="Agregar a favoritos"
            type="secondary"
          ></ButtonBasic>
        </View>
    )
}