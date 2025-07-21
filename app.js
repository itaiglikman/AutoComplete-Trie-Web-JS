const Trie = require("./AutoCompleteModels/Trie");
const TrieNode = require("./AutoCompleteModels/TrieNode");

let trie = new Trie();


function printTrie(node, indent = '') {
    console.log(`${indent}${node.value}${node.endOfWord ? ' *' : ''}`);
    for (const key in node.children) {
        printTrie(node.children[key], indent + '  ');
    }
}

trie.addWord('hello');
trie.addWord('hello');
printTrie(trie.root);
console.log(trie.findWord('elL'));
