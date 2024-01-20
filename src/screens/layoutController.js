import { StyleSheet, View, Text } from "react-native";
import { Home } from "../layouts/home.layout";
import { Profile } from "../layouts/profile.layout";
import { useNavigation } from "../context/NavigationContext";

export const LayoutController = () => {
  const { currentPage } = useNavigation();

  return (
    <View>
      {currentPage === "home" && <Home />}
      {currentPage === "profile" && <Profile />}
    </View>
  );
};
