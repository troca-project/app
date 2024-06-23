import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../../../theme/colors";
import { useMessages } from "../context/ChatContext";
import androidRipple from "../../../utils/androidRipple";

export const UserMessage = ({ message }) => {
  const user = { id: 14 };
  const { sendMessageTo, setMessages } = useMessages();

  const isOwnMessage = user.id === message.sender_id;
  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleResendMessage = () => {
    setMessages((prevMessages) =>
      prevMessages.filter((m) => m.id !== message.id)
    );
    sendMessageTo(message.content);
  };

  return (
    <View className="">
      <View className={`${isOwnMessage ? "mr-1 items-end" : "ml-1 items-start"} `}>
        <View
          className={`rounded-xl px-3 py-1  ${
            isOwnMessage ? "bg-green-200" : "bg-gray-100 "
          }`}
          style={{ elevation: 2 }}
        >
          <View
          style={{maxWidth:200}}
            className={`flex-row flex-wrap justify-end`}
          >
            <Text
              className=""
              style={{ color: "#000", fontSize: 16, userSelect:'text',  }}
            >
              {message.content}
            </Text>

            <View className={`ml-2 flex-row items-end `}>
              <Text
                className="font-light mr-1"
                style={{ color: "#667781", fontSize: 11 }}
              >
                {formatDate(message.timestamp)}
              </Text>

              {isOwnMessage ? (
                <Ionicons
                  color={message.status !== "failed" ? "#667781" : "#F50004"}
                  size={14}
                  name={
                    message.status === "sending"
                      ? "time-outline"
                      : message.status === "sent"
                      ? "checkmark-outline"
                      : "close-circle"
                  }
                />
              ) : null}
            </View>
          </View>

           <View 
            className={`absolute ${!isOwnMessage ? 'border-gray-100' : 'border-green-200'}`}  
            style={!isOwnMessage ? styles.tailRight : styles.tailLeft}/> 
        </View>

        {message.status === "failed" ? (
          <Pressable
            onPress={handleResendMessage}
            className=" rounded-full overflow-hidden  "
            android_ripple={{
              foreground: true,
              radius: 100,
              color: "#F5000430",
            }}
          >
            <Text className="" style={{ fontSize: 12, color: "#F50004" }}>
              Error, presiona para reenviar
            </Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tailLeft: {
    width: 0,
    height: 0,
    borderBottomWidth: 20,
    borderBottomColor: "transparent",
    borderLeftWidth: 20,
    marginRight: -10,
    right: 0,
    top: 0,
  },
  tailRight: {
    width: 0,
    height: 0,
    borderBottomWidth: 20,
    borderBottomColor: "transparent",
    borderRightWidth: 20,
    marginLeft: -10,
    left: 0,
    top: 0,
  },
});
