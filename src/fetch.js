/**
 * Makes a GET request using authorization header.
 * @param {string} accessToken 
 * @param {string} apiEndpoint 
 * @returns 
 */
export const callApiWithToken = async(accessToken, apiEndpoint) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    console.log(apiEndpoint);

    return fetch(apiEndpoint, options)
        .then(response => response.json())
        .then(response => {
            if(response) {
                console.log('Web API responded: ', response);
            }
            return response;
        })
        .catch(error => console.error(error));
};