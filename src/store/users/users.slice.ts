import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerson, Person, UserFull } from '../interfaces';
import { LoadUsers, FullUsers } from './users.asyncActions';
import { setNewPerson } from './users.actions';

interface initialStateCall {
    listPeople: IPerson[];
    isLoading: boolean;
    onePerson: IPerson;
    updateState: UserFull;
    updateState2: string;

}

const initialState : initialStateCall = {
    listPeople: [],
    isLoading: true,
    onePerson: new Person() ,
    updateState: new FullUsers(),
    updateState2: '',

}

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setNewPerson,(state, action: PayloadAction<IPerson>)=>{
                console.log('DATA: ', action.payload)
                state.onePerson = action.payload;
            })
            .addCase(LoadUsers.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(LoadUsers.fulfilled, (state, action: PayloadAction<IPerson[]>)=>{
                state.isLoading = false;
                state.listPeople = action.payload;
            })
            .addCase(LoadUsers.rejected, (state)=>{
                state.isLoading = false;
                state.listPeople = [];
            })
            .addCase(FullUsers.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(FullUsers.fulfilled, (state, action: PayloadAction<UserFull>)=>{
                console.log('si esta funcionando esto')
            })
            .addCase(FullUsers.rejected, (state)=>{
                state.isLoading = false;
                state.listPeople = [];
            })
            
        
    }
});

export default usersSlice.reducer;
export type {initialStateCall};