
// const validator = (arr, cb) => {
//     let arrResult = []
//     for ( i=0 ; i<arr.length ; i++){
//         if (cb(arr[i])) {
//             arrResult[i] = 1
//         } else {
//             arrResult[i] = 0
//         }
//     }
//     return arrResult
// }

// let arrParam = [3,7,4,7,1,2]

// console.log(validator(arrParam, (val) => {      
//     if(val % 2 !== 0) {
//         return 1
//     } else{
//         return 0
//     }
// }))



//============================= Replika Map ==================================================
// .map = membuat array baru dengan referensi dari array yang lama berdasarkan operator yang di berikan


const repMap = (arr, cb) => {
    let arrResult = []
    for ( i=0 ; i<arr.length ; i++){
       arrResult.push(cb(arr[i]))
        }
    return arrResult
}


let arrParam1 = [1,2,3,4]
console.log(repMap(arrParam1, (val) => {
    return val * 2
}))