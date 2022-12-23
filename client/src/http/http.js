import axios from 'axios'
axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:5000'

export async function getToken(setIsToken) {
    try{
        await axios.get(`${API_URL}/token`)
        setIsToken(true)
    } catch(err) {
        console.log(err);
    }
}

export async function getExtensions(setList) {
    try{
        const response = await axios.get(`${API_URL}/extensions`)

        if(response.data.hint && response.data.hint === 'Access token has been revoked'){
            await axios.get(`${API_URL}/clearCookie`)
        }
        setList(response.data.data.fetchAllExtensions.extension);
    } catch(err) {
        console.log(err);
    }
}