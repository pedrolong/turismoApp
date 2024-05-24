import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StylesSobre } from "../styles/StylesSobre";

//import fonts
import { useFonts } from "expo-font";

export default function Sobre() {
  return (
    <View style={StylesSobre.container}>
      <View style={StylesSobre.viewcabecalho}>
        <Text
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            top: 70,
            fontSize: 30,
            fontFamily: "PoetsenOne-Regular",
          }}
        >
          Sobre
        </Text>
      </View>
      <View style={{ padding: 7, height: "86%" }}>
        <ScrollView>
          <Text style={StylesSobre.txtSobre}>
            <Text style={StylesSobre.titulocentral}>
              Bem-Vindo à Trek Trek {"\n"}
            </Text>
            <Text style={StylesSobre.titulocentral}>
              Conectando você ao seu proxímo destino!
            </Text>
            <Text style={StylesSobre.txtSobre}>
              {"\n"}
              {"\n"}
              Trek Trek nasceu do desejo de compartilhar a paixão pela
              exploração e pela descoberta de novos horizontes. Somos uma
              empresa de turismo especializada em oferecer experiências únicas e
              inesquecíveis para aqueles que buscam se conectar com a natureza,
              a cultura e a história dos destinos mais incríveis do mundo.{" "}
              {"\n"}
              {"\n"}
            </Text>
            <Text style={StylesSobre.txttitulosobre}>
              Nossa Missão Na Trek Trek{"\n"}
            </Text>
            <Text style={StylesSobre.txtSobre}>
              Nossa missão é proporcionar experiências de viagem autênticas e
              enriquecedoras. Acreditamos que viajar é uma forma poderosa de
              transformar vidas, expandir horizontes e criar memórias
              duradouras.
              {"\n"}
            </Text>
            <Text style={StylesSobre.txttitulosobre}>
              O Que Oferecemos{"\n"}
            </Text>
            <Text style={StylesSobre.txtSobre}>
              Cada viajante é único, e nossas viagens também. Oferecemos pacotes
              personalizados que atendem às suas necessidades e preferências,
              garantindo que cada aventura seja do seu jeito.
              {"\n"}
            </Text>
            <Text style={StylesSobre.txttitulosobre}>
              Guias Experientes{"\n"}
            </Text>
            <Text style={StylesSobre.txtSobre}>
              Nossa equipe é composta por guias experientes e apaixonados pelo
              que fazem. Eles são conhecedores das regiões que visitamos e estão
              sempre prontos para compartilhar suas histórias e insights.
              {"\n"}
            </Text>
            <Text style={StylesSobre.txttitulosobre}>Nossa Equipe{"\n"}</Text>
            <Text style={StylesSobre.txtSobre}>
              A equipe da Trek Trek é formada por viajantes dedicados,
              aventureiros e especialistas em turismo. Cada membro do nosso time
              traz uma riqueza de conhecimento e experiência, garantindo que
              você tenha uma viagem segura, divertida e educativa.
              {"\n"}
            </Text>
            <Text style={StylesSobre.txttitulosobre}>
              Por Que Escolher a Trek Trek?{"\n"}
            </Text>
            <Text style={StylesSobre.txtSobre}>
              Compartilhamos sua paixão por explorar o mundo e nos dedicamos a
              criar experiências memoráveis. Serviço Personalizado: Focamos em
              suas necessidades e desejos para oferecer uma viagem personalizada
              e única.
              {"\n"}
            </Text>
            <Text style={StylesSobre.titulocentral}>
              {"\n"}Vamos juntos explorar o mundo com a Trek Trek!
            </Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
