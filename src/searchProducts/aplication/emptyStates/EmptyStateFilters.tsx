import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../../theme/colors";
import { useFilters } from "../context/FiltersContext";
import { Animated } from "react-native";

export const EmptyStateFilters = () => {
  const { countFilters, setFilters } = useFilters();
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500, // duración de la animación en milisegundos
      useNativeDriver: true, // es importante para el rendimiento en React Native
    }).start();
  }, []);

  return (
    <Animated.View className="flex-1" style={{ opacity }}>
      <View className="px-3 flex-1 ">
        <View className="flex-1 justify-center">
          <View className="items-center ">
            <View className="flex-row">
              <View className="relative mb-16 nmr">
                <Ionicons name="search" color={"#000000"} size={45}></Ionicons>

                <View
                  className="absolute w-20 h-20 -top-10 -left-10 rounded-full opacity-20 "
                  style={{ backgroundColor: colors.green }}
                ></View>
                <View
                  className="absolute w-20 h-20 -left-5 rounded-full opacity-20 "
                  style={{ backgroundColor: colors.green }}
                ></View>
                <View
                  className="absolute w-20 h-20 -left-20 rounded-full opacity-20 "
                  style={{ backgroundColor: colors.green }}
                ></View>
                <View
                  className="absolute w-20 h-20 -left-20 rounded-t-full opacity-20 "
                  style={{ backgroundColor: colors.green }}
                ></View>
                <View
                  className="absolute w-20 h-20 -top-10 -left-24 rounded-b-full opacity-20 "
                  style={{ backgroundColor: colors.green }}
                ></View>
              </View>
            </View>

            <Text className="text-xl mb-2 font-bold">
              No hay resultados para la búsqueda
            </Text>

            <Text className={`opacity-80 mb-5`}>
              Intenta buscar con otra referencia
            </Text>

            <View className="h-12">
              {countFilters ? (
                <View className="">

                  <Pressable
                    className="py-3 px-8 rounded-full"
                    style={{ backgroundColor: colors.green }}
                    onPress={() => setFilters({})}
                  >
                    <Text className="text-white">
                      Restablecer Filtros ({countFilters})
                    </Text>
                  </Pressable>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
