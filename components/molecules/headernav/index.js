import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SectionHeader from '../../atoms/sectionheader';

const HeaderNav = (props) => {
    return (
        <View style={styles.mainContainer}>
            <SectionHeader text={"Hi Patryck!"} />
            
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch"
    }
});

export default HeaderNav;