import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DiaryContext from '../contexts/DiaryContext';

// This is where you can edit the element.

const EditItemScreen = ({navigation, route}) => {
    const { id, title, pages, rating, comment } = route.params;
    const { state, update } = useContext(DiaryContext);
    const currentEntry = state.find((e) => e.id === id);
    const [newtitle, setNewTitle] = useState('');
    const [newpages, setNewPages] = useState('');
    const [newrating, setNewRating] = useState('');
    const [newcomment, setNewComment] = useState('');
    
    return (
        <View>
            <Text style={styles.textlabel}>Enter a Title</Text>
            <TextInput style={styles.textinput}
                placeholder={title} value={newtitle}
                onChangeText={(text) => setNewTitle(text)}
            />
            
            <Text style={styles.textlabel}>Enter pages you have read</Text>
            <TextInput style={styles.textinput}
                placeholder={pages} value={newpages}
                onChangeText={(text) => setNewPages(text)}
                multiline={false}
            />

            <Text style={styles.textlabel}>Enter rating</Text>
            <TextInput style={styles.textinput}
                placeholder={rating} value={newrating}
                onChangeText={(text) => setNewRating(text)}
                multiline={false}
            />

            <Text style={styles.textlabel}>Teacher's comment</Text>
            <TextInput style={styles.textinput}
                placeholder={comment} value={newcomment}
                onChangeText={(text) => setNewComment(text)}
                multiline={true}
                numberOfLines={5}
            />
            
            <Button title="Save changes" onPress={() => {
                update(currentEntry.id, newtitle, newpages, newrating, newcomment, currentEntry.date, () => navigation.pop());
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
        alignSelf: 'center',
    }
});

export default EditItemScreen;