let fs = require("fs");
const a=0;
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
            if (typeof a != "number" || typeof b !== "number" || a * b === 0) {
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

// dientichhinhthang(6, 4, 0);
var temp=phepcong(1, 0).then(res =>{ return res}, err=>{
    return  "loi"
});
setTimeout(() => {
    console.log(temp)
}, 2000);
// var 

// Promise.all([phepcong(1,2), phepnhan(1,0)]).then(res=>{console.log(res)}).catch(err=>{console.log(err)});