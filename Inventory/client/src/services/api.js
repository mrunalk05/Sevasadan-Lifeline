import axios from 'axios';

const URL= 'http://localhost:8000';

export const addUser=async(user)=>{
    try{
       return await axios.post(`${URL}/add`, user);
       
    }catch(error){
        console.log('Error occured', error);
    }
}

export const allUser= async()=>{
    try{
        return await axios.get(`${URL}/all`, )
    }catch(error){
        console.log('Error occured', error);
    }
}

export const getUser= async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }
    catch(error){
        console.log('Error occured', error);
    }
}
export const deleteUser= async()=>{
    
}

export const addbed= async()=>{
    try{
        return await axios.post(`${URL}/add_bed`)
    }catch(error){
        console.log('Error occured while adding bed', error);
    }
}