import { View,Text } from "react-native";
import { RadioButton } from "react-native-paper";
import colors from "../../theme/colors";
import { FilterRadioProps } from "../domain/filtersEntity";
import React from "react";

export const FilterRadioButtonGroup = ({ title, filters, value, onValueChange }:FilterRadioProps) => {
    return (
      <View className="mb-4 pb-4 border-b border-neutral-200">
        <Text className="font-medium mb-3 text-lg">{title}</Text>
        
        <RadioButton.Group value={value} onValueChange={onValueChange}>
          {filters.map((filter, index) => (
            <View key={index} className="flex-row items-center">
              <RadioButton color={colors.green} value={filter.value} />
              <Text className="pl-3">{filter.description}</Text>
            </View>
          ))}
        </RadioButton.Group>
      </View>
    );
  };