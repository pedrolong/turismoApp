import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const locations = [
  {
    latitude: 51.5074,
    longitude: -0.1278,
    title: "Londres",
  },
  {
    latitude: 48.8566,
    longitude: 2.3522,
    title: "Paris",
  },
  {
    latitude: -22.908333,
    longitude: -43.196388,
    title: "Rio de Janeiro",
  },
  {
    latitude: 45.4408,
    longitude: 12.3155,
    title: "Veneza",
  },
  {
    latitude: 25.276987,
    longitude: 55.296249,
    title: "Dubai",
  },
  {
    latitude: 35.6895,
    longitude: 139.6917,
    title: "Tóquio",
  },
  {
    latitude: 40.7128,
    longitude: -74.006,
    title: "Nova York",
  },

  // Adicione mais localizações conforme necessário
];

const Mapa = () => {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
            zoom: -10,
          }}
          provider={MapView.PROVIDER_GOOGLE} // Use Google Maps
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={"Você esta aqui"}
            pinColor="blue" // Cor azul para destacar a localização atual
          />
          {locations.map((loc, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
              title={loc.title}
              description={loc.description}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Mapa;
