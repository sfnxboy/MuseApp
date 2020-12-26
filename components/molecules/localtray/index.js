import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {localip} from '../../../env';
import axios from 'axios';
import Song from '../../atoms/song';

const LocalTray = (props) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getRecommendedEvents = async () => {
            axios.get(`${localip}/getSongs`)
            .then(res =>{
                setEvents(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        };

        getRecommendedEvents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.upperText}>Popular Around You</Text>
            </View>
            <FlatList
                style={{width: "100%", height: '100%'}}
                horizontal={false}
                data={songs}
                renderItem={({item}) => <Song song={item} selected={props.selected} />}
                keyExtractor={(song) => String(song.id)}
                initialScrollIndex={0}
                removeClippedSubviews={false}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.posContainer}>
                        <Text style={styles.emptyList}>Waiting on more information</Text>
                    </View>
                }
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        width:"100%",
        alignItems: "center", 
        justifyContent: "center",
        height: 230,
        marginBottom: 20,
    },
    posContainer: {
        alignSelf: "stretch",
        alignItems: "center", 
        justifyContent: "center",
    },  
    emptyList: {
        marginTop: 250,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        color: "#AAAAAA"
    },
    upperText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#BAA8FF",
        textAlign: "left"
    },
    textContainer: {
        marginBottom: 10,
        alignSelf:"stretch",
        marginLeft: 20
    },
});

export default LocalTray;