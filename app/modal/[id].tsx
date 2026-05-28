import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const local = useLocalSearchParams();
  const id = local.id;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://dragonball-api.com/api/characters/${id}`,
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (loading) {
    return (
      <View style={s.wraploading}>
        <Image style={s.loading} source={require("@/assets/lo.gif")} />
        <Text style={s.loading2}>CARREGANDO...</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require("@/assets/goku8.gif")} style={s.containe2}>
      <Text style={s.title}>PERSONAGEM</Text>
      <View style={s.container}>
        <View style={s.view}>
          <Text style={s.name}>{data?.name}</Text>
          <Text style={s.ki}>{data?.ki}</Text>
          <Text style={s.race}>{data?.race}</Text>
        </View>
        <Image style={s.image} source={{ uri: data?.image }}></Image>
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#cac5c59f",
    alignItems: "center",
    justifyContent: "center",
    padding: 110,
    borderRadius: 50,
    borderWidth: 5,
    gap: 5,
    marginTop: 50,
  },
  containe2: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: 200,
    height: 450,
    marginTop: -200,
  },
  view: {
    height: 300,
    gap: 10,
    marginTop: -100,
  },
  title: {
    marginTop: 20,
    left: 18,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "cursive",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -10, height: 5 },
    textShadowRadius: 9,
  },
  name: {},
  ki: {},
  race: {},
  wraploading: {},
  loading: {},
  loading2: {},
});
