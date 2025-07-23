const promptSync = require('prompt-sync');
const errorMessages = require("../Utils/errors");
const validate = require("../Utils/validation")
const printCommands = require("../Commands/commandsHandler");
const Trie = require('../AutoCompleteModels/Trie');

const prompt = promptSync();

function handleNewCommand() {
    try {
        const command = prompt('> ');
        let [action, data] = digestCommand(command);
        return [action, data];
    } catch (error) {
        if (!command) errorMessages.invalidCommand();
        console.log(error);
        return [];
    }
}

function handleFirstCommand() {
    printCommands.welcome();
    return handleNewCommand();
}

function handleHelp() {
    printCommands.help();
}

function handleAdd(word, trie) {
    try {
        const newWord = trie.addWord(word);
        if (newWord) printCommands.add(newWord);
        return newWord;
    } catch (error) {
        console.log(error);
    }
}

function handleFind(word, trie) {
    try {
        const isFound = trie.findWord(word);
        if (isFound !== undefined) printCommands.find(isFound, word);
        return isFound;
    } catch (error) {
        console.log(error);
    }
}

function handleComplete(prefix, trie) {
    try {
        const wordsArr = trie.predictWords(prefix);
        printCommands.complete(wordsArr, prefix);
        return wordsArr;
    } catch (error) {
        console.log(error);
    }
}

function digestCommand(command) {
    try {
        validate.validateCommand(command);
        command = validate.cleanWord(command);
        const inputArr = command.split(' ');
        if (inputArr.length > 2) throw errorMessages.tooManyInputs();
        let [action, data] = inputArr;
        validate.validateAction(action);
        if (!data) data = undefined;
        return [action, data];
    } catch (error) {
        console.log(error);
        return [];
    }
}

module.exports = {
    handleNewCommand,
    handleFirstCommand,
    digestCommand,
    handleAdd,
    handleHelp,
    handleFind,
    handleComplete,
}