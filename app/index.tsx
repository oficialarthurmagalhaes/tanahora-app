import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

export default function Index() {
  return (
    <View
     style={styles.container}>
      <FlatList data={cities} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B", 
      flex: 1,
  },
  title: {
    color: "white", 
    fontSize: 30,
    fontWeight: 600,
  }
})