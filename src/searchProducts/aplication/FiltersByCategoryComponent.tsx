import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useFilters } from "./context/FiltersContext";
import { getFilterByCategory } from "../domain/mapFilters";
import {
  FiltersEntity,
  RadioProps,
  TypeInputFilters,
} from "../domain/filtersEntity";
import { FilterRadioButtonGroup } from "./FilterRadioButtonGroup";
import { capitalize } from "../../utils/capitalize";
import { ColorPicker } from "../../shared/ColorPicker";

export const FiltersByCategoryComponent = ({ handleFilterChange }) => {
  const { filters, setFilters, countFilters } = useFilters();

  const filtersByCategory = getFilterByCategory("clothes"); //RECIBIR LA CATEGORIA DE LOS PRODUCTOS QUE RESULTARON DE LA BUSQUEDA

  return (
    <View>
      {Object.keys(filtersByCategory).map((k) => {
        return (
          <View key={k}>

            {filtersByCategory[k].typeInput === TypeInputFilters.radio ? (
              <FilterRadioButtonGroup
                title={capitalize(filtersByCategory[k].traduction)}
                onValueChange={(value) => handleFilterChange(k, value)}
                value={filters[k]}
                filters={filtersByCategory[k].values}
              />
            ) : (
              <ColorPicker title={capitalize(filtersByCategory[k].traduction)}  colors={filtersByCategory[k].values} onChange={(value) => handleFilterChange(k, value)}></ColorPicker>
            )}
          </View>
        );
      })}
    </View>
  );
};
