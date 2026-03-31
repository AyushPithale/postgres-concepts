require('dotenv').config();
const { countPostbyUsers, averageNumofUsers } = require('./concepts/Aggregation');
const { createusersTable, insertUser , fetchAllUsers, updateUser, deleteUser} = require("./concepts/basic-queries");
const {getUserWhere, getUserOrderBy, getPagination} = require("./concepts/filtering-sorting");
const { getUsersWithPosts, getAllUsersAndPosts } = require('./concepts/joins');
const { createPostTable, insetNewPost } = require('./concepts/relationships');
// test  basic 
async function testBasicQueries() {
    try {
        // await createusersTable();
        //  await insertUser('babpu', 'bappu@gmail.com');
        await fetchAllUsers()
    //    await updateUser(1, 'ayush', 'agg@gmail.com');
    // await deleteUser(6);
    } catch (error) {
        console.error('Error in testBasicQueries', error);
    }
}


async function testFIlterQueries() {
    try {
        await getUserWhere("username = 'ayush'");
        await getUserOrderBy("created_at", "DESC");
        await getPagination(4, 2);
    } catch (error) {
        console.error('Error in testFIlterQueries', error);
    }
}

async  function  testRelationQuery() {
    try {
        // await createPostTable();
        // await insetNewPost('my new post', 'nothing new', 7);
    } catch (error) {
        console.error('Error in testRelationQuery', error);
    }
}

async  function testJoinQueries() {
    try {
        await getUsersWithPosts();
        await getAllUsersAndPosts();
    } catch (error) {
        console.error('Error in testJoinQueries', error);
    }
}

async function testAggregationQueries() {
    try {
        await countPostbyUsers();
        await averageNumofUsers()
    } catch (error) {
        console.error('Error in testAggregationQueries', error);
    }
}

async function runAllqueries() {
    try {
        // await testBasicQueries();
        // await testFIlterQueries()
        // await testRelationQuery()
        // await testJoinQueries()
        await testAggregationQueries()
    } catch (error) {
        console.error('Error in runAllqueries', error);
    }
}


runAllqueries()
