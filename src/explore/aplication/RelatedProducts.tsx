import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ProductCardBasic } from '../../shared/ProductCardBasic'
import { getRecentsProducts } from './use-case/productsUseCase'
        
export const RelatedProducts = ( ) => {

    const [relatedProducts, setRelatedProducts] = useState<any[]>()

    async function getLastProducts(){
        setRelatedProducts(await getRecentsProducts()) //>>>>>>>><<<<< GET RELATED PRODUCTS
    }


    useEffect(() => {
        getLastProducts() //HACER LOS DISTINTOS ENDOPOINTS PARA LOS PRODUCTOS 
    },[])


    return(

        relatedProducts &&
        <View className='px-3'>
            <Text className="text-xl font-bold mb-3">En tu area</Text>

            <ScrollView horizontal contentContainerStyle={{gap:20}} alwaysBounceHorizontal showsHorizontalScrollIndicator={false}>
                    {relatedProducts?.map(p => (
                        <View key={p.id}  className="flex-1 border border-slate-300" style={{width:200}}>
                            <ProductCardBasic bgText="bg-white" bgImage={'bg-white'} product={p}/>
                        </View>
                    ))}
            </ScrollView>
        </View>
    )
}