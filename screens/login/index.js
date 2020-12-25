import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import Logo from '../../assets/images/musePurple.png';

// Components

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518"}}>
            <View style={styles.mainContainer}>
                <View>
                    <Image
                        style={styles.logo}
                        source={Logo}
                    />
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        LOGIN
                    </Text>
                </View>
                <View style={styles.formContainer}>

                </View>
                <View style={styles.buttonContainer}>
                
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10
    },
    logo: {
        height: 75,
        width:  220
    },
    headerContainer: {
        marginTop: 80
    },
    headerText: {
        fontSize:26,
        fontWeight: "700",
        color: "#ffffff"
    }
});

export default Login;