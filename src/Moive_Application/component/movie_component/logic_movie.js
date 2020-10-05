import axios from 'axios';

const GetApi = async (url) => {
    try {
        const get = await axios.get(url);
        const response = await get.data;
        
        return response;
    }catch(err) {
        return err;
    }
}

export default GetApi;