const { checkCircular } = require('./func')
const inputData = process.argv.slice(2)
const uniqueData = inputData.filter((x, i, a) => a.indexOf(x) == i)
let obj = {}

uniqueData.map((value) => obj[`${value}`] = [])
inputData.map((value, index) => {
    if (index % 2 == 0) {
        if (obj[`${value}`].length === 0) {
            obj[`${value}`] = [inputData[index + 1]]
        } else {
            let arrCurrent = obj[`${value}`]
            arrCurrent.push(inputData[index + 1])
            obj[`${value}`] = arrCurrent
        }
    }
})

//console.debug("%o", obj);
const output = (checkCircular(obj, '1').length !== 0)?false:true

console.log(`Output : ${output}`)