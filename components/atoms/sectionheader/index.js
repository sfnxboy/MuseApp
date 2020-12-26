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
        backgroundColor: "#4a3ddb",
        height: 40,
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700"
    }
});

export default SectionHeader;