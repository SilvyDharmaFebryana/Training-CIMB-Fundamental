const digitalRoot = (number) => {
    let hasil = 0
    let num = number.toString().split("").map(Number)

    for( let i=0 ; i<num.length; i++){
        hasil += num[i]
    }
    let jumlah = hasil.toString()
    if (jumlah.length > 1) {
        let jumlahAngka = jumlah.split("").map(Number)
        let jumlah1 = jumlahAngka.slice(0)
        let jumlah2 = jumlahAngka.slice(-1)
        return jumlah1[0] + jumlah2[0]
    } else {
        return hasil
    }
}

console.log(digitalRoot(132189))