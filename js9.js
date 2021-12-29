function shortcut(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] != "a" && string[i] != "e" && string[i] != "i" && string[i] != "o" && string[i] != "u") {
            newString += string[i];
        };

    };
    return newString;
}