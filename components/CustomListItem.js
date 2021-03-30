import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({id, chatName, enterChat}) => {

    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"800"}}>
                    Youtube Chat
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    Test subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
  
}

export default CustomListItem;

const styles = StyleSheet.create({

})