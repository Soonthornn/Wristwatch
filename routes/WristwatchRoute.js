const express = require('express');
const router = express.Router();

const WristwatchController = require('./../controllers/WristwatchController');

//เรียกใช้ api ที่สร้างขึ้นมา
router
.route('/')
.get(WristwatchController.getAllWristwatch)
.post(WristwatchController.createWristwatch);

router
.route('/:id')
.get(WristwatchController.getWristwatch)
.put(WristwatchController.updateWristwatch)
.delete(WristwatchController.deleteWristwatch);

module.exports = router;
