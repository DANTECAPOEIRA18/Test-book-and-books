import { client } from "./apiHandler";
import { IPerson, Person, UserFull, UserFullClass } from "../store/interfaces";


export const getListUsers = async (token: string) => {
    try{
        const response = await (client.get('/user', token));
        if([200,201].includes(response.status)){
            return response.data.data.map((value: IPerson)=>{
                return new Person({
                    ...value
                })
            })
        }
        else{
            throw new Error(`error related to ${response.status}`)
        }
    }
    catch(error){
        console.error(error);
        return [];
    }
}

export const updateOneUser = async (userfull: UserFull) => {
    try{
        const response = await (client.put(`/user/${userfull.id}`, userfull, ''));
        if([200,201].includes(response.status)){
            return response.data.data.map((value:UserFull)=>{
                return new UserFullClass({
                    ...value
                })
            })
        }
        else{
            throw new Error(`error related to ${response.status}`)
        }
    }
    catch(error){
        console.error(error);
        return new UserFullClass();
    }
}