import Trie from "./AutoCompleteModels/Trie.js";
import * as msgHandler from "./Commands/commandsHandler.js";
import * as commandsService from "./Services/commandsService.js";

const trie = new Trie();
const addWordInput = $('#addWordInput');
const wordCountElem = $('#wordCount');
let wordCount = 0;
const addWordBtnElem = $('#addWordBtn');
const wordSuggestionArea = $('#wordSuggestionArea');
const suggestionInput = $('#suggestionInput');


function render() {
    wordCountElem.text(wordCount);

}

addWordBtnElem.on('click', () => {
    try {
        const newWord = commandsService.handleAdd(addWordInput.val(), trie);
        displayAddMsg(msgHandler.add(newWord), false);
        wordCount++;
        render();
    } catch (error) {
        displayAddMsg(error, true);
    }
});

function displayAddMsg(text, isErr) {
    $('#addWordMsgArea')
        .text(text)
        .css('display', 'flex')
        .addClass(isErr ? 'errorMsg' : 'successMsg')
        .removeClass(isErr ? 'successMsg' : 'errorMsg');
}

suggestionInput.on('input', function () {
    try {
        const prefix = suggestionInput.val();
        const wordsArr = commandsService.handleComplete(prefix, trie);
        prefix ? displayDropdown(wordsArr, prefix) : removeExistingDropdown();
        render();
    } catch (error) {
        removeExistingDropdown()
        console.error(error);
    }
});

suggestionInput.on('focusout',()=>{
    removeExistingDropdown();
})

function displayDropdown(wordsArr, prefix) {
    removeExistingDropdown();
    wordsArr.length
        ? createUl(wordsArr, prefix)
        : createUl([], prefix);
}

const removeExistingDropdown = () => wordSuggestionArea.find('.dropdown').remove();

const createUl = (wordsArr, prefix) => {
    wordSuggestionArea.css('position', 'relative');
    const ul = $('<ul>').addClass('dropdown').attr('id', 'dropUl');
    ul.append($('<li>').text(msgHandler.complete(wordsArr, prefix)))
    wordsArr.forEach(word => ul.append($('<li>').text(word)));
    wordSuggestionArea.append(ul);
}


render();