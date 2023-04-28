const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

// static vendor data (login credentials)

const vendorAccount1 = {
    owner: "Amit",
    pin: 123456,
};

const vendorAccount2 = {
    owner: "Raju",
    pin: 654321,
};

const vendorAccounts = [vendorAccount1, vendorAccount2];

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSucces(input);
        }
    });
}

//Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, password]);
    valid();
});
let currentAccount;
const valid = function () {
    currentAccount = vendorAccounts.find(
        (acc) => acc.owner.toLowerCase() === username.value.toLowerCase()
    );

    if (!currentAccount) showError(username, `Invalid Username`);

    if (currentAccount?.pin === Number(password.value)) {
        window.location.href = "/html/product_category.html";
    } else {
        showError(password, `Invalid Password`);
    }
};
