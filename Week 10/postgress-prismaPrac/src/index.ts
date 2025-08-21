//write a function to create a users table in database.
import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://avineetkaur15:M0caprbZg7Ni@ep-silent-haze-a5h2i8ra.us-east-2.aws.neon.tech/test?sslmode=require"
})

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`
    );
    console.log(result)
}
async function insertUsersTable() {
    await client.connect();
    const result = await client.query(`
    INSERT INTO users (username, email, password)
        VALUES ('user1', 'user1@app.com', 'user1');`
    );
    console.log(result)
}

//insertUsersTable();
// createUsersTable();