let hasil = 2;

for (let i = 1; i <= 10; i++) {
    process.stdout.write(hasil + " ");

    if (i % 2 === 1) {
        hasil += 10;
    } else {
        hasil -= 5;
    }
}