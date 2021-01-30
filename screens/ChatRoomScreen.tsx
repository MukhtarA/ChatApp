import React from "react";
import { Text, View} from "react-native";
import { useRoute } from '@react-navigation/native';

const ChatRoomScreen = () => {
    const route = useRoute();
    console.log(route.params);
    return(
        <View>
            <Text>Dick</Text>
        </View>
    );
}

export default ChatRoomScreen;
