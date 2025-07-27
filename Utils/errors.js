const errorSign = `✗`;

export const invalidCommand = () => {
    return `${errorSign} invalid command`;
};

export const noCommand = () => {
    return `${errorSign} no command was sent`;
};

export const specialCharsCommand = () => {
    return `${errorSign} command contains special characters`;
};

export const noAction = () => {
    return `${errorSign} no action was sent`;
};

export const actionNotExists = (action) => {
    return `${errorSign} there is no such action '${action}'`;
};

export const noData = () => {
    return `${errorSign} no data was sent`;
};

export const invalidData = () => {
    return `${errorSign} data is not valid`;
};

export const specialCharsData = () => {
    return `${errorSign} data must not contain numbers or special characters`;
};

export const tooManyInputs = () => {
    return `${errorSign} max inputs keys allowed is 2`;
};

export const wordExists = (word) => {
    return `${errorSign} word already exists in dictionary`;
};
