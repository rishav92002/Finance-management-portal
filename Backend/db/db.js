const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (error) {
        console.log(error);
    }
}

module.exports = {db}
//explanation of above code
// The db function is defined as an async function. This means that the function can use the await keyword to pause its execution until an asynchronous operation (e.g., database connection) is completed.

// Inside the try block, the line await mongoose.connect(process.env.MONGO_URL) performs the actual database connection using Mongoose. The await keyword is used here to pause the execution of the function until the connection process completes.

// While the connection is being established, the function will not proceed to the next line until the connection is successful or an error occurs.

// If the connection is successful, the function will log "Db Connected" to the console. The await keyword ensures that this log statement is not executed until the connection is established.

// If there's an error during the connection attempt (e.g., invalid connection URL or database server down), the catch block will be executed, and it will log "DB Connection Error" to the console.

// By using async/await, you can write asynchronous code in a more readable and structured way, as if it were synchronous, avoiding the need for callback functions or chaining promises. It improves the readability and maintainability of the code, making it easier to understand the flow of asynchronous operations.