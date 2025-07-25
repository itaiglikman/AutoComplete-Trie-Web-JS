import Trie from "./AutoCompleteModels/Trie.js";
import * as msgHandler from "./Commands/commandsHandler.js";
import * as commandsService from "./Services/commandsService.js";

const trie = new Trie();
const addWordArea = $('#addWordArea');
const addWordInput = $('#addWordInput');
const wordCountElem = $('#wordCount');
let wordCount = 0;
const addWordBtnElem = $('#addWordBtn');
console.log($('#addWordMsgArea').length);


function render() {
    wordCountElem.text(wordCount);
}

addWordBtnElem.on('click', () => {
    try {
        const newWord = commandsService.handleAdd(addWordInput.val(), trie);
        displayAddMsg(msgHandler.add(newWord), false);
        wordCount++;
        render()
    } catch (error) {
        displayAddMsg(error, true);
    }
});

function displayAddMsg(text, isErr) {
    $('#addWordMsgArea')
        .text(text)
        .addClass(isErr ? 'errorMsg' : 'successMsg')
        .removeClass(isErr ? 'successMsg' : 'errorMsg');
}

render();