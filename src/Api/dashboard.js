import axios from 'axios'

const url = 'https://us-central1-inventory-system-944c6.cloudfunctions.net';

export const getInventoryCount = async () => {
    try{
        const {data} = await axios.get(`${url}/app/api/items/count`);
        return data;
    }catch(error){
        return error.response
    }
}

export const getDepartmentCount = async () => {
    try{
        const {data} = await axios.get(`${url}/app/api/department/count`);
        return data;
    }catch(error){
        return error.response
    }
}

export const getUsersCount = async () => {
    try{
        const {data} = await axios.get(`${url}/app/api/users/count`);
        return data;
    }catch(error){
        return error.response
    }
}
