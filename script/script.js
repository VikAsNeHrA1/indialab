$(document).ready(function() {
    $("#myForm").submit(function(event) {
        event.preventDefault();
        if(validateForm()) {
            const name = $("#name").val();
            const email = $("#email").val();
            const phone = $("#phone").val();
            const message = $("#message").val();

            // Display the submitted data
            $("#displayName").text(name);
            $("#displayEmail").text(email);
            $("#displayPhone").text(phone);
            $("#displayMessage").text(message);
            $("#displayData").show();
        }
    });
});

function validateForm() {
    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const message = $("#message").val();

    if(name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if(!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}
