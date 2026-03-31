const db =  require("./../db/db");

// explain aggregation functions
// 1. COUNT : Returns the number of rows in a table.
// 2. SUM : Returns the sum of the values in a column.
// 3. AVG : Returns the average of the values in a column.
// 4. MIN : Returns the minimum value in a column.
// 5. MAX : Returns the maximum value in a column.


async function countPostbyUsers() {
    const countPostbyUsersQuery = `
    SELECT users.username, COUNT(posts.id) AS postCount FROM users   
     LEFT JOIN posts ON users.id = posts.user_id
     GROUP BY users.username
    `
    try {
        const result = await db.query(countPostbyUsersQuery);
        console.log("Count of posts by users fetched successfully", result.rows);
    } catch (error) {
        console.error("Error fetching count of posts by users", error);
    }
}

async function  averageNumofUsers() {
    const averageNumofUsersQuery = `
 SELECT AVG(post_count) as average_posts
    FROM (
    SELECT COUNT(posts.id) as post_count
    FROM users 
	 LEFT JOIN posts ON users.id = posts.user_id
	 GROUP BY users.id
    ) as users_per_counts
	
    `
    try {
        const result = await db.query(averageNumofUsersQuery);
        console.log("Average number of users fetched successfully", result.rows);
    } catch (error) {
        console.error("Error fetching average number of users", error);
    }
}

module.exports = {
    countPostbyUsers,
    averageNumofUsers
}