import { Image, Text, View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={{backgroundColor: "#e8e4e4"}}>
      <View style={{paddingHorizontal: 20, paddingVertical: 40}}>
        <View style={{marginBottom: 20, alignItems: "center", gap: 20}}>
          <Text style={styles.text}>SHOP</Text>
          <Text style={styles.text}>CORPORATE INFO</Text>
          <Text style={styles.text}>HELP</Text>
        </View>
        <View style={{display: "flex", alignItems: "center"}}>
          <Image
            style={{height: 65, width: 65}}
            source={{
              uri: "https://cdn.icon-icons.com/icons2/2845/PNG/512/hm_logo_icon_181277.png"
            }}
          />
          <Text style={{textAlign: "center", fontSize: 12, paddingHorizontal: 10}}>
            H&amp;M's business concept is to offer fashion and quality at the best price in a sustainable way.
            H&amp;M has since it was founded in 1947 grown into one of the world's leading fashion companies. The content of
            this site is copyright-protected and is the property of H&amp;M Hennes &amp; Mauritz AB.{"\n"}Customers Complaint
            Service, Directorate General of Consumer Protection and Trade Compliance, Ministry of Trade of the Republic of
            Indonesia, 0853-1111-1010 (WhatsApp)
          </Text>
          <View style={{display: "flex", flexDirection: "row", gap: 50, marginVertical: 20}}>
            <AntDesign 
              name="facebook-square"
              size={24}
            />
            <AntDesign 
              name="twitter"
              size={24}
            />
            <AntDesign 
              name="instagram"
              size={24}
            />
            <AntDesign 
              name="youtube"
              size={24}
            />
          </View>
          <Text style={{marginTop: 30}}>Indonesia | Rp</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "700"
  }
})