import React from 'react';
import {StyleSheet, View,Image,TextInput, TouchableOpacity} from 'react-native';

import Search from '../../../assets/images/search.png';

const SearchInput = (props) => {
    return (
        <TouchableOpacity styles={styles.mainContainer} >
            <Image
                source={Search}
                style={styles.image}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        position: "absolute",
        right: 0
    },
    image: {
        height:20,
        width: 20,
        top: 0
    },
});

export default SearchInput;