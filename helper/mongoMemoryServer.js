import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

class DBManager {
  constructor() {
    // this.db = null;
    // this.server = new MongoMemoryServer();
    this.connection = null;
  }

  async start() {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    this.connection = await mongoose.connect(uri, { useNewUrlParser: true });
    // this.db = this.connection.db(await this.server.getDbName());
  }

  stop() {
    this.connection.close();
    return this.server.stop();
  }

  cleanup() {
    return Promise.all(COLLECTIONS.map(c => this.db.collection(c).remove({})));
  }
}

export {DBManager};