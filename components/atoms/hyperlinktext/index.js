import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HyperLinkText = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => props.navigation.navigate(props.screen)}> 
                {props.message} <Text style={styles.highlight}>{props.linkMessage}</Text>
            </Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#120A23",
        borderColor: "#301E48",
        borderWidth: 1,
        borderRadius: 5,
        paddingTop:10,
        paddingBottom: 10,
        paddingRight: 10,
        width: 300
    },
    text: {
        color: "#BAA8FF",
        paddingLeft: 10,
    },
    highlight: {
        fontWeight: "700"
    }
});

export default HyperLinkText;