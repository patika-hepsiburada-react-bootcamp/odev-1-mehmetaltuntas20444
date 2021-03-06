import axios from 'axios';

//we are using this link two times so make a simplification
const apiURL = 'https://jsonplaceholder.typicode.com'

const getData = async (userID) => {
    try {
        const {data: user} = await axios.get(`${apiURL}/users/${userID}`);
        const {data: posts} = await axios.get(`${apiURL}/posts?userId=${userID}`);
        return  {...user, posts};
    } catch (error) {
        return error.message;
    }
};

export default getData;