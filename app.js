const Trie = require("./AutoCompleteModels/Trie");
const TrieNode = require("./AutoCompleteModels/TrieNode");

let trie = new Trie();
let node1 = new TrieNode('1');
let node2 = new TrieNode('2');
let node3 = new TrieNode('3');
let node4 = new TrieNode('4');
let node5 = new TrieNode('5');

// console.log(root.getChildrenWords());

trie.root.children[node1.value] = node1;
// console.log(trie);
printTrie(trie)
trie.addWord('1234');
trie.addWord('abcd');
trie.addWord('1256')
printTrie(trie)
// console.dir(trie, { depth: null });
// console.log(trie);

function printTrie(node, indent = '') {
    console.log(`${indent}${node.value}${node.endOfWord ? ' *' : ''}`);
    for (const key in node.children) {
        printTrie(node.children[key], indent + '  ');
    }
}

// Usage:
printTrie(trie.root);