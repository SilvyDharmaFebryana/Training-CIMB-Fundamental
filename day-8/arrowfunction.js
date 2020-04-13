//const alphaValue = (param1, param2) => param1 + param2 // tidak harus aritmatic , bisa juga boolean


// const alphaValue = (str) => {
//     str = str.split('')
//     let alpArray = 'asdfghjkl'.split('')

//     let result = 0 

//     for (let i=0 ; i<str.length ; i++){
//         result += (alpArray.indexOf(str[i]) + 1)
//     }

//     return result
// }

// console.log(alphaValue('asdf'))


// const alphaValue = (str) => {
//     str = str.split('')
//     let alpArray = 'asdfghjkl'.split('')

//     let result = 0 
//   //  hasil = 0 
//     for (let i=0 ; i<str.length ; i++){
//      //   result += ((alpArray.indexOf(str[i]) + 1)%2 == 1)
//         if ((alpArray.indexOf(str[i]) + 1)%2 == 1){
//             result += (alpArray.indexOf(str[i]) + 1)
//          } 
        
//     }

//     return result
// }

// console.log(alphaValue('asdfghjkl'))


//================================= 

// const alphaValue = (str) => {
//     str = str.split('')
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = ''
    
//     for (let i=0 ; i<str.length ; i++){
//             result += (alpArray.indexOf(str[i]) + 1)
//     }
    
//     return result
//     }
    
//     console.log(alphaValue('abc'))


//======================================= FILTER ===============================================================

// class  Product {
//     constructor (nama, harga, stock){
//         this.nama = nama
//         this.harga = harga
//         this.stock = stock
//     }
// }

// let arrItem = [
//     new Product('Apel', 1000, 1),
//     new Product('Kiwi', 2000, 20),
//     new Product('Nanas', 3000, 10),
//     new Product('Salak', 4000, 66)
// ]

// let {nama, harga, stock} = arrItem

// const cariNama  = search => {
//    return arrItem.filter((cari) => cari.nama.toLowerCase().includes(search.toLowerCase()))
// }


// const cariHarga = (min, maks) => {
//     return arrItem.filter((price) => price.harga >= min && price.harga <= maks)
// }

// const cariStock = persediaan => {
//     return arrItem.filter((jumlah) => jumlah.stock > persediaan)
// }

// console.log(cariStock(10))
// console.log(cariNama('ap'))
// console.log(cariHarga(2000, 10000))


//======================================= BONGKAR ISI OBJECT ===================================

// let a = {
//     nama: 'silvy',
//     asal: 'bekasi',
//     kontak: {
//         alamat: 'jl. perak',
//         tlp: '081233333'
//     }
// }

// let {nama, asal, kontak: {alamat, tlp}} = a


// console.log(tlp)

//================================================================================================

let arrNumb = [1, -3, 5, -9, 7, -12]
//let arrX = [0,0]
let hitungMinus =0
let hitungPlus = 0

const tambahNum = tambah => {
    for (i=0 ; i<arrNumb.length ; i++) {
        if (tambah[i] > 0) {
            hitungPlus += tambah[i]
        } else if (tambah[i] < 0) {
            hitungMinus += tambah[i]
        }
    } return ([hitungPlus, hitungMinus])
}
console.log(tambahNum(arrNumb))