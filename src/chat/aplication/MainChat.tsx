import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { socket } from '../../socket-io/socket'
import { MainInChat } from './in-chat/MainInChat'
import { UserChats } from './UserChats'
        
export const MainChat = ( ) => {

    return(
        <View className="">
                <UserChats></UserChats>
        </View>
    )
}