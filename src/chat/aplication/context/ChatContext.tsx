import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { Text, View } from "react-native";
import { createContext } from "react";
import { MessageEntity } from "../../domain/chatEntitys"
import { sendMessage } from "../../use-cases/chatUseCases";

const ChatContext = createContext<any>({});

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState<MessageEntity[]>([]);
  const [chat_id, setChatId] = useState<number>(0);

  const sendMessageTo = async (message) => {
    const newMessage = {
      id: Date.now() * Math.random(),
      chat_id,
      content:message.trim(),
      status: "sending",
      sender_id: 14,
      timestamp:Date.now()
    };

    if (!message) return;
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await sendMessage(newMessage, chat_id);
      if (!response.ok) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === newMessage.id ? { ...msg, status: "failed" } : msg
          )
        );
      }
    } catch (error) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "failed" } : msg
        )
      );
    }

  }
  return (
    <ChatContext.Provider value={{ messages, setMessages, sendMessageTo, setChatId}}>
      {children}
    </ChatContext.Provider>
  );
};

export const useMessages = () =>
  useContext<{
    messages: MessageEntity[];
    setMessages: Dispatch<SetStateAction<MessageEntity[]>>;
    sendMessageTo:(message:string) => void;
    setChatId:Dispatch<SetStateAction<number>>
  }>(ChatContext);
