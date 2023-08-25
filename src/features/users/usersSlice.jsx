import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = ([
    {
        id: 0,
        firstName: 'Select',
        lastName: '',
        fame: {
            love: '0',
            hate: '0'
        }
    },
])

const usersArray = [
    {
        id: 0,
        firstName: 'Select',
        lastName: '',
        fame: {
            love: '0',
            hate: '0'
        }
    },
];

const userSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers : {
            userAdd : {
                reducer(state, action) {
                    state.push(action.payload);
                    usersArray.push(action.payload);
                    localStorage.setItem('authors', JSON.stringify(state));
                },
                prepare(firstName, lastName, image) {
                    return {
                        payload: {
                            id: nanoid(),
                            firstName,
                            lastName,
                            image,
                            fame: {
                                love: 0,
                                hate: 0
                            }
                        }
                    }
                },
            },
            authorFame(state, action) {
                const { authorId, fame } = action.payload;
                const author = state.find(author => author.id == authorId);
                if(author) {
                    author.fame[fame]++;
                }
            },
            deleteAuthor(state, action) {
                console.log(action);
                const authorId = action.payload;
                return state.filter(author => author.id !== authorId);
            }
        }
    }
)

export const allUsers = (state) => state.users;

export const { userAdd, authorFame, deleteAuthor } = userSlice.actions;

export default userSlice.reducer;