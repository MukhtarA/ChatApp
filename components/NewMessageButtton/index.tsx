import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'
import styles from "./styles";

const NewMessageButton = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Contacts');
    }

    return(
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <MaterialCommunityIcons
                        name="message-reply-text"
                        size={28}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
    );
}

export default NewMessageButton;
