const Trie = require("./AutoCompleteModels/Trie");
const printCommands = require("./Commands/commandsHandler");
const promptSync = require('prompt-sync');
const commandsService = require("./Services/commandsService");

const prompt = promptSync();

let [action, data] = commandsService.handleFirstCommand();
const trie = new Trie();
while (action !== 'exit') {
    switch (action) {
        case 'add':
            commandsService.handleAdd(data, trie);
            break;
        case 'find':
            commandsService.handleFind(data, trie);
            break;
        case 'complete':
            commandsService.handleComplete(data, trie);
            break;
        case 'help':
            printCommands.help()
            break;
        default:
            printCommands.help();
            break;
    }
    console.dir(trie, { depth: null });
    [action, data] = commandsService.handleNewCommand();
}

printCommands.exit();