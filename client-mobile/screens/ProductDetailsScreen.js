import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/client";
import { GET_PRDUCT_DETAILS } from "../config/queries";
import Loading from "../components/Loading";

export default function ProductDetailsScreen({ route }) {
  const { productId } = route.params;

  const { loading, error, data } = useQuery(GET_PRDUCT_DETAILS, {
    variables: {
      productId: productId,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Text>Failed fetching data details</Text>;

  const product = data.product;

  console.log(product, "<<<><><><>");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <View>
              <Image
                style={{ height: 600, width: "100%" }}
                source={{
                  uri: product.mainImg,
                }}
              />
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: 600,
                    textAlign: "center",
                    marginVertical: 25,
                  }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{
                    fontWeight: 200,
                    textAlign: "center",
                    marginVertical: 20,
                  }}
                >
                  Posted by: {product.author.username}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 25,
                  paddingVertical: 40,
                }}
              >
                <Text style={{ fontSize: 16, lineHeight: 25 }}>
                  {product.description}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  paddingVertical: 40,
                  gap: 5,
                }}
              >
                {product?.Images.map((img) => (
                  <Image
                    key={img.id}
                    style={{ height: 280, width: "100%", flex: 1 }}
                    source={{
                      uri: img.imgUrl,
                    }}
                  />
                ))}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: 25,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text>{product.name}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row-reverse" }}>
                  <Text>{product.price}</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: 25,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Button title="Select size" />
                </View>
                <View style={{ flex: 1 }}>
                  <Button color="#000" title="Add" />
                </View>
              </View>
            </View>
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
