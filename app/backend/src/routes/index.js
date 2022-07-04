const express = require('express');

const controller = require('../controllers/task');
const model = require('../models/task');

const taskRoute = express.Router();

taskRoute.post('/', controller.create);
taskRoute.get('/', model.getAll); 

module.exports = taskRoute;
