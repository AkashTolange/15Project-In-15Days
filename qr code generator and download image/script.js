// Create a new QRCode instance
let qrcode = new QRCode(document.querySelector(".qrcode"));

// Initial QR code generation with a default message
qrcode.makeCode("Why did you scan me?");

// Function to generate QR code based on user input
function generateQr() {
    let inputValue = document.querySelector("input").value.trim();
    if (inputValue === "") {
        alert("Input Field cannot be blank!");
    } else {
        qrcode.makeCode(inputValue);
    }
}

// Function to download the QR code image
function downloadQr() {
    // Get the base64 encoded URI of the QR code image
    let qrCodeImage = document.querySelector(".qrcode img");
    if (!qrCodeImage) {
        alert("Generate a QR code first!");
        return;
    }
    let imgURI = qrCodeImage.src;

    // Create a temporary anchor element to trigger the download
    let downloadLink = document.createElement("a");
    downloadLink.href = imgURI;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
