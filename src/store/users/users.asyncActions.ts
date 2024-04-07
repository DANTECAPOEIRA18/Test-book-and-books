import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListUsers, updateOneUser } from "../../services/users.service";
import { IPerson, UserFull, UserFullClass } from "../interfaces";



export const LoadUsers: any = createAsyncThunk(
    'users/getList',
    async(token: string,{rejectWithValue})=>{
        try{
            const response : IPerson[] = await getListUsers(token);
            return response;
        }
        catch{
            rejectWithValue([]);
        }
    }
)

export const FullUsers: any = createAsyncThunk(
    'users/putList',
    async(userfull: UserFull,{rejectWithValue})=>{
        try{
            const response: UserFull = await updateOneUser(userfull);
            return response;
        }
        catch{
            rejectWithValue(new UserFullClass())
        }
    }
)