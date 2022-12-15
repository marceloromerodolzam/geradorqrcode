var input = document.querySelector("input");
var qr = document.querySelector("#qrcode");

document.addEventListener("keypress", (e) => 
{
    if (e.key === "Enter") {
        genQRcode();
    }
});

function genQRcode() 
{
    if (!input.value) return;

    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
}