
// ============================= 1 ================================
const tripleTrouble = (one, two, three) => {
    // Buatlah sebuah function yang menerima 3 string 
    // dan setiap string memiliki panjang yang sama
    // Input: "aa", "bb", "cc"
    // Output: "abcabc"

    // Input: "ab", "cd", "ef"
    // Output: "acebdf"

    // write your code here

    let kata = ''

    for (let i = 0; i < three.length; i++) {
        kata += `${one[i]}${two[i]}${three[i]}`
    }
    return kata
}
console.log(tripleTrouble("ab", "cd", "ef"))

//================================= 2 ===================================
const altCaps = (string) => {
    // Buatlah sebuah function yang menerima sebuah string
    // Outputnya sebuah array yang index pertama adalah semua 
    // huruf yg posisinya ganjil menjadi kapital, index kedua
    // semua huruf yg posisinya genap jadi kapital

    // Input: "abcdef"
    // Output: ["AbCdEf", "aBcDeF"]

    // write your code here

    let ubah1 = ''
    let ubah2 = ''
    let arr = []
    for( i=0 ; i<string.length ; i++){
        if(i % 2 == 1){
            ubah1 += string.split('')[i].toUpperCase()
            ubah2 += string.split('')[i].toLowerCase()
            arr.push()
        }else {
            ubah1 += string.split('')[i].toLowerCase()
            ubah2 += string.split('')[i].toUpperCase()
            arr.push()
        }
    }
    return arr = ([ubah2, ubah1])
}
console.log(altCaps('abcdef'))
