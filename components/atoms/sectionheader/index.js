import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SectionHeader = (props) => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: "#150E39",
        borderColor: "#44329F",
        borderWidth: 1,
        height: 40,
        padding: 10
    },
    text: {
        color: "#BAA8FF",
        fontSize: 14,
        fontWeight: "700"
    }
});

export default SectionHeader;