import axios from 'axios';

export default {

    searchHouse: () => {
        return axios.get('/api/houses')
    }
}