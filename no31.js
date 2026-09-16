const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan n_awal: ", function(inputAwal) {
    rl.question("Masukkan n_akhir: ", function(inputAkhir) {

        let n_awal = parseInt(inputAwal);
        let n_akhir = parseInt(inputAkhir);

        for (let angka = n_awal; angka <= n_akhir; angka++) {

            if (angka % 5 === 0) {
                process.stdout.write(angka + " ");
            }
        }

        rl.close();
    });
});