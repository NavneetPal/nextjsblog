import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup

async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://navneet:nakul@cluster0.aipts.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close(result);

    client.close();

    res.status(201).json({
        status:201,
        success:true,
        message:'meetup has been added successfully'
    });
  }
}

export default Handler;
