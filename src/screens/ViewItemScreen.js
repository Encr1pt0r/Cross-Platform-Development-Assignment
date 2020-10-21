import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ViewItemScreen = ({navigation, route}) => {
    // navigation.setOptions({
    //     headerRight: () => (
    //         <TouchableOpacity onPress= {callback}>
    //             <MaterialIcons name="remove-circle" size={32} color="black" />
    //         </TouchableOpacity>
    //     )
    // });

    const {id, title, rating, comment, pages, date} = route.params;
    //const {callback} = removeEntry(id);
    
    console.log(route.params);
    return(
        <View>
            {/* <Text>ID: {id}</Text> */}
            <Text>TITLE: {title}</Text>
            <Text>DATE: {new Date(date).toLocaleDateString()}</Text>
            <Text>PAGES: {pages}</Text>
            <Text>RATING: {rating}</Text>
            <Text>COMMENT: {comment}</Text>
        </View>
    );
};

export default ViewItemScreen;