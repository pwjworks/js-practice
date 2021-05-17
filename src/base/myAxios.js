let Axios = {
    get: function (url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText)
                }
            };
            xhr.send();
        });
    },
};

Axios.get('https://baidu.com').then((value) => {
    console.log(value);
})