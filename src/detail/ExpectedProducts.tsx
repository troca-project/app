import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Product } from "../interfaces/Product";
import colors from "../theme/colors";
import React from "react";

export const ExpectedProducts = ({
  product,
  overflowChips,
}: {
  product: Product;
  overflowChips?: boolean;
}) => {
  
  const renderChips = () => {
    return [
      "Moto G 5s PLUS",
      "Samsung A23",
      "Samsung A12",
      "iPhone X",
      "Laptop",
    ].map((e, i) => (
      <Text
        key={i}
        style={{
          paddingVertical: 5,
          paddingHorizontal: 18,
        }}
        className="bg-gray-200 rounded-full"
      >
        {e}
      </Text>
    ));
  };

  const content = (
    <View className="px-2 pb-3" >
      <Text style={{ marginBottom: 5}}>
        Recibe <Ionicons name="swap-vertical" size={17} />{" "}
      </Text>
      <View style={{ flexDirection: "row", gap: 5, flexWrap: "wrap" }}>
        {overflowChips ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: "#D1D5DE80",
                borderRadius: 20,
                fontSize: 12,
              }}
            >
              Moto G 5s PLUS
            </Text> 
              {/* MOSTRAR LOS EXPECTED PRODUCTS QUE VIENEN CON EL PRODUCTO Y SI HAy MAS DE UNO MOSTRAR +...  */}
            <View style={{position:'relative'}}>
              <Text
                style={{
                  width: 27,
                  height: 27,
                  textAlignVertical: "center",
                  textAlign: "center",
                  backgroundColor: colors.yellow,
                  borderRadius: 50,
                  fontSize: 12,
                  zIndex:2
                }}
              >
                +{Math.floor(product.rating + Math.random())}
              </Text>
              <Text
                style={{
                  position:'absolute',
                  top:0,
                  left:3,
                  width: 27,
                  height: 27,
                  textAlignVertical: "center",
                  textAlign: "center",
                  backgroundColor:  colors.yellow +'50',
                  borderRadius: 50,
                  zIndex:1
                }}
              >
              </Text>
              <Text
                style={{
                  position:'absolute',
                  top:0,
                  left:8,
                  width: 27,
                  height: 27,
                  textAlignVertical: "center",
                  textAlign: "center",
                  backgroundColor: colors.yellow + '50',
                  borderRadius: 50,
                }}
              >
              </Text>

            </View>
          </View>
        ) : (
          renderChips()
        )}
      </View>
    </View>
  );

  return content;
};

const styles = StyleSheet.create({
  wrapedChips: {
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
  },

  scrollXChips: {
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
  },
});
