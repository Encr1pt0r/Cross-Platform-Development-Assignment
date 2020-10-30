import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import StarRating from '../components/StarRating/StarRating';

const ViewItemScreen = ({ navigation, route }) => {
    const { id, title, rating, comment, pages, date } = route.params;
    console.log(rating);

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>Started reading: {new Date(date).toLocaleDateString()}</Text>
            <View style={styles.pagesAndRatingContainer}>
                <Text style={styles.subtitle}>Pages read:</Text>
                <Text style={styles.pagesAndRatingItem}>{pages}</Text>
                <Text style={styles.subtitle}>Rating:</Text>
                <Text style={styles.pagesAndRatingItem}>{rating}/5</Text>
                <StarRating num={rating} />
            </View>
            <Text style={styles.commentTitle}>Teacher's comments:</Text>
            <Text style={styles.comment}>{comment}</Text>
            <Button style={styles.button} title='Edit Entry' onPress={() => {
                navigation.navigate('Edit', { id: id, title: title, pages: pages, rating: rating, comment: comment });
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