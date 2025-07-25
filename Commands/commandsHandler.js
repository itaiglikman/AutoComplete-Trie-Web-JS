const errorSign = `✗`;
const successSign = `✓ `;

export const welcome = () => {
    console.log(`=== AutoComplete Trie Console ===
Type 'help' for commands`);
};

export const add = (word) => {
    return `${successSign} Added '${word}' to dictionary`;
    // console.log(`${successSign} Added '${word}' to dictionary`);
};

export const find = (isFound, word) => {
    isFound ?
        console.log(`${successSign} '${word}' exists in dictionary`) :
        console.log(`${errorSign} '${word}' not found in dictionary`);
};

export const complete = (wordsArr, prefix) => {
    return wordsArr.length === 0 ?
        `${errorSign} No suggestions for '${prefix}'` :
        `${successSign} Suggestions for '${prefix}':`;
};

export const help = () => {
    console.log(`Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program`);
};

export const exit = () => {
    console.log(`Goodbye!`);
};
