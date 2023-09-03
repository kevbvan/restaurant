import MenuDAO from '../dao/menuDAO.js';

export default class MenuController {
  
    static async apiGetMenuItems(req, res, next) {
        try {
            let food = await MenuDAO.getMenu();

            if (!food) {
                res.status(404).json({ error: "not found" });
                return;
            }
            res.json(food);
         } catch(e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error: e });
         }
     }

    static async apiGetMenuItemsByCategory(req, res, next) {
        try {
            ////access food category
            let category = req.params.category || {};
            let food = await MenuDAO.getMenuByCategory(category);
            if (!food) {
                res.status(404).json({error: "not found"});
                return;
            }
            res.json(food)
        } catch(e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error: e });
        }
    }  
} 