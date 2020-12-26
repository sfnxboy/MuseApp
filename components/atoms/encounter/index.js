import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';

const Encounter = (props) => {
    return (
        <TouchableOpacity onPress={() => {}}
            style={styles.photoContainer}
        >   
            <Image
                source={{
                    uri: props.encounter.pfp
                }}
                style={styles.image}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    photoContainer: {
        backgroundColor: "#150E39",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10
    },  
    image: {
        height: 50,
        width: 50,
        borderRadius: 100,
        borderColor: "#4a3ddb",
        borderWidth: 4,
    },
});


export default Encounter;