import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { ProductsSet } from "../../home/ProductsSet";
import { Product } from "../../interfaces/Product";
import React, { useEffect, useState } from "react";
import { useFilters } from "./context/FiltersContext";
import { applyFilters } from "../domain/filtersFunctions";
import { EmptyStateFilters } from "./emptyStates/EmptyStateFilters";

export const ResultSearchProducts = ({
  products,
}: {
  products: Product[] | undefined;
  setProducts: any;
}) => {
  const { filters } = useFilters();
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAllProducts(products);
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const filteredProducts = applyFilters(allProducts!, filters);
    setFilteredProducts(filteredProducts);
    products ? setLoading(false) : null

    return () => {
      setFilteredProducts(undefined)
      console.log('desmontando');
    };
  }, [filters, allProducts]);

  return (
    <View className="flex-1 flex-grow ">
      {!filteredProducts && loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={50} color="#0000ff" />
        </View>
      ) : filteredProducts?.length ? (
        
        <ScrollView className="px-3">
          <ProductsSet products={filteredProducts} title="Resultados" />
        </ScrollView>
      ) : (
        <EmptyStateFilters></EmptyStateFilters>
      )}
    </View>
  );
};
