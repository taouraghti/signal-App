import React, {useEffect, useLayoutEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Input,Button } from 'react-native-elements';
import { AntDesign } from "@expo/vector-icons"
import { db } from '../firebase';
//import { Icon } from "react-native-vector-icons/FontAwesome"


const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add new chat',
            headerBackTitle: 'Chats'
        })
    }, [navigation]);
    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack()
        }).catch((error) => alert(error))
    }

    return(
        <View>
            <Input 
                placeholder="Enter"
                value={input}
                type="text"
                onChangeText={(text) => {setInput(text)}}
                onSubmitEditing={createChat}
                leftIcon={
                        <AntDesign name="wechat" size={24} color="black" />
                    }
            />
            <Button 
                disabled={!input}
                title="Create new chat"
                onPress={createChat}
            />
        </View>
    )

}

export default AddChatScreen;

const styles = StyleSheet.create({

})