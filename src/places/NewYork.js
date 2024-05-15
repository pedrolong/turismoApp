import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";

// Imports icons
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// Import useFonts
import { useFonts } from "expo-font";

// Import useNavigation
import { useNavigation } from "@react-navigation/native";

// Import Hook USESTATE
import { useState, useEffect } from "react";

//
const { height: DEVICE_HEIGHT } = Dimensions.get("window");

export default function NewYork() {
  const [vis, setVis] = useState(false);
  const [heightValue] = useState(new Animated.Value(0));

  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "CormorantGaramond-Light": require("../assets/fonts/CormorantGaramond-Light.ttf"),
    "Caveat-VariableFont_wght": require("../assets/fonts/Caveat-VariableFont_wght.ttf"),
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
  });

  useEffect(() => {
    if (vis) {
      Animated.timing(heightValue, {
        toValue: DEVICE_HEIGHT,
        duration: 7000,
        useNativeDriver: false,
      }).start();
    }
  }, [vis, heightValue, DEVICE_HEIGHT]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          width: "100%",
          height: "60%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 30,
              backgroundColor: "#326e6c",
              width: 40,
              height: 40,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("HomeStack")}
          >
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 30,
              backgroundColor: "#326e6c",
              width: 40,
              height: 40,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => alert("MAPS")}
          >
            <Fontisto name="world" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 20,
                fontSize: 30,
                fontFamily: "Pacifico-Regular",
                color: "#000",
              }}
            >
              the {"\n"}New York
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 18,
                fontFamily: "Caveat-VariableFont_wght",
                color: "#000",
              }}
            >
              New York, often called New York City or simply NYC, is the most
              populous city in the United States, located at the southern tip of
              New York State on one of the world's largest natural harbors.
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: "60%",
                backgroundColor: "#326e6c",
                padding: 5,
                width: "40%",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setVis(true)}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Caveat-VariableFont_wght",
                }}
              >
                MORE
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "40%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Image
              source={require("../assets/images/estatua.png")}
              style={{
                height: 200,
                width: 500,
                resizeMode: "center",
                marginRight: -230,
                transform: [{ rotate: "35deg" }],
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "40%",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontFamily: "Pacifico-Regular",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          Pictures:
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny2.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny3.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny4.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny5.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny6.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny7.png")}
            />
            <Image
              style={{
                height: "90%",
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
              source={require("../assets/images/ny8.png")}
            />
          </View>
        </ScrollView>
      </View>

      <Modal visible={vis}>
        <StatusBar hidden />
        <Animated.View style={{ width: "100%", height: heightValue }}>
          <ImageBackground
            source={require("../assets/images/newYorkBackground.jpeg")}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                width: "100%",
                height: "10%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  backgroundColor: "#326e6c",
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setVis(false);
                  heightValue.setValue(0);
                }}
              >
                <FontAwesome name="arrow-left" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                paddingBottom: 30,
              }}
            >
              <View
                style={{
                  width: "90%",
                  height: "50%",
                  borderRadius: 30,
                  padding: 30,
                  backgroundColor: "#326e6c88",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 18,
                  }}
                >
                  <FontAwesome5 name="map-pin" size={30} color="#FFFFFF" />
                  <Text style={{ marginLeft: 10, color: "#FFFFFF" }}>
                    Catedral de Iorque{"\n"}Iorque, Inglaterra
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    borderBottomWidth: 1,
                    borderColor: "#FFFFFF",
                    marginTop: 15,
                    marginBottom: 15,
                  }}
                ></View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 18,
                    justifyContent: "space-around",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="star" size={24} color="#ffffff" />
                    <Text style={{ marginLeft: 5, color: "#FFFFFF" }}>4.5</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome6
                      name="temperature-empty"
                      size={24}
                      color="#ffffff"
                    />
                    <Text style={{ marginLeft: 5, color: "#FFFFFF" }}>
                      16ºC
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Fontisto name="date" size={24} color="#ffffff" />
                    <Text style={{ marginLeft: 5, color: "#FFFFFF" }}>
                      7 days
                    </Text>
                  </View>
                </View>
                <View style={{ marginLeft: 18, marginTop: 15 }}>
                  <Text style={{ color: "#FFFFFF" }}>Description</Text>
                  <Text style={{ color: "#FFFFFF" }}>
                    New York, often called New York City[b] or simply NYC, is
                    the most populous city in the United States, located at the
                    southern tip of New York State on one of the world's largest
                    natural harbors.
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FFF",
                      padding: 5,
                      borderRadius: 20,
                      marginTop: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "#326e6c88" }}>Press me!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>
      </Modal>
    </View>
  );
}
