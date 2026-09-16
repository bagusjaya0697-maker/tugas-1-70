const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan n_awal: ", function(inputAwal) {
    rl.question("Masukkan n_akhir: ", function(inputAkhir) {

        let n_awal = parseInt(inputAwal);
        let n_akhir = parseInt(inputAkhir);
        let total = 0;

        for (let i = n_awal; i <= n_akhir; i++) {
            if (i % 2 !== 0) {
                total += i;
            }
        }

        console.log("Total bilangan ganjil:", total);

        rl.close();
    });
});