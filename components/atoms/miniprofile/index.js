import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';

import PFP from '../../../assets/images/keefpfp.png';

const MiniProfile = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleDropdown = () => {
        if(expanded) 
            return (
                <View style={styles.dropdown}>
                    <TouchableOpacity>
                        <Text>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Settings</Text>
                    </TouchableOpacity>
                </View>
            );
    };

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => {setExpanded(!expanded)}}
                style={styles.photoContainer}
            >   
                <Image
                    source={PFP}
                    style={styles.image}
                />
            </TouchableOpacity>
            {handleDropdown()}
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        position: "absolute",
        left: 300
    },
    photoContainer: {
        backgroundColor: "#150E39",
        borderColor: "#44329F",
        borderWidth: 4,
        borderRadius: 100,
    },  
    image: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    dropdown: {
        right: 60,
        top: 80,
        backgroundColor: "#150E39"
    }
});


export default MiniProfile;