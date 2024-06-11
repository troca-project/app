import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { BlockOfProducts } from '../../shared/BlockOfProducts'
import { getProductsByCategory, getRecentsProducts } from '../../explore/aplication/use-case/productsUseCase'
import { useNavigation } from '@react-navigation/native'
        
export const BlockOfRelated = ({category_id, route} ) => {
    
    const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
    const { navigate } = useNavigation<any>();

    async function getProducts(){
        setCategoryProducts(await getProductsByCategory(category_id));
    }

    useEffect(() => {
        getProducts(); 
    },[])

    const handleActionBLock = ( ) => {
        navigate('search', {query:category_id , type:'category', title:route.params.name })
    }


    return(
        <View>
            <BlockOfProducts title={'Están cambiando en tu zona'} titleFooter="Ver mas" action={handleActionBLock} products={categoryProducts.slice(0,4)}></BlockOfProducts>
        </View>
    )
}