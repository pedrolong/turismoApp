import { StyleSheet, Text, View } from "react-native";

//import
import { useFonts } from "expo-font";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>
        Bem-vindo à Trek Trek{styles{Fon}} {"\n"}
        Conectando você ao seu proxímo destino! {"\n"}A Trek Trek nasceu do
        desejo de compartilhar a paixão pela exploração e pela descoberta de
        novos horizontes. Somos uma empresa de turismo especializada em oferecer
        experiências únicas e inesquecíveis para aqueles que buscam se conectar
        com a natureza, a cultura e a história dos destinos mais incríveis do
        mundo. {"\n"}
        Nossa Missão Na Trek Trek{"\n"}
        nossa missão é proporcionar experiências de viagem autênticas e
        enriquecedoras. Acreditamos que viajar é uma forma poderosa de
        transformar vidas, expandir horizontes e criar memórias duradouras.{" "}
        {"\n"}O Que Oferecemos{"\n"}
        Aventuras Personalizadas: Cada viajante é único, e nossas viagens
        também. Oferecemos pacotes personalizados que atendem às suas
        necessidades e preferências, garantindo que cada aventura seja do seu
        jeito. {"\n"}
        Guias Experientes:{"\n"}
        Nossa equipe é composta por guias experientes e apaixonados pelo que
        fazem. Eles são conhecedores das regiões que visitamos e estão sempre
        prontos para compartilhar suas histórias e insights.{"\n"}
        Nossa Equipe {"\n"}A equipe da Trek Trek é formada por viajantes
        dedicados, aventureiros e especialistas em turismo. Cada membro do nosso
        time traz uma riqueza de conhecimento e experiência, garantindo que você
        tenha uma viagem segura, divertida e educativa. {"\n"}
        Por Que Escolher a Trek Trek? {"\n"}
        Paixão pela Aventura: Compartilhamos sua paixão por explorar o mundo e
        nos dedicamos a criar experiências memoráveis. Serviço Personalizado:
        Focamos em suas necessidades e desejos para oferecer uma viagem
        personalizada e única. {"\n"}
        Venha saber mais sobre nossos pacotes e como podemos tornar sua viagem
        dos sonhos uma realidade. Vamos juntos explorar o mundo com a Trek Trek!{" "}
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
  },
});
