import axios from 'axios'

const instance = axios.create({
    baseURL : "https://us-central1-clone-50a7a.cloudfunctions.net/api"
})

export default instance;
//http://localhost:5001/clone-50a7a/us-central1/api