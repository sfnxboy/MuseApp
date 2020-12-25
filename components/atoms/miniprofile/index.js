import React,{ useState } from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import PFP from '../../../assets/images/keefpfp.png';

const MiniProfile = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleDropdown = () => {
        return (
            <View>
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
        <View>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}
                style={{
                    
                }}
            >   
            <Image
                source={PFP}
                style={styles.image}
            />
            </TouchableOpacity>
            {handleDropdown}
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


export default MiniProfile;