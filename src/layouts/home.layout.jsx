import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 90,
  },
  card: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontSize: 20,
    color: "white",
  },
});

export const Home = () => {
  const digits = ["class1", "class2", "class3", "class4", "class5", "class6"];

  return (
    <View style={styles.container}>
      {digits.map((digit) => (
        <View key={digit} style={styles.card}>
          <Text style={styles.cardText}>{digit}</Text>
        </View>
      ))}
    </View>
  );
};
