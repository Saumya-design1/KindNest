/* ---------- VOLUNTEER REGISTRATION ---------- */

const volunteerForm = document.getElementById("volunteerForm");

volunteerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("volName").value;
    let email = document.getElementById("volEmail").value;
    let phone = document.getElementById("volPhone").value;
    let area = document.getElementById("volArea").value;
    let message = document.getElementById("volMessage").value;

    const result = document.getElementById("volunteerResult");

    result.textContent =
        "Thank you for joining KindNest, " + name + "! ♡\n\n" +
        "Your volunteer application has been completed.\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Preferred activity: " + area + "\n" +
        (message ? "Your message: " + message + "\n" : "") +
        "\nThis is a demo. Your application has not been sent to an NGO.";

    result.classList.add("show");

    volunteerForm.reset();
});
