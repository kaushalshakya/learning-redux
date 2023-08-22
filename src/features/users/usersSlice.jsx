import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = ([
    {
        id: 1,
        firstName: 'Author',
        lastName: 'Name'
    },
    {
        id: 2,
        firstName: 'Test',
        lastName: 'User'
    },
    {
        id: 3,
        firstName: 'Alpha',
        lastName: 'User'
    }
])

const userSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers : {
            // userAdded : {
            //     reducer(state, action) {
            //         state.push(action.payload)
            //     },
            //     prepare(firstName, lastName) {
            //         return {
            //             userId: nanoid(),
            //             firstName,
            //             lastName
            //         }
            //     }
            // }
        }
    }
)

export const allUsers = (state) => state.users;

// export const { userAdded } = userSlice.actions;

export default userSlice.reducer;