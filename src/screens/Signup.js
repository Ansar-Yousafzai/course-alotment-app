import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

import { button1 } from "../common/button";

import {
  formgroup,
  head1,
  input,
  input1,
  label,
  link,
  link4,
  text,
} from "../common/formcss";

const Signup = ({ navigation }) => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [aridno, setAridno] = useState("");
  const [address, setAddress] = useState("");

  const [isTeacherLogin, setIsTeacherLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.s1}></View>
        <ScrollView style={styles.s2}>
          <Text style={head1}>Create a New Account</Text>
          <Text style={text}>
            Create account as&nbsp;
            <Text
              style={link}
              onPress={() => setIsTeacherLogin((prev) => !prev)}
            >
              {isTeacherLogin ? "Student" : "Teacher"}
            </Text>
          </Text>

          <View style={formgroup}>
            <Text style={label}>Name</Text>
            <TextInput
              style={input}
              placeholder="Enter your Name"
              onChangeText={(text) => setUsername({ name: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder="Enter your Email"
              onChangeText={(text) => setEmail({ email: text })}
            />
          </View>

          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder="Enter your Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword({ password: text })}
            />
          </View>

          <View style={formgroup}>
            <Text style={label}>Confirm Password</Text>
            <TextInput
              style={input}
              placeholder="Confirm your Password"
              secureTextEntry={true}
              onChangeText={(text) => setCpassword({ cpassword: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>CNIC No</Text>
            <TextInput
              style={input}
              placeholder="Enter your cnic"
              onChangeText={(text) => setCnic({ cnic: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>
              {isTeacherLogin ? "Teacher Id" : "Arid no"}
            </Text>
            <TextInput
              style={input}
              placeholder={
                isTeacherLogin ? "Enter your Teacher Id" : "Enter your Arid no"
              }
              onChangeText={(text) => setAridno({ aridno: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Address</Text>
            <TextInput
              style={input1}
              placeholder="Enter your Address"
              onChangeText={(text) => setAddress({ address: text })}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text style={button1}>Signup {isTeacherLogin && "(Teacher)"}</Text>
          </TouchableOpacity>

          <Text style={link4}>
            Already Registered?&nbsp;
            <Text style={link} onPress={() => navigation.navigate("login")}>
              Login here
            </Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

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
    height: "10%",
  },
  small1: {
    color: "#fff",
    fontSize: 17,
  },
  h1: {
    fontSize: 30,
    color: "#fff",
  },
  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "90%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  buttonWrapper: {
    marginBottom: 20,
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
});
