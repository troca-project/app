import { Dispatch, createContext, useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import React from 'react'


const CategoriesContext = createContext<any>(undefined)




export const CategoriesProvider = ({children} ) => {
    const [allCategories, setAllCategories] = useState<any>()

    

    return( 
        <CategoriesContext.Provider value={{allCategories, setAllCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

    
    
export const useCategories = () => useContext<{allCategories:undefined|[], setAllCategories:Dispatch<any>}>(CategoriesContext);