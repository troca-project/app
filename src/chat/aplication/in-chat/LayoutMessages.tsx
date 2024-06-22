import React, { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, Text, View, Image } from "react-native";
import { socket } from "../../../socket-io/socket";
import { UserMessage } from "./UserMessage";
import { useMessages } from "../context/ChatContext";
import { getChat } from "../../use-cases/chatUseCases";
import { AcceptOffer } from "./AcceptOffer";
import { ChatEntity } from "../../domain/chatEntitys";
import { SendMessage } from "./SendMessage";

export const LayoutMessages = ({ chat_id }) => {
  const { messages, setMessages } = useMessages();
  const [chat, setChat] = useState<ChatEntity>();
  const flatListRef = useRef<FlatList>(null);

  const getChatInfo = async () => {
    setChat(await getChat(chat_id));
  };

  const getUpdatedMessages = (message, prevMessages) =>
    prevMessages.map((msg) =>
      msg.id === message.id ? { ...msg, status: "sent" } : msg
    );

  const handleReciveMessage = (message) => {
    setMessages((prevMessages) => getUpdatedMessages(message, prevMessages));
  };

  //OBTENER MENSAJES ANTIGUOS DEL CHAT

  useEffect(() => {
    getChatInfo();

    return () => {
      console.log('DSTROY');
      setMessages([])
    }
  }, []);

  useEffect(() => {
    socket.on("chat_message", handleReciveMessage);

    socket.on("message_failed", (message) => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === message.id ? { ...msg, status: "failed" } : msg
        )
      );
    });

    return () => {
      socket.off("chat message", handleReciveMessage);
    };
  }, []);

  useEffect(() => {
    // Desplázate al final cuando se abren nuevos mensajes
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const renderItem = ({ item }) => <UserMessage key={item.id} message={item} />;

  return (
    <View className="flex-1 bg-white">
      <Image className="flex-1 grow absolute top-0 w-full h-full opacity-30" resizeMode="repeat" source={{uri:'https://www.shutterstock.com/image-vector/hand-drawn-vector-doodles-set-600nw-1425794720.jpg'}}></Image>
      <AcceptOffer chat={chat} />
      <FlatList
        ref={flatListRef}
        scrollsToTop={false}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id!.toString()} // Asegúrate de que cada mensaje tenga un id único
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-end",
          padding: 10,
          gap: 10,
        }}
        onContentSizeChange={() =>
          flatListRef?.current?.scrollToEnd({ animated: true })
        }
        onLayout={() => flatListRef?.current?.scrollToEnd({ animated: true })}
        // Para que los mensajes más recientes aparezcan en la parte inferior
      />

      <SendMessage chat_id={chat_id}></SendMessage>
    </View>
  );
};
