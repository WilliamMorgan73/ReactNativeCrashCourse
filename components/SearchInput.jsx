import { View, TextInput, Pressable, Image, Alert } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ InitialQuery, placeHolder }) => {
  const pathName = usePathname();
  const [query, setQuery] = useState(InitialQuery || "");

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        value={query}
        placeholder={placeHolder || "Search"}
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
        className="flex-1 text-white font-pregular text-base mt-0.5"
      />

      <Pressable
        onPress={() => {
          if (!query) {
            Alert.alert("Please enter a search query");
          }
          if (pathName.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </Pressable>
    </View>
  );
};

export default SearchInput;
