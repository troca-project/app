import React, { useContext, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import colors from "../../theme/colors";
import { FiltersContext, useFilters } from "./context/FiltersContext";
import { FiltersEntity, SortByType } from "../domain/filtersEntity";
import { filtersByCategory, filtersShowAllways } from "../domain/mapFilters";
import { FilterRadioButtonGroup } from "./FilterRadioButtonGroup";
import { FiltersByCategoryComponent } from "./FiltersByCategoryComponent";

export const FiltersProducts = ({ onclose }) => {
  const { filters, setFilters, countFilters} = useFilters();

  console.log(filters, 'FiltersProducts');
  
  const applyFilters = () => {
    setFilters(filters);
    onclose()
  };

  const resetFilters = () => {
    setFilters({});
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    })
  };

  return (
    <View className="flex-1">
      <View
        className="flex-row justify-between py-3 px-4 bg-white"
        style={{
          elevation: 2,
          shadowOffset: {
            width: 0,
            height: 4, // Desplazamiento positivo hacia abajo para la sombra
          },
        }}
      >
        <Text className="text-2xl font-bold ">Filtros</Text>
        <Pressable
          onPress={onclose}
          className="rounded-full bg-black w-8 h-8 flex justify-center items-center"
        >
          <Ionicons color={"#fff"} name="close" size={25}></Ionicons>
        </Pressable>
      </View>

      <ScrollView className="flex-1">
        <View className="pt-4 px-4">

        <Text>
            {JSON.stringify(filters)}
          </Text>


          <FilterRadioButtonGroup
            title="Ordenar por"
            filters={filtersShowAllways.sortBy}
            value={filters.sortBy}
            onValueChange={(value: any) => handleFilterChange('sortBy',value)}
          />

          <FilterRadioButtonGroup
            title="Estado"
            filters={filtersShowAllways.state}
            value={filters.state}
            onValueChange={(value: any) => handleFilterChange('state',value)}
            
          />

          <FiltersByCategoryComponent handleFilterChange={handleFilterChange} ></FiltersByCategoryComponent>

        </View>
      </ScrollView>

      <View
        className="flex-row gap-3 pb-4 pt-1 px-4 bg-white"
        style={{ elevation: 10 }}
      >
        <TouchableOpacity
          activeOpacity={0.3}
          className="py-2 px-4 rounded-full bg-white border border-gray-500 flex-1 justify-center items-center"
          onPress={resetFilters}
        >
          <Text className="font-medium">
            Restablecer {countFilters > 0 ? `(${countFilters})` : ""}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          className="py-2 px-4 rounded-full bg-black flex-1 justify-center items-center"
          onPress={applyFilters}
        >
          <Text className="text-white font-medium">Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
