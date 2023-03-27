import { POST } from "./requester"

export function register({formValues}) {
    return POST('/users/register', {...formValues})
};