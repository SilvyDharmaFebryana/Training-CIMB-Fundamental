
//==================== MAP ==========================

// let arr = []
// for (let i=0 ; i<5; i++){
//     arr.push(parseInt(Math.random() * 10))
// }

// console.log(arr)


// let newArr = arr.map((val, idx) => {
//     return val + 1
// })


// console.log(newArr)




//=================== REPLIKA MAP ====================

// const repMap = (array, cb) => {
//     let hasil = []
//     for(let i=0 ; i<array.length; i++){
//         hasil.push(cb(array[i], i, array))
//     }
//     return hasil
// }

// console.log(repMap([1,2,3,4,5], (val, idx, array) => {
//     return val
// }))





//=================== FILTER ==========================

// let arr = []
// for (let i=0 ; i<5; i++){
//     arr.push(parseInt(Math.random() * 10))
// }

// console.log(arr)

// let newArr =  arr.filter((val, idx, array) => {
//     if (val <=5){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(newArr)




//=================== Replika Filetr ===================

// let arr = []
// for (let i=0 ; i<5; i++){
//     arr.push(parseInt(Math.random() * 10))
// }

// console.log(arr)

// const repFilter = (array, cb) => {
//     let hasil = []
//     for(let i=0 ; i<array.length; i++){
//         if(cb(array[i], i, array)){
//             hasil.push(array[i])
//         }
//     }
//     return hasil
// }

// console.log(repFilter(arr, (val, idx, array) => {
//     return val
// }))




//==================== FIND ============================

// let arr = []
// for (let i=0 ; i<5; i++){
//     arr.push(parseInt(Math.random() * 10))
// }

// console.log(arr)

// console.log(arr.find((val) => {
//     return val
// }))


//==================== Replika Find ====================

// let arr = []
// for (let i=0 ; i<5; i++){
//     arr.push(parseInt(Math.random() * 10))
// }

// console.log(arr)

// const repFind = (array, cb) => {
//     let hasil = []
//     for(let i=0 ; i<array.length; i++){
//         if(cb(array[i], i, array)){
//             return array[i]
//         }
//     }
//     return hasil
// }

// console.log(arr.find((val, idx, array) => {
//     return val < 3
// }))


//===================== Array ==================

let arr1 = [1, 2, 3, 4]
let arr2 = [1, 5, 6, 7]

const arrayUnik = (pertama, kedua) => {
    let arr3 = []
    for (let i = 0; i < pertama; i++) {
        if (!arr3.includes(pertama[i])) {
            arr3.push(pertama[i])
        }
    }
    for (let j = 0; j < arr2; i++) {
        if (!arr3.includes(kedua[i])) {
            arr3.push(pertama[i])
        }
    }
    return arr3
}
console.log(arr3)




// var arr = [1,2,3,4],
//     brr = [2,4],
//     res = arr.filter(f => brr.includes(f));
// console.log(res);
