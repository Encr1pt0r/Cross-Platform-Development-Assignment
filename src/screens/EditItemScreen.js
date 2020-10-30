import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DiaryContext from '../contexts/DiaryContext';

// I can improve on this in some areas
// 1. Make it update immediately when the changes are comfirmed, Gordon said I can use Context and ID to sor this issue
// 2. I can beatify this area using styles
// 3. I can make the inputs hold the current values in the screen
// 4. I can implement a 5 start rating system from that link I found
// 5. Implement Persistant storage
// 6. Use the camera to add a cover page

const EditItemScreen = ({navigation, route}) => {
    const { id } = route.params;
    const { state, update } = useContext(DiaryContext);
    const currentEntry = state.find((e) => e.id === id);

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
            
            <Button title="Save changes" onPress={() => {
                update(currentEntry.id, title, pages, rating, comment, currentEntry.date, () => navigation.pop());
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

export default EditItemScreen;