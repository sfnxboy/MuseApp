import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputField = (props) => {
    return (
        <TextInput
            style={styles.inputField}
            placeholder={props.placeholder}
            placeholderTextColor="#BAA8FF"
            onChangeText={text => props.setValue(text)}
            value={props.value}
            secureTextEntry={props.secure ? props.secure : false}
        />
    )
};

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: "#120A23",
        borderColor: "#301E48",
        borderWidth: 1,
        color: "#FFFFFF",
        width: 300,
        height: 40,
        paddingLeft: 10,
        borderRadius: 5
    }
});

export default InputField;