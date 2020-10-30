import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import DiaryContext from '../contexts/DiaryContext';
import StarRating from '../components/StarRating/StarRating';

//elements pressed from the FlatList are loaded here.

const ViewItemScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const { state } = useContext(DiaryContext);
    const currentEntry = state.find((e) => e.id === id);
    console.log(currentEntry.rating);

    // screen updates properly when updated, used context to find the state instead of taking it from route
    // id is only used from route.params to take the right element from DairyContext.

    return (
        <View>
            <Text style={styles.title}>{currentEntry.title}</Text>
            <Text style={styles.date}>Started reading: {new Date(currentEntry.date).toLocaleDateString()}</Text>
            <View style={styles.pagesAndRatingContainer}>
                <Text style={styles.subtitle}>Pages read:</Text>
                <Text style={styles.pagesAndRatingItem}>{currentEntry.pages}</Text>
                <Text style={styles.subtitle}>Rating:</Text>
                <Text style={styles.pagesAndRatingItem}>{currentEntry.rating}/5</Text>
                {/* <StarRating num={rating} />  This was the call for the StarRating.js*/}
            </View>
            <Text style={styles.commentTitle}>Teacher's comments:</Text>
            <Text style={styles.comment}>{currentEntry.comment}</Text>
            <Button style={styles.button} title='Edit Entry' onPress={() => {
                navigation.navigate('Edit', { id: id, title: currentEntry.title, pages: currentEntry.pages, rating: currentEntry.rating, comment: currentEntry.comment });
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        paddingTop: 15,
        flex: 1,
        alignSelf: 'center',
    },
    date: {
        fontSize: 22,
        paddingTop: 15,
        alignSelf: 'center',
    },
    pagesAndRatingContainer: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 15,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 18,
        paddingRight: 30,
        flex: 2,
    },
    pagesAndRatingItem: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
    },
    commentTitle: {
        fontSize: 18,
        paddingLeft: 15,
        paddingTop: 15,
        alignSelf: 'center',
    },
    comment: {
        fontSize: 15,
        flex: 1,
        paddingTop: 15,
        alignSelf: 'center',
    },
    button: {
        padding: 15,
        alignSelf: 'baseline',
    }
});

export default ViewItemScreen;