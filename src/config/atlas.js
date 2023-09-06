import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';
dotenv.config("../");

async function conexion() {
  try {
    const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.zarbjab.mongodb.net/${process.env.ATLAS_DB}`;
    const client = await MongoClient.connect(uri);
    return client.db();
  } catch (error) {
    return {status: 500, message: error};
  }
}

export default conexion;

