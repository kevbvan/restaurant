import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import MenuDAO from "./dao/MenuDAO.js";


async function main() {
    dotenv.config();

    const client = new mongodb.MongoClient(
        process.env.RESTAURANT_DB_URI
    )

    const port = process.env.PORT || 8000;

    try {
        // Connect to MongoDB server
        await client.connect();
        await MenuDAO.injectDB(client);

        app.listen(port, () => {
            console.log('Server is running on port: ' + port);
        })
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main().catch(console.error);