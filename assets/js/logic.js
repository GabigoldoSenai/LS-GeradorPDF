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

let photo2 = document.getElementById('imgPhoto2');
let file2 = document.getElementById('flImage2');

photo2.addEventListener('click', () => {
    file2.click();
})

file2.addEventListener('change', (event) => {
    let reader2 = new FileReader();

    reader2.onload = () => {
        photo2.src = reader2.result;
    }

    reader2.readAsDataURL(file2.files[0]);

})

let photo3 = document.getElementById('imgPhoto3');
let file3 = document.getElementById('flImage3');

photo3.addEventListener('click', () => {
    file3.click();
})

file3.addEventListener('change', (event) => {
    let reader3 = new FileReader();

    reader3.onload = () => {
        photo3.src = reader3.result;
    }

    reader3.readAsDataURL(file3.files[0]);

})

const btnGeneratepdf = document.querySelector("#generate-pdf");

btnGeneratepdf.addEventListener("click", () => {

    const content = document.querySelector("#content")

    const options = {
        margin: [10, 10, 0, 10],
        filename: "Comprovante impressora.pdf",
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }

    html2pdf().set(options).from(content).save()
})