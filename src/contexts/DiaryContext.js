import React, { useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = "dairy_storage";

const DiaryContext = React.createContext();

const InitalDiary = [];

const DairyReducer = (state, action) => {
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
            return state.filter((e) => e.id !== action.payload.id);
        case 'SaveEntries':
            try {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch(e) {
                console.log(e);
            } finally {
                return state;
            }
        case 'LoadEntries':
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    pages: action.payload.pages,
                    rating: action.payload.rating,
                    comment: action.payload.comment,
                    date: new Date(action.payload.date),
                }
            ]
        default:
            return state;
    }
}

export const DiaryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DairyReducer, InitalDiary);

    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if(storage !== null && state.length === 0) {
                let intitalState = JSON.parse(storage);
                intitalState.forEach((e) => {
                    dispatch({type: 'LoadEntries', payload: e});
                });
            }
        }
        loadStorage();
    }, [STORAGE_KEY])

    const addDairyEntry = (title, pages, rating, comment, callback) => {
        dispatch({
            type: 'AddEntry',
            payload: {
                title: title,
                pages: pages,
                rating: rating,
                comment: comment
            }
        });
        dispatch({type: 'SaveEntries'});
        if (callback) { callback(); }
    }

    const deleteDairyEntry = (id, callback) => {
        dispatch({ type: 'DeleteEntry', payload: { id: id } });
        if (callback) { callback(); }
    }

    const updateDairyEntry = (id, title, pages, rating, comment, date, callback) => {
        dispatch({ type: 'UpdateEntry', payload: {id, title, pages, rating, comment, date}});
        if (callback) { callback(); }
    }

    return (
        <DiaryContext.Provider value={{
            state: state,
            create: addDairyEntry,
            remove: deleteDairyEntry,
            update: updateDairyEntry,
        }}>
            {children}
        </DiaryContext.Provider>
    );
};

export default DiaryContext;