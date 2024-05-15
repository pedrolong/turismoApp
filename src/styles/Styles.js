import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  header: {
    height: 90,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  footer: {
    height: 65,
  },

  viewButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
});
