import axios from 'axios'

const url = 'https://www.googleapis.com';

export const registerUser = async (form) => {
    const {email, password} = form
    try{
        const res = await axios.post(`${url}/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDNa9uzz-cR39dLVb1of0eN1cQ1QTP48kU`, {email, password, returnSecureToken: true});
        return res;
    }catch(error){
        return error.response
    }
}

export const loginUser = async (form) => {
    const {email, password} = form
    try{
        const res = await axios.post(`${url}/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDNa9uzz-cR39dLVb1of0eN1cQ1QTP48kU`, {email, password, returnSecureToken: true});
        return res;
    }catch(error){
        return error.response
    }
}

export const authUser = async (idToken) => {
    try{
        const res = await axios.post(`${url}/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyDNa9uzz-cR39dLVb1of0eN1cQ1QTP48kU`, {idToken});
        return res;
    }catch(error){
        return error.response
    }
}