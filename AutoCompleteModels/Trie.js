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
            word = validationUtils.cleanWord(word);

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
        try {
            validationUtils.validateWord(word);
            word = validationUtils.cleanWord(word);

            let currentNode = this.root;
            for (const char of word) {
                if (!currentNode.hasKey(char)) return false;
                currentNode = currentNode.children[char];
            }
            // necessary?
            //return currentNode.endOfWord === true;
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    predictWords(prefix) {
        try {
            validationUtils.validateWord(prefix);
            prefix = validationUtils.cleanWord(prefix);

            const prefixLastNode = trieService.getRemainingTree(prefix, this.root);
            const wordsArr = trieService.allWordsHelper(prefix, prefixLastNode, []);
            return wordsArr;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}


module.exports = Trie;