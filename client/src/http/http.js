import axios from 'axios'
axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:5000'

export async function getToken() {
    try{
        const response = await axios.get(`${API_URL}/token`)
        console.log(response.data.access_token);
    } catch(err) {
        console.log(err);
    }
}

export async function getExtensions(setList) {
    try{
        const response = await axios.get(`${API_URL}/extensions`)
        console.log(response);
        setList(response.data.data.fetchAllExtensions.extension);
    } catch(err) {
        console.log(err);
    }
}