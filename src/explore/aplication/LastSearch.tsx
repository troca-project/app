import  {View, Text, ScrollView} from 'react-native' 
import  React, { useEffect, useState } from 'react' 
import { ProductCardBasic } from '../../shared/ProductCardBasic'
import { getRecentsProducts } from './use-case/productsUseCase'

export const LastSearch = ( ) => {

    const [lastProducts, setLastProducts] = useState<any[]>()


    async function getLastProducts(){
        setLastProducts(await getRecentsProducts())
        console.log(await getRecentsProducts());
        
    }

    useEffect(() => {
        getLastProducts()

    },[])


    return(
        <View className='px-3'>
            <Text className="text-xl font-bold mb-3">Ultimas búsquedas</Text>


            <ScrollView horizontal contentContainerStyle={{gap:20}} alwaysBounceHorizontal showsHorizontalScrollIndicator={false}>
                    {lastProducts?.map(p => (
                        <View key={p.id}  className="flex-1 border border-slate-300" style={{width:200}}>
                            <ProductCardBasic bgText="bg-white" bgImage={'bg-white'} product={p}/>
                        </View>
                    ))}
            </ScrollView>

        </View>
    )


}