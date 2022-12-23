import axios from 'axios'

const API_URL = 'http://localhost:5000'

export async function getToken() {
    try{
        const response = await axios.get(`${API_URL}/token`)
    } catch(err) {
        console.log(err);
    }
}

export async function getExtensions() {
    try{
        const response = await axios.get('/gql')
    } catch(err) {
        console.log(err);
    }
}