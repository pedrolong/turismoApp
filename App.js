// LINKS PINTEREST:
// https://br.pinterest.com/pin/290411875983323427/
// https://br.pinterest.com/pin/1900024837827717/
// https://br.pinterest.com/pin/11399805453558691/
// https://br.pinterest.com/pin/916834436624777654/

import React, { useState, useEffect } from "react";
// Import fonts
import { useFonts } from "expo-font";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import Index from "./src/routes";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StylesTelaInicio } from "./src/styles/StyleTelainicio";

export default function App() {
  const [start, setStart] = useState(false);
  const [heightValue] = useState(new Animated.Value(1000));

  // Função para iniciar a animação quando o componente é montado
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(heightValue, {
        toValue: 0, // Defina o valor final da altura aqui
        duration: 5000,
        useNativeDriver: false, // `useNativeDriver` não é suportado para animações de layout
      }).start();
    }, 2000);
  }, [start]);

  const [fontsLoaded] = useFonts({
    "PoetsenOne-Regular": require("./src/assets/fonts/PoetsenOne-Regular.ttf"),
    "JuliusSansOne-Regular": require("./src/assets/fonts/JuliusSansOne-Regular.ttf"),
    "CormorantGaramond-Light": require("./src/assets/fonts/CormorantGaramond-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {start ? (
        <View style={{ flex: 1 }}>
          <Index />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          <ImageBackground
            source={require("./src/assets/images/homepage2.jpeg")}
            style={StylesTelaInicio.imgbackground}
          >
            <View style={StylesTelaInicio.sombratelainicio}>
              <View style={StylesTelaInicio.algtelainicio}>
                <EvilIcons
                  name="location"
                  size={60}
                  color="white"
                  style={{ marginLeft: 50 }}
                />
                <Text style={StylesTelaInicio.txtTitulo}>TrekTrek</Text>
                <Text style={StylesTelaInicio.txtIntroduçao}>
                  Descubra seu proximo destino!
                </Text>
              </View>
              <View style={StylesTelaInicio.algtelainicio2}>
                <TouchableOpacity
                  style={StylesTelaInicio.btninicio}
                  onPress={() => setStart(true)}
                >
                  <AntDesign name="arrowright" size={34} color="white" />
                </TouchableOpacity>

                <Text style={StylesTelaInicio.txtconteudo}>
                  Aventure-se por paisagens {"\n"} que vão despertar seus
                  sentidos.
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </>
  );
}
