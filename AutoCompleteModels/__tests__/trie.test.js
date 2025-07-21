const Trie = require('../Trie');

describe('Trie Module test', () => {

    // addWord
    describe('Trie.addWord', () => {
        let trie;

        beforeEach(() => {
            trie = new Trie();
        });

        test('should add a valid word', () => {
            expect(trie.addWord('hello')).toBe(true);
            expect(trie.findWord('hel')).toBe(true);
        });

        test('should not add an invalid word', () => {
            expect(trie.addWord('')).toBe(false);
            expect(trie.addWord(null)).toBe(false);
            expect(trie.addWord(123)).toBe(false);
        });
    });

    // findWord
    describe('Trie.findWord', () => {
        let trie;

        beforeEach(() => {
            trie = new Trie();
        });

        test('should return true for partial words', () => {
            trie.addWord('hello');
            expect(trie.findWord('hel')).toBe(true);
        });

        test('should return false for non-string input', () => {
            expect(trie.findWord(123)).toBe(false);
            expect(trie.findWord(null)).toBe(false);
        });
    });

});
