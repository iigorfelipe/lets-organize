const express = require('express');

const controller = require('../controllers/task');

const taskRoute = express.Router();

taskRoute.post('/', controller.create);

module.exports = taskRoute;
