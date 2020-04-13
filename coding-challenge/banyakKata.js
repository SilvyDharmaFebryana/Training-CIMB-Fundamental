// var kalimat = "Saya suka jeruk karena saya dan jeruk suka jeruk dan saya".toLowerCase()
var kalimat = "aku kamu aku kamu kamu kamu saya saya saya saya".toLowerCase()
var arrKalimat = kalimat.split(" ")

// Ini variable untuk nampung kata2 yang ada di kalimat tapi ga berulang
var arrKata = []

// Ini variable untuk nampung count per katanya
var arrAngka = []

for (let i = 0; i < arrKalimat.length; i++) {
    if (!arrKata.includes(arrKalimat[i])) {
        arrKata.push(arrKalimat[i])
    } 
}

// console.log(arrKata)

for (let i = 0; i < arrKata.length; i++) {
    arrAngka.push(0)
}

// console.log(arrAngka)

for (let j = 0; j < arrKalimat.length; j++) {
    for (let i = 0; i < arrKata.length; i++) {

        if (arrKalimat[j] == arrKata[i]) {
            arrAngka[i] += 1
        } 
    }
}

var angkaMax = arrAngka[0]
var hasilHuruf = arrKata[0]

for (let i = 0; i < arrKata.length; i++) {
    if (angkaMax <= arrAngka[i] && angkaMax != arrAngka[i]) {
        angkaMax = arrAngka[i]
        hasilHuruf = arrKata[i]
    } 
} 



console.log('Huruf pertama terbanyak adalah : ' + hasilHuruf + ' .Dengan kemunculan sebanyak ' + angkaMax)

// Fungsi menghitung huruf keluar terbanyak pertama cara pendek
// const countWord = (word) => {
//     let arrWord = word.toLowerCase().split(' ')
//     let checkWord = []
//     let wordQty = []
//     let qtyResult = 0
//     let maxIndex = 0

//     arrWord.forEach(element => {
//         let qty = 0
//         if (!checkWord.includes(element)) {
//             checkWord.push(element)
//             wordQty.push(qty)
//         } 
//     })

//     checkWord.forEach((element, index) => {
//         arrWord.forEach(value => {
//             if (element == value) {
//                 wordQty[index] += 1
//             }
//         })
//     })

//     wordQty.forEach((element, index) => {
//         if (qtyResult <= element && qtyResult != element) {
//             qtyResult = element 
//             maxIndex = index
//         }
//     })

//     return "Jumlah huruf terbanyak adalah : " + checkWord[maxIndex] + ". Dengan kemunculan sebanyak " + wordQty[maxIndex]
//  }
//  console.log(countWord("Saya saya saya suka suka jeruk jeruk dan jeruk suka saya"))

