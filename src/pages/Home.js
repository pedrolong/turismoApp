import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
    imgUrl: require("../assets/images/paris.jpg"),
    iconUrl: require("../assets/icons/paris.png"),
  },
  {
    imgUrl: require("../assets/images/newYork.jpg"),
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
];
function CarouselCardItem({ item, index }) {
  return (
    <View
      style={{
        height: 400, // Define a altura do carousel
        width: "100%", // Define a largura do carousel
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30, // Indica o espaço acima do elemento
      }}
    >
      <View
        style={{
          height: 350,
          width: 300,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30, // Define o espaço acima do elemneto
          shadowColor: "#326e6c", // Define a cor da sombra
          shadowOffset: {
            // Define o deslocamento da sombra
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.58, // Define a opacidade da sombra
          shadowRadius: 16.0, // Define o raio de desfocagem da sombra
          elevation: 24, // Adiciona uma sombra projetada ao item
          borderRadius: 30, // Deixa a borda arredondada
          backgroundColor: "white", // Define a cor de fundo
          overflow: "hidden", // Especifica quando o conteúdo de um elemento de nível de bloco deve ser cortado
        }}
      >
        <ImageBackground
          source={item.imgUrl} // Style da imagem de fundo
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 30,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity // Style do botão
            style={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden", // Faz com que as visualizações sejam cortadas
              marginTop: 5, // Define o espaço acima do botão
              marginRight: 10,
            }}
          >
            <Image
              source={item.iconUrl}
              style={{ width: 30, height: 30 }} // Imagem ultilizada dentro do botão
            />
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
          <Text
            style={{
              fontFamily: "PoetsenOne-Regular",
              fontSize: 30, // Define o tamanho da fonte ultilizada
              marginLeft: 20, // Define o espaço entre a borda esquerda de um elemento e seu entorno
            }}
          >
            Explore Places
          </Text>
        </View>
        <View style={styles.viewButtons}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "CormorantGaramond-Light",
                color: "#326e6c",
                fontSize: 18,
              }}
            >
              Sights
            </Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "#326e6c",
                marginTop: 5,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "CormorantGaramond-Light",
                color: "black",
                fontSize: 18,
              }}
            >
              Tours
            </Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "white",
                marginTop: 5,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "CormorantGaramond-Light",
                color: "black",
                fontSize: 18,
              }}
            >
              Adventures
            </Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "white",
                marginTop: 5,
              }}
            ></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 500,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontFamily: "PoetsenOne-Regular",
            }}
          >
            Popular
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 600,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Londres")}>
            <View
              style={{
                width: "90%",
                height: 100,
                marginBottom: 10,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",

                flexDirection: "row",

                shadowColor: "#326e6c",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.59171875,
                shadowRadius: 8,
                elevation: 12,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/london.jpg")}
                  style={{
                    height: "80%",
                    width: "80%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontFamily: "PoetsenOne-Regular" }}>
                  Londres
                </Text>
                <Text style={{ fontFamily: "CormorantGaramond-Light" }}>
                  Histórica, Diversa, Vibrante.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Paris")}>
            <View
              style={{
                width: "90%",
                height: 100,
                marginBottom: 10,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",

                flexDirection: "row",

                shadowColor: "#326e6c",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.59171875,
                shadowRadius: 8,
                elevation: 12,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/paris.jpg")}
                  style={{
                    height: "80%",
                    width: "80%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontFamily: "PoetsenOne-Regular" }}>Paris</Text>
                <Text style={{ fontFamily: "CormorantGaramond-Light" }}>
                  Romântica, Encantadora, Cultural.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("NewYork")}>
            <View
              style={{
                width: "90%",
                height: 100,
                marginBottom: 10,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",

                flexDirection: "row",

                shadowColor: "#326e6c",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.59171875,
                shadowRadius: 8,
                elevation: 12,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/newYork.jpg")}
                  style={{
                    height: "80%",
                    width: "80%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontFamily: "PoetsenOne-Regular" }}>
                  Nova York
                </Text>
                <Text style={{ fontFamily: "CormorantGaramond-Light" }}>
                  Cosmopolita, Energética, Inspiradora.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Toquio")}>
            <View
              style={{
                width: "90%",
                height: 100,
                marginBottom: 10,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",

                flexDirection: "row",

                shadowColor: "#326e6c",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.59171875,
                shadowRadius: 8,
                elevation: 12,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/toquio.jpg")}
                  style={{
                    height: "80%",
                    width: "80%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontFamily: "PoetsenOne-Regular" }}>Tóquio</Text>
                <Text style={{ fontFamily: "CormorantGaramond-Light" }}>
                  Futurística, Efervescente, Tradicional.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RioDeJaneiro")}>
            <View
              style={{
                width: "90%",
                height: 100,
                marginBottom: 10,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",

                flexDirection: "row",

                shadowColor: "#326e6c",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.59171875,
                shadowRadius: 8,
                elevation: 12,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/rioDeJaneiro.jpg")}
                  style={{
                    height: "80%",
                    width: "80%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontFamily: "PoetsenOne-Regular" }}>
                  Rio de Janeiro
                </Text>
                <Text style={{ fontFamily: "CormorantGaramond-Light" }}>
                  Exuberante, Vibrante, Tropical.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Dubai")}>
            <View
              style={{
                width: "90%",
                height: 100,
                marginBottom: 10,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",

                flexDirection: "row",

                shadowColor: "#326e6c",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.59171875,
                shadowRadius: 8,
                elevation: 12,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/newYork.jpg")}
                  style={{
                    height: "80%",
                    width: "80%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontFamily: "PoetsenOne-Regular" }}>Dubai</Text>
                <Text style={{ fontFamily: "CormorantGaramond-Light" }}>
                  Cosmopolita, Energética, Inspiradora.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Veneza")}>
            <View
              style={{
                width: "90%",
                height: 100,
                marginBottom: 10,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",

                flexDirection: "row",

                shadowColor: "#326e6c",
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.59171875,
                shadowRadius: 8,
                elevation: 12,

                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/newYork.jpg")}
                  style={{
                    height: "80%",
                    width: "80%",
                    borderRadius: 20,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ fontFamily: "PoetsenOne-Regular" }}>Veneza</Text>
                <Text style={{ fontFamily: "CormorantGaramond-Light" }}>
                  Cosmopolita, Energética, Inspiradora.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
}
