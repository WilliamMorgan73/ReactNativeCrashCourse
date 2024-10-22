import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        {/* If not centered change to min-h-[85vh]*/}
        <View className="w-full justify-center h-full px-4 my-6"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
