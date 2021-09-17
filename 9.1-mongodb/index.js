const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017/anyDatabase"
  // "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority"
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('test_db');
    const movies = database.collection('test_movies');
    database.collection('test_movies').insertOne({ title: 'Back to the Future' })
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);