import Trie from "./AutoCompleteModels/Trie.js";
import * as printCommands from "./Commands/commandsHandler.js";
import * as commandsService from "./Services/commandsService.js";

const trie = new Trie();

function render() {

}

const word = $('#addWordInput');

const addWordBtn = $('#addWordBtn');
addWordBtn.on('click', () => {
    console.log('addWord click ');
    const newWord = commandsService.handleAdd(word.val(), trie);
    console.log('addWord click ' + newWord);
});

console.log(111);

// The commented CLI code remains unchanged, but you may need to update require to import if you use it.
