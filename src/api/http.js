import axios from 'axios'

var instance = axios.create({
    headers:{
        'Content-type':'Complication/json'
    },
    baseURL:'http://aitest.testing-studio.com:8089/',
})

export default instance;