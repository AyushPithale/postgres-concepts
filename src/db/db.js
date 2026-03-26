const { Pool } = require('pg');



// create a new pool instance and manage the connection pool
// -> postgres -> :// -> // {user}  -> {password} -> @ -> {host} -> : -> {port} -> / -> {database}

const dbUrl = process.env.DATABASE_URL;
console.log("DB URL:", dbUrl);
const pool =  new Pool({
   connectionString: dbUrl
})



async function query(text, params) {
     const start = Date.now()
     try {
        const result = await pool.query(text, params)

        // execute query and log the duration
        const duration = Date.now() - start
        console.log('executed query', { text, duration, rows: result.rowCount })
        return result
     } catch (error) {
        console.error('error executing query', { text, error })
        throw error
     }    

}

module.exports = {
    query,
    pool
};
