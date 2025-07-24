import * as errorMessages from './errors.js';

export const validateWord = (word) => {
    if (!word || word === '')
        throw errorMessages.noData();
    if (typeof word !== 'string' || !word || word === undefined || word === null || !isNaN(word) || word === '')
        throw errorMessages.invalidData();
    if (/[^a-zA-Z]/.test(word)) {
        throw errorMessages.specialCharsData();
    }
    return true;
};

export const validateCommand = (command) => {
    if (typeof command !== 'string' || command === undefined || command === null || !isNaN(command) || command === '')
        throw errorMessages.invalidCommand();
    if (!command)
        throw errorMessages.noCommand();
    if (/[^a-zA-Z ] /.test(command)) { // allow space
        throw errorMessages.specialCharsCommand();
    }
    return true;
};

export const cleanWord = (str) => {
    return str.toLowerCase().trim();
};

const validActions = ['add', 'find', 'complete', 'help', 'exit'];

export const validateAction = (action) => {
    if (!validActions.includes(action))
        throw errorMessages.actionNotExists(action);
    return true;
};
