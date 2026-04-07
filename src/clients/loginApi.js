const axios = required('axios');
const loginUser = async() => {
    const response = await axios.post('/login');
    return response.data.token;
};
module.export = {loginUser};