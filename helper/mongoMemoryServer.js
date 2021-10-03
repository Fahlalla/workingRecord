import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = await MongoMemoryServer.create();

const start = async () => {
  const uri = mongod.getUri();
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  };
  return await mongoose.connect(uri, mongooseOpts);
}

const stop = async () => {
  await mongoose.connection.close();
  return await mongod.stop();
}

const cleanup = async () => {
  return await Promise.all(COLLECTIONS.map(c => this.db.collection(c).remove({})));
}

export { start, stop, cleanup };