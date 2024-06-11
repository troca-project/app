// src/navigation/ChatStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatProvider } from './aplication/context/ChatContext';
import { MainChat } from './aplication/MainChat';
import { MainInChat } from './aplication/in-chat/MainInChat';

const Stack = createStackNavigator();

const ChatStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="chat" component={MainChat} />
      <Stack.Screen name="InChat" component={MainInChat} />
    </Stack.Navigator>
);

export default ChatStack;