function sendMessage() {
    // Get the message input value
    var message = document.getElementById("messageInput").value;
    // Get the chat box element
    var chatBox = document.getElementById("chatBox");
    // Create a new div element for the message
    var newMessage = document.createElement("div");
    // Set the class for styling
    newMessage.className = "chat-message";
    // Set the text content of the new message
    newMessage.textContent = "User: " + message;
    // Append the new message to the chat box
    chatBox.appendChild(newMessage);
    // Clear the message input
    document.getElementById("messageInput").value = "";
}

