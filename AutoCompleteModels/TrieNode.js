class TrieNode {
    constructor(value = '') {
        this.value = value; //char
        this.children = {}; //{key: char, value: TrieNode}
        this.endOfWord = false; // true when end of word
    }

    // /**
    //  * @param {string} val
    //  */
    // set value(val){
    // only 1 char
    // has to be letter
    // }

    getChildrenWords() {
        return Object.keys(this.children)
    }

    hasKey(key) {
        return Object.hasOwn(this.children, key)
    }
}


module.exports = TrieNode;