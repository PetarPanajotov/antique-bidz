let password = '';
export function validateAuth(target) {
    if (target.name === 'email') {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g
        if (!target.value.match(validEmail)) {
            return 'That email address is not valid.'
        };
    } else if (target.name === 'firstName') {
        const validFirstName = /^[a-zA-Z]+$/g
        if (target.value.length < 3) {
            return 'First name must be at least 3 letters long.'
        } else if (!target.value.match(validFirstName)) {
            return 'First name must contain only letters.'
        };
    } else if (target.name === 'lastName') {
        const validLastName = /^[a-zA-Z]+$/g
        if (target.value.length < 3) {
            return 'Last name must be at least 3 letters long.'
        } else if (!target.value.match(validLastName)) {
            return 'Last name must contain only letters.'
        };
    } else if (target.name === 'password') {
        password = target.value
        if(target.value.length < 6) {
            return 'Password must be at least 6 symbols long.'
        };
    } else if (target.name === 'repeatPassword') {
        if(password !== target.value) {
            return 'Password missmatch.'
        };
    };
};