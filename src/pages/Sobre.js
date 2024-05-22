import { StyleSheet, Text, View } from "react-native";

//import fonts
import { useFonts } from "expo-font";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          fontFamily: "PoetsenOne-Regular",
        }}
      >
        Bem-Vindo à Trek Trek {"\n"}
      </Text>
      <Text
        style={{
          fontFamily: "CormorantGaramond-Light",
          fontWeight: "bold",
          color: "black",
          fontSize: 15,
        }}
      >
        Conectando você ao seu proxímo destino! {"\n"}
        {"\n"}A Trek Trek nasceu do desejo de compartilhar a paixão pela
        exploração e pela descoberta de novos horizontes. Somos uma empresa de
        turismo especializada em oferecer experiências únicas e inesquecíveis
        para aqueles que buscam se conectar com a natureza, a cultura e a
        história dos destinos mais incríveis do mundo. {"\n"}
        {"\n"}
        Nossa Missão Na Trek Trek{"\n"}
        {"\n"}
        nossa missão é proporcionar experiências de viagem autênticas e
        enriquecedoras. Acreditamos que viajar é uma forma poderosa de
        transformar vidas, expandir horizontes e criar memórias duradouras.{" "}
        {"\n"}
        {"\n"}O Que Oferecemos{"\n"}
        {"\n"}
        Aventuras Personalizadas: Cada viajante é único, e nossas viagens
        também. Oferecemos pacotes personalizados que atendem às suas
        necessidades e preferências, garantindo que cada aventura seja do seu
        jeito. {"\n"}
        {"\n"}
        Guias Experientes:{"\n"}
        {"\n"}
        Nossa equipe é composta por guias experientes e apaixonados pelo que
        fazem. Eles são conhecedores das regiões que visitamos e estão sempre
        prontos para compartilhar suas histórias e insights.{"\n"}
        {"\n"}
        Nossa Equipe {"\n"}
        {"\n"}A equipe da Trek Trek é formada por viajantes dedicados,
        aventureiros e especialistas em turismo. Cada membro do nosso time traz
        uma riqueza de conhecimento e experiência, garantindo que você tenha uma
        viagem segura, divertida e educativa. {"\n"}
        <Text style={{ color: "black", fontFamily: "PoetsenOne-Regular" }}>
          Por Que Escolher a Trek Trek? {"\n"}
          {"\n"}
          Paixão pela Aventura: Compartilhamos sua paixão por explorar o mundo e
          nos dedicamos a criar experiências memoráveis. Serviço Personalizado:
          Focamos em suas necessidades e desejos para oferecer uma viagem
          personalizada e única. {"\n"}
          {"\n"}
          Venha saber mais sobre nossos pacotes e como podemos tornar sua viagem
          dos sonhos uma realidade.
          {"\n"} Vamos juntos explorar o mundo com a Trek Trek!{" "}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
