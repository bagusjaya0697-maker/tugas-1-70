let hasil = 5;

for (let i = 1; i <= 12; i++) {
    process.stdout.write(hasil + " ");

    if (i % 2 === 1) {
        hasil -= 3;
    } else {
        hasil += 5;
    }
}