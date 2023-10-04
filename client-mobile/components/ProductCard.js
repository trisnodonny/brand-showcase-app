import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ width: 180 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProductDetails", {
              productId: product.id,
            });
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: product.mainImg,
            }}
          />
        </TouchableOpacity>
        <View style={{ marginBottom: 70 }}>
          <Text style={{ marginTop: 10, fontWeight: 500 }}>{product.name}</Text>
          <Text style={{ fontSize: 10, marginBottom: 5 }}>
            {product?.Category?.name}
          </Text>
          <Text>{product.price}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 270,
    width: "100%",
  },
});
