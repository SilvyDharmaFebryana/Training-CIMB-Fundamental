

const stringMumble = (word) => {
     let ubah = word.toLowerCase().split('')
     let arrWord = []
    for( let i=0 ; i<ubah.length ; i++) {
        ubah[i] = ubah[i].toUpperCase() + ubah[i].repeat(i)
    }
    return ubah.join('-')
}


    // for (let i=0 ; i<word.length; i++){
    //     let hurufKecil 
    // }

console.log(stringMumble('hallo'))