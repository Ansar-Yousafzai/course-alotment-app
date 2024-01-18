import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import welcomelogo from '../../assets/images/mainlogo.png'
import { button1 } from '../common/button'
const Welcome = ({ navigation }) => {
    return (

        <View style={styles.container}>
      

            <View style={styles.container1}>

                <Image style={styles.logo} source={welcomelogo} />
                <Text style={button1}
                    onPress={() => navigation.navigate('login')}
                >Login</Text>
                <Text style={button1}
                    onPress={() => navigation.navigate('signup')}
                >Signup</Text>
            </View>
            
        </View>
        
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#000'
       
    },
  
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        
    },
    logo: {
        height: '55%',
        width: '180%',
        resizeMode: 'contain',
        marginBottom: 5,
        marginRight:17,
    }
})