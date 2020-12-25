import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
        console.log(email + " " + password);
        props.navigation.navigate("Dashboard");
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
        <View>
            <View>
                <InputField
                    placeholder={"Email Address"}
                    value={email}
                    setValue={setEmail}
                    secure={false}
                />
            </View>
            <View>
                <InputField
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    secure={true}
                />
            </View>
            <View>
                <GenericButton
                    message={"LOGIN"}
                    action={validation}
                    textColor={"#000000"}
                    color={"#fefe00"}
                />
            </View>
        </View>
    )
}

export default LoginForm;