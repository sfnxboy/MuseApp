import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SongBlock from '../../atoms/songblock';

const PlayArea = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>CURRENTLY PLAYING</Text>
            </View>
            <SongBlock />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        width: "90%",
        justifyContent: "center",
        marginBottom: 20,
    },
    textContainer: {
        marginBottom: 10
    },
    text: {
        fontSize: 12,
        fontWeight: "600",
        color: "#BAA8FF",
        textAlign: "center"
    }
});

export default PlayArea;