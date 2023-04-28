"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const types = document.getElementById("types");

const umax = 15;
const umin = 3;
const pmax = 25;
const pmin = 6;

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    // console.log(e.key);

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

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

//check input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be les than ${max} characters`
        );
    } else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, password]);
    checkLength(username, umin, umax);
    checkLength(password, pmin, pmax);
    redirect();
});
const redirect = function () {
    // check the condition & redirect
    if (types.value === "user" && valid()) {
        window.location.href = "/index.html";
    }
    if ((types.value === "admin" || types.value === "vendor") && valid()) {
        window.location.href = "/html/product_category.html";
    }
};

const valid = function () {
    if (
        username.value.length > umin &&
        username.value.length < umax &&
        password.value.length > pmin &&
        password.value.length < pmax
    ) {
        return true;
    }
    return false;
};
