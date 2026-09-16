const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan n_awal: ", function(inputAwal) {
    rl.question("Masukkan n_akhir: ", function(inputAkhir) {

        let n_awal = parseInt(inputAwal);
        let n_akhir = parseInt(inputAkhir);
        let jumlahPrima = 0;

        for (let angka = n_awal; angka <= n_akhir; angka++) {

            if (angka < 2) {
                continue;
            }

            let prima = true;

            for (let i = 2; i < angka; i++) {
                if (angka % i === 0) {
                    prima = false;
                    break;
                }
            }

            if (prima) {
                jumlahPrima++;
            }
        }

        console.log("Jumlah bilangan prima:", jumlahPrima);

        rl.close();
    });
});