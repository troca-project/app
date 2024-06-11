import { View, Text, StyleSheet } from "react-native";
import { ProductCardBasic } from "../shared/ProductCardBasic";
import { Product } from "../interfaces/Product";
import SkeletonContent from "react-native-skeleton-content";
import React from "react";

export const ProductsSet = ({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) => {
  return (
    <View className="" style={{ flex: 1 }}>
      {title ? <Text className="font-bold text-xl" style={styles.title}>{title}</Text> : null}

      {/* <SkeletonContent
        containerStyle={{ flex: 1, width: 300 }}
        isLoading={true}
        layout={[
          { key: "someId", width: 220, height: 20, marginBottom: 6 },
          { key: "someOtherId", width: 180, height: 20, marginBottom: 6 },
        ]}
      >
        <Text>Your content</Text>
        <Text>Other content</Text>
      </SkeletonContent> */} 

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {products.map((p) => (
          <View key={p.id} style={{ width: "49%" }}>
            <ProductCardBasic key={p.id} product={p}></ProductCardBasic>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
  },
});
