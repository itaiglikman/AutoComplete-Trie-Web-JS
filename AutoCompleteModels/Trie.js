const { validateWord } = require("../Utils/validation");
const TrieNode = require("./TrieNode");

class Trie {
    constructor() {
        this.root = new TrieNode(); //empty root to every trie
    }

    addWord(word) {
        try {
            validateWord(word);

            let currentNode = this.root;
            let insertedNewNode = false;

            for (let i = 0; i < word.length; i++) {
                if (!currentNode.hasKey(word[i])) {
                    this._insertRemainingWordToNewPath(word, i, currentNode);
                    insertedNewNode = true;
                    break;
                }
                currentNode = currentNode.children[word[i]];
            }

            // Mark endOfWord if traversed existing path
            if (!insertedNewNode) {
                this._checkAndMarkEndOfWord(currentNode, word.length - 1, word.length);
            }

            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    _insertRemainingWordToNewPath(word, indexToStart, node) {
        let currentNode = node;
        for (let i = indexToStart; i < word.length; i++) {
            let char = word[i];
            const newNode = new TrieNode(char);
            this._checkAndMarkEndOfWord(newNode, i, word.length) //last char of the word
            currentNode.children[char] = newNode;
            currentNode = currentNode.children[char];
        }
    }

    _checkAndMarkEndOfWord(node, currentIndex, wordLength) {
        if (currentIndex === wordLength - 1) node.endOfWord = true;
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