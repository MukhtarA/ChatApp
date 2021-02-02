import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons} from "@expo/vector-icons";
import styles from "./styles";

const InputBox = () => {
    const [message, setMessage] = useState('');
    const onMicrophonePress = () => {
        console.warn('onMicrophonePress');
    }

    const onSendPress = () => {
        console.warn(`onSendPress: ${message}`);
        setMessage('');
    }

    const onPress = () => {
        if(!message) {
            onMicrophonePress();
        }else {
            onSendPress();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" color="grey" size={24}/>
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" color="grey" size={24} style={styles.icons} />
                {!message && <Fontisto name="camera" color="grey" size={24} style={styles.icons}/>}
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message ?
                        <MaterialCommunityIcons name="microphone" size={28} color="#fff"/>
                        : <MaterialIcons name="send" size={28} color="#fff"/>
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default InputBox;
