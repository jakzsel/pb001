const daftarSiswa = ["Andi","Budi","Citra"];

const sapaSemua = daftarSiswa.map ((nama) => {
    return `Selamat pagi, ${nama}!`;
});

console.log(sapaSemua);