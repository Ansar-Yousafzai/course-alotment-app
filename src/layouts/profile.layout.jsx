import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});

export const Profile = () => {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};
