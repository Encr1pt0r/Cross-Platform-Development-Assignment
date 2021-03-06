import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DiaryContext from '../contexts/DiaryContext';

// This file is the first screen the user sees, it includes the FlatList element

const indexScreen = ({ navigation }) => {

    const { state, remove } = useContext(DiaryContext);
    console.log(state);

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <FontAwesome5 style={styles.icon} name="plus" size={32} color="black" />
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

                                <TouchableOpacity onPress={() => { remove(item.id) }}>
                                    <Ionicons name="md-remove-circle-outline" size={30} color="black" />
                                </TouchableOpacity>
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
    },
    icon: {
        paddingRight: 10,
    }
});

export default indexScreen;