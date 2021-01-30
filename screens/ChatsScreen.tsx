import * as React from 'react';
import {FlatList, StyleSheet, ImageBackground} from 'react-native';
import { Text, View } from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import bg from "../assets/images/BG.png"
import chatRooms from "../data/ChatRooms";

export default function ChatsScreen() {
  return (
      <View>
          <FlatList
              style={{ width: '100%' }}
              data={chatRooms}
              renderItem={({ item }) => <ChatListItem chatRoom={item} />}
              keyExtractor={(item) => item.id}
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
