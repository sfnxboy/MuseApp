import React, {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';

import HeaderNav from '../../components/molecules/headernav';
import Events from '../../components/molecules/events';
import LocalTray from '../../components/molecules/localtray';
import PlayArea from '../../components/molecules/playarea';

const Dashboard = () => {
    const [target, setTarget] = useState("");
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518", height: "100%"}}>
            <View style={styles.mainContainer}>
                <HeaderNav 
                    text={"Hi Patryck!"} 
                    target={target} 
                    setTarget={setTarget} 
                />
                <Events
                    selected={selected}
                    setSelected={setSelected}
                />
                <LocalTray
                    selected={selected}
                    setSelected={setSelected}
                />
                <View style={styles.footerContainer}>
                    <PlayArea
                        status={active}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        height: "100%"
    },
    footerContainer: {
        width: "100%",
        alignItems: "center",
    }
});

export default Dashboard;