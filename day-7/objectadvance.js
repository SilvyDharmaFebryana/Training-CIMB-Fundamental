// let silvy = {
//     nama:  'Silvy',
//     tahunLahir: '1998',
//     asal: 'Bekasi' 
// }


// let developer = {
//     nama: 'ajeng',
//     tahunLahir:'2003',
//     asal: 'bumi',
//     speciality: 'AS400',
//     pengalaman: '1 bulan'
// }

// let artis = {
//     nama:  'Dharma',
//     tahunLahir: '1998',
//     asal: 'Bekasi',
//     onGoingFilm: 'Avengers',
//     jumlahFilm: 10
// }

//let arrKaryawan = [silvy,]
   
// function cetakanOrang(nama, tahunLahir, asal){
//     return{
//         nama,
//         tahunLahir,
//         asal
//     }
// }

// let a = cetakanOrang('baba','2000','mars')
// console.log(cetakanOrang())


//================================== CLASS ================================================
// class Orang{
//     constructor(nama, tahunLahir, asal){
//         this.nama = nama  //kiri nama property objek //kanan nama constructor dari class
//         this.tahunLahir = tahunLahir
//         this.asal = asal
//     }
// }

// let a = new Orang('caca', '2000', 'Mars')
// let b = new Orang('baba', '2000', 'saturnus')
// console.log(b)



//================================= CLASS OBJECT ==========================================


// class Orang{
//     constructor(paramNama, paramTahunLahir, paramAsal){
//         this.nama = paramNama 
//         this.tahunLahir = paramTahunLahir
//         this.asal = paramAsal
//     }
// }

// class Developer extends Orang{
//     constructor(nama, tahunLahir, asal, speciality, pengalaman){
//         super(nama,tahunLahir,asal)
//         this.speciality = speciality
//         this.pengalaman = pengalaman
//     }
// }



//=======================================================================================
class Produk {
    constructor(nama, price, stock) {
        this.nama = nama
        this.price = price
        this.stock = stock
        this.input = 0
    }
}

class Clothing extends Produk{
    constructor(name, price, stock, size){
        super(name, price, stock)
        this.size = size
    }
}
    