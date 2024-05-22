import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StylesHome } from "../styles/StylesHome";
import { styles } from "../styles/Styles";
// Import Carousel
import Carousel from "react-native-snap-carousel";

// Import fonts
import { useFonts } from "expo-font";

// Import useNavigation
import { useNavigation } from "@react-navigation/native";

const data = [
  // Links das imagens ultilizadas no carousel e nas telas de informações
  {
    imgUrl: require("../assets/images/london.jpg"),
    iconUrl: require("../assets/icons/londres.png"),
  },
  {
    imgUrl: require("../assets/images/pariscapa.png"),
    iconUrl: require("../assets/icons/paris.png"),
  },
  {
    imgUrl: require("../assets/images/novayorkcapa.jpg"),
    iconUrl: require("../assets/icons/newYork.png"),
  },
  {
    imgUrl: require("../assets/images/toquio.jpg"),
    iconUrl: require("../assets/icons/toquio.png"),
  },
  {
    imgUrl: require("../assets/images/rioDeJaneiro.jpg"),
    iconUrl: require("../assets/icons/rioDeJaneiro.png"),
  },
  {
    imgUrl: require("../assets/images/dubaicapa.jpg"),
    iconUrl: require("../assets/icons/DubaiIcon.jpeg"),
  },
  {
    imgUrl: require("../assets/images/venezacapa.jpg"),
    iconUrl: require("../assets/icons/venezaIcon.jpeg"),
  },
];
function CarouselCardItem({ item, index }) {
  return (
    <View style={StylesHome.imgcarosel}>
      <View style={StylesHome.Carosel}>
        <ImageBackground
          source={item.imgUrl} // Style da imagem de fundo
          style={StylesHome.imgcarosel2}
        >
          <TouchableOpacity // Style do botão
            style={StylesHome.btnicone}
          >
            <Image source={item.iconUrl} style={StylesHome.imgicone} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

export default function Home() {
  const navigation = useNavigation(); // Usado para navegar de um componente para outro

  const [fontsLoaded] = useFonts({
    // Permite o carregamento de fontes da web e usá-los em componentes
    // Link das fontes ultilizadas
    "PoetsenOne-Regular": require("../assets/fonts/PoetsenOne-Regular.ttf"),
    "JuliusSansOne-Regular": require("../assets/fonts/JuliusSansOne-Regular.ttf"),
    "CormorantGaramond-Light": require("../assets/fonts/CormorantGaramond-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={styles.header} // Style do cabeçalho
        >
          <Text style={StylesHome.txtexplore}>Conheça Lugares</Text>
        </View>
        <View style={styles.viewButtons}>
          <TouchableOpacity style={StylesHome.btnsights}>
            <Text style={StylesHome.txtlocais}>Locais </Text>
            <View style={StylesHome.bolinhalocais}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={StylesHome.txttours}>Passeios</Text>
            <View style={StylesHome.bolinhatours}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={StylesHome.txtadventures}>Aventuras</Text>
            <View style={StylesHome.bolinhaadventures}></View>
          </TouchableOpacity>
        </View>
        <View style={StylesHome.alturabtnscidades}>
          <Carousel
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={400}
            itemWidth={400}
            autoplay={true}
            autoplayInterval={3000}
            loop={true}
            layout={"dafult"}
            layoutCardOffset={`9`}
          />
        </View>
        <View>
          <Text style={StylesHome.txtpopular}>Popular</Text>
        </View>
        <View style={StylesHome.alinhamentobtncidades}>
          <TouchableOpacity onPress={() => navigation.navigate("Londres")}>
            <View style={StylesHome.botoescidades}>
              <View style={StylesHome.imgbtncidades}>
                <Image
                  source={require("../assets/images/london.jpg")}
                  style={StylesHome.imgbtncidades2}
                />
              </View>
              <View style={StylesHome.designtxtcidades}>
                <Text style={StylesHome.nomecidade}>Londres</Text>
                <Text style={StylesHome.descricaocidades}>
                  Histórica, Diversa, Vibrante.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Paris")}>
            <View style={StylesHome.botoescidades}>
              <View style={StylesHome.imgbtncidades}>
                <Image
                  source={require("../assets/images/pariscapa.png")}
                  style={StylesHome.imgbtncidades2}
                />
              </View>
              <View style={StylesHome.designtxtcidades}>
                <Text style={StylesHome.nomecidade}>Paris</Text>
                <Text style={StylesHome.descricaocidades}>
                  Romântica, Encantadora, Cultural.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("NewYork")}>
            <View style={StylesHome.botoescidades}>
              <View style={StylesHome.imgbtncidades}>
                <Image
                  source={require("../assets/images/novayorkcapa.jpg")}
                  style={StylesHome.imgbtncidades2}
                />
              </View>
              <View style={StylesHome.designtxtcidades}>
                <Text style={StylesHome.nomecidade}>Nova York</Text>
                <Text style={StylesHome.descricaocidades}>
                  Cosmopolita, Energética, Inspiradora.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Toquio")}>
            <View style={StylesHome.botoescidades}>
              <View style={StylesHome.imgbtncidades}>
                <Image
                  source={require("../assets/images/toquio.jpg")}
                  style={StylesHome.imgbtncidades2}
                />
              </View>
              <View style={StylesHome.designtxtcidades}>
                <Text style={StylesHome.nomecidade}>Tóquio</Text>
                <Text style={StylesHome.descricaocidades}>
                  Futurística, Efervescente, Tradicional.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RioDeJaneiro")}>
            <View style={StylesHome.botoescidades}>
              <View style={StylesHome.imgbtncidades}>
                <Image
                  source={require("../assets/images/rioDeJaneiro.jpg")}
                  style={StylesHome.imgbtncidades2}
                />
              </View>
              <View style={StylesHome.designtxtcidades}>
                <Text style={StylesHome.nomecidade}>Rio de Janeiro</Text>
                <Text style={StylesHome.descricaocidades}>
                  Exuberante, Vibrante, Tropical.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Dubai")}>
            <View style={StylesHome.botoescidades}>
              <View style={StylesHome.imgbtncidades}>
                <Image
                  source={require("../assets/images/dubaicapa.jpg")}
                  style={StylesHome.imgbtncidades2}
                />
              </View>
              <View style={StylesHome.designtxtcidades}>
                <Text style={StylesHome.nomecidade}>Dubai</Text>
                <Text style={StylesHome.descricaocidades}>
                  Moderna, Exuberante, Luxuosa.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Veneza")}>
            <View style={StylesHome.botoescidades}>
              <View style={StylesHome.imgbtncidades}>
                <Image
                  source={require("../assets/images/venezacapa.jpg")}
                  style={StylesHome.imgbtncidades2}
                />
              </View>
              <View style={StylesHome.designtxtcidades}>
                <Text style={StylesHome.nomecidade}>Veneza</Text>
                <Text style={StylesHome.descricaocidades}>
                  Tradicional, Romântica, Inspiradora.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={StylesHome.finaldapagina}></View>
      </ScrollView>
    </View>
  );
}
