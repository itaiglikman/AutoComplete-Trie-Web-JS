import Trie from "./AutoCompleteModels/Trie.js";
import * as msgHandler from "./Commands/commandsHandler.js";
import * as commandsService from "./Services/commandsService.js";

const trie = new Trie();
const addWordInput = $('#addWordInput');
const wordCountElem = $('#wordCount');
const addWordMsgArea = $('#addWordMsgArea');
const addWordBtnElem = $('#addWordBtn');
const wordSuggestionArea = $('#wordSuggestionArea');
const suggestionInput = $('#suggestionInput');

const state = {
    wordCount: 0,
    suggestions: [],
    prefix: '',
    message: '',
    messageType: '', // 'success' | 'error'
    dictionary: []
};

function render() {

    // wordCount
    wordCountElem.text(state.wordCount);

    // add word
    if (state.message) {
        addWordMsgArea
            .text(state.message)
            .css('display', 'flex')
            .removeClass('errorMsg successMsg')
            .addClass(state.messageType === 'error' ? 'errorMsg' : 'successMsg')
    } else addWordMsgArea.css('display', 'none');

    // suggestions dropdown
    removeExistingDropdown();
    if (state.prefix && state.suggestions.length) {
        createUl(state.suggestions, state.prefix);
    }

    if (state.dictionary.length) {
        let sum = ''
        state.dictionary.forEach(word => sum += word + ", ")
        $('#allWords').text(sum)
    }


}

addWordBtnElem.on('click', () => {
    try {
        const newWord = commandsService.handleAdd(addWordInput.val(), trie);
        state.dictionary.push(newWord);
        state.messageType = 'success';
        state.message = msgHandler.add(newWord);
        state.wordCount++;
    } catch (error) {
        state.messageType = 'error';
        state.message = error
    }
    render();
});

suggestionInput.on('input', function () {
    try {
        state.prefix = suggestionInput.val();
        state.suggestions = commandsService.handleComplete(state.prefix, trie);
    } catch (error) {
        console.error(error);
    }
    render();
});

suggestionInput.on('focusout', () => {
    removeExistingDropdown();
})

const removeExistingDropdown = () => wordSuggestionArea.find('.dropdown').remove();

const createUl = (wordsArr, prefix) => {
    wordSuggestionArea.css('position', 'relative');
    const ul = $('<ul>').addClass('dropdown').attr('id', 'dropUl');
    ul.append($('<li>').text(msgHandler.complete(wordsArr, prefix)))
    wordsArr.forEach(word => ul.append($('<li>').text(word)));
    wordSuggestionArea.append(ul);
}


render();