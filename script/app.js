const regularEmailValidate = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
let $form = document.querySelector("#frmEmail");
let $inp = document.querySelector("#frmEmail input");
let $modal = document.querySelector(".modal");
let $modalBtnClose = document.querySelector(".btnCloseModal");


function validateInput (value = '', $input) {
    if(value.length === 0 || value === '' || !value.match(regularEmailValidate)) {
        $input.nextElementSibling.classList.remove("d-none");
        $input.nextElementSibling.innerHTML = "Valid email required";
        $input.classList.add('error');
        return false;
    }

    $input.nextElementSibling.classList.add("d-none");
    $input.nextElementSibling.innerHTML = "";   
    $input.classList.remove('error');
    return true;
}

$modalBtnClose.addEventListener("click", () => {
    $modal.classList.add("d-none")
})

$inp.addEventListener('keyup', (e) => {
    validateInput(e.target.value, $inp);
});

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    let frmData = new FormData(e.target);
    let data = Object.fromEntries(frmData.entries());

    if(validateInput(data.email, $inp)) {
        $modal.querySelector("#customer").textContent = data.email;
        $modal.classList.remove("d-none");
    }
})