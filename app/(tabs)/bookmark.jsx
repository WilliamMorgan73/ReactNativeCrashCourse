import { View, Text, FlatList, SafeAreaView } from "react-native";

import useAppwrite from "../../lib/useAppwrite";
import { searchPosts } from "../../lib/appwrite";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import VideoCard from "../../components/VideoCard";

import { useGlobalContext } from "../../context/GlobalProvider";

const Bookmark = () => {

  const { data: posts, refetch } = useAppwrite(() => searchPosts());

  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} userId = {user.$id} />}
        ListHeaderComponent={() => (
          <>
            <View className="flex my-6 pt-10 px-4">
              <Text className="text-2xl text-white font-psemibold pt-6">
                Saved Videos
              </Text>

              <View className="mt-6 mb-8">
                <SearchInput
                  placeHolder={"Search saved videos"}
                  refetch={refetch}
                />
              </View>
            </View>
          </>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="You haven't saved any videos"
            subtitle="Go ahead and bookmark your favorite videos"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
