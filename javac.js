document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get values from the form
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Create an object to store the user's data
    var userData = {
        name: name,
        phoneNumber: phoneNumber
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("phoneNumber").value = "";

    alert("Data has been stored in local storage.");
});