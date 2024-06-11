import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { ChatPreview } from './ChatPreview'
        
export const UserChats = ( ) => {
    const mock = [
        {id:1, title:'Zapatillas new balance', user1_id:1, user2_id:7 },
        {id:2, title:'PS3 Slim', user1_id:1, user2_id:4 },
        {id:3, title:'Campera de jean', user1_id:1, user2_id:2 },
        {id:4, title:'Cadena de bici', user1_id:1, user2_id:15 },
    ]
    
    const [userChats , setUserChats] = useState(mock)
    return(
        <View className="">
            <FlatList  ItemSeparatorComponent={()=><View className='border-b border-slate-100'/>} data={userChats} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => <ChatPreview chat={item}/>}>
            </FlatList>
        </View>
    )
}