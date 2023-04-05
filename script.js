var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 300,
    height : 300,
    colorDark: '#333',
    colorLight: '#FFF',
});

function makeCode () {

    var elText = document.getElementById("text");
    
    if (!elText.value) {
        elText.value = 'Digite um texto!';
        elText.focus();
        return;
    }
    
    qrcode.makeCode(elText.value);

}

makeCode();

$("#btn-generate").
    on("click", function () {
        makeCode();
    });

$("#text").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });