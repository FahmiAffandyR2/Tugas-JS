// app.js
import { menampilkanData, tambahData, hapusData } from "./Tugas6_controller.js";

const main = () => {
    
    menampilkanData() // tampilan data awal

    tambahData({nama: "Raka", umur: 19, alamat: "Palembang", email: "Raka@email.com"});
    tambahData({nama: "Riki", umur: 25, alamat: "Palembang", email: "Riki@email.com"});

    menampilkanData(); // tampilkan setelah tambah

    hapusData(2); // hapus user ke 3 (index 2)

    menampilkanData(); // tampilkan setelah hapus
}

main();