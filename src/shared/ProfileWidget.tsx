import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Badge } from 'react-native-paper';

export const ProfileWidget = ( ) => {
    return(
        <View className=' px-3'>
            <View className="flex-row items-center justify-between">

                <Pressable android_ripple={{borderless:true, foreground:false, }}>
                    <View className="flex-row gap-3 items-center">
                        <View className="">
                            <Image style={{borderWidth:1, borderColor:'white'}} className='w-10 h-10 rounded-full bg-slate-200' source={{uri:'https://us.123rf.com/450wm/cheschhh/cheschhh1805/cheschhh180500139/100737036-retrato-de-un-joven-barbudo-con-el-ce%C3%B1o-fruncido-tiro-del-estudio.jpg?ver=6'}} />
                        </View>

                        <View className=''>
                            <Text className='font-bold text-lg'>Amaru Daicz</Text>

                            <View className='flex-row -ml-1'>
                                <MaterialIcons color="gray" name="location-pin" size={20} />
                                <Text className='text-slate-600'>Rio ceballos, Cordoba</Text>
                            </View> 
                        </View>
                    </View>

                </Pressable>

                <View className='relative'>

                    <Pressable className='bg-white p-2 rounded-full overflow-hidden' android_ripple={{borderless:true,radius:24 }}>
                        <MaterialIcons name="notifications-none" size={30} />
                        <Badge style={{}} className=" absolute top-1 right-2" size={17}>{5}</Badge>
                    </Pressable>

                </View>


            </View>



        </View>
    )
}