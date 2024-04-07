import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./users/users.slice";

const rootReducer = combineReducers(
    {
        users: usersSlice
    }
);

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;