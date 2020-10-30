import React from 'react';
import {View, Text, Button} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ViewItemScreen = ({navigation, route}) => {

    const {id, title, rating, comment, pages, date} = route.params;

    return(
        <View>
            <Text>ID: {id}</Text>
            <Text>TITLE: {title}</Text>
            <Text>DATE: {new Date(date).toLocaleDateString()}</Text>
            <Text>PAGES: {pages}</Text>
            <Text>RATING: {rating}</Text>
            <Text>COMMENT: {comment}</Text>

            <Button title='Edit Entry' onPress={() => {
                navigation.navigate('Edit', {id: id});
            }}/>
        </View>
    );
};

export default ViewItemScreen;