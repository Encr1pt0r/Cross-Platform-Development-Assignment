import React, {useReducer} from 'react';

const DiaryContext = React.createContext();

const InitalDiary = [
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
            return state.filter((e) => e.id !== action.payload);
        default:
            return state;
    }
}

export const DiaryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DairyReducer, InitalDiary);

    const addDairyEntry = (title, pages, rating, comment, callback) => {
        dispatch({ 
            type: 'AddEntry', 
            payload: {
                title: title, 
                pages: pages, 
                rating: rating, 
                comment: comment} 
            });
        if(callback) {
            callback();
        }
    }

    return (
        <DiaryContext.Provider value={{
            state: state,
            create: addDairyEntry,
        }}>
            {children}
        </DiaryContext.Provider>
    );
};

export default DiaryContext;