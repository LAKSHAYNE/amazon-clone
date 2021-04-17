import axios from 'axios';

const instance=axios.create({
    baseURL:'https://ancient-cove-42617.herokuapp.com'
})

export default instance;