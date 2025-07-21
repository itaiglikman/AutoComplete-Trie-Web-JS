function insertRemainingWordToNewPath(word, indexToStart, node) {
    let currentNode = node;
    for (let i = indexToStart; i < word.length; i++) {
        let char = word[i];
        const newNode = new TrieNode(char);
        this._checkAndMarkEndOfWord(newNode, i, word.length) //last char of the word
        currentNode.children[char] = newNode;
        currentNode = currentNode.children[char];
    }
}


function checkAndMarkEndOfWord(node, currentIndex, wordLength) {
    if (currentIndex === wordLength - 1) node.endOfWord = true;
}



module.exports = {
    insertRemainingWordToNewPath,
    checkAndMarkEndOfWord,
}