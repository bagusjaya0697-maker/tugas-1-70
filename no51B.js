for (let i = 0; i < 6; i++) {

    let kiri = 5 - i;
    let kanan = 5 - i;
    let spasi = 1 + (i * 2);

    if (i === 0) {
        console.log("*".repeat(11));
    } else {
        console.log(
            "*".repeat(kiri) +
            " ".repeat(spasi) +
            "*".repeat(kanan)
        );
    }
}