import axios from 'axios'
axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:5000'

export async function getToken() {
    try{
        const response = await axios.get(`${API_URL}/token`)
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

export async function getExtensions() {
    try{
        const response = await axios.get('/extensions')
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}