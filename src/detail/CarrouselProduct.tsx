import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export const CarrouselProduct = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (index: number) => setCurrentIndex(index);

  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: "#f1f1f1",
        marginBottom: 40,
        position: "relative",
      }}
    >
      <Swiper style={{ height: 400 }} paginationStyle={{ bottom: -20 }} loadMinimal >
        {images.map((imageUrl, index) => (
          <View key={index} style={{}}>
            <Image
              source={{ uri: imageUrl }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              }}
            />
          </View>
        ))}
      </Swiper>

      <TouchableOpacity style={[styles.containerIcon, styles.iconHeart]}>
        <Ionicons
          style={[styles.icon]}
          name="heart-outline"
          size={25}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.containerIcon, styles.iconShare]}>
        <Ionicons
          style={[styles.icon, {marginRight:2}]}
          name="share-social-outline"
          size={25}
          color="white"
        />
      </TouchableOpacity>

      {/* <Text style={{position:'absolute', top:10, left:10, padding:5}}>{currentIndex + 1}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
    backgroundColor: "#00000060",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  iconHeart: {
    top: 10,
    right: 10,
  },
  iconShare: {
    bottom: 10,
    right: 10
  },
  icon: {
    marginTop: 2,
  },
});
