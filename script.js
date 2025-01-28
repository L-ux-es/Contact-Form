const form = document.getElementById("contact-form");
const generalEnquiry = document.getElementById("general-enquiry-radio");
const supportEnquiry = document.getElementById("support-request-radio");
const messageQueryRequired = document.getElementById("query-required");

function handleSubmit(event) {
    event.preventDefault()
    if (form.checkValidity()) {
        const message = document.getElementById("message-successful");
        message.style.display = "block";
        setTimeout(function () {
            message.style.display = "none";
        }, 4000);
        form.reset();
        containerGeneralEnquiry.item(0).style.background = "none";
        containerGeneralEnquiry.item(1).style.background = "none";
        return true;
    } else {
        console.log(generalEnquiry.value);
        if (generalEnquiry.value === false && supportEnquiry.value === false) {
            console.log("pasa");
            messageQueryRequired.style.display = "block";
        }
        return false;
    }
}

form.addEventListener("submit", handleSubmit);

const containerGeneralEnquiry = document.getElementsByClassName("radioButton-container");

generalEnquiry.addEventListener("click", () => {
    containerGeneralEnquiry.item(0).style.background = "var(--green-200-lighter-primary)";
    containerGeneralEnquiry.item(1).style.background = "none";
});
supportEnquiry.addEventListener("click", () => {
    containerGeneralEnquiry.item(1).style.background = "var(--green-200-lighter-primary)";
    containerGeneralEnquiry.item(0).style.background = "none";
});
