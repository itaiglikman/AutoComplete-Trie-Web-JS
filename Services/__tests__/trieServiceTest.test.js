const Trie = require('../../AutoCompleteModels/Trie');
const {getRemainingTree} = require('../trieService');

describe('trieService', () => {

    let trie;

    beforeEach(() => {
        trie = new Trie();
    });

    describe('insert', () => {
        it('should insert a word into the trie', () => {

        });
    });

    describe('search', () => {
        it('should return true if the word exists in the trie', () => {

        });

        it('should return false if the word does not exist in the trie', () => {

        });
    });

    // getRemainingTree
    describe('getRemainingTree', () => {
        it('should return the last node of the given prefix, with the value of the last char', () => {
            trie.addWord('hello');
            const node = getRemainingTree('hel',trie.root);
            expect(node.value).toBe('l');
        });

        it('should throw if no word starts with the given prefix', () => {
            expect(() => getRemainingTree('hello', trie.root)).toThrow("Error: prefix doesn't exist in the trie");
            trie.addWord('hello');
            expect(() => getRemainingTree('hellooo', trie.root)).toThrow("Error: prefix doesn't exist in the trie");

        });
        
        it('should throw if node doesnt have children with the next char', () => {
            trie.addWord('hello');
            expect(() => getRemainingTree('heloo', trie.root)).toThrow("Error: prefix doesn't exist in the trie");
            expect(() => getRemainingTree('hellooo', trie.root)).toThrow("Error: prefix doesn't exist in the trie");
        });
    });

    // Add more describe blocks for other trieService functions as needed
});