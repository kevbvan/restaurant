import express from 'express';
import MenuController from './menu.controller.js';

const router = express.Router();

router.route("/menu").get(MenuController.apiGetMenuItems);
router.route("/menu/category/:category").get(MenuController.apiGetMenuItemsByCategory);

export default router;