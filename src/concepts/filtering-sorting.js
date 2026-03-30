const db = require("./../db/db")


// where clouse -> used to filter the data
// order by -> used to sort the data
// limit -> used to limit the data
// offset -> used to offset the data


async function getUserWhere(condition) {
    const getUserQuery = `
    SELECT * FROM users WHERE ${condition}
    `
    console.log(getUserQuery)
    try {
        const  result = await db.query(getUserQuery);
        console.log('User fetched successfully', result.rows);
    } catch (error) {
        console.error('Error fetching user', error);
    }
}


async function getUserOrderBy(condition, order='ASC') {
    const getUserQuery = `
    SELECT * FROM users ORDER BY $1 $2
    `
    console.log(getUserQuery)
    try {
        const  result = await db.query(getUserQuery, [condition, order]);
        console.log('User fetched successfully', result.rows);
    } catch (error) {
        console.error('Error fetching user', error);
    }
}


async function  getSortedUsers(colunm, order='ASC') {
    const getSortedQuery = `
  SELECT * FROM  users  ORDER BY $1 $2
    `
    try {
        const result = await db.query(getSortedQuery, [colunm, order]);
        console.log('User fetched successfully', result.rows);
    } catch (error) {
        console.error('Error fetching user', error);
    }
}


async function getPagination(limit, offset) {
    const getPaginationQuery = `
    SELECT * FROM users LIMIT $1 OFFSET $2`
    try {
        const result = await db.query(getPaginationQuery, [limit, offset]);
        console.log('User paginated fetched successfully', result.rows);
    } catch (error) {
        console.error('Error fetching user', error);
    }
}
module.exports = {
    getUserWhere,
    getUserOrderBy,
    getSortedUsers,
    getPagination
} 