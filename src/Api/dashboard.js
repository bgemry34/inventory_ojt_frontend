import axios from 'axios'

const url = 'http://localhost:5001';

export const getInventoryCount = async () => {
    try{
        const {data} = await axios.get(`${url}/inventory-system-944c6/us-central1/app/api/items/count`);
        return data;
    }catch(error){
        return error.response
    }
}

export const getDepartmentCount = async () => {
    try{
        const {data} = await axios.get(`${url}/inventory-system-944c6/us-central1/app/api/department/count`);
        return data;
    }catch(error){
        return error.response
    }
}
