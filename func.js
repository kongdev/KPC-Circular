
const checkCircular = (obj, n) => {
    let array = []
    let search = (currentstart) => {
        if (array.indexOf(currentstart) !== -1) {
            return currentstart === n
        }
        array.push(currentstart)
        let result = obj[currentstart].some(search)
        if (!result) {
            array.splice(array.indexOf(currentstart), 1)
        }
        return result
    }
    return search(n) ? array.concat(n) : []
}

const kong = () => {
    return 'ok'
}

module.exports = {
    checkCircular,
    kong
}