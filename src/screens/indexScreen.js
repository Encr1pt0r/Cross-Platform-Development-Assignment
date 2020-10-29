import React, { useState, useReducer } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const myDiary = [
    {
        id: -1,
        date: new Date(),
        title: "This is a book!",
        pages: "100-1000",
        rating: 3,
        comment: "Good boy!",
    }, {
        id: -2,
        date: new Date(),
        title: "This is a book!",
        pages: "100-1000",
        rating: 3,
        comment: "Good boy!",
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'AddEntry':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    pages: action.payload.pages,
                    rating: action.payload.rating,
                    comment: action.payload.comment,
                    date: new Date()
                }
            ];
        case 'UpdateEntry':
            return state.map((e) => {
                if (e.id === action.payload.id) {
                    return action.payload;
                } else {
                    return e;
                }
            })
        case 'DeleteEntry':
            return state.filter((e) => e.id !== action.payload);
        default:
            return state;
    }
}


const indexScreen = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, myDiary);

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Add',
                {
                    callback: (payload) => {
                        dispatch({ type: 'AddEntry', payload: payload })
                    }
                })}>
                <FontAwesome5 name="plus" size={32} color="black" />
            </TouchableOpacity>
        )
    });

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={
                    (e) => e.id.toString()
                }
                renderItem={({ item }) => {
                    console.log(item);
                    // if you look closely it has properties you can call, 
                    // I did this in the arrow function above to call the title
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("View", {
                                    id: item.id,
                                    title: item.title,
                                    pages: item.pages,
                                    rating: item.rating,
                                    comment: item.comment,
                                    date: item.date.toUTCString()
                                });
                                console.log("I've been pressed");
                            }}
                        >
                            <View style={styles.itemContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.dateText}>
                                        {item.date.toLocaleDateString()}
                                    </Text>
                                    <Text>
                                        {item.date.toLocaleTimeString()}
                                    </Text>
                                </View>
                                <Text style={styles.titleText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
        </View>
    );
};

const styles = new StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 16,
        paddingLeft: 15,
        flex: 1,
        alignSelf: 'flex-start',
    }
});

export default indexScreen;