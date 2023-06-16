import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import {ScrollView} from "react-native";
import ActionRow from "../components/ActionRow";

const HomeScreen = ()=>{
    return (
        <SafeAreaView className="flex-1 bg-gray-100 relative">
            <ScrollView>
            <TouchableOpacity className="absolute z-50 top-5 right-3 items-center">
                <FontAwesome5 name="crown" size={30} color="#3A5311" />
                <Text className="text-center text-[#3A5311]">Get Premium</Text>
            </TouchableOpacity>
        {/*Pro and upgrade*/}
        {/*    Logo   */}
            <Image source={require("../assets/chessimage.png")} className="w-full max-w-full"/>
                <View className="mx-5">
                    <View className="flex-row justify-between space-x-2">
                        <ActionRow title="View my favourite openings" screen="Demo" color="#fece7a" icon="chess-bishop" vertical/>
                        <ActionRow title="View my Chess.com ID" screen="Demo" color="#8fcae7" icon="chess-board" vertical/>
                    </View>

                    <ActionRow title="Play a Blitz game with me" screen="Demo" color="#ccf0e7" icon="chess-rook" requiresPro/>
                    <ActionRow title="Play a Rapid game with me" screen="Demo" color="#ecdae3" icon="chess-pawn" requiresPro/>
                </View>

            {/*    Actions Row 4*/}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen