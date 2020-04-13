

class Item {
    constructor(nama, harga){
        this.nama = nama
        this.harga = harga
    }
}


let arr = [
    new Item ('jeruk', 2000),
    new Item ('kiwi', 3000)
]

let cart = []

const add = (idx) => {
    let newItem = {
        ...arr[idx],
        qty: 0
    }
}

add(1)

console.log(add())