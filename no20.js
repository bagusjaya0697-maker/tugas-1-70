let hasil = 1;
let tambah = 1;

for (let i = 1; i <= 13; i++) {
    process.stdout.write(hasil + " ");

    hasil += tambah;
    tambah++;

    if (tambah > 3) {
        tambah = 1;
    }
}