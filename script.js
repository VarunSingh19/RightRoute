const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');

// Define an array to store user objects
const users = [];

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the entered username and password
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Check if the user exists
  if (checkUser(username, password)) {
    // User exists, save the username in localStorage
    localStorage.setItem('username', username);

    // Redirect the user to the main page or perform other actions
    window.location.href = 'index.html';
  } else {
    // User does not exist, display a message
    alert('User does not exist. Please register first.');
  }
});

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the entered username and password
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  // Save the user information (e.g., in localStorage or send to server)
  saveUser(username, password);

  // Display a success message
  alert('Registration successful. You can now log in.');
});

// Function to check if the user exists
function checkUser(username, password) {
  // Iterate through the users array and check for a matching user
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return true; // User found
    }
  }

  return false; // User not found
}

// Function to save the user information
function saveUser(username, password) {
  // Create a new user object and add it to the users array
  const newUser = { username, password };
  users.push(newUser);
}

// Check if the user is logged in
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
  // User is logged in, perform actions accordingly
  console.log('Logged in as: ' + savedUsername);
  // Redirect the user to the main page or perform other actions
  window.location.href = 'Landing%20Page/index.html';

} else {
  // User is not logged in, handle accordingly
  console.log('Not logged in');
}
