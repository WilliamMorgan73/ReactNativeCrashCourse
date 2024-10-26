import { View, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {

  return (
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
        <TextInput
          value={value}
          placeholder= "Search for a video topic"
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          className="flex-1 text-white font-pregular text-base mt-0.5"
          secureTextEntry={title === "Password" && !showPassword}
        />

        <Pressable>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </Pressable>
      </View>
  );
};

export default SearchInput;
