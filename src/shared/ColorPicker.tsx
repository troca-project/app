import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFilters } from "../searchProducts/aplication/context/FiltersContext";
import androidRipple from "../utils/androidRipple";

interface Color {
  value: string;
  description: string;
  codeWind: string;
}

export const ColorPicker = ({
  colors,
  onChange,
  title,
}: {
  colors: Color[];
  onChange: (value) => void;
  title: string;
}) => {
    const {filters} = useFilters()
  const [selectedColor, setSelectedColor] = useState<string | null>(filters.color || null);

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color.value);
    onChange(color.value);
  };

  useEffect(()=>{
    setSelectedColor(filters.color || null);
  }, [filters])

  return (
    <View>
      <Text className="font-medium mb-3 text-lg">{title}</Text>

      <View className="flex-row flex-wrap gap-y-5 w-full bg- mb-4 pb-4 border-b border-neutral-200">
        {colors.map((e, i) => (
          <View key={i} className="items-center justify-center w-1/4">
            <Pressable
              android_ripple={androidRipple}
              onPress={() => handleColorSelect(e)}
              className={`w-8 h-8 rounded-full  ${e.codeWind} ${e.value === 'white' ? 'border border-gray-400':''} items-center justify-center `}
            >
                {selectedColor === e.value && 
                <FontAwesome size={20} color={e.value === 'white' ? 'black' : 'white'} name="check"></FontAwesome>
                }
            </Pressable> 

            <Text className="mt-1">{e.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
