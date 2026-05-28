import { router } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Inicial() {
  return (
    <ImageBackground source={require("@/assets/goku7.gif")} style={s.container}>
      <View style={s.WrapInicial}>
        <Text style={s.Titulo}>DRAGONBALL</Text>
      </View>
      <View style={s.WrapInicial}></View>
      <View style={s.WrapInicial}>
        <TouchableOpacity
          style={s.btn}
          onPress={() => {
            router.push("/list");
          }}
        >
          <Text style={s.btnText}>visitar personagens</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  WrapInicial: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {},
  Titulo: {
    marginTop: -250,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "cursive",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -10, height: 5 },
    textShadowRadius: 9,
  },
  image: {
    width: 300,
    height: 270,
  },
  btn: {
    backgroundColor: "#cf9f4600",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {},
  title: {},
  subtitle: {},
});
