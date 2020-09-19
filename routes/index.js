const express = require("express");
const router = express.Router();
const homeController = require('../controller/homeController');


router.get('/',homeController.homepage);
router.post('/create-task',homeController.create_task);
router.post('/update-task/:id',homeController.update_task);
router.get('/delete-task',homeController.delete_task);
router.get('/delete-all',homeController.delete_all);
router.get('/check-all',homeController.check_all);

module.exports =  router;


