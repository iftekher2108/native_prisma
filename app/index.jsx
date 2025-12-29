import { Text, View, Image, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="p-2">
      <View className="flex-1 justify-center items-center">
        <Image className="w-20 h-20 rounded-full" source={require("../assets/image/iftekher.jpg")} />
      <Text className="text-2xl mt-2 font-bold text-center">iftekher mahmud</Text>
      </View>
    </ScrollView>
  );
}
