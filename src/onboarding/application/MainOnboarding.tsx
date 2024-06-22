import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { StepOneOnboarding } from "./StepOneOnboarding";
import { StepTwoOnboarding } from "./StepTwoOnboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import colors from "../../theme/colors";

export const MainOnboarding = () => {
  const [step, setStep] = useState(0);
  const { navigate } = useNavigation<any>();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const checkOnboard = async () => {
      const isCompleteOnboarding = await AsyncStorage.getItem("onboarding");
      setLoader(false);
      console.log(isCompleteOnboarding);

      if (isCompleteOnboarding) {
        navigate("root");
      }

    };
    checkOnboard();
  }, []);

  const renderSteps = () => {
    switch (step) {
      case 0:
        return <StepOneOnboarding setStep={setStep} />;

      case 1:
        return <StepTwoOnboarding setStep={setStep} />;
    }
  };

  const renderLoader = () => {
    return(
      <View className="flex-1 grow-1 items-center justify-center">
        <ActivityIndicator color={colors.green} size={50}></ActivityIndicator>
      </View>
    )
  };

  return loader ? renderLoader() : renderSteps();
};
