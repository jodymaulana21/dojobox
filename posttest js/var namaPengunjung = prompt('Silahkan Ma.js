var namaPengunjung = prompt('Silahkan Masukan Nama Kamu', "perpustakaan");

document.write('Hai ' + namaPengunjung + ' selamat datang di perpustakaan');


var bukukelas= parseInt(prompt('masukan no buku', '0-10'));

switch (true){
    case(bukukelas>=9):
    document.write('Buku 1')
    break
    case(bukukelas>=8):
    document.write('Buku 2')
    break
    case(bukukelas>=7):
    document.write('buku 3')
    break
    case(bukukelas>=6):
    document.write('buku 4')
    break
    case(bukukelas>=5):
    document.write('buku 5')
    break
    default: document.write('buku tidak ada');
}


var inputharga1 = parseInt(prompt('Masukkan harga buku 1 ', '0-10'));
var inputharga2 = parseInt(prompt('Masukkan harga buku 2 ', '0-10'));
var diskonbukuA = hitungbukuA(inputbukuA);
var diskonbukuB = hitungbukuA(inputbukuB);
var jumlahbuku = penjumlahanbuku(inputbukuA, inputbukuB)
document.write('harga buku A = '+inputhargaA+'<br>')
document.write('harga buku B = '+inputhargaB+'<br>')
document.write('diskon buku A = '+inputbukuA+'<br>')
document.write('diskon buku B = '+inputbukuB+'<br>')
document.write('Jumlah harga buku = '+jumlahbuku+'<br>')

function inputharga1(bukuA){
    var jumlah =1;
    for (let index = 0; index < 3; index++) {
        jumlah *= bukuA;
    }
    return jumlah;
}

function inputharga1(bukuB){
    var jumlah =1;
    for (let index = 0; index < 3; index++) {
        jumlah *= bukuA;
    }
    return jumlah;
}

function penjumlahanbuku(volumeA, volumeB){
    var jumlah = 0;
    jumlah = volumeA+volumeB;
    return jumlah;
}


