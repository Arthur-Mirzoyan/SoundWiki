export function distinctBy(array, predicate) {
    const conditions = []
    const result = []

    for (let item of array) {
        let condition = predicate(item)
        if (!conditions.includes(condition)) {
            conditions.push(condition)
            result.push(item)
        }
    }

    return result;
}