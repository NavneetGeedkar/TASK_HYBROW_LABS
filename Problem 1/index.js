function countChar(str){
    str = str.replace(/\s/g, "")
    let newStr = new Set()
    let result = []

    for (let char of str){
        if(!newStr.has(char)){
            let count = str.split(char).length-1
            result.push(`${char.toUpperCase()} - ${count}`)
            newStr.add(char)
        }
    }
    return result.join("\n")
}
let str1 = "Navneet Geedkar"
console.log(countChar(str1))