import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {localip} from '../../../env';

// Components
import InputField from '../../atoms/inputfield';
import InputFieldLabel from '../../atoms/inputfieldlabel';
import GenericButton from "../../atoms/genericbutton";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const validation = () => {
        switch(true) {
            case email.length === 0:
            case password.length === 0:
                setError(true);
                break;
            default:
                setError(false);
                handleLogin();
                break;
        }
    }

    const handleLogin = () => {
        axios.post(`${localip}/login`, {
            email: email,
            pw: password
        })
        .then(res =>{
            if(res.status === 200) {
                props.navigation.navigate("Dashboard");
            }
            else {
                setError(true);
            }
        })
    }

    const handleWrongLogin = () => {
        if(error) return (
            <View style={styles.error}>
                <Text style={styles.errorText}>Something went wrong!</Text>
                <Text style={styles.errorText}>Double check your information</Text>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.label}>
                <InputFieldLabel
                    text={"Email Address"}
                />
            </View>
            <View style={styles.input}>
                <InputField
                    placeholder={"Email Address"}
                    value={email}
                    setValue={setEmail}
                    secure={false}
                />
            </View>
            <View style={styles.label}>
                <InputFieldLabel
                    text={"Password"}
                />
            </View>
            <View style={styles.input}>
                <InputField
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    secure={true}
                />
            </View>
            <View style={styles.button}>
                <GenericButton
                    message={"Login"}
                    action={validation}
                    textColor={"#0B0518"}
                    color={"#fefe00"}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop:60
    },
    label: {
        marginBottom: 10
    },
    input: {
        marginBottom: 30
    },
    button: {
        marginTop: 0
    }
});

export default LoginForm;