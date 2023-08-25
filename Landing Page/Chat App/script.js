// DOM elements
const usernameInput = document.getElementById('username-input');
const usernameButton = document.getElementById('username-button');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages');

let username = '';

// Event listener for username submission
usernameButton.addEventListener('click', () => {
  // Get the username from the input field
  username = usernameInput.value.trim();
  
  if (username !== '') {
    // Disable username input and button
    usernameInput.disabled = true;
    usernameButton.disabled = true;

    // Enable message input and send button
    messageInput.disabled = false;
    sendButton.disabled = false;
    
    // Set focus to the message input field
    messageInput.focus();
  }
});

// Event listener for sending a message
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  
  if (message !== '') {
    // Create a new chat message element
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('message');
    chatMessage.innerHTML = `<span class="username">${username}:</span> ${message}`;

    // Append the chat message to the chat area
    chatMessages.appendChild(chatMessage);

    // Clear the message input field
    messageInput.value = '';
  }
});
