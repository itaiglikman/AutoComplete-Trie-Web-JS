const Trie = require('../Trie');

describe('Trie.addWord', () => {
    let trie;

    beforeEach(() => {
        trie = new Trie();
    });

    test('should add a valid word', () => {
        expect(trie.addWord('hello')).toBe(true);
    });

    test('should not add an invalid word', () => {
        expect(trie.addWord('')).toBe(false);
        expect(trie.addWord(null)).toBe(false);
        expect(trie.addWord(123)).toBe(false);
    });
});