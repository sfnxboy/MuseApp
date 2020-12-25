import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';


const Dashboard = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#0B0518"}}>
            <View style={styles.mainContainer}>
                

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10
    },
});

export default Dashboard;