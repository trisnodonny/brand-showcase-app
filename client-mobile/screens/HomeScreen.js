import { StyleSheet, Text, View, Image, ScrollView} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";

const TextContent = ({ text }) => {
  return <Text style={{fontSize: 30, fontWeight: 500}}>{text}</Text>
}

export default function HomeScreen() {
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={{textAlign: "center", marginBottom: 40}}>
                Register & get 20% off your first purchase.{"\n"}
                Use code: NEW20
              </Text>
            </View>
            <View>
              <Image
                style={{...styles.image, backgroundColor: "#0046b5"}}
                source={{
                  uri: "https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/8/W36-Homepage-Ladies-Men-Divided-Kids-Baby-Sport-99-Super-Sale-Bhs.jpg",
                }}
              />
            </View>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: "https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/8/W36-Ladies-Discover-Your-New-Favourite-Mobile.jpg",
                }}
              />
            </View>
            <View>
              <Image
                style={{...styles.image, height: 60}}
                source={{
                  uri: "https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/8/W35-Homepage-Ladies-Men-Divided-Kids-Baby-Sport-Fresh-Style-Bhs.jpg"
                }}
                />
            </View>
            <View style={{marginBottom: 40}}>
              <Text style={{fontSize: 18}}>Shopping made easy!</Text>
            </View>
            <View>
              <Image 
                style={{...styles.image, marginBottom: 40}}
                source={{
                  uri: "https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/3/W10-Homepage-Find-The-Right-Size-Mobile.jpg"
                }}
              />
            </View>
            <View style={{display: "flex", alignItems: "center", gap: 20, marginBottom: 40}}>
              <TextContent text="Ladies" />
              <TextContent text="Men" />
              <TextContent text="Divided" />
              <TextContent text="Kids" />
              <TextContent text="Baby" />
              <TextContent text="Sport" />
              <TextContent text="Sale" />
            </View>
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fffcfc",
  },
  image: {
    height: 350,
    width: 350,
    resizeMode: "contain",
    marginBottom: 25
  }
})