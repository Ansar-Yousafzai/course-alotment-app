import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import logo from "../../assets/images/mainlogo.png";
import axios from "axios";
import { button1 } from "../common/button";
import { label, input, formgroup } from "../common/formcss";

const Login = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (route.params && route.params.role) {
      setRole(route.params.role);
    }
  }, [route.params]);

  const handleLogin = () => {
    // Perform login authentication
    axios.post('http://localhost:3306/login', {
      email: email,
      password: password,
      role: role
    })
      .then(response => {
        // If login successful, navigate to main screen
        navigation.navigate("main");
      })
      .catch(error => {
        // If login fails, display error message
        alert("Invalid credentials");
      });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.s2}>
          <Text style={styles.head1}>Login</Text>
          <Text style={styles.head2}>Sign in to continue</Text>

          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            // InputProps={{
            //   endAdornment: (
            //     <IconButton onClick={handleShowPassword}>
            //       {showPassword ? <Visibility /> : <VisibilityOff />}
            //     </IconButton>
            //   ),
            // }}
            />
          </View>
          {/* <View style={styles.fp}>
            <Text style={styles.link}>Forgot Password?</Text>
          </View> */}

          <Text style={button1} onPress={handleLogin}>
            Login
          </Text>

          {/* <Text>
            Don't have an account?&nbsp;
            <Text style={styles.link} onPress={() => navigation.navigate("signup")}>
              Create a new account
            </Text>
          </Text> */}
        </View>
      </View>
    </View>
  );
};

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
    height: "60%",
  },
  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "center"
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
  logo: {
    height: 300,
    width: 400,
  },
  head1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  head2: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  link: {
    color: "red",
  },
  fp: {
    marginLeft: 180,
    margin: 10,
  }
});

export default Login;
