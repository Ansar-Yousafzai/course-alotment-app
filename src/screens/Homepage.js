import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/images/mainlogo.png'
import { head1 } from '../common/formcss'
import { button1 } from '../common/button'

const Homepage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1} >
                <View style={styles.s1}>
                    <Image style={styles.logo} source={logo} />
                    
                </View>
                </View>
            <Text
                style={head1}
            >this is Homepage</Text>

            <Text style={button1}
                onPress={
                    () => { navigation.navigate('login') }
                }
            >Logout</Text>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%',

    },
    s1: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '40%',
    },
    logo: {
        height: 50,
        width: 100,
        marginTop:10,
          
    },
})