import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

// Import pages
import Sobre from "../pages/Sobre";
import Busca from "../pages/Busca";

// Import icons FONTAWESOME
import FontAwesome from "@expo/vector-icons/FontAwesome";
import StackRoute from "../routes/stack";

const Tab = createBottomTabNavigator();

const RoundedIcon = ({ isFocused, iconName }) => {
  return (
    <View
      style={{
        borderRadius: 200,
        backgroundColor: isFocused ? "#326e6c" : "transparent",
        padding: 5,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome
        size={30}
        color={isFocused ? "white" : "black"} // Cor branca quando está ativo, preta caso contrário
        name={iconName}
      />
    </View>
  );
};

export default function Index() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const isFocused = useIsFocused(); // Verifica se o Tab.Screen está focado
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Sobre") {
              iconName = "newspaper-o";
            } else if (route.name === "Busca") {
              iconName = "search";
            }

            return (
              <RoundedIcon
                isFocused={isFocused}
                iconName={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#326e6c",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            height: 120,
            borderTopColor: "transparent",
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={StackRoute}
          options={{ title: "", headerShown: false }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: "", headerShown: false }}
        />
        <Tab.Screen
          name="Busca"
          component={Busca}
          options={{ title: "", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
