const validateWord = (word) => {
    if (typeof word !== 'string' || !word || word === undefined || word === null || !isNaN(word) || word === '')
        throw new Error('Error: word is not valid');
    return true;
}

/**
 * 
 * @param {*} word 
 * @returns lowered and trimmed word
 */
const cleanWord = (word) => {
    return word.toLowerCase().trim();
}



module.exports = {
    validateWord,
    cleanWord,

}