import axios from 'axios'

const url = 'https://us-central1-inventory-system-944c6.cloudfunctions.net';

export const fetchDepartment = async () => {
    try{
        const {data} = await axios.get(`${url}/app/api/department/read`);
        return data;
    }catch(error){
        return error.response
    }
}


export const createDepartment = async (name) => {
    try{
        const data = await axios.post(`${url}/app/api/department/create`, {name});
        return data;
    }catch(error){
        return error.response
    }
}

export const updateDepartment = async (id, name) => {
    try{
        const data = await axios.put(`${url}/app/api/department/update/`+id, {name});
        return data;
    }catch(error){
        return error.response
    }
}

export const deleteDepartment = async (id) => {
    try{
        const data = await axios.delete(`${url}/app/api/department/delete/`+id);
        return data;
    }catch(error){
        return error.response
    }
}
