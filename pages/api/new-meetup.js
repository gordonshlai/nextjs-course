import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://abcde:abcde@cluster0.nonce.mongodb.net/meetups?retryWrites=true&w=majority"
    ); // If name of the database specified doesn't exist, mongodb will generate it on the fly.
    const db = client.db();

    const meetupsCollection = db.collection("meetups"); // will generate on the fly if doesn'e exsist.

    const result = await meetupsCollection.insertOne(data); // Error handling should be added for http requests.

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
