import * as errorMessages from "../Utils/errors.js";
import * as validate from "../Utils/validation.js";
import * as printCommands from "../Commands/commandsHandler.js";
import Trie from '../AutoCompleteModels/Trie.js';

// const prompt = promptSync();

export function handleNewCommand() {
    try {
        // const command = prompt('> ');
        let [action, data] = digestCommand(command);
        return [action, data];
    } catch (error) {
        if (!command) errorMessages.invalidCommand();
        console.log(error);
        return [];
    }
}

export function handleFirstCommand() {
    printCommands.welcome();
    return handleNewCommand();
}

export function handleHelp() {
    printCommands.help();
}

export function handleAdd(word, trie) {
    try {
        const newWord = trie.addWord(word);
        if (newWord) printCommands.add(newWord);
        return newWord;
    } catch (error) {
        console.log(error);
    }
}

export function handleFind(word, trie) {
    try {
        const isFound = trie.findWord(word);
        if (isFound !== undefined) printCommands.find(isFound, word);
        return isFound;
    } catch (error) {
        console.log(error);
    }
}

export function handleComplete(prefix, trie) {
    try {
        const wordsArr = trie.predictWords(prefix);
        printCommands.complete(wordsArr, prefix);
        return wordsArr;
    } catch (error) {
        console.log(error);
    }
}

export function digestCommand(command) {
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
