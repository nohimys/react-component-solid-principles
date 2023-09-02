//Responsibilities:
//Core API functions

const post = (url: string, payload: object) => {
    return new Promise(resolve => {
        setTimeout(() => {
            alert(`Calling POST for ${url} with ${JSON.stringify(payload)}`);
            resolve('Successful!');
        }, 500);
    })
};
export default post;