const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jumlah = 10;
let angkaTerkecil = null;
let i = 0;

function inputAngka() {
    if (i < jumlah) {
        rl.question(`Masukkan angka ke-${i + 1}: `, function(input) {
            let angka = parseInt(input);

            if (angkaTerkecil === null || angka < angkaTerkecil) {
                angkaTerkecil = angka;
            }

            i++;
            inputAngka();
        });
    } else {
        console.log("Bilangan terkecil:", angkaTerkecil);
        rl.close();
    }
}

inputAngka();