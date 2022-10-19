import { IBooking } from './bookings';
import { MongoClient, Db, Collection } from 'mongodb';
import { Booking } from 'src/domain/models';

export class BookingsDB implements IBooking {
  private readonly client: MongoClient;
  private readonly db: Db;
  private readonly collection: Collection<Booking>;

  constructor(client: MongoClient, collectionName: string, dbName: string) {
    this.client = client;
    this.db = this.client.db(dbName);
    this.collection = this.db.collection(collectionName);
  }
  async getAll() {
    // don't include `_id` in response
    return await this.collection.find().project<Booking>({ _id: 0 }).toArray();
  }
}
