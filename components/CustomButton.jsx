import { Text, Pressable, Platform } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <Pressable
      onPress={handlePress}
      android_ripple={{ color: "rgba(255, 255, 255, 0.3)", borderless: false }}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } ${Platform.OS === "ios" && "active:opacity-50"}`}
      style={{ overflow: "hidden" }} // Ensures ripple stays within button bounds
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
