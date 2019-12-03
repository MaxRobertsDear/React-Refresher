import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-refresher-aaaee.firebaseio.com/'
})

export default instance