class TrieNode {
    constructor(value) {
        this.value = value; //char
        this.children = {}; //{key: char, value: TrieNode}
        this.endOfWord = false; // true when end of word
    }

    getChildrenKeys() {
        return Object.keys(this.children);
    }

    hasChildren() {
        return this.getChildrenKeys().length > 0;
    }

    hasKey(key) {
        return Object.hasOwn(this.children, key);
    }
}

export default TrieNode;