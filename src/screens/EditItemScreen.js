import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DiaryContext from '../contexts/DiaryContext';

// I can improve on this in some areas
// 1. Make it update immediately when the changes are comfirmed, Gordon said I can use Context and ID to sor this issue
// 2. I can beatify this area using styles: Areas covered, ViewItemScreen
// 3. I can make the inputs hold the current values in the screen
// 4. I can implement a 5 start rating system from that link I found
// 5. Implement Persistant storage
// 6. Use the camera to add a cover page

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