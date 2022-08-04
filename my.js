function testGS(){
    var url = "https://script.google.com/macros/s/AKfycbyhEySFaBoMz07NevZNzw-DPoCn5zUPzl82RIbT90pxxwWno-xQwDv1H5FPSimc4XFc/exec";

    fetch(url).then(d => d.json())
                .then(d => {
                    document.getElementById("app").textContent = d[0].status;
                });
}


function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbyhEySFaBoMz07NevZNzw-DPoCn5zUPzl82RIbT90pxxwWno-xQwDv1H5FPSimc4XFc/exec";

    fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
}

document.getElementById("btn").addEventListener("click",testGS);

document.getElementById("btn2").addEventListener("click",addGS);