export function insertNewline({ text, numChar }) {
    let result = [];
    
    for (let i = 0; i < text.length; i += numChar) {
        result.push(text.slice(i, i + numChar));
    }

    return result;
}