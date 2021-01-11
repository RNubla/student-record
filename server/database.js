const dotenv = require("dotenv");
dotenv.config();
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ltbt0.mongodb.net/<dbname>?retryWrites=true&w=majority`;
module.exports = {
  db: connectionString,
};
