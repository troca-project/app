import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import colors from "../../theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../routes/typesRoutes";

export const StepOneOnboarding = ({ setStep }) => {


  return (
    <View className="flex-1" style={{ backgroundColor: colors.green }}>
      <View className="flex-1 relative  items-center justify-center">

        <View className='items-center justify-center'>
            <Text className="px-2 text-4xl mb-2 text-center font-black text-white">
            Intercambia lo que ya no necesitas, descubre algo nuevo.
            </Text>

            <Text style={{ fontSize: 18 }} className="px-6 text-center text-white">
            Sé parte del cambio, de una manera única.
            </Text>
            
        </View>

        <View className='pb-5 px-6 absolute bottom-0 '>
            <TouchableOpacity onPress={() => setStep(1)} activeOpacity={.7} className="bg-white rounded-full py-3 px-6 flex-row gap-x-1 justify-center items-center ">
                <Text className="font-bold">Siguiente</Text>
                    <Ionicons name="arrow-forward" size={22}/>
            </TouchableOpacity>
        </View>


      </View>
    </View>
  );
};
