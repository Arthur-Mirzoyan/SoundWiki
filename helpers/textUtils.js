export function truncateText(text, symbolCount) {
    if (text.length <= symbolCount) {
        return text
    }

    return text.substring(0, symbolCount - 3) + '...'
}

export function capitalise(text) {
    let array = text.split(', '), result = [];
    for (let word of array) {
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return result.join(', ');
}