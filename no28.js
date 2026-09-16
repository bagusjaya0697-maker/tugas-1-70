const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan n_awal: ", function(inputAwal) {
    rl.question("Masukkan n_akhir: ", function(inputAkhir) {

        let n_awal = parseInt(inputAwal);
        let n_akhir = parseInt(inputAkhir);

        for (let tahun = n_awal; tahun <= n_akhir; tahun++) {

            if (tahun % 10 === 8 &&
                (tahun % 400 === 0 || (tahun % 4 === 0 && tahun % 100 !== 0))) {

                process.stdout.write(tahun + " ");
            }
        }

        rl.close();
    });
});