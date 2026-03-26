
const db = require('../db/db');





async function createusersTable() {
   const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP WITH  TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
   `  ; 

   try {
    await db.query(createTableQuery);
    console.log('Users table created successfully');
   } catch (error) {
    console.error('Error creating users table', error);
   }
}


async function insertUser(username, email) {
    const insertUserQuery = `
    INSERT INTO users (username, email)
    VALUES ($1, $2)
    RETURNING *;
    `; 
     // $1, $2 are placeholders for the values passed in the query for security to prevent sql injection
    //  return new intered row
    try {
        const result = await db.query(insertUserQuery, [username, email]);
        console.log('User inserted successfully', result.rows[0]);
    } catch (error) {
        console.error('Error inserting user', error);
    }
}


async function fetchAllUsers() {
    const fetchAllUsersQuery = `
    SELECT * FROM users;
    `;
    try {
        const result = await db.query(fetchAllUsersQuery);
        console.log('All users fetched successfully', result.rows);
    } catch (error) {
        console.error('Error fetching all users', error);
    }
}



async function updateUser(id, username, email) {
    const updateUserQuery = `
    UPDATE users
    SET username = $2, email = $3
    WHERE id = $1
    RETURNING *;
    `;
    try {
        const result = await db.query(updateUserQuery, [id, username, email]);
        console.log('User updated successfully', result.rows[0]);
    } catch (error) {
        console.error('Error updating user', error);
    }
}

async function deleteUser(id) {
    const deleteUserQuery = `
    DELETE FROM users
    WHERE id = $1
    RETURNING *;
    `;
    try {
        const result = await db.query(deleteUserQuery, [id]);
        console.log('User deleted successfully', result.rows[0]);
    } catch (error) {
        console.error('Error deleting user', error);
    }
}
module.exports = {
    createusersTable, 
    insertUser,
    fetchAllUsers,
    updateUser,
    deleteUser
};