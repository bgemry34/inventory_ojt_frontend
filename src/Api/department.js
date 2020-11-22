import axios from 'axios'

const url = 'http://localhost:5001';

export const fetchDepartment = async () => {
    try{
        const {data} = await axios.get(`${url}/inventory-system-944c6/us-central1/app/api/department/read`);
        return data;
    }catch(error){
        return error.response
    }
}


export const createDepartment = async (name) => {
    try{
        const data = await axios.post(`${url}/inventory-system-944c6/us-central1/app/api/department/create`, {name});
        return data;
    }catch(error){
        return error.response
    }
}

export const updateDepartment = async (id, name) => {
    try{
        const data = await axios.put(`${url}/inventory-system-944c6/us-central1/app/api/department/update/`+id, {name});
        return data;
    }catch(error){
        return error.response
    }
}

export const deleteDepartment = async (id) => {
    try{
        const data = await axios.delete(`${url}/inventory-system-944c6/us-central1/app/api/department/delete/`+id);
        return data;
    }catch(error){
        return error.response
    }
}
