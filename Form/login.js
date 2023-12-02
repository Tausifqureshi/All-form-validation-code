//jab bhi window  load hogi ye function chale ga onload wala?
window.addEventListener("load", function () {
  console.log(localStorage.getItem("loginUser"));
  let userLogin = localStorage.getItem("loginUser");

  if (userLogin) {
    this.window.location.replace("./dashboard.html");
  }
});
// login ke liye use hora ab yaha se code?
function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  var getUser = JSON.parse(localStorage.getItem("user"));
  let user = getUser.find(function (value) {
    if (value.email === email && value.password === password) {
      return true;
    }
  });

  if (user !== -1) {
    alert("Successfully Login");

    localStorage.setItem("loginUser", JSON.stringify(user)); //login key hai

    window.location.replace("./dashboard.html");
  } else {
    alert("email and password does not match");
  }
}
//code end

















// window.addEventListener("load", function () {
//   // Check if a user is already logged in
//   if (localStorage.getItem("loginUser")) {
//     // If a user is logged in, redirect to the dashboard
//     window.location.replace("./dashboard.html");
//   }
// });

// function login(event) {
//   event.preventDefault();

//   // Retrieve user input
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   // Retrieve the list of users from local storage
//   let users = JSON.parse(localStorage.getItem("user")) || [];

//   // Find the user with matching email and password
//   let user = users.find((u) => u.email === email && u.password === password);
//   console.log(user)
//   if (user) {
//     // If a matching user is found, set a session variable and redirect to the dashboard
//    localStorage.setItem("loginUser", JSON.stringify(user));
//     window.location.replace("./dashboard.html");
//   } else {
//     // If no matching user is found, display an error message

//     alert("Email and password do not match.");
//   }
// }







