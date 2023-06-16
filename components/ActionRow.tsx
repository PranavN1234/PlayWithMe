import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {FontAwesome5} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">
type Props = {
    title: string;
    screen: any;
    color: string;
    icon?: any;
    requiresPro?:boolean;
    vertical?:boolean
};
const ActionRow = ({title, screen, color, icon, vertical, requiresPro}:Props) => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(screen)} className={`flex flex-1 m-2 justify-center items-center py-6 rounded-lg space-x-2 ${vertical?"flex-col":"flex-row"}`} style={{backgroundColor: color}}>
            <FontAwesome5 name={icon} size={30} color="black"/>
            <Text className="text-whiter font-bold text-lg">{title}</Text>
        </TouchableOpacity>
    )
}

export default ActionRow