import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const StepTwoOnboarding = ({ setStep }) => {
  const { navigate } = useNavigation<any>();

  const finalizeOnboarding = async () => {
    await AsyncStorage.setItem("onboarding", "true");
    navigate("root");
  };

  return (
    <View className="flex-1" style={{ backgroundColor: colors.blue }}>
      <View className="flex-1 relative  items-center justify-center">
        <View className="items-center justify-center">
          <Text className="px-2 text-4xl mb-2 text-center font-black text-white">
            Transforma lo innecesario en algo valioso.
          </Text>

          <Text
            style={{ fontSize: 18 }}
            className="px-6 text-center text-white"
          >
            Publica tus productos e intercambia con personas de tu zona
          </Text>
        </View>

        <View className="pb-5 px-6 absolute flex-row bottom-0 ">
          <TouchableOpacity
            onPress={() => setStep(0)}
            activeOpacity={0.7}
            className="rounded-full py-3 px-6 flex-row gap-x-1 justify-center items-center "
          >
            <Text className="font-medium text-white">Volver</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={finalizeOnboarding}
            activeOpacity={0.7}
            className="bg-white rounded-full py-3 px-6 flex-row gap-x-1 justify-center items-center "
          >
            <Text className="font-medium">Comenzar</Text>
            <Ionicons name="arrow-forward" size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
