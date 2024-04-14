import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { button1 } from "../common/button";
import { formgroup, label, input } from "../common/formcss";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Import Icon

const Signup = ({ navigation }) => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [aridno, setAridno] = useState("");
  const [address, setAddress] = useState("");
  const [isTeacherLogin, setIsTeacherLogin] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [cpasswordVisibility, setCpasswordVisibility] = useState(true);

  const handleSignup = () => {
    if (password !== cpassword) {
      setPasswordError("Passwords do not match!");
      Alert.alert("Error", "Passwords do not match. Please try again.");
      return;
    }
    setPasswordError("");
    axios.post("http://localhost:3306/signup", {
      name,
      email,
      password,
      cnic,
      aridno,
      address,
      role: isTeacherLogin ? "teacher" : "student",
    }).then(response => {
      navigation.navigate("Login");
    }).catch(error => {
      Alert.alert("Error", "Failed to create account. Please try again.");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.s2}>
          <Text style={styles.head1}>Create a New Account</Text>
          <Text style={styles.text}>
            Create account as&nbsp;
            <Text style={styles.link} onPress={() => setIsTeacherLogin(prev => !prev)}>
              {isTeacherLogin ? "Student" : "Teacher"}
            </Text>
          </Text>
          <View style={formgroup}>
            <Text style={label}>FullName</Text>
            <TextInput style={input} placeholder="Enter your FullName" onChangeText={setUsername} />
          </View>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder="Enter your Email" onChangeText={setEmail} />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[input, {flex: 1}]}
                placeholder="Enter your Password"
                secureTextEntry={passwordVisibility}
                onChangeText={setPassword}
              />
              <Icon
                name={passwordVisibility ? 'eye-off' : 'eye'}
                size={24}
                color="grey"
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              />
            </View>
          </View>
          <View style={formgroup}>
            <Text style={label}>Confirm Password</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[input, {flex: 1}]}
                placeholder="Confirm your Password"
                secureTextEntry={cpasswordVisibility}
                onChangeText={setCpassword}
              />
              <Icon
                name={cpasswordVisibility ? 'eye-off' : 'eye'}
                size={24}
                color="grey"
                onPress={() => setCpasswordVisibility(!cpasswordVisibility)}
              />
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          </View>
          {/* Other fields */}
          <TouchableOpacity onPress={handleSignup}>
            <Text style={button1}>Signup {isTeacherLogin ? "(Teacher)" : ""}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  // Existing styles...
 
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
  head1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  link: {
    color: "red",
  },
  link4: {
    marginTop: 20,
    textAlign: "center",
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFB0CC',
    borderRadius: 20,
    paddingRight: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});
