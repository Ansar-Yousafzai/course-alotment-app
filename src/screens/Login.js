import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/mainlogo.png";
import { button1 } from "../common/button";
import {
  errormessage,
  formgroup,
  head1,
  head2,
  input,
  label,
  link,
  link2,
  link3,
} from "../common/formcss";

const Login = ({ navigation }) => {
  const [isTeacherLogin, setIsTeacherLogin] = useState(false);
  const [email, setEmail] = useState("tahirkhattak456@gmail.com");
  const [password, setPassword] = useState("qwerty");

  const handleLogin = () => {
    if (email === "tahirkhattak456@gmail.com" && password === "qwerty") {
      navigation.navigate("main");
    } else {
      alert("invalid");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.s2}>
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to continue</Text>

          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder="Enter your email"
              onChangeText={(text) => setEmail({ email: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword({ password: text })}
            />
          </View>
          <View style={styles.fp}>
            <Text style={link}>Forgot Password?</Text>
          </View>
          <Text style={button1} onPress={() => handleLogin()}>
            Login {isTeacherLogin && "(Teacher)"}
          </Text>
          <Text style={link2}>
            Don't have an account?&nbsp;
            <Text style={link} onPress={() => navigation.navigate("signup")}>
              Create a new account
            </Text>
          </Text>

          <Text style={link3}>
            or Login as a&nbsp;
            <Text
              style={link}
              onPress={() => setIsTeacherLogin((prev) => !prev)}
            >
              {isTeacherLogin ? "Student" : "Teacher"}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: "#1B1C1E",
  },

  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  s1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },

  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  formgroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginVertical: 10,
  },
  label: {
    fontSize: 17,
    color: "#000",
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFB0CC",
    borderRadius: 20,
    padding: 10,
  },
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  logo: {
    height: 300,
    width: 400,
  },
});
