import Personagen from "@/oi/personagen";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function List() {
  const [personagens, setPersonagens] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fechtCharacters = async () => {
    try {
      const response = await fetch(
        "https://dragonball-api.com/api/characters?page=" + page,
      );
      const data = await response.json();
      setPersonagens((prev: any) => [...(prev || []), ...data.items]);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 0 && page < 7) {
      fechtCharacters();
    }
  }, [page]);

  return (
    <ImageBackground source={require("@/assets/goku8.gif")} style={s.container}>
      <View style={s.screen}>
        <Text style={s.titulo}>Lista de personagens</Text>

        {loading ? (
          <View style={s.wrapImage}>
            <Image style={s.loading} source={require("@/assets/lo.gif")} />
          </View>
        ) : (
          <FlatList
            data={personagens}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return <Personagen item={item}></Personagen>;
            }}
            onEndReached={loading ? null : () => setPage((prev) => prev + 1)}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  titulo: {
    fontFamily: "cursive",
    fontSize: 32,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -10, height: 5 },
    textShadowRadius: 5,
  },
  loading: {
    width: 400,
    height: 400,
  },
  screen: {
    flex: 1,
    alignContent: "center",
  },
  wrapImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
