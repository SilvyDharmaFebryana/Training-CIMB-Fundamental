// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 

// 1
// let nama = 'Silvy Dharma Febryana'
// ganti = nama.replace(/['aiueo']/gi, '')
// console.log(ganti)


//2
// let jalan = ['Perak', 'Mawar', 'Melati', 'Angkasa', 'Raya']
// console.log(jalan.sort()) //(a-z)
// console.log(jalan.reverse()) //(a-z)


// //3
let nomor = [1, 2, 90, 22, 31, 56, 3, 11]
console.log(nomor.sort(function (a,b) {
    return a-b
})) 
//console.log(nomor.reverse())

// let nomor = [1, 2, 90, 22, 9, 56, 33, 11]
// for (i=0 ; i<nomor.length ; i++) {
//     for (let j =)
// }



//4
// let arrAngka = [33, 88, 77, 55, 99, 11, 101, 66, 303]
// let max = arrAngka[0]
// for (let i = 0 ; i<arrAngka.length ; i++) {
//     if (max < arrAngka[i]){
//         max = arrAngka[i]
//     } 
// } console.log(max)


// 5
// let arrRandom = ['lala', 'murid', 'kelas', 1, 'umur', 10, 'jl dodol', 36, 08999111]
// console.log(arrRandom.filter(Number))



//6
// let kata = 'Dilan tinggal di Bandung'
// let potong = kata.slice(1, -1)
// console.log(potong)

