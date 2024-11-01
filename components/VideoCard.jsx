import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Video, ResizeMode } from "expo-av";

import { icons } from "../constants";
import { savePost, unsavePost } from "../lib/appwrite";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
    videoId,
  },
  userId,
}) => {
  const [play, setPlay] = useState(false);

  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = async () => {
    try {
      if (bookmark) {
        await unsavePost(userId, videoId);
      } else {
        await savePost(userId, videoId);
      }
      setBookmark(!bookmark);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-col items-center px-4 mb-8">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="contain"
            ></Image>
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Pressable onPress={toggleBookmark}>
            <Image
              source={icons.bookmark}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor={bookmark ? "#FF9C01" : "#FFFFFF"}
            />
          </Pressable>
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (!status.isPlaying) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <Pressable
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </Pressable>
      )}
    </View>
  );
};

export default VideoCard;
