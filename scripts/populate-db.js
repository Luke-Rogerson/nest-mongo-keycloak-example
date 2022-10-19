const MongoClient = require('mongodb').MongoClient;

const bookingsData = [
  {
    id: 1,
    title: 'First Booking',
    startDate: '2021-09-10 15:30:00',
    endDate: '2021-09-10 19:30:00',
    sitter: {
      firstName: 'Mary',
      lastName: 'Poppins',
    },
    confirmed: false,
  },
  {
    id: 2,
    title: 'Second Booking',
    startDate: '2021-10-10 15:30:00',
    endDate: '2021-10-10 19:30:00',
    sitter: {
      firstName: 'Developer',
      lastName: 'Test',
    },
    confirmed: false,
  },
  {
    id: 3,
    title: 'Third Booking',
    startDate: '2021-11-10 15:30:00',
    endDate: '2021-11-10 19:30:00',
    sitter: {
      firstName: 'React',
      lastName: 'Web',
    },
    confirmed: false,
  },
  {
    id: 4,
    title: 'Fourth Booking',
    startDate: '2021-12-10 15:30:00',
    endDate: '2021-12-10 19:30:00',
    sitter: {
      firstName: 'Bubble',
      lastName: 'Childcare',
    },
    confirmed: false,
  },
];
// Replace the uri string with your connection string.
const uri =
  'mongodb://secretusername:secretpasword@localhost:27017?retryWrites=true&w=majority';
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('bubble');
    const bookings = database.collection('bookings');
    // Query for a movie that has the title 'Back to the Future'
    await bookings.insertMany(
      bookingsData.map((booking) => ({
        ...booking,
        startDate: new Date(booking.startDate),
        endDate: new Date(booking.endDate),
      })),
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
