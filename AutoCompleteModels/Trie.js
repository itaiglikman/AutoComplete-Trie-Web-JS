const trieService = require("../Services/trieService");
const validationUtils = require("../Utils/validation");
const TrieNode = require("./TrieNode");

class Trie {
    constructor() {
        this.root = new TrieNode(); //empty root to every trie
    }

    addWord(word) {
        try {
            validationUtils.validateWord(word);
            validationUtils.cleanWord(word);

            let currentNode = this.root;
            let insertedNewNode = false;

            for (let i = 0; i < word.length; i++) {
                if (!currentNode.hasKey(word[i])) {
                    trieService.insertRemainingWordToNewPath(word, i, currentNode);
                    insertedNewNode = true;
                    break;
                }
                currentNode = currentNode.children[word[i]];
            }

            // Mark endOfWord if traversed existing path
            if (!insertedNewNode)
                trieService.checkAndMarkEndOfWord(currentNode, word.length - 1, word.length);

            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }



    findWord(word) {

    }

    predictWords(prefix) {

    }

    _getRemainingTree(prefix, node) {

    }

    _allWordsHelper(prefix, node, allWords) {

    }
}


module.exports = Trie;