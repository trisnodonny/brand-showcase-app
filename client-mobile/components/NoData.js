import { StyleSheet, Text, View } from "react-native";

export default function NoData() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text>No data found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
