import {fetchWrapper} from "./fetch-wrapper";

const apiUrl = '/api/'
const baseUrl = `${apiUrl}/user/`

const addUserIfNotExist = async (id:string) => {
    const user = await fetchWrapper.Get(`${baseUrl}/${id}`);
    console.log(user)

}

export const userServices = {
    addUserIfNotExist,
}
