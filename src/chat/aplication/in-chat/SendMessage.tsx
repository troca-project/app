import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import colors from "../../../theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { sendMessage } from "../../use-cases/chatUseCases";
import { useMessages } from "../context/ChatContext";

export const SendMessage = ({chat_id}) => {
  const [message, setMessage] = useState("");
  const [heightInput, setHeightInput] = useState(40); // Altura inicial
  const {setMessages} = useMessages()

  const handleSendMessage = async () => {
    const newMessage = {
      id: Date.now() * Math.random(),
      chat_id,
      content:message.trim(),
      status: "sending",
      sender_id: 14,
      createdAt:5,
      timestamp:Date.now()
    };

    if (!message) return;
    setHeightInput(40)
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");

    try {
      const response = await sendMessage(newMessage, chat_id);
      if (!response.ok) {
        updateMessageStatus(newMessage.id, 'failed');
      }

    } catch (error) {
      updateMessageStatus(newMessage.id, 'failed')
    }

  };

  const updateMessageStatus = (messageId, status) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, status } : msg
      )
    );
  };

  return (
    <View className="px-3 pb-3 mt-1">
      <View className="flex-row items-center gap-x-2">
        <View
          style={{ elevation: 1 }}
          className="flex-1 flex-row overflow-hidden  items-center  relative bg-white dark:bg-neutral-800 rounded-3xl"
        >
          <Pressable
            android_ripple={{ foreground: true, radius: 50 }}
            className=" px-2 py-2"
          >
            <Ionicons name="happy-outline" color={"gray"} size={29} />
          </Pressable>
          <TextInput
            value={message}
            onChangeText={(value) => setMessage(value)}
            placeholder="Mensaje"
            onContentSizeChange={(event) =>
              setHeightInput(event.nativeEvent.contentSize.height)
            }
            returnKeyType="default"
            multiline
            blurOnSubmit={false}
            style={{ height: Math.max(40, heightInput) }}
            className="text-lg px-1 flex-1 py-2 text-black dark:text-white"
          ></TextInput>
        </View>

        <Pressable
          onPress={handleSendMessage}
          className="overflow-hidden rounded-full"
          android_ripple={{ color: "white", foreground: true }}
        >
          <View
            className="h-12 w-12  rounded-full items-center justify-center"
            style={{ backgroundColor: colors.green }}
          >
            <Ionicons
              name="send"
              size={24}
              color={"white"}
              style={{ marginLeft: 4 }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
