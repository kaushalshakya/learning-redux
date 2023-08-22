import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = ([
    {
        id: 0,
        firstName: 'Select',
        lastName: ''
    },
])

const userSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers : {
            userAdd : {
                reducer(state, action) {
                    state.push(action.payload)
                },
                prepare(firstName, lastName) {
                    return {
                        payload: {
                            id: nanoid(),
                            firstName,
                            lastName
                        }
                    }
                }
            }
        }
    }
)

export const allUsers = (state) => state.users;

export const { userAdd } = userSlice.actions;

export default userSlice.reducer;