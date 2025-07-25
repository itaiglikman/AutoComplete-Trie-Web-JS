import TrieNode from "../AutoCompleteModels/TrieNode.js";

export function insertRemainingWordToNewPath(word, indexToStart, node) {
    let currentNode = node;
    for (let i = indexToStart; i < word.length; i++) {
        let char = word[i];
        const newNode = new TrieNode(char);
        checkAndMarkEndOfWord(newNode, i, word.length); //last char of the word
        currentNode.children[char] = newNode;
        currentNode = currentNode.children[char];
    }
}

export function checkAndMarkEndOfWord(node, currentIndex, wordLength) {
    if (currentIndex === wordLength - 1) node.endOfWord = true;
}

export function getRemainingTree(prefix, node) {
    for (const char of prefix) {
        if (!node.hasKey(char)) return;
        node = node.children[char];
    }
    return node;
}

export function allWordsHelper(prefix, node, allWords = []) {
    if (node.endOfWord) allWords.push(prefix);

    // return when no more children
    if (!node.hasChildren()) return allWords;

    const nodeChildrenCharsArr = node.getChildrenKeys();
    for (const char of nodeChildrenCharsArr) {
        const child = node.children[char];
        allWordsHelper(prefix + child.value, child, allWords);
    }
    return allWords;
}
