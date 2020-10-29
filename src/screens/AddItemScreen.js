import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddItemScreen = ({navigation, route}) => {
    const { callback } = route.params;
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    
    return (
        <View>
            <Text style={styles.textlabel}>Enter a Title</Text>
            <TextInput style={styles.textinput}
                placeholder="Type title here" value={title}
                onChangeText={(text) => setTitle(text)}
            />
            
            <Text style={styles.textlabel}>Enter pages you have read</Text>
            <TextInput style={styles.textinput}
                placeholder="Type pages read here" value={pages}
                onChangeText={(text) => setPages(text)}
                multiline={false}
            />

            <Text style={styles.textlabel}>Enter rating</Text>
            <TextInput style={styles.textinput}
                placeholder="Type rating between 1-5" value={rating}
                onChangeText={(text) => setRating(text)}
                multiline={false}
            />

            <Text style={styles.textlabel}>Teacher's comment</Text>
            <TextInput style={styles.textinput}
                placeholder="Type comment here" value={comment}
                onChangeText={(text) => setComment(text)}
                multiline={true}
            />
            
            <Button title="Submit Entry" onPress={() => {
                callback({
                    title: title, 
                    pages: pages, 
                    rating: rating, 
                    comment: comment
                });
                navigation.pop();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    textinput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 2
    },
    textlabel: {
        fontSize: 18,
        padding: 5,
    }
});

export default AddItemScreen;