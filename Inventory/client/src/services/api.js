import axios from 'axios';

const URL= 'http://localhost:8080';

export const addUser=async(user)=>{
    try{
       return await axios.post(`${URL}/add`, user)
    }catch(error){
        console.log('Error occured', error);
    }
}