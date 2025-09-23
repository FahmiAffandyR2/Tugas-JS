class Pelanggan{
    constructor(nama, nomorTelepon, kendaraandiSewa){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraandiSewa = kendaraandiSewa;
    }

    sewaKendaraan(kendaran){
        this.kendaraandiSewa = kendaran;
    }

}

class sistemTranformasi{
    constructor(){
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan){
        this.daftarPelanggan.push(pelanggan);
    }

    tampilanPelanggan(){
        console.log("Daftar pelanggan yang menyewa kendaraan");
        this.daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. Nama: ${pelanggan.nama}, Telepon: ${pelanggan.nomorTelepon}, Kendaraan ${pelanggan.kendaraandiSewa}`);
        })
    }
}

let sistem = new sistemTranformasi();

let pelanggan1 = new Pelanggan("Ijul", "08567878998", null);
let pelanggan2 = new Pelanggan("Rafi", "08567778909", null);

pelanggan1.sewaKendaraan("Mobil");
pelanggan2.sewaKendaraan("Motor");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilanPelanggan();
