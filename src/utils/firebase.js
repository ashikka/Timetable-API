/*jshint esversion: 6 */

const admin = require('firebase-admin');
const dotenv = require("dotenv");
dotenv.config();

var serviceAccount = require(process.env.CREDS);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL,
});

const database = admin.firestore();

module.exports = {admin,database};