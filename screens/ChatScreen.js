import React, {useEffect, useLayoutEffect, useState} from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import { Avatar } from 'react-native-elements';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { db } from '../firebase';
import { AntDesign} from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; 


const ChatScreen = ({ navigation, route }) => {

    const [input, setInput] = useState('');

    const sendMessage = () => {}
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Avatar 
                        rounded
                        source={{
                            uri: "https://miro.medium.com/max/300/1*PiHoomzwh9Plr9_GA26JcA.png"
                        }}
                    />
                    <Text
                        style={{color:"white", marginLeft: 10, fontWeight: "700"}}
                    >
                        {route.params.chatName}
                    </Text>
                </View>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width:80,
                        marginRight:30
                    }}
                >
                    <TouchableOpacity>
                        <AntDesign name="videocamera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="phone" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor:"white"}}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}  
            >
                <>
                    <ScrollView>

                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput 
                            placeholder="Signal message"
                            style={styles.textInput}
                            value={input}
                            onChangeText={ (text) =>{
                                    setInput(text)
                                } 
                            }
                        />
                        <TouchableOpacity onPress={sendMessage}>
                            <Ionicons name="send" size={24} color="#2868E6" />
                        </TouchableOpacity>

                    </View>
                </>                
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

export default ChatScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textInput:{
        height: 40,
        bottom: 0,
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#ECECEC',
        borderColor: 'transparent',
        color: 'grey',
        padding: 10,
        marginRight: 15
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding:15
    }

})