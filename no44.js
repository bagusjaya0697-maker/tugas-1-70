const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jumlah = 10;
let jumlahGenap = 0;
let i = 0;

function inputAngka() {
    if (i < jumlah) {
        rl.question(`Masukkan angka ke-${i + 1}: `, function(input) {
            let angka = parseInt(input);

            if (angka % 2 === 0) {
                jumlahGenap++;
            }

            i++;
            inputAngka();
        });
    } else {
        console.log("Jumlah bilangan genap:", jumlahGenap);
        rl.close();
    }
}

inputAngka();