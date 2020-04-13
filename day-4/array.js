
// let text = 'asdfghj'

//console.log(text.slice(2,5)) == potong dari baris kedua dan ke lima


// let text = 'asdfghj\n'

// console.log(text.trim().toUpperCase())

// let arr = ['jeruk', 'mangga', 'manggis', 'leci', 'apel', 'kiwi', 'melon']

// //arr = arr.push('nanas')

// console.log(arr[1].length)


// ================= hitung array ====================
// let arrNumber = [3, 7, 6, 9, 5]
// let total = 0

// for (let i=0 ; i<arrNumber.length ; i++) {
//     total += arrNumber[i]
// } console.log(total)

// artNumber.forEach(function (val) {
//     result += arrNumber
// });

//================= abjad ===========================

// let string = 'abcdefghjik'

// console.log(string.split(''))

//================= string array ====================

let arrNew = ['text', 'string', 'Tulisan', 'Doraemon']



//arrNew = arrNew.findIndex('tulisan')

// console.log(arrNew.indexOf('Tulisan'))

for (let i=0 ; i<arrNew.length ; i++){
    if (arrNew[i] == 'Tulisan') {
        console.log('Tulisan ada di index', i)
        break
    }
}