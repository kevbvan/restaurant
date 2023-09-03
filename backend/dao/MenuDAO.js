import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId

let menuCollection;

export default class MenuDao {
    static async injectDB(conn) {
        if (menuCollection) {
            return;
        }
        try {
            menuCollection = await conn.db(process.env.MENU_NS).collection('menu');
        }
        catch(e) {
            console.error(`Unable to connect in MenuDAO: ${e}`);
        }
    }

    static async getMenu(){
        let cursor;
        try{
            cursor = await menuCollection.find();
            const menu = await cursor.toArray();

            return menu[0];

        } catch(e){
            console.error(`Something went wrong in getMenu: ${e}`);
            throw e;
        }
    }

    static async getMenuByCategory(category) {
        let cursor;
        try {
            cursor = await menuCollection.find({
                foodCategory: category
            });
            const menuByCategory = await cursor.toArray();
            return menuByCategory[0];

        } catch(e) {
            console.error(`Something went wrong in getMenuByCategory: ${e}`);
            throw e;
        }
    }
}