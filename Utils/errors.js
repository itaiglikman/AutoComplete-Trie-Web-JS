const errorSign = `✗`;

const invalidCommand = () => {
    return `${errorSign} invalid command`;
}

const noCommand = () => {
    return `${errorSign} no command was sent`;
}

const specialCharsCommand = () => {
    return `${errorSign} command contains special characters`;
}
const noAction = () => {
    return `${errorSign} no action was sent`;
}

const actionNotExists = (action) => {
    return `${errorSign} there is no such action '${action}'`;
}

const noData = () => {
    return `${errorSign} no data was sent`;
}
const invalidData = () => {
    return `${errorSign} data is not valid`;
}

const specialCharsData = () => {
    return `${errorSign} data must not contain numbers or special characters`;
}

const tooManyInputs = () => {
    return `${errorSign} max inputs keys allowed is 2`;
}

module.exports = {
    invalidCommand,
    noCommand,
    specialCharsCommand,
    noAction,
    actionNotExists,
    noData,
    tooManyInputs,
    specialCharsData,
    invalidData,
}