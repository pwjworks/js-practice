new Promise((resolve, reject) => {
    for (let i = 0; i < 10; i++) {
        resolve(i);
    }
}).then((i) => {
    console.log(i);
})

new Promise((resolve, reject) => {
    for (let i = 0; i < 10; i++) {
        function a() {
            resolve(i);
        }
    }
    a();
}).then((i) => {
    console.log(i);
})

