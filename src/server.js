require('dotenv').config();
const { createusersTable, insertUser , fetchAllUsers, updateUser, deleteUser} = require("./concepts/basic-queries");

// test  basic 
async function testBasicQueries() {
    try {
        // await createusersTable();
        // await insertUser('ayush', 'ayu@gmail.com');
        await fetchAllUsers()
    //    await updateUser(1, 'ayush', 'agg@gmail.com');
    // await deleteUser(6);
    } catch (error) {
        console.error('Error in testBasicQueries', error);
    }
}



async function runAllqueries() {
    try {
        await testBasicQueries();
    } catch (error) {
        console.error('Error in runAllqueries', error);
    }
}


runAllqueries()
