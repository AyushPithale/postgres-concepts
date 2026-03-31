const db = require("./../db/db");

// ->>  EXPLAIN ALL JOINS WITH DEFINITIONS
// 1. INNER JOIN :  Returns only the rows that have matching values in both tables.
// 2. LEFT JOIN :  Returns all rows from the left table, and the matched rows from the right table.
// 3. RIGHT JOIN :  Returns all rows from the right table, and the matched rows from the left table.
// 4. FULL OUTER JOIN :  Returns all rows when there is a match in either the left or the right table.
// 5. SELF JOIN :  A regular join, but the table is joined to itself.
// 6. CROSS JOIN :  Returns the Cartesian product of the two tables.
// 7. NATURAL JOIN :  A join that automatically joins tables based on columns with the same name.
// 8. USING JOIN :  A join that uses the USING clause to specify the columns to join on.
// 9. ON JOIN :  A join that uses the ON clause to specify the columns to join on.
// 10. WHERE JOIN :  A join that uses the WHERE clause to specify the columns to join on.   
// LEFT OUTER JOIN :  Returns all rows from the left table, and the matched rows from the right table.

async function getUsersWithPosts() {
    const getUsersWithPostQuery = `
    SELECT users.id , users.username, posts.title FROM users   
     INNER JOIN posts ON users.id = posts.user_id
    `
   try {
    const result = await db.query(getUsersWithPostQuery);
    console.log("Users with posts fetched successfully", result.rows);
   } catch (error) {
    console.error("Error fetching users with posts", error);
   }
}
 

async function getAllUsersAndPosts() {
    const getAllUsersAndPostsQuery = `
    SELECT users.id , users.username, posts.title FROM users   
     LEFT JOIN posts ON users.id = posts.user_id
    `
   try {
    const result = await db.query(getAllUsersAndPostsQuery);
    console.log("Left join fetched successfully", result.rows);
   } catch (error) {
    console.error("Error fetching left join", error);
   }
}

module.exports = {
    getUsersWithPosts,
    getAllUsersAndPosts
}