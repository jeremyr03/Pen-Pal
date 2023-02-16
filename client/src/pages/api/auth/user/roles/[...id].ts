import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function shows(req, res) {
    try {
        const { accessToken } = await getAccessToken(req, res, {
            scopes: ['read:roles']
        });

        const baseURL =
            process.env.AUTH0_BASE_URL?.indexOf('http') === 0
                ? process.env.AUTH0_BASE_URL
                : `https://${process.env.AUTH0_BASE_URL}`;

        // This is a contrived example, normally your external API would exist on another domain.
        const response = await fetch(baseURL + '/api/my/roles', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const shows = await response.json();
        res.status(response.status || 200).json(shows);
    } catch (error:any) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }
});

// import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
// import axios, { AxiosRequestConfig } from 'axios';
// import {NextApiRequest, NextApiResponse} from "next";
//
//
// export default function roleHandler(
//     req: NextApiRequest,
//     res: NextApiResponse,
// ) {
//     const { query } = req
//     const { id } = query
//
//     var options = {
//         method: 'GET',
//         url: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/USER_ID/roles/${id}`,
//         headers: {authorization: 'Bearer MGMT_API_ACCESS_TOKEN'}
//     };
//
//     axios.request(options).then(function (response: { data: any; }) {
//         console.log(response.data);
//         return response.data;
//     }).catch(function (error: any) {
//         console.error(error);
//         return error;
//     });
// }