let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
})

file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);

})

const btnGeneratepdf = document.querySelector("#generate-pdf");

btnGeneratepdf.addEventListener("click", () => {

    const content = document.querySelector("#content")

    const options = {
        margin: [10, 10, 10, 10],
        filename: "Comprovante impressora.pdf",
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }

    html2pdf().set(options).from(content).save()
})