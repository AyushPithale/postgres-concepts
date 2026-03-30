const db = require("./../db/db")

// ->  posts will have foreign key of users table
// ->  users will have primary key of users table
// ->  posts will have many to one relationship with users table
// ->  users will have one to many relationship with posts table


// EXPLAIN ON DELETED CASCADE
// ON DELETE CASCADE: If a user is deleted, all posts associated with that user will also be deleted.
// ON DELETE SET NULL: If a user is deleted, the user_id in the posts table will be set to NULL.
// ON DELETE RESTRICT: If a user is deleted, the posts associated with that user will not be deleted.
// ON DELETE NO ACTION: If a user is deleted, the posts associated with that user will not be deleted.


async  function createPostTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS posts(
         id SERIAL  PRIMARY KEY ,
         title VARCHAR(255) NOT NULL,
         content TEXT  NOT NULL, 
         user_id INTEGER REFERENCES users(id) ON  DELETE CASCADE,
         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
         )
    `
    try {
        await db.query(createTableQuery);
        console.log('Posts table created successfully');
    } catch (error) {
        console.error('Error creating posts table', error);
    }
}



async  function insetNewPost(title, content , user_id){
    const insertQuery = `
    INSERT INTO posts (title , content , user_id)
    VALUES ($1, $2, $3)
     RETURNING *;
    `
    try {
        const result = await db.query(insertQuery, [title, content, user_id]);
        console.log('Post inserted successfully', result.rows[0]);
    } catch (error) {
        console.error('Error inserting post', error);
    }
}

module.exports = {
    createPostTable,
    insetNewPost

}