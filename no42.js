const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jumlah = 10;
let angkaTerbesar = null;
let i = 0;

function inputAngka() {
    if (i < jumlah) {
        rl.question(`Masukkan angka ke-${i + 1}: `, function(input) {
            let angka = parseInt(input);

            if (angkaTerbesar === null || angka > angkaTerbesar) {
                angkaTerbesar = angka;
            }

            i++;
            inputAngka();
        });
    } else {
        console.log("Bilangan terbesar:", angkaTerbesar);
        rl.close();
    }
}

inputAngka();