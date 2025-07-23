const errorSign = `✗`;
const successSign = `✓ `;

welcome = () => {
    console.log(`=== AutoComplete Trie Console ===
Type 'help' for commands`);
}

add = (word) => {
    console.log(`${successSign} Added '${word}' to dictionary`);
}

find = (isFound, word) => {
    isFound ?
        console.log(`${successSign} '${word}' exists in dictionary`) :
        console.log(`${errorSign} '${word}' not found in dictionary`);
}

complete = (wordsArr, prefix) => {
    wordsArr.length === 0 ?
        console.log(`${errorSign} No suggestions for '${prefix}'`) :
        console.log(`${successSign} Suggestions for '${prefix}': ${wordsArr}`);

}

help = () => {
    console.log(`Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program`);
}

exit = () => {
    console.log(`Goodbye!`);
}

module.exports = {
    welcome,
    add,
    find,
    complete,
    help,
    exit,
}