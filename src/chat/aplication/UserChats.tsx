import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { ChatPreview } from "./ChatPreview";
import { EmptyStateUserChats } from "./empty-states/EmptyStateUserChats";

export const UserChats = () => {
  const mock = [
    {
      id: 1,
      title: "Zapatillas new balance",
      product_sender: "Cadena de bici",
      product_receiver: "Llaves tubo",
      sender_id: 1,
      receiver_id: 2,
      created_at: new Date(),
      accepted: true,
    },
    {
      id: 2,
      title: "PS3 Slim",
      product_sender: "PS3 slim",
      product_receiver: "Campera de jean",
      sender_id: 1,
      receiver_id: 2,
      created_at: new Date(),
      accepted: true,
    },
    {
      id: 3,
      title: "Campera de jean",
      product_sender: "Zapatillas Usadas",
      product_receiver: "Gorra nike",
      sender_id: 1,
      receiver_id: 2,
      created_at: new Date(),
      accepted: true,
    },
    {
      id: 4,
      title: "Cadena de bici",
      product_sender: "PS3 slim",
      product_receiver: "Campera de jean",
      sender_id: 1,
      receiver_id: 2,
      created_at: new Date(),
      accepted: true,
    },
  ];

  const [userChats, setUserChats] = useState<any>(mock);

  return (
    <View className="h-full bg-white">
      { !userChats ? (
        <EmptyStateUserChats></EmptyStateUserChats>
      ) : (
        <FlatList
          ItemSeparatorComponent={() => (
            <View className="border-b border-slate-200" />
          )}
          data={userChats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ChatPreview chat={item} />}
        ></FlatList>
      )}
    </View>
  );
};
