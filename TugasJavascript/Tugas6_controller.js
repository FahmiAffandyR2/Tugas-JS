//controller.js
import users from "./Tugas6_data.js";

//menampilkan data
const menampilkanData = () => {
    console.log("Daftar Users: ");
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama}, ${user.umur}, ${user.alamat}, ${user.email}`);
    });
};

//tambah data
const tambahData = (user) => {
    users.push(user);
    console.log("Data Berhasil Ditambahkan", user);
}

const hapusData = (index) => {
    if(index >= 0 && index < users.length){
        const deleted = users.splice(index, 1);
        console.log("Data dihapus: ", deleted[0]);
    } else {
        console.log("Data tidak valid");
    }
};

export {menampilkanData, tambahData, hapusData};