import React, {useEffect, useLayoutEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import {Input, Button, Image} from 'react-native-elements'
import { auth } from '../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomListItem from '../components/CustomListItem';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login');
        })
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: '#fff' },
            headerTitleStyle: {color: "black"},
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{marginLeft:20}}>
                    <TouchableOpacity
                        onPress={signOutUser}
                    >
                    <Avatar 
                        rounded
                        source={{uri: auth?.currentUser?.photoURL}}
                    />
                    </TouchableOpacity>
                </View>
                ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                }}>
                    <TouchableOpacity>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>

                </View>
        )

        
        });
    }, [navigation])

    return(
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({

})