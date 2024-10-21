import { StatusBar } from "expo-status-bar";
import { Image, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    // Should be SafeAreaView but not working with nativeWind
    <View className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full items-center justify-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w--[300px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-3">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities With{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] -top-2 -right-40"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100 mt-7 text-center font-pregular ">
            Where creativity meets innovation: Embark on a journey of endless
            possibilities with Aora.
          </Text>

          <CustomButton title = "Get Started"
          handlePress={() => {}}
          // Not being applied - Don't know why
          containerStyles = "w-full mt-7"/>
        </View>
      </ScrollView>
    </View>
  );
}
