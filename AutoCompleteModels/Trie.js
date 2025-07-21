const { validateWord } = require("../Utils/validation");
const TrieNode = require("./TrieNode");

class Trie {
    constructor() {
        this.root = new TrieNode(); //empty root to every trie
    }

    addWord(word) {
        try {
            validateWord(word);

            // define current node as root
            let currentNode = this.root;

            // run over the arr 
            for (let i = 0; i < word.length; i++) {
                if (!currentNode.hasKey(word[i])) { //if current does'nt exists
                    this._insertRemainingWordToNewPath(word, i, currentNode);
                    break;
                }
                currentNode = currentNode.children[word[i]];
            }
        } catch (error) {
            console.error(error.message);
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