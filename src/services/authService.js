import { POST, GET } from "./requester"

export function register({formValues}) {
    return POST('/users/register', {...formValues});
};

export function login({formValues}) {
    return POST('/users/login', {...formValues});
};

export function logout(accessToken) {
    return GET('/users/logout', '', accessToken);
};