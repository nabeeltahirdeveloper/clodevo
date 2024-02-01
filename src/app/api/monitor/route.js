import { MongoClient } from "mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
   
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const database = client.db("clodevo");

    const collection = database.collection("monitor"); // Choose a name for your collection

    await collection.insertOne(body);
    return new Response(
      JSON.stringify({ message: "Data saved successfully!" }),
      {
        headers: { "content-type": "application/json" },
      }
    );
  } catch (error) {
    console.log("test", error)
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      headers: { "content-type": "application/json" },
    });
  }
}

export async function GET(request) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const database = client.db("clodevo");

    const collection = database.collection("monitor"); // Choose a name for your collection

    const data = await collection.find({}).toArray();
    return new Response(JSON.stringify({ data }), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      headers: { "content-type": "application/json" },
    });
  }
}
