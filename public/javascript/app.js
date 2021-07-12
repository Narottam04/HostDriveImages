function getLink() {
    const driveLink = document.getElementById('drive-link').value;
    const copyInput = document.getElementById('hosted-img');
    const hide = document.getElementById('form-hosted');
    const preLink = "https://drive.google.com/uc?id=";
    const idEnd = driveLink.indexOf('/view');
    const linkId = driveLink.slice(32, idEnd);
    const hostImage = preLink + linkId;
    console.log(hostImage)
    copyInput.value = hostImage;
    hide.classList.remove("hidden")
}

function copyLink() {
    const copyInput = document.getElementById('hosted-img');
    copyInput.select();
    document.execCommand("Copy");
}

