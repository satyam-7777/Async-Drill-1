// Problem 2: Read & Transform File Data
// Problem
// Simulate reading and transforming a text file with async callbacks.

// Tasks
// Write a function readFile(fileName, callback)

// Wait 2 seconds.
// If fileName === "data.txt" → return "hello world".
// Else return an error "File not found".
// Write a function toUpperCase(data, callback)

// Wait 1 second.
// Convert string to uppercase.
// Chain them: readFile("data.txt", ...) → toUpperCase(...) → print result.

// Expected: "HELLO WORLD".
// If file not found → print error.

// Additional
// Add another callback reverseString(data, callback) to reverse the text. Final output: "DLROW OLLEH".

function readFile(fileName, callback) {
  setTimeout(() => {
    if (fileName === "data.txt") {
      const data = "hello world";
      callback(null, data);
    } else {
      return callback("File not found", null);
    }
  }, 2000);
}

function toUpperCase(data, callback) {
  setTimeout(() => {
    if (!data) {
      return callback("data not found", null);
    }

    const upperCaseData = data.toUpperCase();
    callback(null, upperCaseData);
  }, 1000);
}

function reverseString(data, callback) {
  setTimeout(() => {
    if (!data) {
      return callback("data not found", null);
    }

    const reverseData = data.split("").reverse().join("");
    callback(null, reverseData);
  }, 1000);
}

// calling the callback Fn

readFile("data.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  toUpperCase(data, (err, upperCaseData) => {
    if (err) {
      console.log(err);
      return;
    }

    reverseString(upperCaseData, (err, reversedData) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(reversedData);
    });
  });
});
