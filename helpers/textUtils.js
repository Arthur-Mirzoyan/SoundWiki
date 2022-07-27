export function truncateText(text, symbolCount) {
    if (text.length <= symbolCount) {
        return text
    }

    return text.substring(0, symbolCount-3)+'...'
}