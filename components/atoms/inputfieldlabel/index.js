import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InputFieldLabel = (props) => {
    return ( 
            <Text style={styles.label}>{props.text}</Text>
    )
};

const styles = StyleSheet.create({
    label: {
        alignSelf: "flex-start",
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 16
    }
});

export default InputFieldLabel;