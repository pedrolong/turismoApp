import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import TxtPasseios from "../components/TxtPasseio";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/Styles";
import { StylesHome } from "../styles/StylesHome";
import { StylesPasseios } from "../styles/StylesPasseios";

//import fonts
import { useFonts } from "expo-font";

export default function Passeios() {
  const navigation = useNavigation();

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

  const imgmuseuferrari = {
    uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f8/1a/7c/caption.jpg?w=1200&h=-1&s=1",
  };
  const imgmuseulouvre = {
    uri: "https://i.pinimg.com/564x/70/63/8c/70638c755de3fc8d1d697a2c2a4fe86b.jpg",
  };
  const imgempire = {
    uri: "https://www.aventurasp.com.br/imagens/carousel-caverna-do-diabo-01.jpg",
  };
  const imgsantuariomeiji = {
    uri: "https://i.pinimg.com/564x/49/b9/d8/49b9d81bd8960bb6a91cd9eb1b51c3ea.jpg",
  };
  const imgcristoredentor = {
    uri: "https://i.pinimg.com/564x/c8/d4/26/c8d426f0fcb6b614b72d8eb59c3476dd.jpg",
  };
  const imgbigben = {
    uri: "https://i.pinimg.com/564x/61/07/aa/6107aa33285495f56911745647c3b906.jpg",
  };
  const imggondola = {
    uri: "https://i.pinimg.com/564x/b0/ee/a6/b0eea6ba8720a2b985dbf359de84c373.jpg",
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.header} // Style do cabeçalho
      >
        <Text style={StylesHome.txtexplore}>Conheça Lugares</Text>
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity
          style={StylesHome.btnsights}
          onPress={() => navigation.navigate("HomeStack")}
        >
          <Text style={StylesHome.txttours}>Locais </Text>
          <View style={StylesHome.bolinhatours}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={StylesHome.btnsights}
          onPress={() => navigation.navigate("Passeios")}
        >
          <Text style={StylesHome.txtlocais}>Passeios</Text>
          <View style={StylesHome.bolinhalocais}></View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <ScrollView>
          <View style={StylesPasseios.tituloiporanga}></View>
          <View style={StylesPasseios.algconteudo}>
            <View style={StylesPasseios.caixa}>
              <Image
                style={StylesPasseios.imgsconteudo}
                source={imgmuseuferrari}
              />
              <Text style={StylesPasseios.txttitulopasseio}>
                MUSEU FERRARI DUBAI :
              </Text>
              <Text style={StylesPasseios.txtconteudo}>
                O Ferrari World Abu Dhabi é um parque temático na Ilha de Yas,
                em Abu Dhabi.{"\n"}
                Conhecido por ser o primeiro parque da Ferrari. Destaca-se pela
                Formula Rossa, a montanha-russa mais rápida do mundo, e a Flying
                Acess, com o maior looping do mundo. Outras atrações incluem o
                Turbo Track, Karting Academy, e a Galleria Ferrari. .{"\n"}
              </Text>
            </View>
          </View>
          <View style={StylesPasseios.algconteudo}>
            <View style={StylesPasseios.caixa}>
              <Image
                style={StylesPasseios.imgsconteudo}
                source={imgmuseulouvre}
              />

              <Text style={StylesPasseios.txttitulopasseio}>
                MUSEU DE LOUVRE:
              </Text>
              <Text style={StylesPasseios.txtconteudo}>
                O Museu do Louvre foi a sede do governo monárquico francês desde
                a época dos Capetos medievais até o reinado de Luís XIV. {"\n"}{" "}
                A transformação do complexo de edifícios em museu iniciou em
                1692. É o museu mais conhecido e visitado do mundo.
                {"\n"}O preço do bilhete de entrada para o Museu do Louvre é de
                17€ ( R$ 94,82 ) para adultos.
              </Text>
            </View>
          </View>
          <View style={StylesPasseios.algconteudo}>
            <View style={StylesPasseios.caixa}>
              <Image style={StylesPasseios.imgsconteudo} source={imgempire} />
              <Text style={StylesPasseios.txttitulopasseio}>
                EMPIRE STATE BUILDING :
              </Text>
              <Text style={StylesPasseios.txtconteudo}>
                O Empire State Building é o primeiro edifício do mundo com mais
                de 100 andares, a construção do Empire State Building começou em
                17 de março de 1930. A construção foi concluída em um recorde de
                1 ano e 45 dias. Com uma arquitetônica maravilhosa e amada em
                todo o mundo. {"n"} O ingresso comum para o observatório do
                Empire State custa $42 dólares ( R$ 216,07 ). {"\n"}O ticket
                permite a entrada em todas as exposições e no deque do 86º
                andar.
              </Text>
            </View>
          </View>
          <View style={StylesPasseios.algconteudo}>
            <View style={StylesPasseios.caixa}>
              <Image
                style={StylesPasseios.imgsconteudo}
                source={imgsantuariomeiji}
              />
              <Text style={StylesPasseios.txttitulopasseio}>
                SANTUÁRIO MEIJI :
              </Text>
              <Text style={StylesPasseios.txtconteudo}>
                O Santuário Meiji é o templo xintoísta que é dedicado aos
                espíritos deificados do Imperador Meiji e sua esposa a
                Imperatriz Shōken. Este santuário xintoísta é um ponto de paz e
                espiritualidade em meio à agitação da cidade.
                {"\n"}A entrada é gratuita.;
              </Text>
            </View>
          </View>

          <View style={StylesPasseios.algconteudo}>
            <View style={StylesPasseios.caixa}>
              <Image
                style={StylesPasseios.imgsconteudo}
                source={imgcristoredentor}
              />
              <Text style={StylesPasseios.txttitulopasseio}>
                CRISTO REDENTOR :
              </Text>
              <Text
                style={StylesPasseios.txtconteudo}
                source={imgcristoredentor}
              >
                O Cristo Redentor é a maior estátua no estilo Art Déco do mundo.
                Tem 30 metros de altura, além dos 8 metros do pedestal. Mede 28
                metros de uma mão à outra e pesa 1.145 toneladas. O monumento
                fica no topo do Morro do Corcovado, 710 metros acima do nível do
                mar.
                {"\n"}O preço do bilhete de ida e volta para o Cristo Redentor é
                de R$ 74,00 para adultos e R$ 46,00 para crianças de 6 a 11
                anos.
              </Text>
            </View>
          </View>
          <View style={StylesPasseios.algconteudo}>
            <View style={StylesPasseios.caixa}>
              <Image style={StylesPasseios.imgsconteudo} source={imgbigben} />
              <Text style={StylesPasseios.txttitulopasseio}>
                BIG BEN PALÁCIO DE WESMINSTER :
              </Text>
              <Text style={StylesPasseios.txtconteudo}>
                O Big Ben é um grande sino instalado na torre noroeste do
                Palácio de Westminster, A construção do Big Ben iniciou-se
                depois do incêndio que destruiu quase todo o Palácio de
                Westminster, em 1834. A ideia era ocupar o lugar que resistiu às
                chamas com algo novo.
                {"\n"}O preço do tour é de 25£ ( R$ 163,63 ) para adultos e de
                10£ ( R$ 65,45 ) para pessoas de 11 a 17 anos.
              </Text>
            </View>
          </View>
          <View style={StylesPasseios.algconteudo}>
            <View style={StylesPasseios.caixa}>
              <Image style={StylesPasseios.imgsconteudo} source={imggondola} />
              <Text style={StylesPasseios.txttitulopasseio}>
                PASSEIO DE GÔNDOLA :
              </Text>
              <Text style={StylesPasseios.txtconteudo}>
                O Passeio de Gôndola em Veneza é a atividade mais cobiçada pelos
                turistas. Os barquinhos pretos que eram utilizados como
                transporte privado no passado, são hoje a mais conhecida atração
                turística de Veneza. {"\n"} O passeio clássico de gôndola custa
                a partir de 30€ ( R$ 167,33 ). No entanto, os preços podem
                variar de acordo com o tipo de ingresso.
              </Text>
            </View>
          </View>
          <View style={StylesPasseios.footer}></View>
        </ScrollView>
      </View>
    </View>
  );
}
