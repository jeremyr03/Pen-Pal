import {NextApiResponse} from "next";

const handleResponse = (response:Response) => {
    console.log(response)
    return response.text().then(text => {
        console.log(text)
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const Get = (url:string) => {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(res=>{console.log(res);return handleResponse(res)});
}

const Post = (url:string, body:string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then();
}
const Patch = (url:string, body:string) => {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then();
}

// delete is not allowed so Delete is used instead
const Delete = (url:string) => {
    const requestOptions = {
        method: 'DELETE',
    };
    return fetch(url, requestOptions).then();
}

export const fetchWrapper = {
    Get,
    Post,
    Patch,
    Delete,
    handleResponse
}

