import React from 'react'
import { Text, View } from 'react-native'
import { SearchBar } from './SearchBar'
import { SuggestionsSearchBar } from './SuggestionsSearchBar'
        
export const MainSearchBar = ( ) => {

    


    return(
        <View className='flex-1 bg-white'>
            <SearchBar></SearchBar>
        </View>
    )
}