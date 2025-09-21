// Array produk awal
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
]

//fungsi untuk menampilan Produk
function tampilanProduk(){
    console.log("Daftar Produk Toko: ");
    produkToko.forEach((produk) => { //Looping array dengan forEach untuk tampilkan setiap id, nama, harga, stok.
        console.log(
            `ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok ${produk.stok}`
        );
    });
    console.log("=======================")
}

//fungsi untuk menambahkan Produk
//Buat objek produk baru → {id, nama, harga, stok}.
function tambahProduk(nama, harga, stok){
    const idBaru = produkToko.length > 0  ? produkToko[produkToko.length - 1].id + 1:1;
    const produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" Berhasil ditambahkan! `);
}

function hapusProduk(id){
    const index = produkToko.findIndex((produk) => produk.id === id); // index untuk mencari berdasarkan posisi, findIndex untuk mencari index tersebut
    if (index !== -1){
        console.log(`Produk "${produkToko[index].nama} Sudah Berhasil Dihapus"`)
        //splice digunakan untuk membuat array baru
        produkToko.splice(index, 1);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan!`);
    }
}

tampilanProduk();
tambahProduk("Earphone", 100000, 10);
tampilanProduk();
hapusProduk(2);
tampilanProduk();

