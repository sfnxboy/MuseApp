import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';

import testArt from '../../../assets/images/keefpfp.png';
import leftArr from '../../../assets/images/leftarr.png';
import rightArr from '../../../assets/images/rightarr.png';
import pause from '../../../assets/images/pause.png';
import play from '../../../assets/images/play.png';

const SongBlock = (props) => {
    const [songTitle, setSongTitle] = useState("Happy Birthday");
    const [songAlbum, setSongAlbum] = useState("Classics");
    const [songArtist, setSongArtist] = useState("Someone");
    const [playing,setPlaying] = useState(false);

    const handleImage = () => {
        if(!playing) return play;
        else return pause;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imgContainer}>
                <Image
                    source={testArt}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text numberOfLines={1} style={styles.text}>{songTitle}</Text>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.text}>{songAlbum}</Text>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.text}>{songArtist}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Image
                        source={leftArr}
                        style={styles.arrow}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setPlaying(!playing)}}>
                    <Image
                        source={handleImage()}
                        style={styles.mainBtn}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={rightArr}
                        style={styles.arrow}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection:"row",
        backgroundColor: "#4A3DDB",
        alignItems: "center",
        height: 70,
        borderRadius: 40
    },
    text: {
        color: "#BAA8FF",
        fontSize: 12,
        fontWeight: "600"
    },
    textContainer: {
        marginLeft: 15,
        width: "40%",
        height: 50,
        justifyContent: "space-between"
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "35%"
    },  
    image: {
        height: 50,
        width: 50,
        borderRadius: 100,
        marginLeft: 15
    },
    arrow: {
        height: 20,
        width: 20
    },
    mainBtn: {
        height: 40,
        width: 40
    }
});


export default SongBlock;