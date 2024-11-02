const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

if (!username || !password) {
    throw new Error("Missing MongoDB credentials");
}

// Create connection string using template literals
export const connectionString = `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster276.3onfd.mongodb.net/employee`;
