import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView} from 'react-native';

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2"}}>
            <View style={styles.mainContainer}>
                <Text>Test</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
    }
});

export default Login;