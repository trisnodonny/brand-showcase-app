import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../config/queries";
import Loading from "../components/Loading";
import NoData from "../components/NoData";

export default function ProductsScreen({}) {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Loading />;
  if (error) return <NoData />;

  const products = data.products;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <View style={styles.container}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </View>
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    height: 270,
    width: "100%",
  },
});
