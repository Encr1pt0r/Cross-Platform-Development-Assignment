import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Inspired by https://medium.com/@hassanahmedkhan/simple-ratings-view-in-react-native-59a0ceb2d13f#:~:text=%20Simple%20Ratings%20View%20in%20React%20Native%20,stars%20and%20Text%20component%20to%20add...%20More%20
// However went by the route of using a custom component

// This was meant to implement a 5 star ***** representation of the user input
// When this custom compenent is called, it calls a generate() which processes the array, then the array is returned in JSX.
// It currently makes no appearance when called but indeed count the stars

let stars = [];

const generate = (num) => {
    for (let i = 0; i < 5; i++) {
        let path;
        if (i < num) {
            path = require('./star-filled.png');
            console.log("star");
        } else {
            path = require('./star-unfilled.png');
            console.log("staro");
        }

        stars.push(<Image source={path} key={i}/>);
        console.log(stars[i]);
    }
    console.log("Rating has been processed with " + num);
}

const StarRating = ({ num }) => {
    console.log(num);
    generate(num);
    return (
        <View>
            {stars}
        </View>
    );
};

const styles = StyleSheet.create({

});

export default StarRating;