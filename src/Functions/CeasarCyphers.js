const mod = (n, m) => ((n % m) + m) % m;

const shiftLetter = (character, shift) => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!letters.includes(character)) return character;
    const currentIndex = letters.indexOf(character);
    const newIndex = mod((currentIndex + shift), 52);
    return letters[newIndex];
}

export const ceasarCypher = (message, shift) => {
    const source = message.split("");
    const crypt = source.map(char => shiftLetter(char, shift));
    return crypt.join("");
}

export const decryptCeasarCypher = (crypt, shift) => {
    const source = crypt.split("");
    const message = source.map(char => shiftLetter(char, shift * -1));
    return message.join("");
}

const padShift = (message, shift) => {
    const source = message.split("");
    const crypt = source.map((character, i) => shiftLetter(character, shift[i]));
    return crypt.join("");
}

export const advancedCeasarCypher = (message, shift) => {
    let crypt = "";
    for (let i = 0; i < message.length; i += shift.length) {
        const chunk =  message.substr(i, shift.length);
        const encryptedChunk = padShift(chunk, shift);
        crypt += encryptedChunk;
    }
    return crypt;
}

export const decryptAdvancedCeasarCypher = (message, shift) => {
    let reverseShift = shift.map(val => val * -1);
    return advancedCeasarCypher(message, reverseShift);
}
