let fs = require("fs");

console.log("Start demo app");

let phepchia = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != 'number' || b === 0) {
                return reject(new Error("Invalid number"))
            } else {
                return resolve(a / b)
            }
        }, 2000);
    })
}

let phepnhan = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b !== "number" || a * b === 0) {
                return reject(new Error("Invalid number"));
            }
            return resolve(a * b);

        }, 1000);
    })
}

let phepcong = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 0 || b === 0) {
                return reject(new Error("invalid number"))
            }
            return resolve(a + b);
        })

    }, 1000);
}

let dientichhinhthang = (a, b, h) => {
    phepcong(a, b)
        .then(tong => phepnhan(tong, h))
        .then(tich => phepchia(tich, 2))
        .then(dientich => console.log("dien tich la: " + dientich))
        .catch(e => console.log("loi" + e))
}

dientichhinhthang(6, 4, 0)