import React from "react";
import {Image, Text, View, Touchable, TouchableWithoutFeedback} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
        });
    }

    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.imageUri}} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ChatListItem;
