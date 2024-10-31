// Initialize the user data array from local storage or create an empty array
var userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

const baseURL = "https://crudcrud.com/api/d927a5ed3e414f919c711e6c5eca701b"
// Function to display user data on the website
function displayUserData() {
    var userList = document.getElementById("userList");
    userList.innerHTML = "";

    userDataArray.forEach(function(userData) {
        var listItem = document.createElement("li");
        listItem.textContent = "Name: " + userData.name + ", Email: " + userData.email + ", PhoneNumber " +userData.phonenumber;
        userList.appendChild(listItem);
    });
}

// Display any existing user data when the page loads
displayUserData();

// Function to handle form submission
document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Get user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;

    // Create a user object
    var user = {
        name: name,
        email: email,
        phonenumber:phonenumber
    };

    // Add the user to the array
    // userDataArray.push(user);

    // Save the updated array to local storage
    // localStorage.setItem("userDataArray", JSON.stringify(userDataArray));

    //Instead of the Local Storage we save the data in the crudcrud

    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phonenumber").value = "";

    // Display the updated user data
    displayUserData();
});