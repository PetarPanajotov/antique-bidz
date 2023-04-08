import { categoriesOptions } from "./selectOptions";

let password = '';
export function validateAuth(target) {
    if (target.name === 'email') {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
        if (!target.value.match(validEmail)) {
            return 'That email address is not valid.';
        };
    } else if (target.name === 'firstName') {
        const validFirstName = /^[a-zA-Z]+$/g;
        if (target.value.length < 3) {
            return 'First name must be at least 3 letters long.';
        } else if (!target.value.match(validFirstName)) {
            return 'First name must contain only letters.';
        };
    } else if (target.name === 'lastName') {
        const validLastName = /^[a-zA-Z]+$/g;
        if (target.value.length < 3) {
            return 'Last name must be at least 3 letters long.';
        } else if (!target.value.match(validLastName)) {
            return 'Last name must contain only letters.';
        };
    } else if (target.name === 'password') {
        password = target.value;
        if (target.value.length < 6) {
            return 'Password must be at least 6 symbols long.';
        };
    } else if (target.name === 'repeatPassword') {
        if (password !== target.value) {
            return 'Password missmatch.';
        };
    };
};
export function validateAntique(target) {
    if (target.name === 'antiqueName') {
        const validAntiqueName = /^[A-Za-z0-9\s-]+$/g;
        if (target.value.length < 10) {
            return 'Antique name must be at least 10 letters long.';
        } else if (!target.value.match(validAntiqueName)) {
            return 'Invalid antique name. Only letters, numbers and "-" are allowed.';
        };
    } else if (target.name === 'imgURL') {
        const validURL = /^https?:\/\/.*/g;
        if (!target.value.match(validURL)) {
            return 'URL address must start with http:// or https://.';
        };
    } else if (target.name === 'category') {
        const validCategory = Object.keys(categoriesOptions);
        if (!target.value) {
            return 'Please select valid category.'
        }
        if (!validCategory.includes(target.value)) {
            return 'Please select valid category'
        }
    } else if (target.name === 'subCategory') {
        if (!target.value) {
            return 'Please select valid sub category.'
        }
    } else if (target.name === 'endDate') {
        if (target.value === '') {
            return 'Please select valid duration'
        }
    } else if (target.name === 'startBid') {
        const validStartBid = /^\d+(\.\d{1,2})?$/g;
        if (!target.value.match(validStartBid)) {
            return 'Invalid start bid price.';
        };
    } else if (target.name === 'description') {
        if (target.value.length < 30) {
            return 'Description must be at least 30 letters long.';
        };
    };
};