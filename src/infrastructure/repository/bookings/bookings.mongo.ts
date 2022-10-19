import { IBooking } from './bookings';
import { MongoClient, Db, Collection } from 'mongodb';
import { Booking } from 'src/domain/models';

export class BookingDB implements IBooking {
  private readonly client: MongoClient;
  private readonly db: Db;
  private readonly collection: Collection<Booking>;

  constructor(client: MongoClient, collectionName: string, dbName: string) {
    this.client = client;
    this.db = this.client.db(dbName);
    this.collection = this.db.collection(collectionName);
  }
  async getAll() {
    return await this.collection.find().toArray();
  }
}
