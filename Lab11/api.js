import axios from 'axios';
const endpoint = 'http://connect-js.com:3000/lunches';

export const saveLunchData = (name, selection, instructions, success, error) => {
    axios.post(endpoint, {
        selection: selection,
        instructions: instructions
    })
        .then((response) => {
            success(response);
            console.log(response);
        })
        .catch((response) => {
            if (response instanceof Error) {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', response.message);
                error(response);
            } else {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                console.log(response.data);
                console.log(response.status);
                console.log(response.headers);
                console.log(response.config);
            }
            console.log(response);
        });
};

export const getLunchData = (success, error) => {
    axios.get(endpoint)
        .then((response) => {
            success(response);
            console.log(response);
        })
        .catch((response) => {
            if (response instanceof Error) {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', response.message);
                error(response);
            } else {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                console.log(response.data);
                console.log(response.status);
                console.log(response.headers);
                console.log(response.config);
            }
            console.log(response);
        });
};
