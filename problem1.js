// Problem 1: Fetch & Process User Data
// Problem
// Simulate fetching and processing user data using callbacks.

// Tasks
// Write a function getUserData(userId, callback)

// Wait 2 seconds (setTimeout).
// If userId > 0 → return { id: userId, name: "John Doe", age: 25 }.
// Else return an error "Invalid userId".
// Write a function processUserData(user, callback)

// Wait 1 second.
// Return "Welcome, John Doe! Your age is 25.".
// Chain them: getUserData(1, ...) → processUserData(...) → print result.

// Handle errors at any stage.

// Additional
// Add a saveMessage(message, callback) function that simulates saving to a DB. Print "Message saved successfully!".

function getUserData(userId, callback) {
  setTimeout(() => {
    if (userId > 0) {
      const userData = { id: userId, name: "John Doe", age: 25 };

      callback(null, userData);
    } else {
      return callback("Invalid userId", null);
    }
  }, 2000);
}

function processUserData(user, callback) {
  setTimeout(() => {
    if (!user) {
      return callback("user not found", null);
    } else {
      const message = `Welcome, ${user.name}! Your age is ${user.age}.`;
      callback(null, message);
    }
  }, 1000);
}

function saveMessage(message, callback) {
  setTimeout(() => {
    if (!message) {
      return callback("message not found", null);
    } else {
      const successMsg = "Message saved successfully!";
      callback(null, successMsg);
    }
  }, 1000);
}

const userId = 5;

getUserData(userId, (err, user) => {
  if (err) {
    console.log(err);
    return;
  }

  processUserData(user, (err, message) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(message);

    saveMessage(message, (err, successMsg) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(successMsg);
    });
  });
});
