import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import Logo from '../../assets/images/museYellow.png';

// Components
import LoginForm from '../../components/molecules/loginform';
import HyperLinkText from '../../components/atoms/hyperlinktext';

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
                        Welcome Back!
                    </Text>
                </View>
                <LoginForm navigation={navigation} />
                <View style={styles.hyperLinkTextContainer}>
                    <HyperLinkText
                        message={"Don't have an account? Create it"}
                        screen={"Register"}
                        linkMessage={"Here"}
                        navigation={navigation}
                    />
                </View>
                <View style={styles.hyperLinkTextContainer}>
                    <HyperLinkText
                        message={"Forgot your information? Reset it"}
                        screen={"Recover"}
                        linkMessage={"Here"}
                        navigation={navigation}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 30
    },
    logo: {
        height: 75,
        width:  220
    },
    headerContainer: {
        marginTop: 60
    },
    headerText: {
        fontSize:26,
        fontWeight: "700",
        color: "#ffffff"
    },
    hyperLinkTextContainer: {
        marginTop: 30
    }
});

export default Login;