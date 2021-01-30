import React from "react";
import {FlatList, ImageBackground, Text, View} from "react-native";
import { useRoute } from '@react-navigation/native';
import ChatMessage from "../components/ChatMessage";
import chatRoomData from '../data/Chats';
import bg from "../assets/images/BG.png";

const ChatRoomScreen = () => {
    const route = useRoute();
    return(
        <ImageBackground style={{ width: '100%', height: '100%' }} source={bg}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item} />}
                inverted
            />
        </ImageBackground>
    );
}

export default ChatRoomScreen;
