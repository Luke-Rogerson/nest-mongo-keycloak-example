const MongoClient = require('mongodb').MongoClient;

const uri =
  'mongodb://secretusername:secretpasword@localhost:27017?retryWrites=true&w=majority';
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('bubble');
    const bookings = database.collection('bookings');
    // Query for a movie that has the title 'Back to the Future'
    await bookings.drop();
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
