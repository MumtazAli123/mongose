// noinspection JSValidateTypes

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const database = 'mydb'
const client = new mongoose(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return  db.collection('mydb');

}
module.exports = dbConnect;