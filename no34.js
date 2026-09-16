for (let i = 0; i <= 30; i++) {
    console.clear();

    console.log(" ".repeat(i) + "0");

    let waktu = Date.now() + 100;
    while (Date.now() < waktu) {}
}

for (let i = 30; i >= 0; i--) {
    console.clear();

    console.log(" ".repeat(i) + "0");

    let waktu = Date.now() + 100;
    while (Date.now() < waktu) {}
}