import React, {useEffect, useLayoutEffect, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { auth } from '../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomListItem from '../components/CustomListItem';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { db } from '../firebase';

const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([]);
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login');
        })
    }
    
    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return unsubscribe;
    }, [])

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
                    <TouchableOpacity 
                            onPress={ () => {
                                navigation.navigate('AddChat');
                            } }>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>

                </View>
        )

        
        });
    }, [navigation])

    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id, data: { chatName }}) => (
                    <CustomListItem key={id} id={id} chatName={chatName} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }

})