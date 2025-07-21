class TrieNode {
    constructor(value = '') {
        this.value = value; //char
        children = {}; //{key: char, value: TrieNode}
        endOffWord = false; // true when end of word
    }

    /**
     * @param {string} val
     */
    set value(val){

    }
}


module.exports = TrieNode;