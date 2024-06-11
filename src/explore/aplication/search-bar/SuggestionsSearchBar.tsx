import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import androidRipple from '../../../utils/androidRipple'
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { HomeStackParams, ParamsDetailRoute, ParamsSearchRoute } from '../../../routes/typesRoutes';
import { getSuggestions, saveSuggestion } from '../use-case/suggestionUseCase';


export const SuggestionsSearchBar = ({searchQuery}:{searchQuery:string}) => {
    const {navigate} = useNavigation<ParamsSearchRoute>()

    const [suggestions, setSuggestions]  = useState<string[]>()
    //HACER ENDPOINT PARA SUGGESTIONS Y GUARDAR ULTIMAS BÚSQUEDAS: DAR PRIORIDAD A ULTIMAS BÚSQUEDAS EN LAS SUGGESTIONS
    const searchSuggestion = (suggestion:string) => {
        saveSuggestion(suggestion)        
        navigate('search' , {expected:suggestion, have:''})
    }

    const listenSearchQuery = async () => {
        const mockSuggestions = await getSuggestions(searchQuery)
        
        if (searchQuery) {
            mockSuggestions.unshift({query:searchQuery})
        }

        console.log({here:mockSuggestions});
        setSuggestions(mockSuggestions)
    }

    useEffect(()=>{
        listenSearchQuery()
       
    },[searchQuery])


    const renderSuggestion = ({item}) => { 
        return(
            <Pressable onPress={() => searchSuggestion(item.query)} android_ripple={androidRipple}>
                <View className='py-3 px-5 bg-white border-b border-slate-100'>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row gap-4 items-center">
                            <Octicons name={item.local ? 'history' : 'search'} size={23} color={"gray"}/>
                            <Text className='text-gray-600 ' style={{fontSize:13}}>{item.query}</Text>
                        </View>

                    </View>
                </View>
            </Pressable>
        )
    }

    return(
        <View>
            <FlatList keyboardShouldPersistTaps="handled" data={suggestions} renderItem={renderSuggestion} keyExtractor={(s, i) => i.toString()} >
            </FlatList>
        </View>
    )
}